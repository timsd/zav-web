"use client"

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { PartnersSection } from '@/components/sections/partners'
import { partners, typingQuestions, navigationItems } from '@/config/constants'
import { heroSlides } from "@/data/hero-slides"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [typingText, setTypingText] = useState("What makes ")
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })
  const rotate = useTransform(smoothX, [0, windowWidth], [0, 360])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  useEffect(() => {
    let timeout
    if (typingText === "What makes ") {
      timeout = setTimeout(() => {
        setTypingText(prev => prev + typingQuestions[currentTypingIndex].text[0])
      }, 100)
    } else if (typingText.length < "What makes ".length + typingQuestions[currentTypingIndex].text.length) {
      timeout = setTimeout(() => {
        setTypingText(prev => prev + typingQuestions[currentTypingIndex].text[typingText.length - "What makes ".length])
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypingText("What makes ")
        setCurrentTypingIndex((prev) => (prev + 1) % typingQuestions.length)
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [typingText, currentTypingIndex])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * heroSlides.length)
      setCurrentSlide(randomIndex)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[var(--color-black)]' : 'bg-[var(--color-white)]'} text-${isDarkMode ? 'white' : 'black'} flex flex-col`}
         onMouseMove={handleMouseMove}>
      <Header isDarkMode={isDarkMode} navigationItems={navigationItems} />
      
      <motion.div className="pointer-events-none fixed inset-0"
                 style={{background: `radial-gradient(circle 100px at ${smoothX}px ${smoothY}px, rgba(255, 115, 77, 0.15), transparent 50%)`}} />
      
      <motion.div className="pointer-events-none fixed w-10 h-10 rounded-full border-2 border-orange-500"
                 style={{x: smoothX, y: smoothY, rotate, translateX: "-50%", translateY: "-50%"}} />

      <main className="bg-[#1d1c21] text-white flex-grow">
        <HeroSection
          typingText={typingText}
          currentTypingIndex={currentTypingIndex}
          showCursor={showCursor}
          slides={heroSlides}
          currentSlide={currentSlide}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          isDarkMode={isDarkMode}
        />
      </main>

      <PartnersSection partners={partners} />
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}