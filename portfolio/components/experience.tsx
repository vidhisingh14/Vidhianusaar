"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Technical Content Writer",
    company: "DroomDroom",
    period: "2022 - 2023",
    description:
      "Crafted engaging and informative content to demystify complex technical concepts for a broad audience.",
    details: [
      {
        title: "Evolution of Bitcoin Mining: A Journey into Cryptocurrency's Backbone",
        link: "#",
      },
      {
        title: "Evolution of Web3 with AI",
        link: "#",
      },
      {
        title: "Unlocking Crypto Airdrops: Identify and Prevent Airdrop Scams",
        link: "#",
      },
    ],
  },
  {
    title: "Designer & Web Developer",
    company: "Sector 11",
    period: "2023 - 2024",
    description:
      "Contributed to building a market-driven e-commerce platform with a focus on user-centric design and branding.",
    details: [
      "Designed posters, logos, and creative assets using Adobe Photoshop and Illustrator",
      "Conducted market research to design trending e-commerce websites for F1 merchandise (clothing and posters)",
    ],
    companyLink: "#",
  },
  {
    title: "Frontend Developer",
    company: "Freelance/Self-Projects",
    period: "2024 - Present",
    description: "Built dynamic, API-driven web applications with a focus on functionality and clean code.",
    details: ["Developed Next.js and TypeScript-based projects", "Created responsive and accessible user interfaces"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 section-gradient-2">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="md:grid md:grid-cols-12 md:gap-4">
                  {/* Timeline line */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="h-full w-px bg-peach-300 dark:bg-gray-700 absolute left-1/2 transform -translate-x-1/2" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-peach-500 dark:bg-primary border-4 border-cream dark:border-gray-900" />
                  </div>

                  {/* Mobile timeline dot */}
                  <div className="absolute left-0 top-0 md:hidden">
                    <div className="w-4 h-4 rounded-full bg-peach-500 dark:bg-primary border-4 border-cream dark:border-gray-900" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-11 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center mt-1">
                          <p className="text-gray-600 dark:text-gray-300">
                            {exp.company}
                            {exp.companyLink && (
                              <Link
                                href={exp.companyLink}
                                className="inline-flex items-center ml-2 text-peach-600 dark:text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Link>
                            )}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{exp.period}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400">
                          {typeof detail === "string" ? (
                            detail
                          ) : (
                            <Link
                              href={detail.link}
                              className="flex items-start hover:text-peach-600 dark:hover:text-primary transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="mr-2">•</span>
                              <span className="hover:underline">{detail.title}</span>
                              <ExternalLink className="h-3 w-3 ml-1 mt-1 flex-shrink-0" />
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
