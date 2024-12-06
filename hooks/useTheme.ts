import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    // Listen for system changes
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return { isDarkMode, toggleDarkMode }
}