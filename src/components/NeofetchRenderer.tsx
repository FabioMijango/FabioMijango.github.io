import { useState, useEffect } from 'react';

interface NeofetchRendererProps {
  src: string;
}

export default function NeofetchRenderer({ src }: NeofetchRendererProps) {
  const [svgContent, setSvgContent] = useState<{
    asciiSvg: string;
    statsSvg: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);

    const fetchAndParseSvg = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error('Failed to fetch SVG');
        }
        const text = await response.text();
        
        if (!active) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');

        // Check for parsing errors
        const parserError = doc.querySelector('parsererror');
        if (parserError) {
          throw new Error('SVG parsing error');
        }

        // 1. Extract style tags for colors and custom font declarations
        const styleElements = doc.querySelectorAll('style');
        let combinedStyles = '';
        styleElements.forEach((style) => {
          combinedStyles += style.textContent || '';
        });

        // 2. Extract ASCII art container (nested svg)
        const innerSvgNode = doc.querySelector('svg svg');
        let asciiSvgHtml = '';
        if (innerSvgNode) {
          // Keep the internal SVG's defs and groups
          asciiSvgHtml = innerSvgNode.innerHTML;
        }

        // 3. Extract the right-side text node containing stats
        const textNode = doc.querySelector('svg > text');
        let statsHtml = '';
        if (textNode) {
          statsHtml = textNode.outerHTML;
        }

        if (asciiSvgHtml && statsHtml) {
          // Package them as individual responsive SVGs
          // For ASCII SVG: original viewBox is 0 0 447 559
          const asciiSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447 559" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" class="w-full h-auto select-none">
              <style>${combinedStyles}</style>
              ${asciiSvgHtml}
            </svg>
          `;

          // For Stats SVG: Shift viewBox to start at x=350 to align text perfectly left
          const statsSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="350 15 570 440" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" class="w-full h-auto select-text">
              <style>${combinedStyles}</style>
              ${statsHtml}
            </svg>
          `;

          setSvgContent({ asciiSvg, statsSvg });
        } else {
          throw new Error('ASCII or Stats elements not found in SVG');
        }
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.error('Error fetching or parsing Neofetch SVG:', errorMessage);
        if (active) {
          setError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchAndParseSvg();

    return () => {
      active = false;
    };
  }, [src]);

  // Fallback to the full image on loading, error, or desktop/tablet (handled responsively)
  const renderFallbackImage = (className?: string) => (
    <img
      src={src}
      alt="Neofetch System Status"
      referrerPolicy="no-referrer"
      className={className || "w-full h-auto rounded-md shadow-lg border border-[#21262d]/20"}
    />
  );

  if (loading || error || !svgContent) {
    return renderFallbackImage();
  }

  return (
    <div className="w-full">
      {/* 1. Mobile & Small Screen Stacked Layout (ASCII Art on top, Stats below inside a single unified card) */}
      <div className="md:hidden w-full bg-[#161b22] border border-[#21262d]/80 rounded-lg p-5 flex flex-col items-center gap-6 shadow-xl" id="neofetch-mobile-container">
        {/* ASCII Art block */}
        <div 
          className="w-full max-w-[280px] h-auto flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: svgContent.asciiSvg }}
        />
        
        {/* Subtle horizontal separator */}
        <div className="w-full h-[1px] bg-[#21262d]" />

        {/* Stats text block */}
        <div 
          className="w-full overflow-x-auto select-text scrollbar-none"
          dangerouslySetInnerHTML={{ __html: svgContent.statsSvg }}
        />
      </div>

      {/* 2. Desktop/Tablet Wide Screen Layout: Render the original side-by-side SVG directly */}
      <div className="hidden md:block">
        {renderFallbackImage()}
      </div>
    </div>
  );
}
