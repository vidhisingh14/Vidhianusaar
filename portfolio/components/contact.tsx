"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Log form data to console (as per requirements)
    console.log("Form submitted:", formData)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset form after submission
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 section-gradient-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s connect to create something amazing together! Feel free to reach out for collaborations,
            questions, or just to say hello.
          </p>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-sm"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-cream dark:bg-gray-900 border-peach-200 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-cream dark:bg-gray-900 border-peach-200 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-cream dark:bg-gray-900 border-peach-200 dark:border-gray-700"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-peach-500 hover:bg-peach-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitted && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </p>
                )}

                {error && <p className="text-red-600 dark:text-red-400 text-center">{error}</p>}
              </form>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center">
              <div className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

                <div className="space-y-4">
                  <Link
                    href="https://github.com/vidhisingh14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-peach-600 dark:hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/vidhisingh14</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/vidhisingh14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-peach-600 dark:hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/vidhi</span>
                  </Link>

                  <Link
                    href="mailto:itsvidhisingh@gmail.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-peach-600 dark:hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>itsvidhisingh@gmail</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
