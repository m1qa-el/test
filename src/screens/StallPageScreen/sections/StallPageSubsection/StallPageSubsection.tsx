import { CopyIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const StallPageSubsection = (): JSX.Element => {
  return (
    <div className="w-full h-[181px] bg-zinc-900 rounded-[21.43px] overflow-hidden border-[0.89px] border-solid border-black relative">
      <div className="absolute w-[356px] h-[321px] top-[-174px] left-[-189px]">
        <div className="w-80 h-80 top-0 left-0 bg-[#0abab5] rounded-[159.84px] blur-[66.97px] absolute bg-blend-screen" />

        <img
          className="absolute w-[135px] h-[137px] top-[184px] left-[221px]"
          alt="Group"
        />
      </div>

      <Badge
        variant="outline"
        className="absolute top-[109px] left-[175px] w-[136px] h-9 rounded-[5.36px] border-[0.89px] border-[#f5a524] bg-transparent hover:bg-transparent"
      >
        <div className="[font-family:'Roboto',Helvetica] font-medium text-[#f5a524] text-[16.1px] tracking-[0.80px] leading-[17.9px]">
          Cash-trader
        </div>
      </Badge>

      <img
        className="absolute w-[83px] h-9 top-[73px] left-[1139px]"
        alt="Group"
      />

      <div className="absolute h-[18px] top-[65px] left-[175px] [font-family:'Roboto',Helvetica] font-bold text-white text-[40.2px] text-center tracking-[0] leading-[17.9px] whitespace-nowrap">
        bahbot
      </div>

      <div className="absolute h-[26px] top-[123px] left-[1325px] [font-family:'Archivo',Helvetica] font-bold text-white text-[32.1px] tracking-[0] leading-[25.2px] whitespace-nowrap">
        {""}
      </div>

      <div className="flex w-56 h-11 items-center justify-center gap-[8.93px] px-[9.82px] py-[8.93px] absolute top-[69px] left-[1245px] bg-[#1e1e1e] rounded-[10.72px] overflow-hidden">
        <div className="relative w-[201.8px] h-[19.64px]">
          <div className="relative w-[200px] h-5 -top-px">
            <div className="absolute w-[184px] h-5 top-0 left-0 [font-family:'Archivo',Helvetica] font-medium text-[#ffffff80] text-[16.1px] tracking-[0] leading-[25.2px] whitespace-nowrap">
              https://link.com/bahbot/
            </div>

            <CopyIcon className="absolute w-[21px] h-[19px] top-px left-[179px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
