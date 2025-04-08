import Card from "@/components/card"

export default function DemoPlans() {
  return (
    <div className="card-container">
      {/* Card #1: Title & Goal */}
      <Card id="card-1">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">01 / Introduction</span>
          <h1 className="text-4xl md:text-5xl font-bold gradient-heading">VCIC - Agentic Diligence</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Project Management Plan & Overarching AI Tool Goals
          </h2>

          <div className="mt-8 space-y-6">
            <div className="glass-card p-6">
              <p className="text-lg font-medium mb-4">
                Overall objective: Showcase AI tools applied to the VCIC workflow.
              </p>

              <p className="text-lg mb-4">We will cover:</p>
              <ul className="space-y-3 pl-6 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Preparation & setup phase</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Execution & simulation of workflow</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Using multiple AI models (Gemini, GPT-4o, Perplexity, Grok) for different tasks</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-border/30">
                <p className="text-lg font-medium mb-2">AI Tool Goal:</p>
                <p className="text-muted-foreground">
                  Streamline research, synthesis, and presentation so students can focus on
                  <span className="font-semibold text-foreground"> actionable insights </span>
                  instead of routine tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #2: Phase 1: Preparation & Setup */}
      <Card id="card-2">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">02 / Planning</span>
          <h2 className="text-4xl font-bold">Phase 1: Preparation & Setup</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Create Project Plan & Define Team Roles</h3>
                    <p className="text-muted-foreground mb-3">
                      Develop a comprehensive project plan and clearly define roles among group members. Each member
                      should:
                    </p>
                    <ul className="space-y-2 pl-4 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>Outline their specific responsibilities and deliverables</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>Define their AI agent team composition and specializations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>Describe how their agents will collaborate to complete assigned missions</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>Establish communication protocols between team members and their agent teams</span>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Gather & Organize Materials</h3>
                    <p className="text-muted-foreground mb-3">
                      Collect and organize all necessary documents and resources:
                    </p>
                    <ul className="space-y-2 pl-4 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>Curen PDF</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>SmartBubbles PDF</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>LHB PDF</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>VCIC templates</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>SERAF guide</span>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Confirm AI Tool Access</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-secondary/30 rounded-md border border-border/30">
                        <span className="font-medium">Gemini</span>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded-md border border-border/30">
                        <span className="font-medium">ChatGPT GPT-4o</span>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded-md border border-border/30">
                        <span className="font-medium">Perplexity</span>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded-md border border-border/30">
                        <span className="font-medium">Grok</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #3: Phase 2: Execution – Simulating Student Workflow */}
      <Card id="card-3">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">03 / Execution</span>
          <h2 className="text-4xl font-bold">Phase 2: Execution – Simulating Workflow</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                <h3 className="text-xl font-medium mb-3">Initial Research & Understanding</h3>
                <p className="text-muted-foreground mb-3">Conduct structured analysis for each company:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-background/30 rounded-md">
                    <span className="font-medium">Curen</span>
                  </div>
                  <div className="p-3 bg-background/30 rounded-md">
                    <span className="font-medium">SmartBubbles</span>
                  </div>
                  <div className="p-3 bg-background/30 rounded-md">
                    <span className="font-medium">LHB</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Use structured analysis & SERAF approach</h4>
                    <p className="text-muted-foreground">
                      Apply systematic framework to evaluate each company consistently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Draft "Rejected Startup Summaries"</h4>
                    <p className="text-muted-foreground">
                      Create concise summaries for the 2 companies you won't choose.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Deep-dive on primary company</h4>
                    <p className="text-muted-foreground">
                      Analyze memo, term sheet, scenario simulations, and optional attachments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-sm font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Incorporate specific AI prompts</h4>
                    <p className="text-muted-foreground">
                      Develop tailored prompts for each step of the analysis process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm italic">
                  "The key is to simulate the actual workflow, demonstrating how AI tools can enhance each step without
                  replacing critical thinking."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #4: Overarching Key Points for Students */}
      <Card id="card-4">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">04 / Key Points</span>
          <h2 className="text-4xl font-bold">Overarching Key Points for Students Using AI Tools</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    Task-Specific Models
                  </h3>
                  <p className="text-muted-foreground">
                    Shift from single chat usage to{" "}
                    <span className="font-medium text-foreground">task-specific models</span> for synergy across
                    different AI tools.
                  </p>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    Human-Agentic Workflows
                  </h3>
                  <p className="text-muted-foreground">
                    Integrate <span className="font-medium text-foreground">human-agentic workflows</span> by
                    cross-leveraging multiple AI tools for comprehensive analysis.
                  </p>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    Iterative Refinement
                  </h3>
                  <p className="text-muted-foreground">
                    Emphasize chain-of-thought reasoning, push-back, and iterative refinement to improve AI outputs.
                  </p>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-medium">4</span>
                    </div>
                    Store Key Contexts
                  </h3>
                  <p className="text-muted-foreground">
                    Always store key chat links & prompt contexts for ongoing synergy and reference.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-5 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-lg font-medium mb-3">Multiple Vantage Points</h3>
                <p className="text-muted-foreground">
                  Use specialized AI agents with distinct roles to gain diverse perspectives:
                </p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-background/30 rounded-md text-center">
                    <span className="font-medium">'DeepResearch' Agent</span>
                  </div>
                  <div className="p-3 bg-background/30 rounded-md text-center">
                    <span className="font-medium">Orchestrator Agent</span>
                  </div>
                  <div className="p-3 bg-background/30 rounded-md text-center">
                    <span className="font-medium">Specialized Agents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #5: Detailed Pointers / Roles & Next Steps */}
      <Card id="card-5">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">05 / Detailed Pointers</span>
          <h2 className="text-4xl font-bold">Detailed Pointers & Roles</h2>

          <div className="mt-8">
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Plan of Attack</h3>
                  <p className="text-muted-foreground">
                    Every project is capped by its plan of attack. Create a comprehensive strategy before diving into
                    execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Team & Agent Roles</h3>
                  <p className="text-muted-foreground mb-3">
                    Decide on team roles, then define{" "}
                    <span className="font-medium text-foreground">agent subroles</span> to handle specialized tasks:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-secondary/30 rounded-md text-center">
                      <span className="font-medium">"Risk Auditor"</span>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-md text-center">
                      <span className="font-medium">"Market Maven"</span>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-md text-center">
                      <span className="font-medium">"Financial Analyst"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">External Feedback</h3>
                  <p className="text-muted-foreground">
                    Consider interviews or external push-back for real feedback to validate AI-generated insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Dictate or Narrate</h3>
                  <p className="text-muted-foreground">
                    Dictate or narrate everything—letting AI handle the documentation while you focus on analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-medium">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Self-Grade</h3>
                  <p className="text-muted-foreground">
                    Self-grade by comparing AI outputs with peer or mentor reviews to identify areas for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card #6: Wrap-Up & Agenda Recap */}
      <Card id="card-6">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block text-sm font-medium text-primary/80 mb-2">06 / Conclusion</span>
          <h2 className="text-4xl font-bold gradient-heading">Wrap-Up & Agenda Recap</h2>

          <div className="mt-8">
            <div className="glass-card p-6">
              <p className="text-xl mb-6">
                You now have a full plan: from initial doc prep and AI tool assignment to final synergy.
              </p>

              <h3 className="text-xl font-medium mb-4">Next Steps:</h3>

              <div className="space-y-4">
                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Smart Steps – Efficient Due Diligence</p>
                    <p className="text-muted-foreground mt-1">
                      Walk through the structured approach to conducting efficient due diligence using AI tools.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <p className="font-medium">SERAF-based Deep Dive</p>
                    <p className="text-muted-foreground mt-1">
                      Explore the SERAF framework for comprehensive startup analysis and evaluation.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30 flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <p className="font-medium">GPT Agents in Action</p>
                    <p className="text-muted-foreground mt-1">
                      See practical examples of GPT agents working together to solve complex problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-lg font-medium mb-3">Remember:</h3>
                <p className="text-muted-foreground">
                  The goal is not to replace human judgment but to augment it. AI tools should help students focus on
                  higher-level analysis and decision-making by handling routine tasks and providing structured insights.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Continue to Due Diligence
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
