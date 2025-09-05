import { CopyIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const StallPageSubsection = (): JSX.Element => {
  return (
    <div className="w-full bg-zinc-900 rounded-3xl overflow-hidden border border-black/20 relative p-6 sm:p-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#0abab5] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              bahbot
            </h1>
            <Badge
              variant="outline"
              className="border-[#f5a524] text-[#f5a524] bg-transparent hover:bg-transparent px-4 py-1"
            >
              Cash-trader
            </Badge>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center gap-2 bg-[#1e1e1e] rounded-xl px-4 py-3 min-w-0">
            <span className="text-white/60 text-sm truncate">
              https://link.com/bahbot/
            </span>
            <CopyIcon className="w-5 h-5 text-white flex-shrink-0 cursor-pointer hover:text-[#58f6f2] transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};
