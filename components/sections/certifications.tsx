import React from "react";
import { certifications } from "@/app/constants";
import { ExternalLink, Award, ShieldCheck, Calendar, User } from "lucide-react";

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      {certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          style={{
            background: "var(--card)",
            border: "1px solid rgba(234, 179, 8, 0.2)", /* Subtler Gold border */
          }}
        >
          {/* Animated Gold Flare Border (Inside Card) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             <div 
               className="absolute inset-px rounded-2xl border-[1.5px] border-yellow-400/50"
               style={{
                 boxShadow: '0 0 15px rgba(234, 179, 8, 0.2)'
               }}
             />
             {/* Diagonal Shimmer Effect */}
             <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -skew-x-12 bg-linear-to-r from-transparent via-yellow-400/10 to-transparent"
              />
          </div>

          <div className="relative z-10 flex flex-col h-full gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                 {/* FIFA Rating Badge Style */}
                 <div className="flex flex-col items-center leading-none text-yellow-400 font-mono pr-3 border-r border-white/10">
                    <span className="text-3xl font-black italic tracking-tighter">99</span>
                    <span className="text-[10px] font-bold uppercase opacity-80">PRO</span>
                 </div>
                 <div>
                    <h4 className="text-base font-bold uppercase italic tracking-tight group-hover:text-yellow-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-0.5">
                      {cert.issuer} · {cert.date}
                    </p>
                 </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity text-yellow-400" />
            </div>

            {/* Stats row like the bottom of a FUT card but minimal */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-yellow-400/5 border border-yellow-400/10">
                <span className="text-[10px] font-bold opacity-40 uppercase">LEN</span>
                <span className="text-xs font-mono font-bold text-yellow-400">{cert.length || "77h"}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-yellow-400/5 border border-yellow-400/10">
                <span className="text-[10px] font-bold text-white/40 uppercase">CERT</span>
                <span className="text-xs font-mono font-bold text-yellow-400">NODE</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-yellow-400/5 border border-yellow-400/10">
                <span className="text-[10px] font-bold text-white/40 uppercase">REF</span>
                <span className="text-xs font-mono font-bold text-yellow-400">{cert.ref || "004"}</span>
              </div>
              
              <div className="ml-auto p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-medium opacity-60">
              <User className="w-3.5 h-3.5" />
              <span>{cert.instructor}</span>
            </div>
          </div>

          {/* Decorative Background Icon */}
          <Award className="absolute -right-4 -bottom-4 w-24 h-24 text-yellow-400 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-300 rotate-12" />
        </a>
      ))}
    </div>
  );
}
