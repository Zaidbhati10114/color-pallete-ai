import { NextRequest, NextResponse } from 'next/server';
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '../../../lib/upstash';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '60 s'),
});

export async function POST(req: NextRequest) {
    if (!apiKey) {
        return NextResponse.json(
            { error: 'API Key not found in environment variables' },
            { status: 500 }
        );
    }

    try {
        const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
        const { success, remaining, limit, reset } = await rateLimit.limit(ip as string);
        console.log('Rate Limit Check:', { success, remaining, limit, reset });

        if (!success) {
            return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
        }

        const { message, chatHistory } = await req.json();
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
        });

        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: 'application/json',
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        const chatSession = await model.startChat({
            generationConfig,
            safetySettings,
            history: chatHistory,
        });

        const response = await chatSession.sendMessage(message);

        return NextResponse.json({ response }, { status: 200 });
    } catch (error: any) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
