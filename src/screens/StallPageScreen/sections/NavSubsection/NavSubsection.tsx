import { BellIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const NavSubsection = (): JSX.Element => {
  const navigationItems = [
    { label: "Browse", active: true },
    { label: "Craft Database", active: false },
    { label: "Chats", active: false },
    { label: "Sell", active: false },
    { label: "Upgrades", active: false },
    { label: "My stall", active: false },
  ];

  return (
    <nav className="w-full h-[78px] overflow-hidden relative">
      <div className="w-full h-[102px] relative -top-[18px]">
        <div className="w-full h-[102px] bg-zinc-900 rounded-[0px_0px_24px_24px] flex items-center justify-between px-12">
          <div className="flex items-center gap-24">
            <img className="w-[61px] h-[61px] object-cover" alt="Logo" />

            <div className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`[font-family:'Roboto',Helvetica] font-medium text-[21.8px] tracking-[0] leading-[14.4px] ${
                    item.active ? "text-[#58f6f2]" : "text-white"
                  } hover:text-[#58f6f2] transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <BellIcon className="w-[34px] h-[34px] text-white" />
              <Badge className="absolute -top-2 -right-2 w-[17px] h-3.5 bg-[#58f6f2] rounded-[7.5px/7px] flex items-center justify-center p-0 min-w-0">
                <span className="[font-family:'Roboto',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[14.4px]">
                  3
                </span>
              </Badge>
            </div>

            <Button className="bg-[#58f6f2] hover:bg-[#58f6f2]/90 text-black [font-family:'Roboto',Helvetica] font-medium text-[21.8px] tracking-[0] leading-[14.4px] rounded-[25px] h-10 px-6">
              + Post Trade
            </Button>

            <Avatar className="w-[55px] h-[58px]">
              <AvatarImage className="object-cover" alt="User avatar" />
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};
