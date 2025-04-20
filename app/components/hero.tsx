"use client"
import { useEffect, useRef } from 'react';

export default function Hero() {
    const textRefUp = useRef<HTMLParagraphElement>(null);
    const textRefDown = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        const elementUp = textRefUp.current;
        const elementDown = textRefDown.current;
        if (!elementUp || !elementDown) return;

        const textUp = elementUp.innerText;
        const textArrayUp = textUp.split("");
        const textDown = elementDown.innerText;
        const textArrayDown = textDown.split("");
        // Clear the original text
        elementUp.innerHTML = '';
        elementDown.innerHTML = '';
        
        const upDelay = 0.6;
        // Create and append each letter with animation delay
        textArrayUp.forEach((letter, index) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.innerHTML = letter === " " ? "&nbsp;" : letter;
            const delay = `${index * 0.03}s`;
            span.style.cssText = `
                animation-delay: ${delay}, ${parseFloat(delay) + 0.01}s;
            `;
            elementUp.appendChild(span);
        });
        
        textArrayDown.forEach((letter, index) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.innerHTML = letter === " " ? "&nbsp;" : letter;
            const delay = `${upDelay + index * 0.03}s`;
            span.style.cssText = `
                animation-delay: ${delay}, ${parseFloat(delay) + 0.01}s;
            `;
            elementDown.appendChild(span);
        });
    }, []); // Run once on mount

    return (
        <div className="relative min-h-[500px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/g-pic.png)' }}>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p ref={textRefUp} className="hero-text">
                        &quot;Team Taiwan!Team Taiwan!
                    </p>
                    <p ref={textRefDown} className="hero-text ml-[-0.5em]">
                        Taiwan is a great country!&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}