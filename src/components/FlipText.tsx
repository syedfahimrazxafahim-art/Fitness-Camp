import React from 'react';

interface FlipTextProps {
  text: string;
  className?: string;
  highlightClass?: string;
  highlightWords?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const FlipText: React.FC<FlipTextProps> = ({
  text,
  className = '',
  highlightClass = 'text-[#CEF72E]',
  highlightWords = [],
  as: Component = 'span'
}) => {
  const words = text.split(' ');

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        );

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
            {word.split('').map((char, charIdx) => (
              <span
                key={charIdx}
                className="inline-block group/char [perspective:800px]"
              >
                <span
                  className={`inline-block transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(360deg)] cursor-default ${
                    isHighlighted ? highlightClass : ''
                  }`}
                  style={{
                    transitionDelay: `${charIdx * 25}ms`
                  }}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </Component>
  );
};
