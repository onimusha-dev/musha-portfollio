import React from "react";
import { certifications } from "@/app/constants";
import { ExternalLink, Award, Calendar, User } from "lucide-react";

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
          }}
        >
          {/* Decorative background award icon */}
          <Award className="absolute -right-4 -bottom-4 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 rotate-12" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-4">
              {cert.title}
            </h4>

            <div className="mt-auto space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium opacity-60">
                <User className="w-4 h-4" />
                <span>{cert.instructor}</span>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs font-mono opacity-50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>
                <span className="text-[10px] font-mono opacity-30 uppercase tracking-widest">
                  {cert.issuer}
                </span>
              </div>
            </div>
          </div>
          
          {/* Subtle hover border glow */}
          <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/10 rounded-2xl transition-all duration-300 pointer-events-none" />
        </a>
      ))}
    </div>
  );
}
