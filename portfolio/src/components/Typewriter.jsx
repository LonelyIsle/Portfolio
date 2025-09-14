import { useEffect, useState } from "react";

export default function Typewriter({
  words = ["React", "Node.js", "MySQL", "Git-centric workflows"],
  typingSpeed = 75,
  deletingSpeed = 45,
  pauseAtWord = 900,
  loop = true,
}) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return; // guard

    const isLastWord = wordIdx >= words.length - 1;
    const current = words[wordIdx];
    const doneTyping = text === current;
    const doneDeleting = text === "";

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Finished typing a word
    if (!isDeleting && doneTyping) {
      // If we shouldn't loop and this is the last word, stop here.
      if (!loop && isLastWord) return;
      const id = setTimeout(() => setIsDeleting(true), pauseAtWord);
      return () => clearTimeout(id);
    }

    // Finished deleting a word
    if (isDeleting && doneDeleting) {
      setIsDeleting(false);
      setWordIdx((i) => {
        const next = i + 1;
        return loop ? next % words.length : Math.min(next, words.length - 1);
      });
      delay = 300;
    }

    const id = setTimeout(() => {
      const next = isDeleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => clearTimeout(id);
  }, [text, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseAtWord, loop]);

  return (
    <span aria-live="polite" className="whitespace-pre">
      {text}
      <span className="type-caret" />
    </span>
  );
}