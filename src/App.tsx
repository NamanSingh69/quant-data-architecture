import { Database, TrendingUp, BarChart4, LayoutDashboard, ShieldAlert, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center relative overflow-hidden bg-surface">
      {/* Background Decorators */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl w-full z-10">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <LayoutDashboard size={16} />
            Proprietary Architecture Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Quant Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-200">
              Aggregator Platform
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A massively parallelized ingestion engine parsing structured tick data, SEC filings, and asynchronous fundamental ratios. Source algorithms are restricted from public deployment.
          </p>
        </div>

        {/* Core Architecture Matrix */}
        <div className="glass-card p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />

          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Database className="text-brand-400" /> Ingestion & Processing Nodes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-black/40 border border-slate-700/50 rounded-2xl p-6 hover:border-brand-500/30 transition-colors">
              <TrendingUp className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="font-bold text-white mb-2 text-lg">Tick Streams</h3>
              <p className="text-sm text-slate-400">High-throughput WebSocket ingestion capturing L2 order book depth and localized market sentiment.</p>
            </div>

            <div className="bg-black/40 border border-slate-700/50 rounded-2xl p-6 hover:border-brand-500/30 transition-colors">
              <BarChart4 className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="font-bold text-white mb-2 text-lg">Statistical Arbitrage</h3>
              <p className="text-sm text-slate-400">Time-series Pandas frameworks computing moving convergence/divergence on asynchronous grids.</p>
            </div>

            <div className="bg-black/40 border border-slate-700/50 rounded-2xl p-6 hover:border-brand-500/30 transition-colors relative">
              <Cpu className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="font-bold text-white mb-2 text-lg">Distributed DB</h3>
              <p className="text-sm text-slate-400">Data warehouse optimized for parallel read operations during deep-learning batch training phases.</p>
            </div>

          </div>
        </div>

        {/* Security / Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-2 border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/5 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6">
              <ShieldAlert className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Compliance & Restriction</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To adhere to proprietary intellectual property guards, raw scraping endpoints and API transformation logic are maintained within zero-trust private networks. This node acts strictly as a public validation of system architecture.
            </p>
          </div>

          <div className="bg-surface-2 border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">Technology Array</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">Data Pipeline</span>
                <span className="px-3 py-1 bg-black/40 rounded-full font-mono text-xs text-brand-300 border border-white/5">Python (AsyncIO), Pandas</span>
              </li>
              <li className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">LLM Agentic Bridge</span>
                <span className="px-3 py-1 bg-black/40 rounded-full font-mono text-xs text-brand-300 border border-white/5">Gemini 1.5 Flash</span>
              </li>
              <li className="flex justify-between items-center group">
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">Network Auth</span>
                <span className="px-3 py-1 bg-black/40 rounded-full font-mono text-xs text-brand-300 border border-white/5">Pydantic strict validation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-sm font-medium text-slate-600/80 tracking-wide uppercase">
          <p>© 2026. Private Architectural Sandbox. Read-only clearance.</p>
        </div>

      </div>
    </div>
  )
}
