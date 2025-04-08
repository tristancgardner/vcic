"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Define the data structure
interface AgentData {
  section: string
  content: string
  agent: string
  prompt: string
  output: string
}

export default function GptAgentsTips() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile when component mounts
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index)
    }
  }

  const agentData: AgentData[] = [
    {
      section: "Deal Snapshot",
      content:
        "- **Pre-Money Valuation:** $4M\n- **Team's Investment:** $0.5M (Total $1.0M round)\n- **Post-Money:** $5M\n- **Ownership:** 10%",
      agent: "Deal Structurer",
      prompt:
        '"If our team invests $0.5M in a $1.0M round at a pre-money valuation of $4M, what will the post-money valuation and our ownership percentage be?"',
      output: "Calculated post-money valuation as $5M, 10% equity stake from a $0.5M investment.",
    },
    {
      section: "Top 5 Reasons for Investing",
      content:
        "1. Massive market need for grid storage ($10B+, ~27% growth).\n2. Unique, sustainable copper-based battery technology.\n3. Strong IP position (patent WO2024184590A1).\n4. Proof-of-concept prototype underway (5kW/25kWh).\n5. High climate impact and strong industry tailwinds.",
      agent: "Market Maven, Technology Analyst",
      prompt:
        'Market Maven: "Current size & growth of grid-scale storage market?"\nTechnology Analyst: "Advantages of copper-based flow batteries vs. lithium-ion and vanadium?"',
      output:
        "Market Maven confirmed grid-scale market ~$10B+, 25-30% annual growth.\nTechnology Analyst confirmed copper's sustainability, lower cost, and reliability advantages.",
    },
    {
      section: "Top 5 Reservations (Risks)",
      content:
        "1. Unproven tech at scale (performance speculative).\n2. High capital needs, long time to commercialization.\n3. Strong market competition and adoption challenges.\n4. Lack of experienced commercial team.\n5. Regulatory hurdles and long utility sales cycles.",
      agent: "Risk Auditor",
      prompt: '"List the top 5 risks for early-stage grid battery startups (tech, market, team, financial)."',
      output:
        "Highlighted tech scale-up risk, financial runway/capital needs, competitive landscape, team execution gap, and regulatory/market adoption risks.",
    },
    {
      section: "Investment Decision & Rationale",
      content:
        "**Decision:** Invest in Curen\n**Rationale:** High-risk/high-reward; large market pain point, unique tech, upcoming prototype milestone validation, strong alignment with climate mission.",
      agent: "Decision Synthesizer",
      prompt:
        '"Draft short investment recommendation based on pros (large market, unique tech) and cons (significant risks)."',
      output:
        "Recommended emphasizing high potential rewards balanced against risks, prototype validation milestone importance, and climate impact alignment as key rationale.",
    },
    {
      section: "Valuation Rationale",
      content:
        "$4M pre-money valuation justified by market comparables ($2-5M range), high technical risks, seed-stage industry benchmarks, and targeted 10% equity stake for meaningful upside.",
      agent: "Valuation Guru",
      prompt: '"Appropriate valuation for pre-revenue battery tech startup with prototype and patent pending?"',
      output:
        "Suggested pre-money valuation of $2–5M for comparable early-stage energy startups, confirming a $4M valuation as reasonable given Curen's stage, risks, and IP strengths.",
    },
    {
      section: "Expected Return Analysis",
      content:
        "Target return: ~10x investment over 5-7 years (≈58% IRR for $50M exit; 5x return ≈38% IRR at $25M exit). High asymmetric payoff: acceptable risk profile with potential substantial upside from successful technology deployment and adoption.",
      agent: "Return Analyst",
      prompt:
        '"Calculate returns and IRR for a $0.5M investment at $5M post-money valuation if exited at $50M or $25M in 5 years."',
      output:
        "Provided ~10x return (58% IRR) for a $50M exit and ~5x return (38% IRR) for a $25M exit, confirming the investment's attractive upside and risk-reward balance.",
    },
    {
      section: "Due Diligence Strategy (SERAF)",
      content:
        "Focused on verifying assumptions (tech feasibility, market interest, team execution, funding runway):\n- Prototype scalability & performance?\n- Utility or customer interest?\n- Commercialization & team-building plans?\n- Funding milestones & next rounds strategy?",
      agent: "Diligence Coach",
      prompt:
        '"Suggest due diligence questions for founder of pre-revenue battery startup covering tech, market, team, financial."',
      output:
        "Produced targeted questions around tech challenges, customer validation, commercialization strategy, team-building, and financial runway needs, directly supporting SERAF-style diligence checklist.",
    },
    {
      section: "Final Pitch Preparation",
      content:
        "- Refined investment thesis emphasizing clear market, unique tech, balanced risks.\n- Edited for clarity, brevity, impactful messaging, and presentation readiness.",
      agent: "Pitch Polisher, Editorial Reviewer",
      prompt:
        'Pitch Polisher: "Rewrite investment thesis concisely and impactfully for pitch."\nEditorial Reviewer: "Proofread and trim executive summary draft; highlight unclear or wordy sections."',
      output:
        "Pitch Polisher clarified narrative (market problem → unique solution → risks balanced by potential upside). Editorial Reviewer suggested concise language and minor edits to ensure clarity and fit page constraints.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading">
              Using GPT Agents for Investment Memo Creation
            </h1>
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Here's an example of how we used various GPT 'agents' to handle different tasks in analyzing and
                pitching Curen. Each row in the table below outlines a specific memo section, the associated GPT agent,
                example prompt, and the resulting output.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flip Cards Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentData.map((data, index) => (
              <div
                key={index}
                className={`flip-card ${activeCard === index ? "flipped" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="flip-card-inner">
                  {/* Front of Card */}
                  <div className="flip-card-front bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 gradient-heading">{data.section}</h3>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">GPT Agent Used:</p>
                          <p className="font-medium text-foreground">{data.agent}</p>
                        </div>
                        <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                          {isMobile ? "Tap to flip" : "Hover to flip"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="flip-card-back bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm overflow-y-auto">
                    <h3 className="text-lg font-bold mb-3">{data.section}</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Example Content:</p>
                        <div className="text-sm text-muted-foreground whitespace-pre-line">{data.content}</div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Example Prompt:</p>
                        <div className="text-sm text-muted-foreground whitespace-pre-line">{data.prompt}</div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Agent Output:</p>
                        <div className="text-sm text-muted-foreground whitespace-pre-line">{data.output}</div>
                      </div>
                    </div>

                    {isMobile && (
                      <div className="mt-4 text-center">
                        <button
                          className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveCard(null)
                          }}
                        >
                          Tap to close
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: 300px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        @media (min-width: 768px) {
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
