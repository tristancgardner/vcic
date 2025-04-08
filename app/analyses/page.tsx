"use client"

import { useEffect, useState, useRef } from "react"
import Card from "@/components/card"
import CardNavigation from "@/components/card-navigation"
import Link from "next/link"

export default function DueDiligence() {
  const [activeCardId, setActiveCardId] = useState<string>("card-1")
  const totalCards = 8
  const cardRefs = useRef<(HTMLElement | null)[]>(Array(totalCards).fill(null))

  // Define card titles
  const cardTitles = [
    "Introduction",
    "Market Opportunity Assessment",
    "Technology & IP Assessment",
    "Team Assessment",
    "Synthesis & Comparison",
    "Competitive Landscape",
    "Business & Financial",
    "Conclusion",
  ]

  // Set up IntersectionObserver to detect the most visible card
  useEffect(() => {
    // Create thresholds array for more precise detection
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05)

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0
        let mostVisibleCardId = activeCardId

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleCardId = entry.target.id
          }
        })

        // Only update if we have a new most visible card with significant visibility
        if (mostVisibleCardId !== activeCardId && maxRatio > 0.2) {
          setActiveCardId(mostVisibleCardId)
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: thresholds,
      },
    )

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      observer.disconnect()
    }
  }, [activeCardId])

  // Handle card navigation
  const handleCardClick = (cardId: string) => {
    const element = document.getElementById(cardId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="card-container">
      <CardNavigation
        totalCards={totalCards}
        activeCardId={activeCardId}
        onCardClick={handleCardClick}
        cardTitles={cardTitles}
      />

      {/* Card #1: Title & Intro */}
      <Card id="card-1" ref={(el) => (cardRefs.current[0] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">01 / Introduction</span>
          <h1 className="text-4xl md:text-5xl font-bold gradient-heading">
            Smart Steps - Efficient Due Diligence on 3 Startups
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">Phase: Initial 3-Company Evaluation & Selection</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <p className="text-lg">
                This framework helps students quickly evaluate three startups, focusing on key areas like market,
                technology, team, and preliminary financial checks. The goal is to identify which startup merits a
                deeper dive for the VCIC Executive Summary.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #2: Area 1 – Market Opportunity Assessment */}
      <Card id="card-2" ref={(el) => (cardRefs.current[1] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">02 / Market Assessment</span>
          <h2 className="text-3xl font-bold">Area 1: Market Opportunity Assessment</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Step</h3>
                  <p className="text-muted-foreground">
                    Quickly assess the size, growth, and key trends of the market each company addresses. Identify major
                    drivers and potential headwinds.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Prompts</h3>

                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Perplexity – Market Sizing & Trends</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "What is the estimated global market size and projected growth rate (CAGR) for [Specific market
                      addressed by Company A, e.g., 'redox flow batteries for grid storage']? What are the main market
                      drivers and challenges impacting this sector currently? Provide sources." (Repeat for Company B &
                      C.)
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Grok – Real-time Buzz/News</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "What are recent significant news headlines or discussions on platforms like X (Twitter) related
                      to general trends in [Company A's Industry, e.g., 'grid energy storage solutions', 'advances in
                      cancer diagnostics', 'alternatives to animal testing in pharma']? Any major breakthroughs or
                      setbacks mentioned?" (Repeat for Company B & C's industries)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #3: Area 2 – Technology & IP Assessment */}
      <Card id="card-3" ref={(el) => (cardRefs.current[2] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">03 / Technology Assessment</span>
          <h2 className="text-3xl font-bold">Area 2: Technology & IP Assessment</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Step</h3>
                  <p className="text-muted-foreground">
                    Understand the core technology, its claimed differentiation, development stage, and any mentioned IP
                    from the provided documents. Identify obvious technical risks mentioned.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Prompts</h3>

                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Gemini – Analyze Provided PDF</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Analyze the provided PDF document for [Company A Name]. Explain their core technology in simple
                      terms (1-2 sentences). What is its primary claimed advantage over existing solutions? What is the
                      stated current development stage (e.g., concept, lab, prototype, preclinical)? Does the document
                      mention specific patents or pending IP?" (Repeat for Company B & C)
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Perplexity – Patent Check, if applicable</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Summarize the core invention or claims described in the patent found at [Paste patent link from
                      company PDF, if provided]. Who are the listed inventors?" (Use only if patent link is directly
                      available in the startup description)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #4: Area 3 – Team Assessment (Initial Scan) */}
      <Card id="card-4" ref={(el) => (cardRefs.current[3] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">04 / Team Assessment</span>
          <h2 className="text-3xl font-bold">Area 3: Team Assessment (Initial Scan)</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Step</h3>
                  <p className="text-muted-foreground">
                    Identify key personnel from the documents. Do a quick web search (if names are provided) for
                    relevant background. Note any explicitly stated team strengths, gaps, or needs (e.g., "looking for
                    partners," "needs business expertise").
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Prompts</h3>

                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Gemini – Analyze Provided PDF for Team Info</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Based on the provided text for [Company A Name], who are the key people, research groups, or
                      universities involved? What are their roles or expertise areas as described? Does the text
                      explicitly state they are looking for specific partners, funding, or team members?" (Repeat for
                      Company B & C)
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Perplexity – Quick Background Check, use cautiously</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Provide a brief background summary for [Key Person's Name mentioned in PDF], focusing only on
                      professional expertise or publications relevant to [Company's Field]. Prioritize information from
                      academic profiles, LinkedIn, or official university/company sites." (Self-Correction: Mindful
                      results might be limited or require verification. Avoid deep PII searches)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #5: Area 4 – Synthesis & Initial Comparison */}
      <Card id="card-5" ref={(el) => (cardRefs.current[4] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">05 / Synthesis & Comparison</span>
          <h2 className="text-3xl font-bold">Area 4: Synthesis & Initial Comparison</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Step</h3>
                  <p className="text-muted-foreground">
                    Bring together initial findings for each company. Use AI to draft preliminary "Reasons" and
                    "Reservations" aligned with the VCIC template structure. Create a simple comparison framework.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Prompts</h3>

                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Free GPT/4o or Gemini – Draft Initial Pros/Cons</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Based only on this initial scan for [Company A Name] [Paste 1-2 bullet points each summarizing
                      initial findings on Market, Tech, Team], draft 2 potential 'Reasons' why this might be interesting
                      and 2 potential 'Reservations' or key questions for deeper diligence. Keep concise for comparison
                      notes." (Repeat for Company B & C)
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Free GPT/4o or Gemini – Comparative Overview</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Create a simple comparison table summarizing [Company A], [Company B], and [Company C] based only
                      on this initial analysis. Include columns for: Company Name, Core Tech Area, Initial Market
                      Impression (e.g., Large/Niche, Growing/Stagnant?), Tech Stage/Risk (e.g., Early/Proven, High/Low
                      Risk?), Key Question/Reservation."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #6: Area 5 – Quick Competitive Landscape */}
      <Card id="card-6" ref={(el) => (cardRefs.current[5] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">06 / Competitive Landscape</span>
          <h2 className="text-3xl font-bold">Area 5: Quick Competitive Landscape</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Step</h3>
                  <p className="text-muted-foreground">
                    Identify notable competitors or alternative solutions. Pinpoint each company's approximate
                    positioning (e.g., cost, performance, uniqueness).
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Prompts</h3>

                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Perplexity – Competitor Snapshot</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Who are the top 3–5 competitors in [Company A's sector]? Briefly note their main product or
                      service, funding status, and any market traction."
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Gemini – High-Level Positioning</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Based on these competitor summaries and [Company A Name's] claims, describe how [Company A] might
                      stand out or where it could be vulnerable."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #7: Area 6 – High-Level Business/Financial Peek */}
      <Card id="card-7" ref={(el) => (cardRefs.current[6] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">07 / Business & Financial</span>
          <h2 className="text-3xl font-bold">Area 6: High-Level Business/Financial Peek</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Step</h3>
                  <p className="text-muted-foreground">
                    Perform a quick check of how the venture might make money, the expected revenue model, and any hint
                    of pricing/cost structure. Note if they have paying customers or raised capital.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Prompts</h3>

                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Gemini or GPT-4 – Quick Monetization Overview</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "From the [Company A] PDF or any public mention, can you infer the primary business model
                      (hardware sales, subscription, licensing) and a typical price range or cost structure? Do they
                      mention prior/existing funding? Any revenue yet?"
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Groq – Brainstorm Key Financial Questions</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Generate 3–5 critical questions to clarify [Company A Name's] revenue model and cost drivers
                      (e.g., one-off pilot projects vs. recurring revenue, significant manufacturing costs, regulatory
                      expenses)."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #8: Outcome of This Phase */}
      <Card id="card-8" ref={(el) => (cardRefs.current[7] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">08 / Conclusion</span>
          <h2 className="text-3xl font-bold gradient-heading">Outcome of this Phase</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <p className="text-lg leading-relaxed">
                By running through these steps for all three companies, you or the students should have a structured,
                albeit preliminary, comparative overview. This comparison—focusing on apparent market size, tech
                differentiation/risk, team issues, and key unanswered questions—should provide a stronger basis for
                selecting the <em>one</em> company that seems most compelling (or least problematic) to take forward
                into the deeper due diligence phase required for the full VCIC Executive Summary.
              </p>

              <div className="mt-8 p-5 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-lg font-medium mb-3">Next Steps:</h3>
                <p className="text-muted-foreground">
                  After selecting your primary company, proceed to the SERAF Deep Dive for a comprehensive analysis of
                  all aspects of the chosen startup.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/deep-diligence">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Continue to SERAF Deep Diligence
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
