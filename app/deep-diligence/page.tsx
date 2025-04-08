"use client"

import Card from "@/components/card"
import CardNavigation from "@/components/card-navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function SerafDeepDive() {
  const [activeTab, setActiveTab] = useState(1)
  const [activeCardId, setActiveCardId] = useState<string>("card-1")
  const totalCards = 15
  const cardRefs = useRef<(HTMLElement | null)[]>(Array(totalCards).fill(null))

  // Define card titles
  const cardTitles = [
    "Company Overview & Description",
    "Investment Thesis",
    "What Needs To Be Believed",
    "Failure Risk",
    "Leadership/Team",
    "Technology / IP / Roadmap",
    "Customer Need / Go-To-Market",
    "Uniqueness / Competition",
    "Market Size & Opportunity",
    "Financials / Funding / Projections",
    "Milestone Generation",
    "Exit Strategy",
    "Deal Terms",
    "Additional Advanced Tips",
    "Key Reminders & Wrap-Up",
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

      {/* Card 1: Company Overview & Description */}
      <Card id="card-1" ref={(el) => (cardRefs.current[0] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">01 / 15</span>
          <h2 className="text-4xl font-bold gradient-heading">1. Company Overview & Description</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              {/* Two-column layout for Goal and Tool Suggestion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Goal:</h3>
                  <p className="text-muted-foreground">Quickly synthesize the core concept.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Tool Suggestion:</h3>
                  <p className="text-muted-foreground">Gemini/GPT-40 (for synthesis and summarization).</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Company Description Synthesis</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Synthesize a concise 2-paragraph company description for Curen, an Aalto University pre-business
                    spinout founded in 2023. Based on the provided PDF and search results, highlight its copper redox
                    flow battery technology, the problem of grid-scale energy storage it addresses, its key
                    differentiators (sustainability, scalability, potential low LCOS using secondary copper), and its
                    current stage (pre-business, seeking funding, developing 5kW prototype)."
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <div className="space-y-4 pl-4">
                  <div>
                    <h4 className="font-medium mb-2">Incorporate Data Visualization:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Transform this 200-word summary about Curen’s origin, technology, and market focus into 3
                        slides with minimal text and clear visuals or icons that represent ‘grid-scale battery storage’,
                        ‘copper chemistry’, and ‘sustainability’ metrics.”
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Ask AI to Identify Inconsistencies in Publicly Available Data:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Review the public data sources (like Aalto University research pages, LinkedIn profiles, any
                        news articles) to confirm or check for inconsistencies about Curen’s founding year, current
                        stage, patent coverage, or claimed cost advantages. Provide a bullet list of any discrepancies
                        or unclear points that require follow-up in due diligence.”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Continue with the rest of the cards, adding refs to each one */}
      {/* Card 2: Investment Thesis */}
      <Card id="card-2" ref={(el) => (cardRefs.current[1] = el)}>
        {/* Card content remains the same */}
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">02 / 15</span>
          <h2 className="text-4xl font-bold">2. Investment Thesis</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Articulate the core value proposition and potential
                    return pathway.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Gemini/GPT-40 (for analysis and structured
                    argument generation).
                  </div>
                </li>
              </ul>

              <div>
                <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Investment Thesis Draft</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Draft an initial investment thesis for Curen. Frame it considering the growing grid-scale storage
                    market need driven by renewables, Curen's potential cost/sustainability advantages over
                    lithium/vanadium, and its origin from Aalto's electrochemical research led by Prof. Murtomäki.
                    Speculate on a likely exit pathway (e.g., acquisition by utility/energy tech player vs. IPO) and
                    potential timeframe, acknowledging its early (pre-business) stage. Is this likely
                    high-risk/high-reward or lower-risk/modest return?"
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">Encourage Comparative Positioning:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Compare Curen’s core investment thesis with QuantumScape’s pitch in early 2018. Identify
                        similarities in market need, technology risk, and typical investor concerns, then tailor a
                        refined thesis for Curen that underscores how copper flow is simpler and more scalable than
                        solid-state.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">Use Scenario Modeling:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Propose three different scenarios (Bull, Base, Bear) for Curen’s future valuation and market
                        traction. Identify the assumptions underlying each scenario and articulate how the investment
                        thesis shifts in each case.”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Add refs to all remaining cards similarly */}
      {/* For brevity, I'm not showing all cards, but you would add ref={(el) => (cardRefs.current[index] = el)} to each Card component */}
      <Card id="card-3" ref={(el) => (cardRefs.current[2] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">03 / 15</span>
          <h2 className="text-4xl font-bold">3. What Needs To Be Believed (WNTBB)</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Identify critical assumptions underpinning the investment
                    thesis.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Groq (for rapid brainstorming) or
                    Gemini/GPT-40 (for structured analysis).
                  </div>
                </li>
              </ul>

              <div>
                <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Critical Assumptions Analysis</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Analyze the Curen opportunity (pre-business copper flow battery startup) and brainstorm the top 5-7
                    critical 'What Needs To Be Believed' factors for investment success. Focus beyond the obvious (e.g.,
                    'technology works'). Consider assumptions about: scaling the tech from prototype to commercial
                    scale, achieving the target LCOS of ~€50/MWh, securing manufacturing partnerships, navigating
                    competition from established players like Sumitomo or Invinity, ability to raise significant future
                    funding rounds, and the team's capability to transition from research to commercial execution."
                  </div>
                </div>
              </div>

              {/* Augmentation section with subtle border/background */}
              <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">Prioritize & Weight Assumptions:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "List the critical assumptions for Curen’s success and assign each a confidence level (High,
                        Medium, Low). Then provide a brief rationale for each confidence level and suggest ways to test
                        or validate those assumptions.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">Use a Risk-Reward Matrix:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "For each assumption in the WNTBB list, rate its potential impact on returns (Low, Medium, High)
                        and the difficulty of proving or disproving it (Easy, Medium, Hard). Output your findings in a
                        two-by-two matrix to identify quick wins versus high-risk items requiring deeper diligence.”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 4: Failure Risk */}
      <Card id="card-4" ref={(el) => (cardRefs.current[3] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">04 / 15</span>
          <h2 className="text-4xl font-bold">4. Failure Risk</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Proactively identify potential pitfalls.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Perplexity (for researching common startup
                    failure modes in the sector) + Gemini/GPT-40 (for applying findings to Curen).
                  </div>
                </li>
              </ul>

              <div>
                <h3 className="text-xl font-medium mb-3">Prompt Strategy:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    <p className="font-semibold">Step 1 (Perplexity):</p>
                    <p>
                      "What are the most common failure risks for early-stage hardware startups in the grid-scale energy
                      storage sector, particularly those based on novel battery chemistries?"
                    </p>

                    <hr className="my-4 border-border/30" />

                    <p className="font-semibold">Step 2 (Gemini/GPT-40):</p>
                    <p>
                      "Based on the common risks identified for energy storage hardware startups (like funding gaps,
                      scaling manufacturing, technical hurdles, slow customer adoption, competitor responses) and
                      Curen's specific profile (pre-business, novel copper chemistry, university spinout), identify and
                      elaborate on the top 5 most significant failure risks specific to Curen's success."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">
                      <strong>Integrate Industry Benchmarks:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Using data from real-world flow battery deployments (Invinity, ESS Inc., VRB Energy) on
                        time-to-market, R&D costs, manufacturing scale challenges, and typical pilot durations, compare
                        how Curen’s timeline and budget plan may be vulnerable to underestimation of risk.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">
                      <strong>Suggest Mitigation Strategies:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "For each identified failure risk (e.g., scaling the prototype to commercial readiness), propose
                        2-3 concrete mitigation strategies (like strategic partnerships, phased pilot programs, modular
                        design, staged capital raises).”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 5: Leadership/Team */}
      <Card id="card-5" ref={(el) => (cardRefs.current[4] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">05 / 15</span>
          <h2 className="text-4xl font-bold">5. Leadership/Team</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Assess team capabilities beyond technical expertise.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Gemini/GPT-40 (for analysis and identifying
                    gaps) + Perplexity (for background research on individuals if names were known).
                  </div>
                </li>
              </ul>

              {/* Large centered code block */}
              <div className="my-8">
                <h3 className="text-xl font-medium mb-3 text-center">Creative Prompt Example (Hypothetical Team):</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden max-w-3xl mx-auto">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Team Assessment</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Assume Curen's team consists of Prof. Murtomäki (technical lead), a former research assistant
                    (prototype development), and a business development lead with 5 years experience at a utility.
                    Analyze this hypothetical team's strengths and weaknesses for scaling Curen. Identify key expertise
                    gaps (e.g., manufacturing scale-up, project finance, regulatory navigation, large-scale sales) that
                    need to be filled via hiring or advisors. What key questions would you ask the team to assess their
                    execution capability?"
                  </div>
                </div>
              </div>

              {/* Augmentation with subtle background */}
              <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">Team Cohesion & Upskilling:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Assuming minimal business experience in the founding team beyond academia, propose a roadmap to
                        upskill or supplement the team’s commercial capabilities. Suggest typical roles (COO, CFO, Head
                        of BD) and the ideal candidate backgrounds, referencing successful battery startups.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">Personality & Cultural Fit:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "If given short bios or public LinkedIn data for the founders, generate a hypothesis about their
                        leadership styles and how that might shape culture, team growth, or investor relations. Note any
                        red flags or mismatches that could become problems as they scale.”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 6: Technology / IP / Roadmap */}
      <Card id="card-6" ref={(el) => (cardRefs.current[5] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">06 / 15</span>
          <h2 className="text-4xl font-bold">6. Technology / IP / Roadmap</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Understand technical differentiation and future
                    development.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Gemini/GPT-40 (for analysis and synthesis) +
                    Perplexity (for patent/publication exploration).
                  </div>
                </li>
              </ul>

              {/* Highlighted Prompt Strategy block */}
              <div className="p-5 bg-secondary/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-medium mb-3">Prompt Strategy:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    <p className="font-semibold">Step 1 (Perplexity):</p>
                    <p>
                      "Analyze the claims and significance of Curen's patents (e.g., US10128519, EP3117476,
                      WO2024184590A1) related to copper redox flow batteries. What specific technical advantages or
                      novel aspects do they appear to protect?"
                    </p>

                    <hr className="my-4 border-border/30" />

                    <p className="font-semibold">Step 2 (Gemini/GPT-40):</p>
                    <p>
                      "Based on Curen's stated goal of creating simpler, sustainable, scalable copper batteries with low
                      LCOS and the identified IP, draft a plausible high-level technology roadmap for the next 3-5
                      years. Include key milestones like: completing the 5kW/25kWh prototype, validating performance &
                      LCOS targets, developing MW-scale demonstration projects, establishing manufacturing processes,
                      and potential next-gen chemistry improvements."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">
                      <strong>Technical Feasibility Score:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Using any mention of round-trip efficiency, energy density, chemical stability, and cost in
                        publicly available references about copper flow batteries, estimate a feasibility score (1-10
                        scale) for near-term commercial viability, and identify any immediate R&D red flags.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">
                      <strong>Regulatory / Compliance Angle:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Outline potential environmental, shipping, and storage regulations that may apply to
                        copper-based electrolytes in large-scale installations. Evaluate whether these regulations
                        present a barrier or potential advantage compared to lithium-ion battery handling.”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 7: Customer Need / Go-To-Market (GTM) */}
      <Card id="card-7" ref={(el) => (cardRefs.current[6] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">07 / 15</span>
          <h2 className="text-4xl font-bold">7. Customer Need / Go-To-Market (GTM)</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Define target customers and market entry strategy.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Groq (for brainstorming GTM options) +
                    Gemini/GPT-40 (for developing a structured plan).
                  </div>
                </li>
              </ul>

              <div>
                <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">GTM Strategy Brainstorming</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Brainstorm potential initial target customer segments and GTM strategies for Curen's copper flow
                    battery, considering its strengths (long duration 4-12h, sustainability, potential low cost) and
                    weaknesses (pre-business, unproven at scale). Evaluate options like: partnering with renewable
                    developers, targeting microgrids, working with utilities for grid ancillary services. For the most
                    promising initial segment, outline key GTM steps, potential channel partners, and sales cycle
                    considerations."
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <div className="space-y-4">
                  <blockquote className="pl-4 border-l-4 border-primary/30 ml-4">
                    <h4 className="font-medium mb-2">AI-Generated Ideal Customer Profile (ICP):</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Generate an ‘Ideal Customer Profile’ for Curen’s early pilot deployments. Include the typical
                        energy storage capacity range (5kW to 5MW), region (e.g., Nordics/EU for regulatory incentives),
                        financial profile (able to invest in pilot projects), and risk tolerance (willing to test novel
                        flow battery chemistry).”
                      </div>
                    </div>
                  </blockquote>

                  <blockquote className="pl-4 border-l-4 border-primary/30 ml-4">
                    <h4 className="font-medium mb-2">Launch Geography Analysis:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Compare Europe's market incentives for green energy storage with North America’s (focusing on
                        states with strong renewables targets like California and New York). Which region offers the
                        best pilot environment for Curen’s copper redox flow battery, and why?”
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 8: Uniqueness / Competition */}
      <Card id="card-8" ref={(el) => (cardRefs.current[7] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">08 / 15</span>
          <h2 className="text-4xl font-bold">8. Uniqueness / Competition</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Assess competitive positioning.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Perplexity (for competitor research) +
                    Gemini/GPT-40 (for comparative analysis).
                  </div>
                </li>
              </ul>

              <div>
                <h3 className="text-xl font-medium mb-3">Prompt Strategy:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    <div className="p-3 border border-border/30 rounded-md mb-4">
                      <p className="font-semibold">Step 1 (Perplexity):</p>
                      <p>
                        "Identify key competitors to Curen in the redox flow battery market (e.g., Invinity, Sumitomo,
                        CellCube) and other relevant long-duration storage technologies (e.g., other flow batteries,
                        compressed air, gravity storage). Summarize their core technology, target duration, market
                        traction, and funding."
                      </p>
                    </div>

                    <div className="p-3 border border-border/30 rounded-md">
                      <p className="font-semibold">Step 2 (Gemini/GPT-40):</p>
                      <p>
                        "Create a competitive positioning matrix comparing Curen to 3-4 key competitors identified
                        (e.g., Invinity (Vanadium), ESS Inc (Iron Flow), Form Energy (Iron-Air)). Use axes like
                        'Estimated LCOS' (€/MWh) and 'Sustainability/Material Availability'. Based on Curen's claims
                        (low LCOS ~€50/MWh, uses secondary copper, sustainable), position it and analyze its unique
                        selling proposition and potential vulnerabilities."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <h4 className="font-medium mb-2">Competitor SWOT Analysis:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "For each major competitor in flow batteries (Invinity, ESS Inc., Sumitomo, CellCube), create a
                        concise SWOT analysis (Strengths, Weaknesses, Opportunities, Threats). Then synthesize how Curen
                        could position against these established players (e.g., focus on lower cost materials, simpler
                        system design).”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">Patent Density Mapping:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Compare the patent density and families around copper flow batteries vs. vanadium flow
                        batteries. Is copper-based IP significantly less crowded, offering a freedom-to-operate
                        advantage or more open innovation potential?”
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 9: Market Size & Opportunity */}
      <Card id="card-9" ref={(el) => (cardRefs.current[8] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">09 / 15</span>
          <h2 className="text-4xl font-bold">9. Market Size & Opportunity</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              {/* Two-column layout for Goal and Tool Suggestion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Goal:</h3>
                  <p className="text-muted-foreground">Quantify the addressable market.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Tool Suggestion:</h3>
                  <p className="text-muted-foreground">
                    Perplexity (for finding market reports/data) + Gemini/GPT-40 (for TAM/SAM/SOM estimation).
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Market Size Analysis</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Using recent market data (e.g., global redox flow market at $245M in 2023, growing at 16.1% CAGR;
                    broader long-duration storage needs), estimate the Total Addressable Market (TAM), Serviceable
                    Addressable Market (SAM), and Serviceable Obtainable Market (SOM) for Curen over the next 5-10
                    years. Clearly state your assumptions for narrowing down the market (e.g., focusing initially on
                    specific durations (4-12h), geographic regions like Europe, or specific applications like renewable
                    integration)."
                  </div>
                </div>
              </div>

              {/* Augmentation with subtle background */}
              <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">Longer-Term Macro Trends:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Factor in the EU’s Fit for 55 package or similar policy efforts. How might new incentives,
                        carbon taxes, or utility-scale energy storage mandates expand the potential TAM for flow
                        batteries by 2030? Include references to any relevant directives or legislation that could drive
                        adoption.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">Time Segmentation:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Segment the market opportunity into near-term (1–2 years: pilot + demonstration projects),
                        mid-term (3–5 years: early commercial adoption), and long-term (5+ years: scale to mainstream).
                        Provide separate TAM/SAM/SOM estimates for each stage, noting key triggers (e.g., technology
                        readiness, policy changes).”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 10: Financials / Funding / Projections */}
      <Card id="card-10" ref={(el) => (cardRefs.current[9] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">10 / 15</span>
          <h2 className="text-4xl font-bold">10. Financials / Funding / Projections (Requires assumptions)</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Develop plausible financial forecasts and funding needs.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Gemini/GPT-40 (for generating projection
                    structures and performing calculations based on assumptions).
                  </div>
                </li>
              </ul>

              {/* Large centered code block */}
              <div className="my-8">
                <h3 className="text-xl font-medium mb-3 text-center">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden max-w-3xl mx-auto">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Financial Projections</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Assume Curen is seeking €2M in seed funding [similar magnitude to VCIC example] to complete its 5kW
                    prototype, hire 3 key engineers/business staff, and secure initial pilot agreements over the next 18
                    months. Create a plausible high-level 5-year financial projection (Revenue, COGS, OpEx, Funding
                    Needs) based on the following assumptions: Year 1-2 focus on R&D/pilots (minimal revenue), Year 3
                    first commercial 100kW system sale at €X/kWh, scale to 5MW total sales by Year 5. Model key OpEx
                    drivers (R&D, S&M, G&A). Estimate the required Series A funding amount in Year 2/3 based on the
                    projected cash burn."
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <div className="space-y-4">
                  <div className="p-4 border border-primary/20 rounded-lg">
                    <h4 className="font-medium mb-2">
                      <strong>Sensitivity Analysis:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Perform a sensitivity analysis on the projected cost per kWh (CapEx) and round-trip efficiency.
                        Show how a 10% variance in each factor impacts final gross margins and break-even points over 5
                        years. Assume a base-case cost of €200/kWh and 75% round-trip efficiency.”
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-primary/20 rounded-lg">
                    <h4 className="font-medium mb-2">
                      <strong>Detailed Cash Flow Timing:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Project monthly or quarterly cash burn for the next 18 months, factoring in R&D equipment
                        purchases, pilot site construction, and a small marketing budget. Identify when the company hits
                        critical liquidity points where next fundraising is essential.”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 11: Milestone Generation */}
      <Card id="card-11" ref={(el) => (cardRefs.current[10] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">11 / 15</span>
          <h2 className="text-4xl font-bold">11. Milestone Generation</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div className="flex items-center">
                    <span className="font-medium">Goal:</span>
                    <span className="ml-2">Define key steps to de-risk the venture and achieve goals.</span>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div className="flex items-center">
                    <span className="font-medium">Tool Suggestion:</span>
                    <span className="ml-2">Gemini/GPT-40 (for structuring milestones).</span>
                  </div>
                </li>
              </ul>

              {/* Centered code block */}
              <div className="my-8">
                <h3 className="text-xl font-medium mb-3 text-center">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden max-w-3xl mx-auto">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Milestone Planning</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                    "Based on Curen's stage (pre-business, seeking seed funding) and the technical/commercial goals
                    implied (prototype completion, LCOS validation, market entry), generate a list of key milestones for
                    the first 18 months post-seed funding. Categorize them into Technology/Product, Commercial/Sales,
                    Team, and Funding. Ensure milestones are SMART (Specific, Measurable, Achievable, Relevant,
                    Time-bound)." (e.g., "Q2 Post-Funding: Complete assembly of 5kW/25kWh prototype system"; "Q4
                    Post-Funding: Secure Letter of Intent for first pilot project").
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary text-xs">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        <strong>AI-Derived KPIs:</strong>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                      <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                        <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                          "Suggest 3–5 Key Performance Indicators (KPIs) for each milestone category (Tech, Commercial,
                          Team, Funding), specifically relevant to a copper flow battery startup (e.g., validated cycle
                          life, stable electrolyte performance over 500 cycles, or pilot system acceptance tests from a
                          recognized energy utility).”
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-primary text-xs">🚩</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        <strong>Public Demo / Visibility Milestones:</strong>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                      <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                        <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                          "Brainstorm ways to increase investor confidence by publicly demonstrating progress, e.g.,
                          showcasing the 5kW system at an industry expo, publishing test data in a peer-reviewed
                          journal, or co-marketing with a well-known renewable project developer.”
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 12: Exit Strategy */}
      <Card id="card-12" ref={(el) => (cardRefs.current[11] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">12 / 15</span>
          <h2 className="text-4xl font-bold">12. Exit Strategy</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Goal:</span> Identify potential acquirers and exit rationale.
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium">Tool Suggestion:</span> Perplexity (for identifying potential
                    acquirers) + Gemini/GPT-40 (for structuring the exit narrative).
                  </div>
                </li>
              </ul>

              <div>
                <h3 className="text-xl font-medium mb-3">Prompt Strategy:</h3>
                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Step 1 (Perplexity)</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Identify potential strategic acquirers for a company like Curen (copper flow batteries for grid
                      storage). Consider categories like major energy utilities, renewable energy developers, existing
                      battery manufacturers (e.g., Sumitomo), and diversified industrial/electrical engineering firms
                      active in energy transition."
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                      <span className="font-mono text-sm">Step 2 (Gemini/GPT-40)</span>
                    </div>
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                      "Based on the potential acquirer list and Curen's technology/market focus, outline the most
                      plausible exit scenarios (e.g., acquisition in 5-7 years). For the top 2-3 potential acquirer
                      types, explain the strategic rationale for acquisition (e.g., Utility acquiring low-cost storage
                      tech; Battery major acquiring novel chemistry IP). What key milestones would Curen need to achieve
                      to become an attractive acquisition target?"
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">Detailed M&A Case Studies:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Find 2–3 recent acquisitions of energy storage startups by large utility or industrial
                        conglomerates (e.g., TotalEnergies acquiring Saft, Shell acquiring Sonnen). Summarize the deals,
                        valuation multiples, and synergy rationales. Based on these, propose the most probable exit
                        scenario for Curen.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">IPO vs. Strategic Acquisition Analysis:</h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Compare the pros and cons of pursuing an IPO (like ESS Inc. SPAC route) versus a strategic
                        acquisition by a big industrial player. Factor in the team’s academic origin, the capital
                        intensity of battery manufacturing, and market appetite for hardware IPOs.”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 13: Deal Terms */}
      <Card id="card-13" ref={(el) => (cardRefs.current[12] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">13 / 15</span>
          <h2 className="text-4xl font-bold">13. Deal Terms (Connects to valuation & risk)</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              {/* Two-column layout for Goal and Tool Suggestion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Goal:</h3>
                  <p className="text-muted-foreground">Understand how terms impact returns and align interests.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Tool Suggestion:</h3>
                  <p className="text-muted-foreground">Gemini/GPT-40 (for explaining term implications).</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                  <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                    <span className="font-mono text-sm">Deal Terms Analysis</span>
                  </div>
                  <div className="p-4 font-mono text-sm whitespace-pre-wrap bg-secondary/30">
                    "Explain the typical purpose and investor implications of key seed-stage term sheet clauses like: 1x
                    non-participating liquidation preference, broad-based weighted average anti-dilution, pro-rata
                    rights, and a standard board structure (e.g., 1 founder, 1 lead investor, 1 independent). How might
                    these terms be adjusted based on Curen's perceived risk profile (early stage, hardware, competitive
                    market) versus its potential upside (large market, differentiated tech)?"
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Augmentation:</h3>

                <ul className="space-y-4 pl-4">
                  <li>
                    <h4 className="font-medium mb-2">
                      <strong>Leverage AI to Negotiate Hypothetical Term Sheets:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Assume you’re negotiating a seed round for Curen. Provide a sample term sheet from the
                        investor’s perspective that includes a €4M post-money valuation, a 1x liquidation preference,
                        and a 10% option pool. Then revise it from the founder’s perspective to reflect stronger founder
                        protections and higher pre-money valuation. Highlight where tensions might arise and potential
                        compromises.”
                      </div>
                    </div>
                  </li>

                  <li>
                    <h4 className="font-medium mb-2">
                      <strong>Highlight Non-Financial Clauses:</strong>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Prompt Example:</p>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Explain how a Right of First Refusal (ROFR) and co-sale provisions might be critical in this
                        seed round, given that the main intellectual property is concentrated in one or two
                        founder-researchers. What protective measures can an investor include to ensure continuity if
                        the academic founders leave?”
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 14: Additional Advanced Tips */}
      <Card id="card-14" ref={(el) => (cardRefs.current[13] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">14 / 15</span>
          <h2 className="text-4xl font-bold">Additional Advanced Tips (from Augmentations)</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <p className="text-lg mb-6">
                These advanced techniques can help students extract deeper insights from AI tools:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="p-5 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Iterative Prompt Refinement</h3>
                    <p className="text-muted-foreground">
                      Encourage students to refine prompts after each AI response. For instance, if the initial output
                      is too generic, instruct them to re-prompt with more specific details or ask AI to focus on a
                      single subtopic in detail.
                    </p>
                  </div>

                  <div className="p-5 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Chain-of-Tools Approach</h3>
                    <p className="text-muted-foreground">
                      Example Workflow: Start with Perplexity to gather competitor data → feed that into Gemini/GPT-4o
                      to generate a structured competitive matrix → run a brainstorming session in Groq to explore novel
                      GTM strategies → finalize with GPT-4 for a cohesive, polished final write-up.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="p-5 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Quantitative Data Manipulation</h3>
                    <p className="text-muted-foreground mb-3">
                      Suggest using AI coding environments (e.g., Code Interpreter in GPT-4, or OpenAI-coupled Jupyter
                      notebooks) for quick financial modeling or scenario analysis.
                    </p>
                    <div className="bg-background/50 rounded-lg border border-border/30 p-3">
                      <p className="text-xs text-muted-foreground font-mono">
                        "Here’s an Excel table of raw cost data for copper flow battery components vs. lithium-ion.
                        Please generate 3 cost scenarios (Base, Best, Worst) and produce charts showing how these costs
                        evolve over 5 years."
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Cross-Verification & Fact-Checking</h3>
                    <p className="text-muted-foreground mb-3">
                      Encourage students to have AI re-check references and verify claims against multiple sources.
                    </p>
                    <div className="bg-background/50 rounded-lg border border-border/30 p-3">
                      <p className="text-xs text-muted-foreground font-mono">
                        "Cross-reference these claims about copper flow battery round-trip efficiency with publicly
                        available data from academic journals. Summarize any contradictions or points that need further
                        inquiry."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  Address Ethical & Environmental Considerations
                </h3>
                <p className="text-muted-foreground mb-3">
                  Given the sustainability focus of many energy startups, encourage students to evaluate environmental
                  claims critically.
                </p>
                <div className="bg-background/50 rounded-lg border border-border/30 p-3">
                  <p className="text-xs text-muted-foreground font-mono">
                    "Given that Curen touts sustainability, ask AI to create an ‘Environmental Impact Statement’
                    comparing copper’s mining/refining lifecycle footprint vs. typical lithium-ion. Identify any supply
                    chain concerns or responsible sourcing certifications that Curen should consider."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 15: Key Reminders & Wrap-Up */}
      <Card id="card-15" ref={(el) => (cardRefs.current[14] = el)}>
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">15 / 15</span>
          <h2 className="text-4xl font-bold gradient-heading">Key Reminders & Wrap-Up</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-medium mb-6">Key Reminders for Students (from Original Document)</h3>

              {/* Accordion implementation */}
              <div className="space-y-4 mb-8">
                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-4 py-3 text-left font-medium flex justify-between items-center ${activeTab === 1 ? "bg-primary/10" : "bg-secondary/30"}`}
                    onClick={() => setActiveTab(1)}
                  >
                    <span>
                      <strong>1. AI is a Co-Pilot</strong>
                    </span>
                    <span>{activeTab === 1 ? "−" : "+"}</span>
                  </button>
                  {activeTab === 1 && (
                    <div className="p-4 bg-background/30 border-t border-border">
                      <p className="text-muted-foreground">
                        "AI drafts initial analyses, generates ideas, processes data, but students must critically
                        evaluate, refine, validate assumptions, and add strategic insight."
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-4 py-3 text-left font-medium flex justify-between items-center ${activeTab === 2 ? "bg-primary/10" : "bg-secondary/30"}`}
                    onClick={() => setActiveTab(2)}
                  >
                    <span>
                      <strong>2. Garbage In, Garbage Out</strong>
                    </span>
                    <span>{activeTab === 2 ? "−" : "+"}</span>
                  </button>
                  {activeTab === 2 && (
                    <div className="p-4 bg-background/30 border-t border-border">
                      <p className="text-muted-foreground">
                        "The quality of AI output depends heavily on the quality and specificity of the prompts and the
                        input data provided."
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-4 py-3 text-left font-medium flex justify-between items-center ${activeTab === 3 ? "bg-primary/10" : "bg-secondary/30"}`}
                    onClick={() => setActiveTab(3)}
                  >
                    <span>
                      <strong>3. Iterative Process</strong>
                    </span>
                    <span>{activeTab === 3 ? "−" : "+"}</span>
                  </button>
                  {activeTab === 3 && (
                    <div className="p-4 bg-background/30 border-t border-border">
                      <p className="text-muted-foreground">
                        "Use AI outputs as starting points. Refine prompts based on initial results, cross-reference
                        information from different tools/sources, and build upon previous steps."
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-4 py-3 text-left font-medium flex justify-between items-center ${activeTab === 4 ? "bg-primary/10" : "bg-secondary/30"}`}
                    onClick={() => setActiveTab(4)}
                  >
                    <span>
                      <strong>4. Tool Specialization</strong>
                    </span>
                    <span>{activeTab === 4 ? "−" : "+"}</span>
                  </button>
                  {activeTab === 4 && (
                    <div className="p-4 bg-background/30 border-t border-border">
                      <p className="text-muted-foreground">
                        "Encourage switching tools based on the task (e.g., Perplexity for targeted research, Groq for
                        speed/brainstorming, Gemini/GPT-40 for nuanced analysis and generation)."
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Wrapping Up (from Augmentations)</h3>
                <p className="text-muted-foreground">
                  "These augmentations layer deeper analysis, scenario modeling, and thorough due diligence checks onto
                  your already excellent guide. They underscore how students can iteratively engage multiple AI tools to
                  validate assumptions, generate structured outputs, and refine their understanding of both technical
                  and business dimensions of an investment opportunity like Curen. By integrating these prompts, you'll
                  help your students see that creativity and specificity in prompting AI can yield richer insights and
                  more robust investment theses."
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/model-info-seraf">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Continue to Model Info | SERAF
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
