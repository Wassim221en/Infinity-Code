import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalEffectProps {
  lines: string[];
  speed?: number;
}

export default function TerminalEffect({ lines, speed = 50 }: TerminalEffectProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const timer = setTimeout(() => {
      if (currentCharIndex < currentLine.length) {
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        setDisplayedLines([...displayedLines, currentLine]);
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, lines, displayedLines, speed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-black border border-cyan-500/30 rounded-lg p-6 font-mono text-sm overflow-hidden backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-cyan-500/20">
        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
        <div className="w-3 h-3 rounded-full bg-cyan-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-cyan-500/30"></div>
        <span className="text-cyan-400/60 text-xs ml-4">terminal.sh</span>
      </div>

      <div className="space-y-2 min-h-[120px]">
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-cyan-300"
          >
            <span className="text-cyan-500">$ </span>
            <span>{line}</span>
          </motion.div>
        ))}

        {currentLineIndex < lines.length && (
          <div className="text-cyan-300">
            <span className="text-cyan-500">$ </span>
            <span>{lines[currentLineIndex].substring(0, currentCharIndex)}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-5 ml-1 bg-cyan-400"
            ></motion.span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
