"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Link from "next/link";

// Helper to apply spring to a motion value
function useSpringTransform(
    value: MotionValue<number>,
    inputRange: number[],
    outputRange: number[],
    springConfig = { stiffness: 100, damping: 16, mass: 1 }
) {
    const transformed = useTransform(value, inputRange, outputRange);
    return useSpring(transformed, springConfig);
}

export default function Navbar() {
    const { scrollY } = useScroll();

    // Balanced spring config - noticeable bounce, not excessive
    const bouncySpring = { stiffness: 100, damping: 16, mass: 1 };

    // Scroll thresholds
    const scrollStart = 40;
    const scrollEnd = 120;

    // Continuous scroll-driven values with spring physics
    const width = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [100, 28], // percentage for width calculation
        bouncySpring
    );

    const paddingX = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [24, 32],
        bouncySpring
    );

    const paddingY = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [24, 20],
        bouncySpring
    );

    const borderRadius = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [12, 50],
        bouncySpring
    );

    const bgOpacity = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [0, 0.5],
        { stiffness: 120, damping: 18, mass: 0.9 }
    );

    const blur = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [0, 20],
        { stiffness: 120, damping: 18, mass: 0.9 }
    );

    const borderOpacity = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [0, 0.12],
        { stiffness: 120, damping: 18, mass: 0.9 }
    );

    const shadowOpacity = useSpringTransform(
        scrollY,
        [scrollStart, scrollEnd],
        [0, 0.5],
        { stiffness: 120, damping: 18, mass: 0.9 }
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
            <motion.nav
                className="pointer-events-auto flex items-center justify-between"
                style={{
                    width: useTransform(width, (v) => `clamp(340px, ${v}%, 1200px)`),
                    paddingLeft: useTransform(paddingX, (v) => `${v}px`),
                    paddingRight: useTransform(paddingX, (v) => `${v}px`),
                    paddingTop: useTransform(paddingY, (v) => `${v}px`),
                    paddingBottom: useTransform(paddingY, (v) => `${v}px`),
                    borderRadius: useTransform(borderRadius, (v) => `${v}px`),
                    backgroundColor: useTransform(bgOpacity, (v) => `rgba(18, 18, 18, ${v})`),
                    backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
                    WebkitBackdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
                    boxShadow: useTransform(
                        shadowOpacity,
                        (v) => `0 8px 32px rgba(0, 0, 0, ${v}), 0 0 0 1px rgba(255, 255, 255, ${v * 0.1}) inset`
                    ),
                }}
                initial={{ opacity: 0, y: -24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.8,
                    delay: 0.05,
                }}
            >
                {/* Logo - Left */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 22,
                        delay: 0.15,
                    }}
                >
                    <Link href="/">
                        <motion.span
                            className="text-lg font-semibold tracking-tight text-text-primary inline-block"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                        >
                            KyronHQ
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Navigation - Right */}
                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 22,
                        delay: 0.2,
                    }}
                >
                    <Link href="/about" className="relative group">
                        <motion.span
                            className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors duration-200 inline-block py-1"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                            }}
                        >
                            About
                        </motion.span>
                        {/* Underline */}
                        <motion.span
                            className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-accent rounded-full origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 18,
                            }}
                        />
                    </Link>
                </motion.div>
            </motion.nav>
        </header>
    );
}
