import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SellerPageCardSubsection = (): JSX.Element => {
  const offeringItems = [
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

  const askingItems = [
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

  const ItemCard = ({ item }: { item: (typeof offeringItems)[0] }) => (
    <div className="relative w-[104px] h-[104px]">
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
        <div className="absolute w-3.5 h-[5px] top-[11px] left-[82px] text-[10.5px] leading-[25.2px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] tracking-[0] whitespace-nowrap">
          {item.condition}
        </div>
        <div className="absolute w-[77px] h-[9px] top-[82px] left-[7px] [font-family:'Roboto',Helvetica] font-medium text-white text-[14.7px] tracking-[0] leading-[25.2px] whitespace-nowrap">
          {item.skin}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#1b1b1c] rounded-[21.01px] overflow-hidden relative p-3">
      <img
        className="absolute w-[30px] h-[34px] top-[163px] left-[360px]"
        alt="Swap svgrepo com"
        src="/swap-svgrepo-com--3--1.svg"
      />

      <div className="flex gap-4 justify-between">
        <Card className="w-[342px] h-[251px] bg-[#1e1e1e] rounded-[16.8px] border-none">
          <CardContent className="p-3">
            <div className="flex justify-between items-center mb-4">
              <div className="[font-family:'Roboto',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[25.2px]">
                OFFERING
              </div>
              <div className="[font-family:'Roboto_Mono',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[25.2px]">
                $271.68
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {offeringItems.map((item, index) => (
                <ItemCard key={`offering-${index}`} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="w-[342px] h-[251px] bg-[#1e1e1e] rounded-[16.8px] border-none">
          <CardContent className="p-3">
            <div className="flex justify-between items-center mb-4">
              <div className="[font-family:'Roboto',Helvetica] font-medium text-white text-[16.8px] tracking-[0] leading-[25.2px]">
                ASKING
              </div>
              <div className="[font-family:'Roboto_Mono',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[25.2px]">
                $271.68
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {askingItems.map((item, index) => (
                <ItemCard key={`asking-${index}`} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Button
        variant="outline"
        className="absolute top-3.5 right-[127px] h-auto flex items-center gap-2 px-[38.86px] py-[6.3px] rounded-[8.4px] border-[1.05px] border-[#d27282] bg-transparent hover:bg-[#d27282]/10"
      >
        <img
          className="w-[19px] h-[19px]"
          alt="Message square lines"
          src="/message-square-lines-svgrepo-com-1.svg"
        />
        <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-[12.6px] tracking-[0] leading-[25.2px]">
          Chat
        </span>
      </Button>

      <div className="absolute top-[18px] left-5 [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[12.6px] tracking-[0] leading-[15.8px]">
        Posted 2 days ago
      </div>
    </section>
  );
};
