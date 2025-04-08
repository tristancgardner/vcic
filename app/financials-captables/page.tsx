"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function FinancialsCapTables() {
  const [activeTab, setActiveTab] = useState("market")

  // Sample data for visualizations
  const marketData = [
    { name: "2023", value: 10.7, label: "$10.7B" },
    { name: "2024", value: 13.6, label: "$13.6B" },
    { name: "2025", value: 17.3, label: "$17.3B" },
    { name: "2026", value: 22.0, label: "$22.0B" },
    { name: "2027", value: 27.9, label: "$27.9B" },
    { name: "2028", value: 35.4, label: "$35.4B" },
    { name: "2029", value: 45.0, label: "$45.0B" },
    { name: "2030", value: 57.2, label: "$57.2B" },
  ]

  const technologyData = [
    { name: "Lithium-Ion", value: 65 },
    { name: "Flow Batteries", value: 15 },
    { name: "Sodium-Ion", value: 8 },
    { name: "Thermal Storage", value: 7 },
    { name: "Other", value: 5 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  const competitorData = [
    { name: "Invinity", revenue: 12.5, funding: 80 },
    { name: "ESS Inc", revenue: 15.2, funding: 320 },
    { name: "CellCube", revenue: 8.7, funding: 45 },
    { name: "Sumitomo", revenue: 120, funding: 200 },
    { name: "Curen (Est.)", revenue: 0, funding: 1 },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "market":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Grid-Scale Battery Storage Market Growth</h3>
              <p className="text-muted-foreground mb-6">
                The global grid-scale battery market is projected to grow at a CAGR of ~27% from 2023 to 2030.
              </p>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={marketData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: "Market Size (Billions USD)", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => [`$${value}B`, "Market Size"]} />
                    <Legend />
                    <Bar dataKey="value" name="Market Size (Billions USD)" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                      {marketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? "#3b82f6" : "#60a5fa"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Source:</strong> Data compiled from industry reports and market analyses. The rapid growth is
                driven by increasing renewable energy deployment and grid modernization initiatives globally.
              </p>
            </div>
          </div>
        )
      case "technology":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Energy Storage Technology Market Share (2023)</h3>
              <p className="text-muted-foreground mb-6">
                Current distribution of grid-scale energy storage technologies by market share.
              </p>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={technologyData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {technologyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Market Share"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Analysis:</strong> While lithium-ion batteries currently dominate the market, flow batteries
                (including vanadium and emerging copper-based solutions like Curen's) are gaining traction for
                long-duration storage applications due to their scalability and longer cycle life.
              </p>
            </div>
          </div>
        )
      case "competitors":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Flow Battery Competitor Landscape</h3>
              <p className="text-muted-foreground mb-6">
                Comparison of key flow battery companies by annual revenue and total funding raised (in millions USD).
              </p>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={competitorData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" name="Annual Revenue ($M)" fill="#3b82f6" />
                    <Bar dataKey="funding" name="Total Funding ($M)" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Competitive Analysis:</strong> Curen is at a pre-revenue stage with initial funding needs,
                positioning it as an early entrant with significant growth potential. Established players like Invinity
                and ESS Inc. demonstrate the market's willingness to fund flow battery technologies at scale.
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

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
              Data Visualization for Investment Analysis
            </h1>
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground">
                Interactive charts and graphs to support the investment thesis for Curen's copper-based flow battery
                technology, highlighting market growth, technology distribution, and competitive landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6 shadow-sm">
            {/* Tabs */}
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab("market")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "market"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                Market Growth
              </button>
              <button
                onClick={() => setActiveTab("technology")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "technology"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                Technology Distribution
              </button>
              <button
                onClick={() => setActiveTab("competitors")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "competitors"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                Competitor Analysis
              </button>
            </div>

            {/* Content */}
            {renderContent()}
          </div>

          {/* Additional Context */}
          <div className="mt-8 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Visualization Insights</h2>
            <p className="text-muted-foreground mb-4">
              These visualizations support key aspects of the investment thesis for Curen:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>Market Growth:</strong> The grid-scale battery market is expanding rapidly, creating a
                  significant opportunity for new entrants with innovative technologies.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>Technology Diversification:</strong> While lithium-ion dominates currently, alternative
                  technologies like flow batteries are gaining traction, especially for long-duration storage.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>Competitive Landscape:</strong> Established flow battery companies demonstrate market
                  validation, while Curen's early stage presents significant growth potential with its novel
                  copper-based approach.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
