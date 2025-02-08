declare type ColorTheme = {
    id: string;
    colors: string[];
}

declare type ChatHistory = {
    user: string;
    bot: string;
}

declare type ResponseContent = {
    text: string;
}

declare type Candidate = {
    content: {
        parts: ResponseContent[];
        role: string;
    };
    finishReason: string;
    index: number;
    safetyRatings: SafetyRating[];
}

declare type SafetyRating = {
    category: string;
    probability: string;
}

declare type ApiResponse = {
    response: {
        response: {
            candidates: Candidate[];
            usageMetadata: {
                promptTokenCount: number;
                candidatesTokenCount: number;
                totalTokenCount: number;
            };
        };
    };
}