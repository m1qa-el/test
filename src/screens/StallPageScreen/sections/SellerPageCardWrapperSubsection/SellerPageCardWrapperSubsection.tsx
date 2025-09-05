import { ArrowLeftRightIcon, MessageSquareIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const weaponData = [
  {
    name: "M4A1-S",
    condition: "FT",
    skin: "Decimator",
    borderColor: "border-[#ff4cf3]",
    glowColor: "bg-[#ff4cf3]",
  },
  {
    name: "USP-S",
    condition: "FT",
    skin: "Kill Confirmed",
    borderColor: "border-[#f31260]",
    glowColor: "bg-[#f31260]",
  },
  {
    name: "M4A4",
    condition: "MW",
    skin: "Griffin",
    borderColor: "border-[#7b00ff]",
    glowColor: "bg-[#7b00ff]",
  },
  {
    name: "M4A1-S",
    condition: "FT",
    skin: "Decimator",
    borderColor: "border-[#ff4cf3]",
    glowColor: "bg-[#ff4cf3]",
  },
  {
    name: "USP-S",
    condition: "FT",
    skin: "Kill Confirmed",
    borderColor: "border-[#f31260]",
    glowColor: "bg-[#f31260]",
  },
  {
    name: "M4A4",
    condition: "MW",
    skin: "Griffin",
    borderColor: "border-[#7b00ff]",
    glowColor: "bg-[#7b00ff]",
  },
];

const WeaponCard = ({ weapon }: { weapon: (typeof weaponData)[0] }) => (
  <div className="aspect-square">
    <div className="relative h-full rounded-xl">
      <div
        className={`absolute inset-0 bg-zinc-900 rounded-xl overflow-hidden border-l-2 ${weapon.borderColor}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`absolute w-12 h-12 ${weapon.glowColor} rounded-full blur-xl opacity-50`}
          />
          <div className="w-16 h-10 bg-white/10 rounded"></div>
        </div>
      </div>
      <div className="absolute bottom-6 left-2 text-white/60 text-xs font-medium">
        {weapon.name}
      </div>
      <div className="absolute top-2 right-2 text-white/60 text-xs font-medium">
        {weapon.condition}
      </div>
      <div className="absolute bottom-2 left-2 text-white text-sm font-medium truncate max-w-[calc(100%-1rem)]">
        {weapon.skin}
      </div>
    </div>
  </div>
);

export const SellerPageCardWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#1b1b1c] rounded-3xl overflow-hidden p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1">
          <Card className="bg-[#1e1e1e] rounded-2xl border-0 h-full">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium text-lg">OFFERING</h3>
                <span className="text-white/60 font-mono text-sm">$271.68</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {weaponData.map((weapon, index) => (
                  <WeaponCard key={`offering-${index}`} weapon={weapon} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex items-center justify-center lg:px-4">
          <ArrowLeftRightIcon className="w-8 h-8 text-white transform rotate-90 lg:rotate-0" />
        </div>
        
        <div className="flex-1">
          <Card className="bg-[#1e1e1e] rounded-2xl border-0 h-full">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium text-lg">ASKING</h3>
                <span className="text-white/60 font-mono text-sm">$271.68</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {weaponData.map((weapon, index) => (
                  <WeaponCard key={`asking-${index}`} weapon={weapon} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
        <span className="text-white/60 text-sm">Posted 2 days ago</span>
        <Button
          variant="outline"
          className="border-[#d27282] text-white hover:bg-[#d27282]/10 rounded-xl px-6 py-2"
        >
          <MessageSquareIcon className="w-4 h-4 mr-2" />
          Chat
        </Button>
      </div>
    </section>
  );
};
