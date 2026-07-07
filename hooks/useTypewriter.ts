'use client';

import { useState, useEffect, useRef } from 'react';

interface UseTypewriterProps {
  words: string[];
  loop?: boolean;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({
  words,
  loop = true,
  speed = 80,
  delay = 2000,
}: UseTypewriterProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const type = () => {
      if (!mountedRef.current) return;

      const currentWord = words[wordIndex];
      const isComplete = text === currentWord;

      if (isComplete && !isDeleting) {
        timeoutRef.current = setTimeout(() => {
          if (mountedRef.current) {
            setIsDeleting(true);
          }
        }, delay);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => {
          const next = prev + 1;
          return loop ? next % words.length : Math.min(next, words.length - 1);
        });
        return;
      }

      const nextText = isDeleting
        ? text.slice(0, -1)
        : currentWord.slice(0, text.length + 1);

      setText(nextText);
      timeoutRef.current = setTimeout(type, isDeleting ? speed / 2 : speed);
    };

    timeoutRef.current = setTimeout(type, speed);

    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, wordIndex, words, loop, speed, delay]);

  return { 
    text, 
    isDeleting,
    isComplete: text === words[words.length - 1] && !isDeleting 
  };
};