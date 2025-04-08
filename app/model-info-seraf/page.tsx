"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

// Define the type for our model data
interface ModelData {
  platform: string
  modelName: string
  contextWindow: string
  keyCapabilities: string
  keyStrengths: string
  situation: string
  evidence: string
  reasoning: string
  analysis: string
  finalRecommendation: string
}

export default function SerafModelInfo() {
  // State to track which rows are expanded
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  // Toggle row expansion
  const toggleRow = (index: number) => {
    setExpandedRows((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Check if a row is expanded
  const isExpanded = (index: number) => expandedRows.includes(index)

  // Table data
  const modelData: ModelData[] = [
    {
      platform: "Gemini.com",
      modelName: "Gemini 2.0 Flash",
      contextWindow: "1,000,000",
      keyCapabilities: "Fast multimodal processing (images, diagrams, video summaries)",
      keyStrengths: "Quickly synthesizing market contexts visually",
      situation: "Build quick context summaries of company market positions using multimedia (videos, infographics).",
      evidence: "Quickly aggregate visual market size and growth data",
      reasoning: "Rapidly outline logical paths for initial investment reasoning using visual charts",
      analysis: "Summarize key risks visually (competitive threats, financial projections).",
      finalRecommendation: "Assist in quick, diagrammatic visualization of potential exits and terms",
    },
    {
      platform: "Gemini.com",
      modelName: "Gemini 2.0 Flash Thinking",
      contextWindow: "1,000,000",
      keyCapabilities: "Enhanced multi-step logical reasoning",
      keyStrengths: "Good for task orchestration, iterative check-ins",
      situation: "Create visual scenarios comparing startup competitive positions",
      evidence: "Support research visually, aggregating multi-source data in complex graphs",
      reasoning: "Map detailed reasoning steps visually (logical diagrams for tech differentiation)",
      analysis: "Diagram risks and their interdependencies visually",
      finalRecommendation: "Outline multiple investment outcomes visually",
    },
    {
      platform: "Gemini.com",
      modelName: "Gemini 2.5 Pro (Experimental)",
      contextWindow: "1,000,000",
      keyCapabilities: "Advanced reasoning, robust coding capabilities",
      keyStrengths: "In-depth scenario modeling, advanced financial model building",
      situation: "Detailed market scenario modeling (e.g., market disruption scenarios)",
      evidence: "Compile evidence from multiple sources for in-depth financial modeling",
      reasoning: "Develop detailed investment thesis through logical and visual reasoning (e.g., flowcharts)",
      analysis: "Complex financial analysis and risk modeling via code-generated graphs",
      finalRecommendation: "Comprehensive scenario visualizations for exit analysis",
    },
    {
      platform: "Gemini.com",
      modelName: "Deep Research",
      contextWindow: "Limited monthly responses",
      keyCapabilities: "Deep multi-source synthesis for detailed diligence",
      keyStrengths: "Ideal for deep, agentic search and diligence",
      situation: "In-depth research into regulatory environments and competitor technologies",
      evidence: "Synthesizing patent landscapes, deep industry reports",
      reasoning: "Extract deep logical connections from market and patent data",
      analysis: "Identify hidden IP risks, market saturation signals, deep competitor insights",
      finalRecommendation: "Provide deep extraction of exit scenarios and associated terms",
    },
    {
      platform: "ChatGPT",
      modelName: "4o",
      contextWindow: "8,000",
      keyCapabilities: "Image generation, task orchestration, check-ins",
      keyStrengths: "Drafting concise logic summaries, investment narratives",
      situation: "Rapidly summarize competitive situations visually and textually",
      evidence: "Synthesize evidence succinctly for pitch clarity",
      reasoning: "Quickly draft logical structures for compelling SERAF methodology",
      analysis: "Concise risk summaries, competitive positioning",
      finalRecommendation: "Transform detailed memos into clear executive summaries",
    },
    {
      platform: "ChatGPT",
      modelName: "Voice Interaction",
      contextWindow: "Conversation-based",
      keyCapabilities: "Conversational brainstorming and idea refinement",
      keyStrengths: "Generating initial ideas, fleshing out narrative context",
      situation: "Interactive dialogue to establish company & market context",
      evidence: "Quickly confirm critical evidence through interactive voice dialogue",
      reasoning: "Voice-driven iterative clarification of investment logic",
      analysis: "Rapid conversational identification of overlooked risks",
      finalRecommendation: "Summarize conversationally refined ideas into final recommendation forms",
    },
    {
      platform: "ChatGPT",
      modelName: "Code Interpreter",
      contextWindow: "Large file uploads, CSV analysis",
      keyCapabilities: "Data-driven financial analysis, deep numerical insights",
      keyStrengths: "Financial modeling and detailed data analysis",
      situation: "Extract numeric insights from financial statements and large market datasets",
      evidence: "Data-driven evidence synthesis, statistical validation of market claims",
      reasoning: "Numerically driven logical reasoning through financial scenario testing",
      analysis: "Data-backed financial risk assessment and competitive benchmarking",
      finalRecommendation: "Data-driven financial and exit scenario modeling",
    },
    {
      platform: "ChatGPT",
      modelName: "Agents",
      contextWindow: "Task automation, orchestration",
      keyCapabilities: "Automated multi-task workflows",
      keyStrengths: "Structured memo drafting, comprehensive task automation",
      situation: "Orchestrate automatic market context generation from multiple structured queries",
      evidence: "Automated evidence gathering and report generation from multiple sources",
      reasoning: "Logical reasoning automation using structured queries (SERAF-aligned)",
      analysis: "Automate detailed risk assessments and competitor analyses",
      finalRecommendation: "Automate memo summarization and formatting into presentation-ready copy",
    },
    {
      platform: "Grok",
      modelName: "Grok-3",
      contextWindow: "128,000",
      keyCapabilities: "Real-time web search, X.com data aggregation",
      keyStrengths: "Real-time validation of startup traction, social and market trends",
      situation: "Real-time company & market context validation (traction, public sentiment)",
      evidence: "Validate real-time data for investment arguments (customer engagement, press)",
      reasoning: "Validate public and market sentiment as logic checkpoints",
      analysis: "Model real-time competitor and market sentiment impacts on risk",
      finalRecommendation: "Real-time social trend-informed exit pathway recommendations",
    },
    {
      platform: "Perplexity AI",
      modelName: "Standard + Pro",
      contextWindow: "4,000 per query",
      keyCapabilities: "Instant fact checks, citations, drill-down capabilities",
      keyStrengths: "Reliable source-based market and competitor diligence",
      situation: "Rapidly establish verified market context via sourced searches",
      evidence: "Source-verified competitive and market evidence quickly",
      reasoning: "Verify logic with sourced, cited evidence for credibility and precision",
      analysis: "Competitor benchmarks, verified financial and market risk analysis",
      finalRecommendation: "Rapidly sourced fact-based recommendations and final validations",
    },
    {
      platform: "ChatGPT",
      modelName: "GPT-4o, GPT-4o mini",
      contextWindow: "128,000",
      keyCapabilities: "Long-context reasoning, detailed persona simulations, CSV parsing, slide deck creation",
      keyStrengths: "Complete end-to-end memo support from detailed draft to polished presentation",
      situation: "Comprehensive context building through long-context summaries and detailed persona simulations",
      evidence: "Long-context detailed evidence aggregation (financial, market) for deep synthesis",
      reasoning: "Structured SERAF-aligned logical investment reasoning, persona-based simulations",
      analysis: "In-depth competitive analysis, persona-driven risk modeling and financial scenario simulations",
      finalRecommendation: "Polished executive summaries, detailed scenario-based exit strategy presentations",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 gradient-heading">SERAF Model Info</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive comparison of AI models and their capabilities for each stage of the SERAF framework for
          venture capital analysis.
        </p>
      </div>

      <div className="bg-card/30 backdrop-filter backdrop-blur-sm rounded-xl border border-border/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-sm">Platform</th>
                <th className="px-4 py-3 font-medium text-sm">Model Name</th>
                <th className="px-4 py-3 font-medium text-sm">Context Window</th>
                <th className="px-4 py-3 font-medium text-sm">Key Capabilities</th>
                <th className="px-4 py-3 font-medium text-sm">Key Strengths</th>
                <th className="px-4 py-3 font-medium text-sm text-center">SERAF Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {modelData.map((model, index) => (
                <React.Fragment key={`${model.platform}-${model.modelName}`}>
                  <tr
                    className={`hover:bg-muted/30 transition-colors cursor-pointer ${
                      isExpanded(index) ? "bg-muted/20" : ""
                    }`}
                    onClick={() => toggleRow(index)}
                  >
                    <td className="px-4 py-3 font-medium">
                      <div className="flex items-center">
                        {isExpanded(index) ? (
                          <ChevronDown className="w-4 h-4 mr-2 flex-shrink-0 text-primary" />
                        ) : (
                          <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 text-primary" />
                        )}
                        <span
                          className={
                            model.platform === "Gemini.com" ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
                          }
                        >
                          {model.platform}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{model.modelName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{model.contextWindow}</td>
                    <td className="px-4 py-3">{model.keyCapabilities}</td>
                    <td className="px-4 py-3">{model.keyStrengths}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {isExpanded(index) ? "Hide Details" : "Show Details"}
                      </span>
                    </td>
                  </tr>

                  {/* Expanded row with SERAF details */}
                  {isExpanded(index) && (
                    <tr className="bg-muted/10">
                      <td colSpan={6} className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-primary">S (Situation)</h4>
                            <p className="text-sm">{model.situation}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-primary">E (Evidence)</h4>
                            <p className="text-sm">{model.evidence}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-primary">R (Reasoning)</h4>
                            <p className="text-sm">{model.reasoning}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-primary">A (Analysis)</h4>
                            <p className="text-sm">{model.analysis}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-primary">F (Final Recommendation)</h4>
                            <p className="text-sm">{model.finalRecommendation}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h3 className="text-lg font-medium mb-2">About the SERAF Framework</h3>
        <p className="text-sm text-muted-foreground">
          The SERAF framework is a structured approach to venture capital analysis that breaks down the investment
          process into five key components: Situation assessment, Evidence gathering, Reasoning development, Analysis of
          risks and opportunities, and Final recommendation formulation.
        </p>
      </div>
    </div>
  )
}
