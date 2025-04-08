"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CardNavigationProps {
  totalCards: number
  activeCardId?: string
  onCardClick: (cardId: string) => void
  cardTitles: string[] // Array of card titles
}

export default function CardNavigation({ totalCards, activeCardId, onCardClick, cardTitles }: CardNavigationProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const navRef = useRef<HTMLDivElement>(null)
  const activeItemRefs = useRef<(HTMLButtonElement | null)[]>(Array(totalCards).fill(null))
  const [isExpanded, setIsExpanded] = useState(true) // Changed to true to be expanded by default

  // Update active index when activeCardId changes
  useEffect(() => {
    if (activeCardId) {
      const index = Number.parseInt(activeCardId.replace("card-", "")) - 1
      if (!isNaN(index) && index >= 0 && index < totalCards) {
        setActiveIndex(index)
      }
    }
  }, [activeCardId, totalCards])

  // Scroll the active item into view whenever activeIndex changes
  useEffect(() => {
    const activeItem = activeItemRefs.current[activeIndex]
    if (activeItem && navRef.current) {
      // Use a small timeout to ensure DOM is updated
      setTimeout(() => {
        activeItem.scrollIntoView({
          behavior: "auto",
          block: "center",
        })
      }, 100)
    }
  }, [activeIndex])

  const handleCardClick = (index: number) => {
    onCardClick(`card-${index + 1}`)
  }

  const handlePrevCard = () => {
    const prevIndex = Math.max(0, activeIndex - 1)
    handleCardClick(prevIndex)
  }

  const handleNextCard = () => {
    const nextIndex = Math.min(totalCards - 1, activeIndex + 1)
    handleCardClick(nextIndex)
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:block transition-all duration-300",
        isExpanded ? "w-64" : "w-auto",
      )}
    >
      <div className="flex flex-col items-stretch bg-card/80 backdrop-blur-sm rounded-lg border border-border/30 shadow-md">
        <button
          onClick={handlePrevCard}
          disabled={activeIndex === 0}
          className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed flex justify-center"
          aria-label="Previous card"
        >
          <ChevronUp className="h-5 w-5" />
        </button>

        <div className="h-300 overflow-y-auto py-2 scrollbar-hide" ref={navRef}>
          <div className="flex flex-col items-stretch space-y-2 px-2">
            {Array.from({ length: totalCards }).map((_, index) => {
              const isCurrent = index === activeIndex
              const isPrev = index === activeIndex - 1
              const isNext = index === activeIndex + 1
              const isNearby = Math.abs(index - activeIndex) <= 2
              const title = cardTitles[index] || `Card ${index + 1}`

              return (
                <button
                  key={index}
                  ref={(el) => { activeItemRefs.current[index] = el; }}
                  onClick={() => handleCardClick(index)}
                  className={cn(
                    "flex items-center transition-all duration-300 rounded-md px-2 py-1",
                    isCurrent
                      ? "bg-primary/10 text-primary font-medium"
                      : isPrev || isNext
                        ? "hover:bg-primary/5 text-foreground"
                        : "hover:bg-primary/5 text-muted-foreground",
                    !isNearby && "opacity-70",
                  )}
                  aria-label={`Go to card ${index + 1}: ${title}`}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 rounded-full flex items-center justify-center transition-all",
                      isCurrent
                        ? "bg-primary text-primary-foreground h-8 w-8 shadow-sm"
                        : isPrev || isNext
                          ? "bg-secondary text-muted-foreground h-6 w-6"
                          : "bg-secondary/50 text-muted-foreground h-5 w-5",
                    )}
                  >
                    <span className={cn("text-xs font-medium")}>{index + 1}</span>
                  </div>

                  {isExpanded && (
                    <span
                      className={cn(
                        "ml-2 text-sm truncate transition-opacity duration-300",
                        isCurrent ? "opacity-100" : "opacity-80",
                      )}
                    >
                      {title}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <button
          onClick={handleNextCard}
          disabled={activeIndex === totalCards - 1}
          className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed flex justify-center"
          aria-label="Next card"
        >
          <ChevronDown className="h-5 w-5" />
        </button>

        <button
          onClick={toggleExpanded}
          className="p-2 text-muted-foreground hover:text-foreground border-t border-border/30 flex justify-center"
          aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
        >
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
