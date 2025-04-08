"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function UniqueStrategies() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  // Updated accordionItems array with complete text
  const accordionItems = [
    {
      title: "1. Dynamic Persona-Based Scenario Stress-Testing",
      content: {
        goal: "Go beyond static best/worst/base cases. Test how core strategies hold up against specific persona reactions.",
        technique:
          "Define a key strategic plank or milestone from the Curen analysis (e.g., achieving €50/MWh LCOS, securing first utility pilot). Then, prompt different LLM personas (Skeptic, Competitor, Target Customer) to react specifically to that plank.",
        promptExample:
          '"Act as a Skeptical Venture Capitalist specializing in hard tech. Curen\'s investment thesis relies heavily on achieving a €50/MWh LCOS using secondary copper sources within 3 years post-seed funding. Given the historical challenges in scaling novel battery chemistries and potential copper price volatility, what are the top 3 reasons this specific LCOS target/timeline is likely unrealistic? What specific proof points would you need to see during the next 18 months to gain confidence?"',
        impact: "Forces students to anticipate specific objections and prepare data-driven counterarguments or adjust their assumptions.",
        image: "/simulations/dynamic-persona.png",
      },
    },
    {
      title: "2. Competitive Counter-Move Simulation",
      content: {
        goal: "Anticipate and evaluate the impact of competitor actions beyond just listing them.",
        technique:
          "Propose a specific successful action by Curen (e.g., announcing a major funding round, landing a key partnership). Prompt an LLM acting as a specific competitor (using info gathered via Perplexity/Search) to outline their likely strategic response.",
        promptExample:
          '"Act as the Head of Strategy for Invinity Energy Systems (Vanadium Flow Batteries). Curen (Copper Flow Battery startup) just announced a strategic partnership with a major European utility for a 10 MWh grid stabilization project, directly competing in one of your target segments. Outline your 3-pronged counter-strategy over the next 6 months. Consider tactical moves in marketing (emphasizing vanadium\'s track record?), R&D (accelerating next-gen development?), sales (targeted undercutting?), or lobbying."',
        impact: "Helps assess the resilience of Curen's competitive advantage and highlights potential market dynamics.",
        image: "/simulations/war-games.png",
      },
    },
    {
      title: '3. Simulated Customer "Objection Handling" Interviews',
      content: {
        goal: "Test product-market fit and sales strategy assumptions against realistic customer pushback.",
        technique:
          "Develop detailed target customer personas (e.g., Utility Procurement Manager, Renewable Project Developer). Have the LLM embody that persona and conduct a simulated sales meeting or Q&A session where the student pitches Curen.",
        promptExample:
          '"You are a Procurement Manager for a mid-sized US utility focused on grid modernization. I represent Curen, offering a novel copper-based flow battery for 8-12 hour duration storage, claiming lower LCOS and better sustainability than vanadium. Your primary concerns are proven reliability (bankability), integration complexity with existing SCADA systems, and long-term operational support. Conduct a simulated Q&A session. Ask me tough, specific questions based on your concerns. What level of technical validation and performance guarantees would you require before even considering a pilot?"',
        impact:
          "Uncovers weaknesses in the value proposition or GTM strategy, identifies key evidence needed for customer adoption.",
        image: "/simulations/customer-objection.png",
      },
    },
    {
      title: '4. Financial Model "Red Teaming" & Sensitivity Wargaming',
      content: {
        goal: "Stress-test financial projections against pessimistic or unexpected internal/external factors.",
        technique:
          'Instruct an LLM (acting as a "Pessimistic CFO" or "External Shock Simulator") to critique key financial assumptions (sales growth, COGS reduction, OpEx) or introduce specific negative scenarios (e.g., funding delays, input cost spikes, slower adoption). Use LLMs capable of calculation (like GPT-4o/Gemini Advanced) to explore the quantitative impact of these changes.',
        promptExample:
          '"Act as a Red Team financial analyst. Review Curen\'s baseline 5-year projection [Provide key assumptions: Yr 3 sales = 1MW @ €X/kWh, COGS reduction = 15%/yr, Seed funding = €2M]. Now, simulate the impact on cash runway and the required Series A amount/timing if BOTH occur: 1) The first major customer deployment is delayed by 9 months. 2) Copper prices increase unexpectedly by 30% in Year 2, impacting COGS. Recalculate the funding needs and identify the point of potential insolvency under this scenario."',
        impact:
          "Highlights financial vulnerabilities, quantifies risks, and informs contingency planning/funding strategy.",
        image: "/simulations/red-teaming.png",
      },
    },
    {
      title: "5. Milestone Pathway Simulation & Bottleneck Identification",
      content: {
        goal: "Test the feasibility and interdependencies of the proposed milestones.",
        technique:
          "Input Curen's key milestones (technical, commercial, funding). Ask the LLM to identify potential bottlenecks, resource conflicts, or critical path dependencies. Simulate the ripple effect of a delay in one key milestone.",
        promptExample:
          '"Here are Curen\'s key milestones for the next 18 months post-seed: [List milestones like: Q2-Complete 5kW prototype; Q3-Begin 6-month cycle testing; Q4-Secure LOI for pilot; Q1+1-Hire Head of Manufacturing; Q2+1-Finalize Pilot Agreement]. Identify the 3 most critical dependencies where a delay would have the largest cascading negative impact on subsequent milestones and the planned Series A fundraising timeline. If the \'Begin 6-month cycle testing\' milestone is delayed by 4 months due to unexpected technical issues, how does that specifically impact the timing and feasibility of the subsequent milestones?"',
        impact:
          "Improves the realism of the roadmap, identifies critical areas needing de-risking, helps prioritize resources.",
        image: "/simulations/milestone-pathway.png",
      },
    },
    {
      title: "6. Cross-Cultural Strategy Simulation",
      content: {
        goal: "Test the assumptions behind international expansion or partnership strategies.",
        technique:
          'Building on the user\'s "Cross-Cultural Tester," simulate specific interactions like negotiations or market entry planning with an LLM acting as a stakeholder from the target culture.',
        promptExample:
          '"Act as a potential strategic investor from South Korea representing a large industrial conglomerate interested in energy storage manufacturing JVs. Curen (Finnish startup) is pitching a partnership. Based on typical South Korean business practices emphasizing established relationships, long-term commitment, and risk mitigation through clear hierarchical approval, what would be your top 3 concerns or questions during initial talks? Simulate a brief negotiation snippet focusing on disagreements over IP ownership vs. manufacturing exclusivity rights."',
        impact:
          "Uncovers potential friction points, informs negotiation strategy, and highlights the need for cultural adaptation in GTM plans.",
        image: "/simulations/cross-cultural-strategy.png",
      },
    },
  ]

  // Updated return statement
  return (
    <div className="min-h-screen">
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
              Unique Strategies - Deep Due Diligence
            </h1>
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Simulations inspired by military war-games... Moving beyond static analysis to actively simulate
                scenarios and test assumptions with AI can indeed yield much richer insights, forcing participants to
                confront potential realities rather than just theorize.
              </p>
              <div className="mt-6 p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border/40">
                {/* Removed redundant paragraph as the hero intro now covers it */}
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Here's a list of creative ways to use LLM chats to "war game" their insights, projections, and assumptions
                  for a startup during the due diligence and the formulation of a bullet-proof investment thesis:
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Creative AI Simulation & Testing Techniques
                <span className="block text-xl font-normal text-muted-foreground mt-2">
                  ("War Gaming" for Due Diligence)
                </span>
              </h2>

              {/* Accordion Section - Updated to use the complete data */}
              <div className="space-y-4 mb-16">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
                    >
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          expandedItems.includes(index) ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedItems.includes(index) ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {/* Apple-style alternating layout */}
                      <div
                        className={`p-6 pt-2 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} md:flex gap-6`}
                      >
                        {/* Content side */}
                        <div className="md:w-1/2 space-y-4">
                          <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium">Goal:</span>
                              <p className="text-muted-foreground">{item.content.goal}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium">Technique:</span>
                              <p className="text-muted-foreground">{item.content.technique}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium">Creative Prompt Example (Gemini/GPT-4o):</span>
                              <div className="mt-2 bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                                <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                                  {item.content.promptExample}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium">Impact:</span>
                              <p className="text-muted-foreground">{item.content.impact}</p>
                            </div>
                          </div>
                        </div>

                        {/* Image side */}
                        <div className="md:w-1/2 mt-6 md:mt-0">
                          <div className="rounded-lg overflow-hidden bg-secondary/20 h-full flex items-center justify-center">
                            <Image
                              src={item.content.image || "/placeholder.svg"}
                              alt={`Illustration for ${item.title}`}
                              width={600}
                              height={400}
                              className="object-cover w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools for Simulation Section - Updated */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Tools for Simulation</h2>
                <div className="bg-primary/5 backdrop-blur-sm rounded-xl border border-primary/20 p-6 shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">LLMs (Gemini/GPT-4o):</span>
                        <span className="text-muted-foreground ml-2">
                          Essential for persona embodiment, complex scenario generation, reacting to inputs, simulating
                          dialogue, and performing basic calculations/sensitivity analysis within the simulation.
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Perplexity/Search:</span>
                        <span className="text-muted-foreground ml-2">
                          Useful for gathering background information to make the personas and scenarios more realistic
                          (e.g., details about competitors, market trends, cultural business norms).
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Spreadsheet Software (Human driven, AI assisted):</span>
                        <span className="text-muted-foreground ml-2">
                          While AI can red team assumptions, the core financial model building often still happens
                          here. AI can help generate formulas or analyze outputs.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
