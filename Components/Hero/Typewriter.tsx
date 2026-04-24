'use client';

import { useEffect, useState } from 'react';

export default function Typewriter() {
  const word = 'Perfumes';
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 60 : 120; // plus lent = plus luxe

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? word.substring(0, prev.length - 1)
          : word.substring(0, prev.length + 1)
      );

      // FIN écriture
      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1500); // pause élégante
      }

      // FIN suppression
      if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <span className="text-[#C9A227] inline-block tracking-wide transition-all duration-300">
      {text}
    </span>
  );
}