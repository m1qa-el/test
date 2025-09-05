import { ArrowLeftRightIcon, MessageSquareIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = (): JSX.Element => {
  const weaponItems = [
    {
      weapon: "M4A1-S",
      condition: "FT",
      skin: "Decimator",
      borderColor: "border-[#ff4cf3]",
      glowColor: "bg-[#ff4cf3]",
    },
    {
      weapon: "USP-S",
      condition: "FT",
      skin: "Kill Confirmed",
      borderColor: "border-[#f31260]",
      glowColor: "bg-[#f31260]",
    },
    {
      weapon: "M4A4",
      condition: "MW",
      skin: "Griffin",
      borderColor: "border-[#7b00ff]",
      glowColor: "bg-[#7b00ff]",
    },
    {
      weapon: "M4A1-S",
      condition: "FT",
      skin: "Decimator",
      borderColor: "border-[#ff4cf3]",
      glowColor: "bg-[#ff4cf3]",
    },
    {
      weapon: "USP-S",
      condition: "FT",
      skin: "Kill Confirmed",
      borderColor: "border-[#f31260]",
      glowColor: "bg-[#f31260]",
    },
    {
      weapon: "M4A4",
      condition: "MW",
      skin: "Griffin",
      borderColor: "border-[#7b00ff]",
      glowColor: "bg-[#7b00ff]",
    },
  ];

  const renderWeaponCard = (item: (typeof weaponItems)[0], index: number) => (
    <div key={index} className="relative w-[104px] h-[104px]">
      <div className="relative h-[104px] rounded-[12.6px]">
        <div
          className={`absolute w-[104px] h-[104px] top-0 left-0 bg-zinc-900 rounded-[12.6px] overflow-hidden border-l-[0.53px] border-solid ${item.borderColor}`}
        >
          <div className="relative w-[129px] h-[91px] -top-7 left-[-27px]">
            <div
              className={`absolute w-14 h-14 top-0 left-0 ${item.glowColor} rounded-[27.83px] blur-[26.26px] bg-blend-screen`}
            />
            <img
              className="absolute w-24 h-[60px] top-[31px] left-8 object-cover"
              alt="Rectangle"
            />
          </div>
        </div>
        <div className="absolute w-14 h-[9px] top-[68px] left-[7px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[10.5px] tracking-[0] leading-[25.2px] whitespace-nowrap">
          {item.weapon}
        </div>
        <div className="absolute top-[11px] left-[82px] text-[10.5px] leading-[25.2px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] tracking-[0] whitespace-nowrap">
          {item.condition}
        </div>
        <div className="absolute w-[77px] h-[9px] top-[82px] left-[7px] [font-family:'Roboto',Helvetica] font-medium text-white text-[14.7px] tracking-[0] leading-[25.2px] whitespace-nowrap">
          {item.skin}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-[#1b1b1c] rounded-[21.01px] overflow-hidden p-3">
      <div className="absolute top-[18px] left-5 [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[15.8px] whitespace-nowrap">
        Posted 2 days ago
      </div>

      <Button
        variant="outline"
        className="absolute top-3.5 right-[11px] h-7 px-[38.86px] py-[6.3px] rounded-[8.4px] border-[1.05px] border-[#d27282] bg-transparent text-white hover:bg-[#d27282]/10"
      >
        <MessageSquareIcon className="w-[19px] h-[19px] mr-2" />
        <span className="[font-family:'Roboto',Helvetica] font-medium text-[12.6px]">
          Chat
        </span>
      </Button>

      <div className="flex items-center justify-center gap-4 mt-12">
        <Card className="w-[342px] h-[251px] bg-[#1e1e1e] border-0 rounded-[16.8px] overflow-hidden">
          <CardContent className="p-0 relative h-full">
            <div className="absolute w-[81px] h-4 top-2 left-[11px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[25.2px] whitespace-nowrap">
              OFFERING
            </div>
            <div className="absolute w-[55px] h-[15px] top-[9px] left-[276px] [font-family:'Roboto_Mono',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[25.2px] whitespace-nowrap">
              $271.68
            </div>

            <div className="grid grid-cols-3 gap-[4px] absolute top-[29px] left-[11px]">
              {weaponItems.map((item, index) => renderWeaponCard(item, index))}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center">
          <ArrowLeftRightIcon className="w-[30px] h-[34px] text-white" />
        </div>

        <Card className="w-[342px] h-[251px] bg-[#1e1e1e] border-0 rounded-[16.8px] overflow-hidden">
          <CardContent className="p-0 relative h-full">
            <div className="absolute w-[81px] h-4 top-2 left-[11px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[25.2px] whitespace-nowrap">
              ASKING
            </div>
            <div className="absolute w-[55px] h-[15px] top-[9px] left-[276px] [font-family:'Roboto_Mono',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[25.2px] whitespace-nowrap">
              $271.68
            </div>

            <div className="grid grid-cols-3 gap-[4px] absolute top-[29px] left-[11px]">
              {weaponItems.map((item, index) => renderWeaponCard(item, index))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
