"use client"
import Confetti from "react-confetti"
import { useState, useEffect } from "react"

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set the initial size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    // Update the size on resize
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", handleResize)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Confetti
        numberOfPieces={500}
        width={windowSize.width}
        height={windowSize.height}
      />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <img src="/t2.png" className="rounded-full w-1/2" alt="" />
          <p className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            HAPPY BIRTHDAY
          </p>
          <p className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            T2
          </p>
        </div>
      </main>
    </div>
  )
}
