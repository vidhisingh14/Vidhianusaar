"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

const skills = [
  "Technical Writing",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Web Design",
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Market Research",
]

export default function About() {
  return (
    <section id="about" className="py-20 section-gradient-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Vidhi's portrait"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My journey began as a technical content writer at DroomDroom, where I crafted engaging articles about
                Blockchain and Web3 technologies, making complex concepts accessible to a broader audience.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                I then transitioned to a startup role at Sector 11, where I focused on design and web development,
                creating visual assets and conducting market research for e-commerce platforms.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                Currently, I'm building frontend applications with Next.js and TypeScript, combining my technical
                writing background with design sensibilities to create intuitive and engaging user experiences.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-peach-100 dark:bg-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-4 border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <a href="/resume.pdf" download="Vidhi_Resume.pdf" className="flex items-center">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
