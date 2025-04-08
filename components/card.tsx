import type React from "react"
import { forwardRef } from "react"

interface CardProps {
  id: string
  children: React.ReactNode
  className?: string
}

const Card = forwardRef<HTMLElement, CardProps>(({ id, children, className = "" }, ref) => {
  return (
    <section id={id} ref={ref} className={`card ${className}`}>
      <div className="max-w-4xl mx-auto w-full">{children}</div>
    </section>
  )
})

Card.displayName = "Card"

export default Card
