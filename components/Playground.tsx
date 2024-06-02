"use client";
import React, { useEffect, useRef, useState } from "react";
import { Column } from "./ui/column";
import { H1, P, Span } from "./ui/typography";
import { Step } from "./step";
import { Row } from "./ui/row";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import SingleCard, { CardSkeleton } from "./SingleCard";
import toast from "react-hot-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Headsup from "./Headsup";

interface ColorTheme {
  id: string;
  colors: string[];
}

interface ChatHistory {
  user: string;
  bot: string;
}

const easySelections = [
  {
    websiteTitle: "Landing Page",
  },
  {
    websiteTitle: "Freelancer & Designer Portfolio",
  },
  {
    websiteTitle: "Mobile App Website",
  },
  {
    websiteTitle: "E-commerce Website",
  },
  {
    websiteTitle: "News & Media",
  },
  {
    websiteTitle: "Real Estate & Property",
  },
  {
    websiteTitle: "Technology & Software",
  },
];

const Playground = () => {
  const [web, setWeb] = useState("");
  const [palettes, setPalettes] = useState<ColorTheme[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);

  const prompt = `Generate three color palettes for a ${web} website. Each palette should have four colors. Format the output as JSON, with each palette having an "id" and an array of "colors" in hex codes but without #.`;

  const handleClick = (title: string) => {
    setWeb(title);
  };

  const handleGeneratePalettes = async () => {
    // Reset palettes and set isLoading to true
    setIsLoading(true);
    setPalettes([]); // Clear the existing palettes

    if (chatHistory.length > 0) {
      // Clear chat history
      setChatHistory([]);
    }

    const requestBody = {
      message: prompt,
      chatHistory: [],
    };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
      const extractedPalettes = JSON.parse(
        data.response.response.candidates[0].content.parts[0].text
      ).palettes;
      console.log(extractedPalettes);
      setPalettes(extractedPalettes);
      setChatHistory([...chatHistory, { user: prompt, bot: data }]);

      if (extractedPalettes.length === 0) {
        toast.error("No palettes found.");
      }
    } catch (error) {
      console.error("Error fetching palettes:", error);
      toast.error("Server is busy. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(palettes);

  useEffect(() => {
    if (palettes?.length > 0 && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [palettes]);

  return (
    <React.Fragment>
      <Column>
        <H1 className="!text-3xl font-semibold !mb-0">Try yourself</H1>
        <P className="text-xl text-muted-foreground !mt-2 mb-8">
          See how the COLOR Pallets AI magic works.
        </P>
        <Step
          className={""}
          step="1"
          text="Create your Color Palettes by telling about your website in the form below."
        />
        <Span className="text-muted-foreground text-sm mt-2">
          Or you can select one of the examples formats below.
        </Span>
        <Row className="flex-wrap gap-2 justify-start items-center my-2 w-full">
          {easySelections.map((item) => (
            <Button
              key={item.websiteTitle}
              onClick={() => handleClick(item.websiteTitle)}
              className="whitespace-nowrap"
              size={"xs"}
              variant={"outline"}
            >
              {item.websiteTitle}
            </Button>
          ))}
        </Row>
        <Step className={"mt-4"} step="2" text="Write your website details" />
      </Column>
      <div className="flex items-center w-full justify-center">
        <div className="w-full max-w-5xl mx-auto gap-2 md:gap-6 flex flex-col md:flex-row items-center md:items-start">
          <Column className="flex-col md:flex-row w-full flex items-start gap-4">
            {/* Form */}
            <Textarea
              value={web}
              onChange={(e) => setWeb(e.target.value)}
              className="flex-1 max-w-[780px] min-w-[150px]"
              placeholder="Enter your website details here"
            />
            <Button onClick={handleGeneratePalettes} className="mt-1">
              Generate Pallets
            </Button>
          </Column>
        </div>
      </div>
      <p className="text-center font-medium text-2xl mt-4">
        Color Pallets Will Generate Below
      </p>
      {/* Show skeletons only if palettes are being generated */}
      {isLoading && (
        <div ref={resultRef} className="container mx-auto p-2">
          <div className="flex flex-wrap justify-center gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      )}
      {/* Show palettes only if palettes are available */}
      {palettes?.length > 0 && (
        <div ref={resultRef} className="container mx-auto p-2">
          <div className="flex flex-wrap justify-center gap-6">
            <SingleCard pallete={palettes[0]} />
            <SingleCard pallete={palettes[1]} />
            <SingleCard pallete={palettes[2]} />
          </div>
        </div>
      )}
      <Headsup />
    </React.Fragment>
  );
};

export default Playground;
