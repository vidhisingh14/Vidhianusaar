"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import styles from "./star-background.module.css"

export default function StarBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Only show stars in dark mode
  if (resolvedTheme !== "dark") return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Add a dark background to ensure stars are visible */}
      <div className="absolute inset-0 bg-[#050b18]"></div>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </div>
  )
}
