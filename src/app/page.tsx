"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/animate-ui/components/buttons/button";
import Orb from "@/components/Orb";
import CapabilityCard from "@/components/CapabilityCard";

export default function Home() {
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  // Scroll to capabilities with smooth spring animation
  const scrollToCapabilities = () => {
    if (capabilitiesRef.current) {
      const targetPosition = capabilitiesRef.current.offsetTop;

      // Smooth scroll directly to section start
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Stagger animation config
  const staggerDelay = 0.08;
  const springTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 16,
    mass: 1,
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Orb Background */}
        <div className="absolute inset-0 w-full h-full">
          <Orb
            hue={120}
            hoverIntensity={5.0}
            rotateOnHover={true}
            forceHoverState={false}
            backgroundColor="#000000"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center pointer-events-none">
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...springTransition,
              delay: 0.2,
            }}
          >
            We build execution systems.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-text-muted max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...springTransition,
              delay: 0.2 + staggerDelay,
            }}
          >
            Automation, software, and infrastructure—engineered for leverage.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-12 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...springTransition,
              delay: 0.2 + staggerDelay * 2,
            }}
          >
            <Button
              onClick={scrollToCapabilities}
              variant="default"
              size="lg"
              className="rounded-full px-8 py-6 text-base !bg-white !text-[#0b0b0b] hover:!bg-gray-100 active:!bg-gray-200"
            >
              Explore
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        ref={capabilitiesRef}
        id="capabilities"
        className="min-h-screen px-6 py-32 bg-bg"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              mass: 1,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-text-primary">
              Capabilities
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CapabilityCard
              title="Automation"
              description="Systems that run without intervention."
              index={0}
            />
            <CapabilityCard
              title="Software"
              description="Purpose-built tools for specific problems."
              index={1}
            />
            <CapabilityCard
              title="Infrastructure"
              description="Foundations that scale with demand."
              index={2}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
