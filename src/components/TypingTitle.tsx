import React, { useEffect, useMemo, useState } from "react";

interface TypingTitleProps {
  part1: string;
  part2: string;

  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  startDelayMs?: number;
  endDelayMs?: number;
  restartDelayMs?: number;
}

export const TypingTitle: React.FC<TypingTitleProps> = ({
                                                          part1,
                                                          part2,
                                                          typeSpeedMs = 220,
                                                          deleteSpeedMs = 90,
                                                          startDelayMs = 400,
                                                          endDelayMs = 1200,
                                                          restartDelayMs = 400,
                                                        }) => {
  const fullText = useMemo(() => `${part1} ${part2}`, [part1, part2]);
  const part1Index = part1.length;

  const [text, setText] = useState("");
  const [mode, setMode] = useState<"delayStart" | "typing" | "delayEnd" | "deleting" | "delayRestart">(
      "delayStart"
  );

  useEffect(() => {
    let timeoutId: number;

    const schedule = (ms: number, fn: () => void) => {
      timeoutId = window.setTimeout(fn, ms);
    };

    if (mode === "delayStart") {
      schedule(startDelayMs, () => setMode("typing"));
    }

    if (mode === "typing") {
      if (text.length < fullText.length) {
        schedule(typeSpeedMs, () => setText(fullText.slice(0, text.length + 1)));
      } else {
        setMode("delayEnd");
      }
    }

    if (mode === "delayEnd") {
      schedule(endDelayMs, () => setMode("deleting"));
    }

    if (mode === "deleting") {
      if (text.length > 0) {
        schedule(deleteSpeedMs, () => setText(fullText.slice(0, text.length - 1)));
      } else {
        setMode("delayRestart");
      }
    }

    if (mode === "delayRestart") {
      schedule(restartDelayMs, () => setMode("typing"));
    }

    return () => window.clearTimeout(timeoutId);
  }, [
    mode,
    text,
    fullText,
    typeSpeedMs,
    deleteSpeedMs,
    startDelayMs,
    endDelayMs,
    restartDelayMs,
  ]);

  const isTypingPart2 = text.length > part1Index;

  return (
      <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter inline-block relative">
        <span className="text-foreground">{text.slice(0, part1Index)}</span>
        {isTypingPart2 && <span className="text-primary">{text.slice(part1Index)}</span>}
        <span className="typing-cursor ml-1" />
      </h1>
  );
};
