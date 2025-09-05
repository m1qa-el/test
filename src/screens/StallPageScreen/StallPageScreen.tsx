import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FeaturedItemCardSubsection } from "./sections/FeaturedItemCardSubsection/FeaturedItemCardSubsection";
import { NavSubsection } from "./sections/NavSubsection/NavSubsection";
import { SellerPageCardSubsection } from "./sections/SellerPageCardSubsection/SellerPageCardSubsection";
import { SellerPageCardWrapperSubsection } from "./sections/SellerPageCardWrapperSubsection/SellerPageCardWrapperSubsection";
import { StallPageSubsection } from "./sections/StallPageSubsection/StallPageSubsection";

export const StallPageScreen = (): JSX.Element => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen w-full">
      <div className="bg-[#0d0d0d] w-full max-w-[1920px] mx-auto relative">
        <NavSubsection />

        <StallPageSubsection />

        <div className="flex gap-4 px-[235px] mt-8">
          <div className="flex flex-col w-[223px] h-[45px] items-start">
            <div className="flex flex-col h-[44.65px] items-start justify-center px-[9.57px] py-[4.78px] relative self-stretch w-full bg-zinc-900 rounded-[9.57px] border-[0.8px] border-solid border-white shadow-[0px_0.8px_1.59px_#0000000d]">
              <div className="flex items-center justify-center pt-[11.16px] pb-[1.59px] px-0 relative flex-1 self-stretch w-full grow">
                <div className="flex pt-[1.59px] pb-[0.8px] px-0 relative flex-1 grow flex-col items-start">
                  <div className="flex flex-col items-start pl-0 pr-[123.26px] pt-[0.8px] pb-[1.59px] relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
                    <div className="relative w-fit mt-[-0.80px] mr-[-21.13px] [font-family:'Roboto',Helvetica] font-normal text-white text-[14.4px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Enter a keyword
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-11 h-3.5 top-[5px] left-2.5 overflow-hidden">
                <div className="absolute w-11 h-4 -top-0.5 left-0 [font-family:'Roboto',Helvetica] font-normal text-zinc-300 text-[11.2px] tracking-[0] leading-[15.9px] whitespace-nowrap">
                  Search
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start">
            <div className="flex flex-col w-[125.07px] h-[47px] items-start justify-center px-[10.07px] py-[5.04px] relative bg-zinc-900 rounded-[10.07px] border-[0.84px] border-solid border-white shadow-[0px_0.84px_1.68px_#0000000d]">
              <div className="flex w-[72.19px] items-center justify-center pt-[11.75px] pb-[1.68px] px-0 relative flex-1 grow mt-[-1.68px]">
                <div className="relative flex-1 grow h-[39.45px] mt-[-25.94px] mb-[-25.94px]" />
              </div>

              <div className="relative self-stretch w-full h-[40.29px] mt-[-0.68px] mb-[-2.68px] overflow-hidden">
                <div className="relative w-[106px] h-[19px] top-[13px] -left-px">
                  <div className="absolute w-[104px] h-[18px] top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-white text-[15.1px] tracking-[0] leading-[normal]">
                    Offered item
                  </div>

                  <img
                    className="absolute w-[15px] h-4 top-[3px] left-[91px]"
                    alt="Down arrow svgrepo"
                    src="/down-arrow-5-svgrepo-com-2.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[31px] h-3.5 top-[5px] left-2.5 overflow-hidden">
                <div className="absolute w-[23px] h-[17px] -top-0.5 left-0 [font-family:'Roboto',Helvetica] font-normal text-zinc-300 text-[10px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                  Type
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Card className="w-[246px] h-[254px] rounded-[27.89px] overflow-hidden bg-transparent border-0">
            <CardContent className="p-0 relative w-[254px] h-[291px] left-[-7px]">
              <div className="absolute w-[254px] h-[291px] top-0 left-0">
                <div className="relative w-[246px] h-[254px] left-[7px] bg-cover bg-[50%_50%]">
                  <img
                    className="absolute w-[246px] h-[138px] top-[116px] left-0"
                    alt="Mask group"
                  />
                </div>
              </div>

              <div className="absolute w-[214px] h-[52px] top-[150px] left-[17px]">
                <div className="absolute w-[185px] h-[47px] top-0 left-0">
                  <div className="absolute h-6 top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] text-[17.4px] tracking-[0] leading-[23.2px] whitespace-nowrap">
                    Butterfly Kife
                  </div>

                  <div className="absolute h-6 top-[23px] left-0 [font-family:'Roboto',Helvetica] font-medium text-white text-[25.6px] tracking-[0] leading-[23.2px] whitespace-nowrap">
                    Damascus Steel
                  </div>
                </div>

                <div className="h-6 top-7 left-[191px] text-[13.9px] leading-[23.2px] absolute [font-family:'Roboto',Helvetica] font-medium text-[#ffffff80] tracking-[0] whitespace-nowrap">
                  FT
                </div>
              </div>

              <Button className="flex w-[95px] h-[38px] px-[18.59px] py-0 absolute top-[205px] left-[17px] bg-[#17171740] rounded-[13.94px] border-[0.58px] border-solid border-white backdrop-blur-[20.33px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20.33px)_brightness(100%)] items-center justify-center gap-[9.3px] h-auto">
                <div className="inline-flex items-center justify-center gap-[9.3px] relative flex-[0_0_auto] ml-[-3.41px] mr-[-3.41px] shadow-[0px_4.65px_4.65px_#00000040] backdrop-blur-[2.32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.32px)_brightness(100%)]">
                  <div className="inline-flex items-center justify-center gap-[9.3px] relative flex-[0_0_auto]">
                    <img
                      className="relative w-[11.62px] h-[11.62px]"
                      alt="Profile svgrepo"
                      src="/profile-1335-svgrepo-com-1.svg"
                    />

                    <div className="relative w-fit mt-[-1.16px] [font-family:'Inter',Helvetica] font-normal text-white text-[11.6px] tracking-[0] leading-[23.2px] whitespace-nowrap">
                      Contact
                    </div>
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>
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
