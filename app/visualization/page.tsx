"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Visualization() {
  const [activeSection, setActiveSection] = useState<string>("interactive")

  // Sample data for the cap table simulation
  const capTableData = {
    initial: {
      founders: "80%",
      university: "10%",
      esop: "10%",
    },
    seedRound: {
      founders: "64%",
      university: "8%",
      esop: "8%",
      seedInvestors: "20%",
    },
    seriesA: {
      founders: "48%",
      university: "6%",
      esop: "12%", // Increased with new option pool
      seedInvestors: "15%",
      seriesAInvestors: "19%",
    },
  }

  // Sample data for exit scenarios
  const exitScenarios = [
    {
      name: "Good Exit",
      value: "€150M",
      founders: "€72M",
      university: "€9M",
      esop: "€18M",
      seedInvestors: "€22.5M",
      seriesAInvestors: "€28.5M",
    },
    {
      name: "Mediocre Exit",
      value: "€30M",
      founders: "€4.8M",
      university: "€0.6M",
      esop: "€1.2M",
      seedInvestors: "€11.4M", // Includes liquidation preference
      seriesAInvestors: "€12M", // Includes liquidation preference
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
              Enriching Financials, Cap Tables & Milestones
            </h1>
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Learn how to use AI tools to enhance your understanding of startup financials, cap tables, and milestone
                planning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveSection("interactive")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === "interactive"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              Interactive Projection Analysis
            </button>
            <button
              onClick={() => setActiveSection("captable")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === "captable"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              Cap Table Simulation
            </button>
            <button
              onClick={() => setActiveSection("waterfall")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === "waterfall"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              Exit Waterfall Simulation
            </button>
            <button
              onClick={() => setActiveSection("milestones")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === "milestones"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              Connecting Milestones to Financials
            </button>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Interactive Projection Analysis */}
            {activeSection === "interactive" && (
              <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Interactive Projection Analysis & Visualization</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Goal:</h3>
                    <p className="text-muted-foreground">
                      Move beyond static spreadsheets to understand Curen's key trends and metrics dynamically.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                        <span className="font-mono text-sm">Gemini/GPT4o (Hypothetical Curen Data)</span>
                      </div>
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Here is Curen's projected 5-year financials [Provide data table or link]. Calculate the average
                        monthly cash burn rate for the first 24 months. Based on the starting seed investment of €2M,
                        estimate the cash runway in months. Describe the trend of the Gross Profit Margin over the 5
                        years. What does this imply about Curen's potential scalability and efficiency improvements?
                        Generate a textual description of a stacked bar chart showing Operating Expenses broken down by
                        category (e.g., R&D, S&M, G&A) for each of the 5 years."
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Impact:</h3>
                    <p className="text-muted-foreground">
                      Helps students grasp concepts like burn rate, runway, and margin evolution visually (even if
                      described textually) and understand the story behind Curen's numbers.
                    </p>
                  </div>

                  <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Sample AI Output:</h3>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Monthly Cash Burn Rate (First 24 Months):</strong> €83,333 per month
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Cash Runway:</strong> Approximately 24 months (2 years) based on the €2M seed investment
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Gross Profit Margin Trend:</strong> Curen's gross profit margin improves from -15% in
                        Year 1 (pre-revenue R&D phase) to 35% in Year 3 (initial sales) and reaches 52% by Year 5. This
                        positive trend suggests improving production efficiency as the technology scales and
                        manufacturing processes mature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cap Table Simulation */}
            {activeSection === "captable" && (
              <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Cap Table Simulation - Round by Round</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Goal:</h3>
                    <p className="text-muted-foreground">
                      Demystify dilution and see how Curen's ownership structure changes with each funding round.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                        <span className="font-mono text-sm">Gemini/GPT4o (Curen Context)</span>
                      </div>
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Curen's initial cap table is: Founders 80%, Aalto Uni 10%, ESOP 10%. Seed Round: They raise €2M
                        on a €6M pre-money valuation. Calculate the post-seed ownership percentages for all parties. How
                        much dilution did the Founders experience in this round? Series A: Two years later, they raise
                        €10M on a €30M pre-money valuation. Calculate the post-Series A ownership percentages for
                        Founders, Aalto, ESOP, Seed Investors, and new Series A Investors. What is the Founders' total
                        dilution from pre-seed to post-Series A?"
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Cap Table Evolution:</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-secondary/50">
                            <th className="border border-border/30 px-4 py-2 text-left">Stakeholder</th>
                            <th className="border border-border/30 px-4 py-2 text-center">Initial</th>
                            <th className="border border-border/30 px-4 py-2 text-center">Post-Seed</th>
                            <th className="border border-border/30 px-4 py-2 text-center">Post-Series A</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border/30 px-4 py-2 font-medium">Founders</td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.initial.founders}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seedRound.founders}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seriesA.founders}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border/30 px-4 py-2 font-medium">Aalto University</td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.initial.university}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seedRound.university}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seriesA.university}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border/30 px-4 py-2 font-medium">ESOP</td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.initial.esop}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seedRound.esop}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seriesA.esop}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border/30 px-4 py-2 font-medium">Seed Investors</td>
                            <td className="border border-border/30 px-4 py-2 text-center">-</td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seedRound.seedInvestors}
                            </td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seriesA.seedInvestors}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-border/30 px-4 py-2 font-medium">Series A Investors</td>
                            <td className="border border-border/30 px-4 py-2 text-center">-</td>
                            <td className="border border-border/30 px-4 py-2 text-center">-</td>
                            <td className="border border-border/30 px-4 py-2 text-center">
                              {capTableData.seriesA.seriesAInvestors}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Impact:</h3>
                    <p className="text-muted-foreground">
                      Makes the abstract concept of dilution concrete and shows the progressive impact of fundraising on
                      founder ownership. Founders experience 16% dilution in the seed round and an additional 16%
                      dilution in the Series A round, for a total dilution of 32% from their initial 80% ownership.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Exit Waterfall Simulation */}
            {activeSection === "waterfall" && (
              <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Exit Waterfall Simulation - Seeing Who Gets What</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Goal:</h3>
                    <p className="text-muted-foreground">
                      Understand how deal terms like liquidation preferences affect payout distribution in different
                      exit scenarios.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                        <span className="font-mono text-sm">Gemini/GPT4o (Curen Context)</span>
                      </div>
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Using Curen's post-Series A cap table [from previous example], assume the Seed (€2M invested)
                        and Series A (€10M invested) investors both have a 1x non-participating liquidation preference.
                        Scenario 1 (Good Exit): Simulate the payout distribution if Curen is acquired for €150M. How
                        much does each group (Founders, Aalto, ESOP, Seed, Series A) receive? Scenario 2 (Mediocre
                        Exit): Simulate the payout distribution if Curen is acquired for €30M. Explain why the
                        distribution shifts so dramatically compared to Scenario 1."
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Exit Scenarios Comparison:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {exitScenarios.map((scenario, index) => (
                        <div key={index} className="bg-secondary/30 rounded-lg border border-border/30 p-4">
                          <h4 className="text-lg font-medium mb-3">
                            {scenario.name}: {scenario.value}
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="font-medium">Founders:</span>
                              <span>{scenario.founders}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium">Aalto University:</span>
                              <span>{scenario.university}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium">ESOP:</span>
                              <span>{scenario.esop}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium">Seed Investors:</span>
                              <span>{scenario.seedInvestors}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium">Series A Investors:</span>
                              <span>{scenario.seriesAInvestors}</span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Impact:</h3>
                    <p className="text-muted-foreground">
                      Clearly demonstrates the real financial consequences of deal terms and how risk/reward is
                      allocated, especially in lower-outcome scenarios. In the good exit (€150M), everyone receives
                      their pro-rata share. In the mediocre exit (€30M), the liquidation preferences come into play,
                      with investors receiving their invested capital back first, dramatically reducing the founders'
                      payout.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Connecting Milestones to Financial Reality */}
            {activeSection === "milestones" && (
              <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Connecting Milestones to Financial Reality</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Goal:</h3>
                    <p className="text-muted-foreground">
                      Show how operational progress (or lack thereof) directly impacts financial health and future
                      needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Creative Prompt Example:</h3>
                    <div className="bg-secondary/50 rounded-lg border border-border/30 overflow-hidden">
                      <div className="bg-background/30 px-4 py-2 border-b border-border/30 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary/60 mr-2"></div>
                        <span className="font-mono text-sm">Gemini/GPT4o (Curen Context)</span>
                      </div>
                      <div className="p-4 font-mono text-sm whitespace-pre-wrap">
                        "Curen's financial model assumes they hit the 'First Commercial Sale (100kW system)' milestone
                        in Month 30, triggering initial significant revenue. Their monthly burn rate averages €100k
                        post-seed. Analyze the impact on cash runway and the timing of the needed Series A if this
                        milestone slips by 6 months. Conversely, if they achieve it 4 months early and it leads to
                        follow-on orders faster than projected, how might that positively impact their Series A
                        negotiation leverage or required funding amount?"
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Sample AI Output:</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-medium">Milestone Delay Scenario:</h4>
                        <p className="text-sm text-muted-foreground">
                          If the 'First Commercial Sale' milestone slips by 6 months (to Month 36):
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>Cash runway impact: Additional €600K needed (6 months × €100K/month)</li>
                          <li>Series A timing: Would need to be accelerated by ~6 months to avoid cash gap</li>
                          <li>Valuation impact: Likely 15-25% lower valuation due to delayed revenue traction</li>
                          <li>Risk profile: Increased execution risk perception from investors</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base font-medium">Early Achievement Scenario:</h4>
                        <p className="text-sm text-muted-foreground">
                          If the milestone is achieved 4 months early (Month 26) with faster follow-on orders:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>Cash runway extension: ~4-6 months (from both saved costs and early revenue)</li>
                          <li>
                            Series A timing: Could be delayed by 3-4 months, allowing more traction before raising
                          </li>
                          <li>
                            Valuation impact: Potential 20-30% higher valuation due to proven commercial viability
                          </li>
                          <li>
                            Funding amount: Could potentially raise the same amount but at higher valuation, or raise
                            more at the same valuation for accelerated growth
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Impact:</h3>
                    <p className="text-muted-foreground">
                      Reinforces the link between operational execution and financial outcomes, making projections feel
                      less theoretical. Helps students understand how milestone achievement directly affects fundraising
                      strategy, valuation, and cash management.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Resources */}
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Additional Resources & References</h2>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The examples and techniques shown on this page are based on the following resources:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>03_Enriching Financials, Cap Tables & Milestones.pdf</strong> - Provides detailed guidance
                      on using AI to enhance financial analysis and cap table understanding [^4]
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>04_Using GPT Agents for Investment Memo Creation.pdf</strong> - Shows how specialized AI
                      agents can assist with different aspects of financial analysis [^5]
                    </span>
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-secondary/30 rounded-lg border border-border/30">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> The examples shown are simplified for demonstration purposes. In a real
                    investment analysis, you would use actual financial data and more detailed projections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
