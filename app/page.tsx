"use client";
import Playground from "@/components/Playground";
import { Button } from "@/components/ui/button";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { H1, P } from "@/components/ui/typography";
import { Github, List } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

export default function Home() {
  const resultRef = useRef<HTMLDivElement>(null);

  const getStarted = () => {
    resultRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Column className="items-center pt-16 sm:pt-24 md:pt-36 pb-10 w-full max-w-4xl">
      <H1 className="scroll-m-20 text-3xl font-extrabold  tracking-tight">
        Color Palettes AI
      </H1>
      <h2 className="scroll-m-20 text-2xl mt-5 font-extrabold tracking-tight">
        Create AI-generated Color Pallets for your website, app, or any other
        project.
      </h2>
      <P className="text-center text-xl text-muted-foreground mt-2 mb-4">
        Unleash the Perfect Palette: Design Your Website with AI.
      </P>
      <p>10,000 Color Palettes generated so far.</p>
      <Row className="gap-2 mt-4">
        <Link
          target="_blank"
          href="https://github.com/Zaidbhati10114/color-pallete-ai"
        >
          <Button variant={"outline"}>
            <Github className="w-5 h-5 mr-1" />
            Star on Github
          </Button>
        </Link>
        <Button onClick={() => getStarted()} variant={"default"}>
          Get Started
        </Button>
      </Row>
      <Row className="my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <Column ref={resultRef} className="gap-8 w-full">
        <Playground />
      </Column>
    </Column>
  );
}
