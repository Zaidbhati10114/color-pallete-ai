import Link from "next/link";
import { Row } from "@/components/ui/row";
import { H4, P, Span } from "@/components/ui/typography";
import { TwitterIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

export default async function Footer() {
  return (
    <footer className="flex items-center justify-between w-full p-4 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex-col md:flex-row w-full max-w-7xl mx-auto flex gap-4 items-center justify-between">
        <Row className="w-auto flex-col sm:flex-row items-center gap-4">
          <Link href={"/"}>
            <H4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              ColorPalleteAI
            </H4>
          </Link>
          <Span className="text-sm text-muted-foreground">
            Powered by <strong>GEMINI AI</strong>
          </Span>
        </Row>
        <Row className="justify-end flex-col sm:flex-row items-center w-auto gap-4">
          <Span className="text-muted-foreground text-sm hover:underline">
            <Link href="" target="_blank">
              Developed By Zaid
            </Link>
          </Span>
          <Link href={"https://twitter.com/enesozt_"}>
            <TwitterIcon className="stroke-muted-foreground hover:stroke-foreground" />
          </Link>
          <ModeToggle />
        </Row>
      </div>
    </footer>
  );
}
