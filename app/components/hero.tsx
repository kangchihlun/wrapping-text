"use client"
import { useEffect, useRef } from 'react';

export default function Hero() {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        const text = element.innerText;
        const textArray = text.split("");
        
        // Clear the original text
        element.innerHTML = '';
        
        // Create and append each letter with animation delay
        textArray.forEach((letter, index) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.innerHTML = letter === " " ? "&nbsp;" : letter;
            const delay = `${index * 0.04}s`;
            span.style.cssText = `
                animation-delay: ${delay}, ${parseFloat(delay) + 0.01}s;
            `;
            element.appendChild(span);
        });
    }, []); // Run once on mount

    return (
        <div className="relative min-h-[500px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/g-pic.png)' }}>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <p ref={textRef} className="hero-text">
                    Team Taiwan!
                </p>
            </div>
        </div>
    );
}