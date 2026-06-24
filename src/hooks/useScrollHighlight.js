import { useEffect } from 'react'

export function useScrollHighlight(selector) {
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-active')
          } else {
            entry.target.classList.remove('scroll-active')
          }
        })
      },
      { threshold: 0.35 }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}
