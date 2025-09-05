import { UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedItemCardSubsection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[492px] h-[254px] rounded-[27.89px] overflow-hidden relative">
      <CardContent className="p-0 h-full relative">
        <div className="absolute w-full h-full bg-cover bg-center bg-[50%_50%]">
          <img
            className="absolute w-full h-[138px] bottom-0 left-0"
            alt="Mask group"
          />
        </div>

        <div className="absolute w-[243px] h-20 top-[162px] left-5">
          <div className="h-6 [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[23.2px] tracking-[0] leading-[23.2px] whitespace-nowrap">
            AWP
          </div>

          <div className="w-[235px] h-[54px] mt-[26px]">
            <div className="w-[235px] h-[47px] mt-[7px] relative">
              <div className="absolute h-6 top-0 left-[173px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[13.9px] tracking-[0] leading-[23.2px] whitespace-nowrap">
                FT
              </div>

              <div className="absolute h-6 top-[23px] left-0 [font-family:'Roboto',Helvetica] font-medium text-white text-[13.9px] tracking-[0] leading-[23.2px] whitespace-nowrap">
                1x Vox Eminor (Holo) | Katowice 2014
              </div>
            </div>

            <div className="h-6 [font-family:'Roboto',Helvetica] font-medium text-white text-[29px] tracking-[0] leading-[23.2px] whitespace-nowrap">
              Hyper Beast
            </div>
          </div>
        </div>

        <Button
          className="absolute top-[195px] left-[365px] h-[46px] px-[18.59px] py-0 bg-[#17171740] rounded-[13.94px] border-[0.58px] border-solid border-white backdrop-blur-[20.33px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20.33px)_brightness(100%)] hover:bg-[#17171760] h-auto"
          variant="ghost"
        >
          <div className="inline-flex items-center justify-center gap-[9.3px] shadow-[0px_4.65px_4.65px_#00000040] backdrop-blur-[2.32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.32px)_brightness(100%)]">
            <div className="inline-flex items-center justify-center gap-[9.3px]">
              <UserIcon className="w-[16.27px] h-[16.27px] text-white" />
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[13.9px] tracking-[0] leading-[23.2px] whitespace-nowrap">
                Contact
              </div>
            </div>
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};
