import { ArrowLeftRightIcon, MessageSquareIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivSubsection = (): JSX.Element => {
  const offeringItems = [
    {
      weapon: "M4A1-S",
      condition: "FT",
      skin: "Decimator",
      borderColor: "border-[#ff4cf3]",
      glowColor: "bg-[#ff4cf3]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "USP-S",
      condition: "FT",
      skin: "Kill Confirmed",
      borderColor: "border-[#f31260]",
      glowColor: "bg-[#f31260]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "M4A4",
      condition: "MW",
      skin: "Griffin",
      borderColor: "border-[#7b00ff]",
      glowColor: "bg-[#7b00ff]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "M4A1-S",
      condition: "FT",
      skin: "Decimator",
      borderColor: "border-[#ff4cf3]",
      glowColor: "bg-[#ff4cf3]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "USP-S",
      condition: "FT",
      skin: "Kill Confirmed",
      borderColor: "border-[#f31260]",
      glowColor: "bg-[#f31260]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "M4A4",
      condition: "MW",
      skin: "Griffin",
      borderColor: "border-[#7b00ff]",
      glowColor: "bg-[#7b00ff]",
      imageAlt: "Rectangle",
    },
  ];

  const askingItems = [
    {
      weapon: "M4A1-S",
      condition: "FT",
      skin: "Decimator",
      borderColor: "border-[#ff4cf3]",
      glowColor: "bg-[#ff4cf3]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "USP-S",
      condition: "FT",
      skin: "Kill Confirmed",
      borderColor: "border-[#f31260]",
      glowColor: "bg-[#f31260]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "M4A4",
      condition: "MW",
      skin: "Griffin",
      borderColor: "border-[#7b00ff]",
      glowColor: "bg-[#7b00ff]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "M4A1-S",
      condition: "FT",
      skin: "Decimator",
      borderColor: "border-[#ff4cf3]",
      glowColor: "bg-[#ff4cf3]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "USP-S",
      condition: "FT",
      skin: "Kill Confirmed",
      borderColor: "border-[#f31260]",
      glowColor: "bg-[#f31260]",
      imageAlt: "Rectangle",
    },
    {
      weapon: "M4A4",
      condition: "MW",
      skin: "Griffin",
      borderColor: "border-[#7b00ff]",
      glowColor: "bg-[#7b00ff]",
      imageAlt: "Rectangle",
    },
  ];

  const renderItemCard = (item: any, index: number) => (
    <div key={index} className="w-[104px] h-[104px]">
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
              alt={item.imageAlt}
            />
          </div>
        </div>
        <div className="absolute w-14 h-[9px] top-[68px] left-[7px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[10.5px] tracking-[0] leading-[25.2px] whitespace-nowrap">
          {item.weapon}
        </div>
        <div className="w-3.5 h-[5px] top-[11px] left-[82px] text-[10.5px] leading-[25.2px] absolute [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] tracking-[0] whitespace-nowrap">
          {item.condition}
        </div>
        <div className="absolute w-[77px] h-[9px] top-[82px] left-[7px] [font-family:'Roboto',Helvetica] font-medium text-white text-[14.7px] tracking-[0] leading-[25.2px] whitespace-nowrap">
          {item.skin}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full h-[310px] bg-[#1b1b1c] rounded-[21.01px] overflow-hidden relative">
      <ArrowLeftRightIcon className="absolute w-[30px] h-[17px] top-[163px] left-[360px] text-white" />

      <Card className="absolute w-[342px] h-[251px] top-[46px] left-3 bg-[#1e1e1e] rounded-[16.8px] overflow-hidden border-0">
        <CardContent className="p-0 h-full">
          <div className="absolute w-[81px] h-4 top-2 left-[11px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[25.2px] whitespace-nowrap">
            OFFERING
          </div>
          <div className="absolute w-[55px] h-[15px] top-[9px] left-[276px] [font-family:'Roboto_Mono',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[25.2px] whitespace-nowrap">
            $271.68
          </div>

          <div className="grid grid-cols-3 gap-[3px] absolute top-[29px] left-[11px]">
            {offeringItems
              .slice(0, 3)
              .map((item, index) => renderItemCard(item, index))}
          </div>

          <div className="grid grid-cols-3 gap-[3px] absolute top-[138px] left-[11px]">
            {offeringItems
              .slice(3, 6)
              .map((item, index) => renderItemCard(item, index + 3))}
          </div>
        </CardContent>
      </Card>

      <Card className="absolute w-[342px] h-[251px] top-[47px] left-[397px] bg-[#1e1e1e] rounded-[16.8px] overflow-hidden border-0">
        <CardContent className="p-0 h-full">
          <div className="absolute w-[81px] h-4 top-2 left-[11px] [font-family:'Roboto',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[25.2px] whitespace-nowrap">
            ASKING
          </div>
          <div className="absolute w-[55px] h-[15px] top-[9px] left-[276px] [font-family:'Roboto_Mono',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[25.2px] whitespace-nowrap">
            $271.68
          </div>

          <div className="grid grid-cols-3 gap-[3px] absolute top-[29px] left-[11px]">
            {askingItems
              .slice(0, 3)
              .map((item, index) => renderItemCard(item, index))}
          </div>

          <div className="grid grid-cols-3 gap-[3px] absolute top-[138px] left-[11px]">
            {askingItems
              .slice(3, 6)
              .map((item, index) => renderItemCard(item, index + 3))}
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        className="flex items-center justify-center gap-[10.5px] px-[38.86px] py-[6.3px] absolute top-3.5 left-[624px] h-7 rounded-[8.4px] border-[1.05px] border-[#d27282] bg-transparent hover:bg-[#d27282]/10"
      >
        <MessageSquareIcon className="w-[19px] h-[19px]" />
        <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-[12.6px] tracking-[0] leading-[25.2px]">
          Chat
        </span>
      </Button>

      <div className="absolute w-[130px] h-[15px] top-[18px] left-5 [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[15.8px] whitespace-nowrap">
        Posted 2 days ago
      </div>
    </section>
  );
};
