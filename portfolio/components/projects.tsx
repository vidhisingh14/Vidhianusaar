"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import image1 from "../public/image.png"
import image2 from "../public/Doctorlist.png"
import image3 from "../public/SDG_NFT_FRONT.png"
import image4 from "../public/Velocity_front.png"
import image5 from "../public/ReportEase_front.png"

const projects = [
  {
    title: "ReportEase",
    description:
      "An AI-driven platform that digitalizes FIR analysis using Mistral-AI and Tesseract-OCR, tracks accused crime records via CCTNS, and provides IPC/CrPC suggestions with 98% accuracy.",
    image: image5,
    liveLink: "https://report-ease-lovat.vercel.app/",
    githubLink: "https://github.com/vidhisingh14/ReportEase",
    techStack: ["React", "Python", "Flask", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "Velocity",
    description:
      "A blockchain-based social platform on Polygon enabling secure bounty hosting and participation, leveraging Solidity for NFT creation, IPFS for decentralized storage, and optimized for the Shardem Testnet.",
    image: image4,
    liveLink: "https://layer2-0-five.vercel.app/",
    githubLink: "https://github.com/vidhisingh14/Velocity_0.1",
    techStack: ["React", "Solidity", "IPFS", "Node.js", "Express", "Firebase", "Tailwind CSS"],
  },
  {
    title: "SDG NFT Verification Platform",
    description:
      "A blockchain-based platform to authenticate corporate SDG contributions using NFTs and IPFS. It features user and verifier dashboards for submission and review, NFT minting with CSR scores, and transparent verification on Polygon using Civic Auth, ensuring accountability and combating greenwashing.",
    image: image3,
    liveLink: "https://sdg-nft1-latest-three.vercel.app/",
    githubLink: "https://github.com/vidhisingh14/sdg_nft1-latest",
    techStack: ["React", "Solidity", "IPFS", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Web3.js"],
  },
  {
    title: "Dynamic Form Application",
    description:
      "A React-based application that dynamically renders and validates multi-section forms based on API data. Features include user registration, dynamic form rendering, and section-based validation.",
    image: image1,
    liveLink: "https://dynamic-form-umber.vercel.app/",
    githubLink: "https://github.com/vidhisingh14/dynamic-form",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "DoctorList Appointment Booking",
    description:
      "A Next.js application for booking doctor appointments, fetching doctor details via API, and displaying online/offline availability.",
    image: image2,
    liveLink: "https://doctorlist-seven.vercel.app/",
    githubLink: "https://github.com/vidhisingh14/doctorlist",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-gradient-2">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-peach-100 dark:bg-gray-800 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-peach-500 hover:bg-peach-600 dark:bg-blue-600 dark:hover:bg-blue-700" asChild>
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-peach-300 hover:bg-peach-100 dark:border-gray-700 dark:hover:bg-gray-800"
                      asChild
                    >
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
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
