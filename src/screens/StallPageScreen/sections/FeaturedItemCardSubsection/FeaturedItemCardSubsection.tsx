import { UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedItemCardSubsection = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-md sm:max-w-lg h-64 sm:h-72 rounded-3xl overflow-hidden relative bg-gradient-to-br from-zinc-800 to-zinc-900">
        <CardContent className="p-0 h-full relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-white/60 text-lg sm:text-xl font-medium mb-1">
                  AWP
                </div>
                <div className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  Hyper Beast
                </div>
                <div className="text-white/60 text-sm">
                  1x Vox Eminor (Holo) | Katowice 2014
                </div>
              </div>
              <div className="text-white/60 text-sm font-medium">
                FT
              </div>
            </div>
            
            <Button
              className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white rounded-xl px-6 py-2 transition-all duration-200"
              variant="ghost"
            >
              <UserIcon className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
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
