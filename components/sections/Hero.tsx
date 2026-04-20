"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { HERO_NODES } from "@/lib/hero-nodes"

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "100vh" }}>

      {/* ── Layer 1: Map image — atmospheric, heavily receded ── */}
      <div className="absolute inset-0">
        <Image
          src="/chalk-river-map.jpg"
          alt="Satellite view of Chalk River Laboratories site"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.45, filter: "saturate(0.18) contrast(1.30) blur(1px)" }}
          onError={() => console.error("Hero: chalk-river-map.jpg failed to load — check public/ directory")}
        />
      </div>

      {/* ── Layer 2: Dark base overlay ── */}
      <div className="absolute inset-0" style={{ background: "rgba(10,14,26,0.62)" }} />

      {/* ── Layer 3: Left-to-right gradient (desktop) — near-solid left, fade right ── */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(10,14,26,0.88) 0%, rgba(10,14,26,0.70) 25%, rgba(10,14,26,0.40) 55%, rgba(10,14,26,0.15) 85%, rgba(10,14,26,0.05) 100%)",
        }}
      />

      {/* ── Mobile: top-to-bottom gradient ── */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,14,26,0.96) 0%, rgba(10,14,26,0.80) 40%, rgba(10,14,26,0.45) 70%, rgba(10,14,26,0.15) 100%)",
        }}
      />

      {/* ── Layer 4: Node SVG overlay ── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
        style={{ zIndex: 10 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {HERO_NODES.map((node, index) => {
          const cx = `${node.x}%`
          const cy = `${node.y}%`
          const r = node.ringRadiusPx

          return (
            <g key={node.id}>
              {/* Static detection ring — solid, visible */}
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="#4DD4E0"
                strokeWidth={1.5}
                strokeOpacity={0.55}
              />

              {/* Pulse ring */}
              {!prefersReducedMotion && (
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={0}
                  stroke="#4DD4E0"
                  strokeWidth={1}
                  fill="none"
                  animate={{ r: [0, r], opacity: [0.55, 0] }}
                  transition={{
                    duration: 4,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: index * 0.6,
                    repeatDelay: 0.4,
                  }}
                />
              )}

              {/* Node dot — larger, glowing */}
              <circle
                cx={cx}
                cy={cy}
                r={6}
                fill="#4DD4E0"
                style={{
                  filter:
                    "drop-shadow(0 0 6px rgba(77,212,224,0.9)) drop-shadow(0 0 12px rgba(77,212,224,0.5))",
                }}
              />

              {/* Inner bright core */}
              <circle
                cx={cx}
                cy={cy}
                r={2.5}
                fill="#E0FBFF"
              />

              {/* Node label — offset right for legibility */}
              <text
                x={`${node.x}%`}
                y={`${node.y}%`}
                dx={12}
                dy={4}
                fontSize={11}
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="0.05em"
                fill="#A8B0C0"
                style={{ filter: "drop-shadow(0 0 4px rgba(10,14,26,0.95))" }}
              >
                {node.id}
              </text>
            </g>
          )
        })}
      </svg>

      {/* ── Layer 5: Text content ── */}
      <div className="absolute inset-0 flex items-center" style={{ zIndex: 20 }}>
        <div className="w-full max-w-[700px] px-[5vw] py-24 flex flex-col">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-mono uppercase mb-5"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#4DD4E0",
              textShadow: "0 2px 20px rgba(10,14,26,0.9), 0 0 40px rgba(10,14,26,0.6)",
            }}
          >
            ALTIVION × CANADIAN NUCLEAR LABORATORIES
          </motion.p>

          {/* Headline — dominant */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="font-sans font-light mb-4"
            style={{
              fontSize: "clamp(40px, 7vw, 96px)",
              color: "#E8ECF2",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              textShadow: "0 2px 20px rgba(10,14,26,0.9), 0 0 40px rgba(10,14,26,0.6)",
            }}
          >
            Multi-Node Counter-UAS Detection
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="font-sans font-light mb-7"
            style={{
              fontSize: "clamp(16px, 1.8vw, 22px)",
              color: "#A8B0C0",
              maxWidth: "500px",
              textShadow: "0 2px 20px rgba(10,14,26,0.9), 0 0 40px rgba(10,14,26,0.6)",
            }}
          >
            Designed for nuclear facility environments.
          </motion.p>

          {/* Meeting details */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="mb-8"
            style={{
              maxWidth: "500px",
              textShadow: "0 2px 20px rgba(10,14,26,0.9), 0 0 40px rgba(10,14,26,0.6)",
            }}
          >
            <p className="font-sans text-[15px] leading-[1.7]" style={{ color: "#A8B0C0" }}>
              Prepared for the technical discussion with Stephen Cudmore and James Carr.
            </p>
            <p className="font-sans text-[15px]" style={{ color: "#A8B0C0" }}>
              April 21, 2026 · 10:00 AM MT.
            </p>
          </motion.div>

          {/* Credibility row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
            className="flex flex-wrap items-center"
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "10px",
              color: "rgba(168,176,192,0.55)",
              maxWidth: "500px",
              textShadow: "0 2px 20px rgba(10,14,26,0.9), 0 0 40px rgba(10,14,26,0.6)",
            }}
          >
            <span>2025 IDEaS CUAS Sandbox</span>
            <span style={{ margin: "0 10px", opacity: 0.35 }}>·</span>
            <span>Canadian Patent CA 3,286,560</span>
            <span style={{ margin: "0 10px", opacity: 0.35 }}>·</span>
            <span>UCalgary DISH Partner</span>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="font-mono italic mt-12"
            style={{
              fontSize: "9px",
              color: "rgba(168,176,192,0.35)",
              maxWidth: "340px",
              textShadow: "0 2px 20px rgba(10,14,26,0.9), 0 0 40px rgba(10,14,26,0.6)",
            }}
          >
            Illustrative coverage zones. Actual detection range varies by drone class, RF profile, terrain, and environmental conditions.
          </motion.p>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <motion.div
          style={{ width: 1, height: 32, background: "rgba(77,212,224,0.4)" }}
          animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "9px",
            color: "rgba(168,176,192,0.45)",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>
      </div>

    </section>
  )
}
