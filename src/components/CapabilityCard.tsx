"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CapabilityCardProps {
    title: string;
    description: string;
    index: number;
}

export default function CapabilityCard({ title, description, index }: CapabilityCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Bouncy spring config for premium feel
    const bouncySpring = {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        mass: 0.8,
    };

    // Smooth spring config for tilt effect
    const tiltSpringConfig = { stiffness: 300, damping: 30 };

    // Mouse position as motion values
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Spring-smoothed mouse position
    const smoothMouseX = useSpring(mouseX, tiltSpringConfig);
    const smoothMouseY = useSpring(mouseY, tiltSpringConfig);

    // Transform to rotation (card "looks at" the mouse)
    const rotateX = useTransform(smoothMouseY, [0, 1], [8, -8]);
    const rotateY = useTransform(smoothMouseX, [0, 1], [-8, 8]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Normalize to 0-1 range
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        // Reset to center
        mouseX.set(0.5);
        mouseY.set(0.5);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative p-8 rounded-2xl bg-surface border border-glass-border cursor-default overflow-hidden"
            style={{
                rotateX,
                rotateY,
                transformPerspective: 800,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                mass: 1,
                delay: 0.1 + index * 0.08,
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: bouncySpring,
            }}
            onMouseMove={handleMouseMove}
            onHoverStart={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Green glow effect - emanating from top-left corner */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                    transformOrigin: "top left",
                    background: "radial-gradient(ellipse at top left, rgba(139, 225, 130, 0.25) 0%, rgba(139, 225, 130, 0.1) 30%, transparent 60%)",
                }}
            />

            {/* Title */}
            <motion.h3
                className="relative z-10 text-xl font-semibold mb-3"
                animate={{
                    color: isHovered ? "#8be182" : "#e8e8e8",
                }}
                transition={bouncySpring}
            >
                {title}
            </motion.h3>

            {/* Description */}
            <p className="relative z-10 text-text-muted text-base leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
