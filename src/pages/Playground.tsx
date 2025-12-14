import { useState } from "react";
import { 
  Play, 
  Save, 
  History, 
  Settings, 
  Variable, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  User,
  Circle,
  MoreHorizontal,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const recentPrompts = [
  { id: 1, title: "Customer Support Bot", status: "good" },
  { id: 2, title: "SQL Query Generator", status: "review" },
  { id: 3, title: "Code Reviewer", status: "good" },
  { id: 4, title: "Email Composer", status: "good" },
  { id: 5, title: "Data Analyzer", status: "review" },
];

const variables = [
  { name: "user_name", value: "John Doe" },
  { name: "input_data", value: "" },
];

const Playground = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [promptTitle, setPromptTitle] = useState("Untitled Prompt");
  const [promptContent, setPromptContent] = useState("");
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState("2048");
  const [selectedModel, setSelectedModel] = useState("gpt-4");

  // Calculate line numbers based on content
  const lineCount = Math.max(promptContent.split("\n").length, 20);
  const lines = Array.from({ length: lineCount }, (_, i) => i + 1);

  // Calculate token count (rough estimate: ~4 chars per token)
  const tokenCount = Math.ceil(promptContent.length / 4);

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Left Sidebar */}
      <aside
        className={`${
          sidebarExpanded ? "w-64" : "w-16"
        } bg-zinc-900/50 border-r border-white/5 flex flex-col transition-all duration-300 ease-in-out`}
      >
        {/* Brand */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            {sidebarExpanded && (
              <span className="font-semibold text-white text-sm">PromptPulse</span>
            )}
          </div>
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="p-1 hover:bg-white/5 rounded transition-colors"
          >
            {sidebarExpanded ? (
              <ChevronLeft className="w-4 h-4 text-zinc-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            )}
          </button>
        </div>

        {/* Recent Prompts */}
        <div className="flex-1 overflow-y-auto py-4">
          {sidebarExpanded && (
            <div className="px-4 mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Recent Prompts
              </span>
              <button className="p-1 hover:bg-white/5 rounded transition-colors">
                <Plus className="w-3 h-3 text-zinc-500" />
              </button>
            </div>
          )}
          <nav className="space-y-1 px-2">
            {recentPrompts.map((prompt) => (
              <button
                key={prompt.id}
                className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors group ${
                  sidebarExpanded ? "justify-start" : "justify-center"
                }`}
              >
                <Circle
                  className={`w-2 h-2 flex-shrink-0 ${
                    prompt.status === "good"
                      ? "text-emerald-400 fill-emerald-400"
                      : "text-amber-400 fill-amber-400"
                  }`}
                />
                {sidebarExpanded && (
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 truncate transition-colors">
                    {prompt.title}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* User Avatar */}
        <div className="p-4 border-t border-white/5">
          <button
            className={`flex items-center gap-3 w-full hover:bg-white/5 rounded-lg p-2 transition-colors ${
              sidebarExpanded ? "justify-start" : "justify-center"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center">
              <User className="w-4 h-4 text-zinc-300" />
            </div>
            {sidebarExpanded && (
              <div className="flex-1 text-left">
                <p className="text-sm text-zinc-300">Engineer</p>
                <p className="text-xs text-zinc-500">Free Plan</p>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Center Panel - Editor */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Editor Header */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={promptTitle}
              onChange={(e) => setPromptTitle(e.target.value)}
              className="bg-transparent text-lg font-medium text-white border-none outline-none focus:ring-0 placeholder:text-zinc-600"
              placeholder="Untitled Prompt"
            />
            <span className="px-2 py-0.5 text-xs font-mono bg-zinc-800 text-zinc-400 rounded">
              v1.0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-white hover:bg-white/5"
            >
              <History className="w-4 h-4 mr-2" />
              History
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-white hover:bg-white/5"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </header>

        {/* Editor Body */}
        <div className="flex-1 flex flex-col p-6 overflow-hidden">
          <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 flex overflow-hidden">
            {/* Line Numbers */}
            <div className="w-12 bg-zinc-900/80 border-r border-white/5 py-4 select-none flex-shrink-0">
              <div className="flex flex-col items-end pr-3">
                {lines.map((line) => (
                  <span
                    key={line}
                    className="text-xs font-mono text-zinc-600 leading-6"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>

            {/* Text Area */}
            <div className="flex-1 overflow-auto">
              <textarea
                value={promptContent}
                onChange={(e) => setPromptContent(e.target.value)}
                className="w-full h-full min-h-full bg-transparent text-zinc-300 font-mono text-base leading-6 p-4 resize-none outline-none placeholder:text-zinc-600 focus:ring-0"
                placeholder={`You are a helpful AI assistant. Your goal is to...

# Context
- You will receive user queries about [topic]
- Always respond in a professional tone
- Use examples when explaining complex concepts

# Guidelines
1. Start with a clear, direct answer
2. Provide supporting details
3. Offer follow-up suggestions

# Variables
- User: {{user_name}}
- Input: {{input_data}}`}
                spellCheck={false}
              />
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500">
                {tokenCount} tokens
              </span>
              <span className="text-sm font-mono text-zinc-600">•</span>
              <span className="text-sm font-mono text-zinc-500">
                {promptContent.length} chars
              </span>
            </div>
            <Button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2" />
              Analyze Prompt
            </Button>
          </div>
        </div>
      </main>

      {/* Right Panel - Configuration */}
      <aside className="w-80 bg-zinc-900/30 border-l border-white/5 flex flex-col">
        {/* Panel Header */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-zinc-500" />
            <span className="text-sm font-medium text-zinc-300">Configuration</span>
          </div>
          <button className="p-1 hover:bg-white/5 rounded transition-colors">
            <MoreHorizontal className="w-4 h-4 text-zinc-500" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Model Settings */}
          <section>
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Model Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Model</label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="w-full bg-zinc-900/50 border-white/10 text-zinc-300 focus:ring-purple-500/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="claude-3">Claude 3 Opus</SelectItem>
                    <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                    <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-zinc-400">Temperature</label>
                  <span className="text-xs font-mono text-zinc-500">
                    {temperature[0].toFixed(2)}
                  </span>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  max={2}
                  step={0.01}
                  className="[&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400 mb-2 block">Max Tokens</label>
                <Input
                  type="number"
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(e.target.value)}
                  className="bg-zinc-900/50 border-white/10 text-zinc-300 font-mono focus:ring-purple-500/20"
                />
              </div>
            </div>
          </section>

          {/* Variables */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                <Variable className="w-3 h-3" />
                Variables
              </h3>
              <button className="p-1 hover:bg-white/5 rounded transition-colors">
                <Plus className="w-3 h-3 text-zinc-500" />
              </button>
            </div>
            <div className="space-y-3">
              {variables.map((variable, index) => (
                <div key={index} className="space-y-1">
                  <label className="text-xs font-mono text-purple-400">
                    {`{{${variable.name}}}`}
                  </label>
                  <Input
                    type="text"
                    placeholder={`Enter ${variable.name}...`}
                    defaultValue={variable.value}
                    className="bg-zinc-900/50 border-white/10 text-zinc-300 text-sm focus:ring-purple-500/20"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Results Placeholder */}
          <section>
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Analysis Results
            </h3>
            <div className="bg-zinc-900/50 rounded-xl border border-dashed border-white/10 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-zinc-800 mx-auto mb-3 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-zinc-600" />
              </div>
              <p className="text-sm text-zinc-500">
                Run analysis to see your prompt score and suggestions
              </p>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
};

export default Playground;
