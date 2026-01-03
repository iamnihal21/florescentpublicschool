"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HomePage, Media } from "@/payload/payload-types"

type ResultItem = NonNullable<HomePage["resultsHighlight"]>[number]

interface ResultsProps {
  results: ResultItem[]
}

export function ResultsSection({ results = [] }: ResultsProps) {
  if (!results.length) return null

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20 text-slate-900">
          Academic Achievements
        </h2>

        <div className="flex flex-col gap-24">
          {results.map((result, idx) => {
            const image = result.image as Media
            const imageOnLeft = idx % 2 === 1 // ✅ KEY RULE

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* IMAGE CARD (LEFT when index is odd) */}
                {imageOnLeft && (
                  <ImageCard image={image} title={result.title} />
                )}

                {/* CONTENT CARD */}
                <ContentCard result={result} animateFrom={imageOnLeft ? "right" : "left"} />

                {/* IMAGE CARD (RIGHT when index is even) */}
                {!imageOnLeft && (
                  <ImageCard image={image} title={result.title} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------- */
/* Content Card Component */
/* ----------------------- */

function ContentCard({
  result,
  animateFrom,
}: {
  result: ResultItem
  animateFrom: "left" | "right"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: animateFrom === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-50 rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-slate-100"
    >
      <span className="text-primary font-bold text-lg mb-3 block">
        {result.year}
      </span>

      <h3 className="text-3xl font-bold mb-8 text-slate-800">
        {result.title}
      </h3>

      {result.stats?.length ? (
        <div className="grid grid-cols-2 gap-8">
          {result.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-slate-600 text-sm uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 italic">Statistics not provided</p>
      )}
    </motion.div>
  )
}

/* -------------------- */
/* Image Card Component */
/* -------------------- */

function ImageCard({
  image,
  title,
}: {
  image?: Media
  title?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100 bg-slate-200"
    >
      {image?.url ? (
        <Image
          src={image.url}
          alt={image.alt || title || "Result"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          No Image
        </div>
      )}
    </motion.div>
  )
}
