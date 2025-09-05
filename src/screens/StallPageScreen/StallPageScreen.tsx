import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FeaturedItemCardSubsection } from "./sections/FeaturedItemCardSubsection/FeaturedItemCardSubsection";
import { SellerPageCardSubsection } from "./sections/SellerPageCardSubsection/SellerPageCardSubsection";
import { SellerPageCardWrapperSubsection } from "./sections/SellerPageCardWrapperSubsection/SellerPageCardWrapperSubsection";
import { StallPageSubsection } from "./sections/StallPageSubsection/StallPageSubsection";

export const StallPageScreen = (): JSX.Element => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0d0d0d] w-full max-w-7xl mx-auto relative py-6 space-y-6">
        <StallPageSubsection />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex-1 max-w-xs">
            <div className="relative bg-zinc-900 rounded-lg border border-white/20 p-3">
              <label className="absolute -top-2 left-3 bg-[#0d0d0d] px-2 text-xs text-zinc-300">
                Search
              </label>
              <input
                type="text"
                placeholder="Enter a keyword"
                className="w-full bg-transparent text-white placeholder-zinc-400 border-none outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex-1 max-w-xs">
            <div className="relative bg-zinc-900 rounded-lg border border-white/20 p-3">
              <label className="absolute -top-2 left-3 bg-[#0d0d0d] px-2 text-xs text-zinc-300">
                Type
              </label>
              <select className="w-full bg-transparent text-white border-none outline-none text-sm appearance-none">
                <option value="">Offered item</option>
              </select>
            </div>
          </div>
        </div>

        <FeaturedItemCardSubsection />

        <SellerPageCardSubsection />

        <SellerPageCardWrapperSubsection />

        <DivWrapperSubsection />

        <DivSubsection />
      </div>
    </div>
  );
};
