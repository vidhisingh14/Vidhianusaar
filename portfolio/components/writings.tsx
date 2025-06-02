"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const writings = [
  {
    title: "Evolution of Bitcoin Mining: A Journey into Cryptocurrency's Backbone",
    description:
      "An in-depth exploration of how Bitcoin mining has evolved from CPU mining to ASIC farms, and the impact on the cryptocurrency ecosystem.",
    date: "March 2023",
    link: "https://droomdroom.com/evolution-of-bitcoin-mining/",
    publisher: "DroomDroom",
  },
  {
    title: "Evolution of Web3 with AI",
    description:
      "Analyzing the intersection of Web3 technologies and artificial intelligence, and how they're shaping the future of decentralized applications.",
    date: "January 2023",
    link: "https://droomdroom.com/evolution-of-web3-with-ai/",
    publisher: "DroomDroom",
  },
  {
    title: "Unlocking Crypto Airdrops: Identify and Prevent Airdrop Scams",
    description:
      "A comprehensive guide to understanding cryptocurrency airdrops, their legitimate uses, and how to protect yourself from common scams.",
    date: "November 2022",
    link: "https://droomdroom.com/understanding-crypto-airdrops/",
    publisher: "DroomDroom",
  },
]

export default function Writings() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === writings.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? writings.length - 1 : prevIndex - 1))
  }

  return (
    <section id="writings" className="py-20 section-gradient-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Writings</h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {writings.map((article, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                            <CardDescription>
                              Published in {article.publisher} • {article.date}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{article.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:hover:bg-gray-800"
                          asChild
                        >
                          <Link href={article.link} target="_blank" rel="noopener noreferrer">
                            Read Article <ExternalLink className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-cream shadow-md z-10 hidden md:flex border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
              onClick={prevSlide}
              aria-label="Previous article"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-cream shadow-md z-10 hidden md:flex border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
              onClick={nextSlide}
              aria-label="Next article"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {writings.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-peach-500 dark:bg-primary" : "bg-peach-200 dark:bg-gray-700"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile navigation */}
            <div className="flex justify-center mt-6 gap-4 md:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Next <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
