"use client"

import Link from "next/link"
import { useState } from "react"
import { Calendar, FileText, Download, ChevronDown, ChevronUp, FileIcon } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [isExpanded, setIsExpanded] = useState(true)

  // Pages data with dates for sorting
  const pages = [
    { title: "Plan of Attack", path: "/plan-of-attack", updated: "Mar 25, 2025", slides: 5 },
    { title: "Analyses", path: "/analyses", updated: "Mar 24, 2025", slides: 5 },
    { title: "DeepDiligence", path: "/deep-diligence", updated: "Mar 23, 2025", slides: 5 },
    { title: "GPT Agents Tips", path: "/gpt-agents-tips", updated: "Mar 22, 2025", slides: 5 },
    { title: "Model Info | SERAF", path: "/model-info-seraf", updated: "Mar 21, 2025", slides: 5 },
    { title: "Unique Strategies", path: "/unique-strategies", updated: "Mar 20, 2025", slides: 5 },
    { title: "Visualization", path: "/visualization", updated: "Mar 19, 2025", slides: 5 },
  ]

  // Sort pages by date (newest first)
  const sortedPages = [...pages].sort((a, b) => {
    const dateA = new Date(a.updated.replace("Mar ", "March "))
    const dateB = new Date(b.updated.replace("Mar ", "March "))
    return dateB.getTime() - dateA.getTime()
  })

  // Filter pages based on active tab
  const filteredPages = activeTab === "all" ? sortedPages : sortedPages.slice(0, 3)

  // Pre-existing documents data
  const documents = [
    {
      name: "Smart Steps - Efficient Due Diligence on 3 Startups",
      path: "/documents/00_Smart Steps - Efficient Due Diligence on 3 Startups.pdf",
      type: "PDF",
      size: "2.1 MB",
      date: "Mar 21, 2025",
    },
    {
      name: "Smart Steps for SERAF-based Investment Thesis",
      path: "/documents/01_Smart_Steps_for_SERAF-based_Investment_Thesis.pdf",
      type: "PDF",
      size: "1.2 MB",
      date: "Mar 25, 2025",
    },
    {
      name: "Unique Strategies - Deep Due Diligence",
      path: "/documents/02_Unique_Strategies_Deep_Due_Diligence.pdf",
      type: "PDF",
      size: "2.4 MB",
      date: "Mar 24, 2025",
    },
    {
      name: "Enriching Financials, Cap Tables & Milestones",
      path: "/documents/03_Enriching_Financials_Cap_Tables_Milestones.pdf",
      type: "PDF",
      size: "1.8 MB",
      date: "Mar 23, 2025",
    },
    {
      name: "Using GPT Agents for Investment Memo Creation",
      path: "/documents/04_Using_GPT_Agents_for_Investment_Memo_Creation.pdf",
      type: "PDF",
      size: "3.5 MB",
      date: "Mar 22, 2025",
    },
    {
      name: "Free AI Model Capabilities",
      path: "/documents/Bonus_Free AI Model Cabailties.pdf",
      type: "PDF",
      size: "1.5 MB",
      date: "Mar 19, 2025",
    },
    {
      name: "Business Model Canvas Framework",
      path: "/documents/Business_Model_Canvas_Framework.pdf",
      type: "PDF",
      size: "0.8 MB",
      date: "Apr 8, 2025",
    },
  ]

  // Function to get the appropriate icon based on file type
  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />
      case "docx":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "xlsx":
        return <FileText className="h-4 w-4 text-green-500" />
      case "pptx":
        return <FileText className="h-4 w-4 text-orange-500" />
      default:
        return <FileIcon className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Pages</h1>
        <p className="text-muted-foreground">View and navigate through content pages.</p>
      </div>

      <div className="flex space-x-2 mb-6">
        <button
          className={activeTab === "all" ? "tab tab-active" : "tab tab-inactive"}
          onClick={() => setActiveTab("all")}
        >
          All Pages
        </button>
        <button
          className={activeTab === "recent" ? "tab tab-active" : "tab tab-inactive"}
          onClick={() => setActiveTab("recent")}
        >
          Recent
        </button>
        <button
          className={activeTab === "favorites" ? "tab tab-active" : "tab tab-inactive"}
          onClick={() => setActiveTab("favorites")}
        >
          Favorites
        </button>
      </div>

      {/* Condensed list view of pages */}
      <div className="mb-10 bg-card rounded-lg border border-border overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-border">
          {filteredPages.map((item) => (
            <div key={item.path} className="p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span className="mr-3">Updated {item.updated}</span>
                      <span>{item.slides} sections</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={item.path}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
                >
                  View Page
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Download Section */}
      <div className="bg-card rounded-lg border border-border overflow-hidden mb-6">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-medium">Documents</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 hover:bg-muted/50 rounded-md transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        <div className={`transition-all duration-300 ${isExpanded ? "max-h-[500px]" : "max-h-0"} overflow-hidden`}>
          <div className="p-4">
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/10 transition-colors">
                  <div className="flex items-center">
                    <div className="text-red-500 mr-3">
                      {doc.type.toLowerCase() === "pdf" ? (
                        <FileText className="h-5 w-5 text-red-500" />
                      ) : doc.type.toLowerCase() === "pptx" ? (
                        <FileText className="h-5 w-5 text-orange-500" />
                      ) : (
                        <FileText className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-medium">{doc.name}</span>
                      <div className="flex items-center text-xs text-muted-foreground mt-0.5">
                        <span className="uppercase">{doc.type}</span>
                        <span className="mx-2">•</span>
                        <span>{doc.size}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-3 w-3 mr-1 inline" />
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={doc.path}
                    download
                    className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    <span>Download</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
