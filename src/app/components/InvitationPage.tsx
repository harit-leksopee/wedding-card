import { useState, useEffect, useCallback, type ReactNode } from "react";
import { toast } from "sonner";
import Lightbox from "./Lightbox";
import svgPaths from "../../imports/MobilePage/svg-xfleuz9cvx";
import desktopSvgPaths from "../../imports/DesktopPage/svg-ryrx6siuez";
import { imgAt022 } from "../../imports/MobilePage/svg-jfm2j";

import imgImg from "../../imports/MobilePage/9b351313d24a735f03677ccce4dce29b19e4f512.png";
import imgPhotos1 from "../../imports/MobilePage/536c5e044519285c989c869972815d14ef932786.png";
import imgPhotos2 from "../../imports/MobilePage/9825d66445617f673b05f36ecdd273b1f8474859.png";
import imgPhotos3 from "../../imports/MobilePage/46e28bd0fc575d87010ba438a8cd285d1428d6bc.png";
import imgPhotos4 from "../../imports/MobilePage/546b3c8b56b512fddb36ca4196809f25722717ef.png";
import imgPhotos5 from "../../imports/MobilePage/8fe795f974f55dbe3ef83a6c7ffb4cd80791386a.png";
import imgPhotos6 from "../../imports/MobilePage/5a33590d857438eeff6bab58f6c656b7984536ac.png";
import imgPhotos7 from "../../imports/MobilePage/34fa411a91806c5ad59a2450c3461680c2587ad3.png";
import imgPhotos8 from "../../imports/MobilePage/713a6cd2558eb7440005087271d5bb3fa348284a.png";
import imgPhotos9 from "../../imports/MobilePage/2cb907762f56b8616d7c7cb342160589ac9278b7.png";
import imgPhotos10 from "../../imports/MobilePage/0f25d8ecd5dfc5a732be7aa886396bb5782010fe.png";
import imgPhotos11 from "../../imports/MobilePage/089addec0e9a98e9887d993ef35bb53803506e8e.png";
import imgPhotos12 from "../../imports/MobilePage/f1f8a7dea530e1075c476bc3c8c19d26e473075c.png";
import imgAt23 from "../../imports/MobilePage/ebf22c6c9b9fd7ce6c11c3b6ffd1776c301eeab8.png";
import imgPreWedding from "../../imports/MobilePage/3aeafa9c8a8c9534e0652dcf2d06857631a89372.png";
import imgDesktopBg from "../../imports/DesktopPage/54901fe9b1ccc9c5b06fbd588d4aedf1e6466a7e.png";

const GALLERY_IMAGES = [
  imgPhotos1, imgPhotos2, imgPhotos3, imgPhotos4,
  imgPhotos5, imgPhotos6, imgPhotos7, imgPhotos8,
  imgPhotos9, imgPhotos10, imgPhotos11, imgPhotos12,
];

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbydkXQdGHDj4o12AjVRJRlF8sj_hATQcdCr2ZvvpXAtM-Jcsw-163oHB4VfX0TmiJZePA/exec";

const WEDDING_DATE = new Date("2026-11-14T18:30:00+07:00");

type GuestOf = "groom" | "bride" | null;
type WillAttend = "yes" | "no" | null;
type SubmitState = "idle" | "loading" | "success" | "error";

interface Countdown { days: number; hours: number; minutes: number; seconds: number; }

function useCountdown(): Countdown {
  const calc = () => {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [cd, setCd] = useState<Countdown>(calc);
  useEffect(() => {
    const id = setInterval(() => setCd(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return cd;
}

// ─── SHARED DECORATIVE COMPONENTS ───────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="content-stretch flex items-center justify-center shrink-0 w-full">
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[0.98px] shrink-0 to-[rgba(201,169,110,0.2)] w-[95.996px]" />
      <div className="content-stretch flex gap-[6px] h-[6px] items-center px-[16px] shrink-0 w-[57.97px]">
        <div className="bg-[rgba(201,169,110,0.35)] rounded-[45760400px] shrink-0 size-[3.985px]" />
        <div className="flex items-center justify-center shrink-0 size-[6px]">
          <div className="flex-none rotate-45">
            <div className="bg-[rgba(201,169,110,0.5)] size-[6px]" />
          </div>
        </div>
        <div className="bg-[rgba(201,169,110,0.35)] rounded-[45760400px] shrink-0 size-[3.985px]" />
      </div>
      <div className="bg-gradient-to-l from-[rgba(0,0,0,0)] h-[0.98px] shrink-0 to-[rgba(201,169,110,0.2)] w-[95.996px]" />
    </div>
  );
}

function BurgundyDivider() {
  return (
    <div className="content-stretch flex items-center justify-center shrink-0 w-full">
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[0.98px] shrink-0 to-[rgba(62,0,0,0.2)] w-[95.996px]" />
      <div className="content-stretch flex gap-[6px] h-[6px] items-center px-[16px] shrink-0 w-[57.97px]">
        <div className="bg-[rgba(62,0,0,0.35)] rounded-[45760400px] shrink-0 size-[3.985px]" />
        <div className="flex items-center justify-center shrink-0 size-[6px]">
          <div className="flex-none rotate-45">
            <div className="bg-[rgba(62,0,0,0.5)] size-[6px]" />
          </div>
        </div>
        <div className="bg-[rgba(62,0,0,0.35)] rounded-[45760400px] shrink-0 size-[3.985px]" />
      </div>
      <div className="bg-gradient-to-l from-[rgba(0,0,0,0)] h-[0.98px] shrink-0 to-[rgba(62,0,0,0.2)] w-[95.996px]" />
    </div>
  );
}

function ColonSep() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[121px] items-center justify-center pb-[16px] shrink-0 w-[6px]">
      <div className="bg-[#c9a96e] h-[5.988px] rounded-[45760400px] shadow-[0px_0px_6px_0px_rgba(201,169,110,0.8)] shrink-0 w-full" />
      <div className="bg-[#c9a96e] h-[5.988px] rounded-[45760400px] shadow-[0px_0px_6px_0px_rgba(201,169,110,0.8)] shrink-0 w-full" />
    </div>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-w-px">
      <div className="content-stretch flex flex-col h-[100px] items-center justify-center p-[1.364px] shrink-0 w-full bg-[rgba(255,255,255,0.1)] border-[1.364px] border-[rgba(201,169,110,0.25)] border-solid rounded-[14px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4),inset_0px_1px_0px_0px_rgba(201,169,110,0.1)]">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic shrink-0 text-[#c9a96e] text-[28.8px] text-center whitespace-nowrap">{padded}</p>
      </div>
      <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[8px] text-[rgba(201,169,110,0.7)] text-center tracking-[1.76px] uppercase w-[63.99px]">{label}</p>
    </div>
  );
}

// ─── SECTION: COUNTDOWN ──────────────────────────────────────────────────────

function SecsionCountdown({ cd }: { cd: Countdown }) {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center justify-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[#c9a96e] text-[12px] w-full">Counting down to</p>
        <p className="font-cinzel-dec not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-full">Our Wedding Day</p>
      </div>
      <div className="content-stretch flex gap-[10px] items-center justify-center shrink-0 w-full">
        <CountdownBox value={cd.days} label="Days" />
        <ColonSep />
        <CountdownBox value={cd.hours} label="Hours" />
        <ColonSep />
        <CountdownBox value={cd.minutes} label="Minutes" />
        <ColonSep />
        <CountdownBox value={cd.seconds} label="Seconds" />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Cinzel:Regular',sans-serif] font-normal gap-[5px] items-center justify-center leading-[normal] shrink-0 text-center text-white tracking-[1.76px] uppercase w-full">
        <p className="shrink-0 text-[14px] w-full">at Pullman Bangkok Hotel G</p>
        <p className="shrink-0 text-[10px] w-full">Grand Ballroom, 38th floor</p>
      </div>
      {/* Pre-wedding photo */}
      <div
        className="h-[487px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4px_66.981px] mask-size-[318px_318px] shrink-0 w-[325px]"
        style={{ maskImage: `url("${imgAt022}")` }}
      >
        <img alt="Pre-wedding photo" className="block max-w-none object-cover pointer-events-none size-full" src={imgAt23} />
      </div>
    </div>
  );
}

// ─── SECTION: WEDDING DETAILS ────────────────────────────────────────────────

function WeddingDetailCard({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] rounded-[16px] shrink-0 w-full border-[1.364px] border-[rgba(201,169,110,0.15)] border-solid">
      <div className="content-stretch flex gap-[16px] items-start p-[9.364px] size-full">
        <div className="bg-[rgba(201,169,110,0.1)] rounded-[14px] shrink-0 size-[39.997px] border-[1.364px] border-[rgba(201,169,110,0.2)] border-solid">
          <div className="flex items-center justify-center size-full">{icon}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="shrink-0 size-[17.985px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9847 17.9847">
        <g clipPath="url(#clip-loc)" id="LocationIcon">
          <path d={svgPaths.p246bcf00} id="Vector" stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
          <path d={svgPaths.p35f73300} id="Vector_2" stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
        </g>
        <defs><clipPath id="clip-loc"><rect fill="white" height="17.9847" width="17.9847" /></clipPath></defs>
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="shrink-0 size-[17.985px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9847 17.9847">
        <g clipPath="url(#clip-cal)">
          <path d="M5.9949 1.49872V4.49617" stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
          <path d="M11.9898 1.49872V4.49617" stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
          <path d={svgPaths.p1aca9e80} stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
          <path d="M2.24809 7.49363H15.7366" stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
        </g>
        <defs><clipPath id="clip-cal"><rect fill="white" height="17.9847" width="17.9847" /></clipPath></defs>
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="shrink-0 size-[17.985px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9847 17.9847">
        <g clipPath="url(#clip-clk)">
          <path d={svgPaths.p3b8b5000} stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
          <path d={svgPaths.p17fccc00} stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
        </g>
        <defs><clipPath id="clip-clk"><rect fill="white" height="17.9847" width="17.9847" /></clipPath></defs>
      </svg>
    </div>
  );
}

function CheckroomIcon() {
  return (
    <div className="shrink-0 size-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="CheckroomIcon">
          <path d={svgPaths.p3d96000} fill="var(--fill-0, #C9A96E)" />
        </g>
      </svg>
    </div>
  );
}

function SecsionWeddingDetails({ onOpenMaps }: { onOpenMaps: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal leading-[28.8px] shrink-0 text-[#c9a96e] text-[12px] w-full">You are cordially invited</p>
        <p className="font-cinzel-dec leading-[normal] not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-full">Wedding details</p>
      </div>
      <div className="content-stretch flex flex-col gap-[25px] items-start shrink-0 w-full">
        <WeddingDetailCard icon={<LocationIcon />}>
          <div className="flex-[1_0_0] min-w-px self-stretch">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] size-full">
              <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] tracking-[1.92px] uppercase whitespace-nowrap">Venue</p>
              <p className="font-['Cinzel:Bold',sans-serif] font-bold min-w-full shrink-0 text-[12px] text-white tracking-[1.76px] uppercase w-[min-content]">Pullman Bangkok Hotel G</p>
              <p className="font-['Lato:Light',sans-serif] min-w-full not-italic shrink-0 text-[13.12px] text-[rgba(245,240,232,0.5)] w-[min-content]">188 Silom Road, Bangrak, 10500 Bangkok,Thailand</p>
            </div>
          </div>
        </WeddingDetailCard>

        <WeddingDetailCard icon={<CalendarIcon />}>
          <div className="h-full shrink-0 flex-1">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] size-full uppercase">
              <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] tracking-[1.92px] whitespace-nowrap">date</p>
              <p className="font-['Cinzel:Bold',sans-serif] font-bold min-w-full shrink-0 text-[12px] text-white tracking-[1.76px] w-[min-content]">Saturday, 14 november 2026</p>
            </div>
          </div>
        </WeddingDetailCard>

        <WeddingDetailCard icon={<ClockIcon />}>
          <div className="flex-[1_0_0] min-w-px">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] size-full">
              <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] tracking-[1.92px] uppercase w-full">time</p>
              <p className="font-['Cinzel:Bold',sans-serif] font-bold shrink-0 text-[12px] text-white tracking-[1.76px] uppercase w-full">18:30 pm onwards</p>
              <p className="font-['Lato:Light',sans-serif] not-italic shrink-0 text-[13.12px] text-[rgba(245,240,232,0.5)] w-full">Registration opens at 18:00 PM</p>
            </div>
          </div>
        </WeddingDetailCard>

        <WeddingDetailCard icon={<CheckroomIcon />}>
          <div className="flex-[1_0_0] min-w-px">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] size-full uppercase">
              <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] tracking-[1.92px] w-full">dress code</p>
              <p className="font-['Cinzel:Bold',sans-serif] font-bold shrink-0 text-[#f5f0e8] text-[12px] tracking-[1.76px] w-full whitespace-pre-wrap">{`Formal attire. Wear what makes you feel fabulous,  any color goes!`}</p>
            </div>
          </div>
        </WeddingDetailCard>

        {/* Map placeholder */}
        <div className="content-stretch flex flex-col items-center justify-center shrink-0 w-full">
          <div className="h-[238px] rounded-[24px] shrink-0 w-full overflow-hidden">
            <iframe
              title="Pullman Bangkok Hotel G"
              src="https://maps.google.com/maps?q=Pullman+Bangkok+Hotel+G,+188+Silom+Road,+Bangkok&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="block w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Open Maps button */}
        <button
          onClick={onOpenMaps}
          className="rounded-[14px] shrink-0 w-full cursor-pointer"
          style={{ backgroundImage: "linear-gradient(171.822deg, rgb(201, 169, 110) 0%, rgb(154, 122, 69) 100%)" }}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[16px] size-full">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] min-w-px text-[#0a0b08] text-[12px] text-center uppercase">Open Maps</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// ─── SECTION: AGENDA ─────────────────────────────────────────────────────────

function AgendaIcon({ children, bg = "#360000" }: { children: ReactNode; bg?: string }) {
  return (
    <div className="content-stretch flex items-center justify-center rounded-[45760400px] shrink-0 size-[56px]" style={{ backgroundColor: bg }}>
      {children}
    </div>
  );
}

function AgendaRow({ time, icon, label }: { time: string; icon: ReactNode; label: string }) {
  return (
    <div className="shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px">
            <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[14px] text-right text-white w-full">{time}</p>
          </div>
          {icon}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px">
            <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[14px] text-white w-full">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgendaDivider() {
  return (
    <div className="h-[42px] w-[2px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 42">
        <path d="M1 1V41" stroke="var(--stroke-0, #3E0000)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function SecsionAgenda() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <BurgundyDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[12px] text-white w-full">Plan your day</p>
        <p className="font-cinzel-dec not-italic shrink-0 text-[#3e0000] text-[24px] tracking-[1.28px] w-full">event agenda</p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center shrink-0 w-full">
        <AgendaRow
          time="13:09 PM"
          icon={
            <AgendaIcon>
              <div className="h-[33.999px] shrink-0 w-[20.427px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4269 34.0005">
                  <g id="KhanMaak">
                    <path d={svgPaths.p3186f000} fill="var(--fill-0, #C9A96E)" />
                    <path d={svgPaths.p3aa6fb80} fill="var(--fill-0, #C9A96E)" />
                    <path d={svgPaths.p30323300} fill="var(--fill-0, #C9A96E)" />
                  </g>
                </svg>
              </div>
            </AgendaIcon>
          }
          label="Khan Maak"
        />
        <AgendaDivider />
        <AgendaRow
          time="14:14 PM"
          icon={
            <div className="shrink-0 size-[56px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                <g id="Icon">
                  <path d={svgPaths.p10ed80} fill="var(--fill-0, #360000)" />
                  <path d={svgPaths.p12310100} fill="var(--fill-0, #C9A96E)" id="Engagement" />
                </g>
              </svg>
            </div>
          }
          label="Engagement"
        />
        <AgendaDivider />
        <AgendaRow
          time="18:30 PM"
          icon={
            <AgendaIcon>
              <div className="shrink-0 size-[30px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                  <g id="BuffetDinner">
                    <path d={svgPaths.p3ac5b100} fill="var(--fill-0, #C9A96E)" />
                  </g>
                </svg>
              </div>
            </AgendaIcon>
          }
          label="Buffet Dinner"
        />
        <AgendaDivider />
        <AgendaRow
          time="19:30 PM"
          icon={
            <AgendaIcon>
              <div className="h-[30px] shrink-0 w-[36.491px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.4912 30">
                  <g id="Reception">
                    <path d={svgPaths.p3f31af00} fill="var(--fill-0, #C9A96E)" />
                    <path d={svgPaths.p32c33100} fill="var(--fill-0, #C9A96E)" />
                    <path d={svgPaths.p1c5fb680} fill="var(--fill-0, #C9A96E)" />
                    <path d={svgPaths.p10405440} fill="var(--fill-0, #C9A96E)" />
                  </g>
                </svg>
              </div>
            </AgendaIcon>
          }
          label="Reception"
        />
        <AgendaDivider />
        <AgendaRow
          time="21:00 PM"
          icon={
            <div className="shrink-0 size-[56px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                <g id="Icon">
                  <path d={svgPaths.p10ed80} fill="var(--fill-0, #360000)" />
                  <path d={svgPaths.p841bf00} fill="var(--fill-0, #C9A96E)" id="AfterParty" />
                </g>
              </svg>
            </div>
          }
          label="After Party"
        />
      </div>
    </div>
  );
}

// ─── SECTION: GALLERY ────────────────────────────────────────────────────────

function SecsionGallery({ onPhotoClick }: { onPhotoClick: (i: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[#c9a96e] text-[12px] w-full">Memories in frames</p>
        <p className="font-cinzel-dec not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-full">our gallery</p>
      </div>
      <div className="gap-x-[7px] gap-y-[7px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[661px] overflow-clip shrink-0 w-full">
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={i}
            className="h-[160px] justify-self-stretch overflow-clip rounded-[6px] shrink-0 cursor-pointer"
            onClick={() => onPhotoClick(i)}
          >
            <img alt={`Gallery photo ${i + 1}`} className="block w-full h-full object-cover pointer-events-none rounded-[6px]" src={src} />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION: RSVP ───────────────────────────────────────────────────────────

interface RsvpProps {
  fullName: string; setFullName: (v: string) => void;
  nickname: string; setNickname: (v: string) => void;
  // email: string; setEmail: (v: string) => void;
  guestOf: GuestOf; setGuestOf: (v: GuestOf) => void;
  willAttend: WillAttend; setWillAttend: (v: WillAttend) => void;
  numGuests: string; setNumGuests: (v: string) => void;
  specialNotes: string; setSpecialNotes: (v: string) => void;
  submitState: SubmitState;
  errors: Record<string, string>;
  onSubmit: () => void;
}

const inputBase = "bg-[rgba(255,255,255,0.04)] border-[1.364px] border-solid rounded-[12px] w-full px-[17.364px] py-[13.364px] text-[14px] text-[rgba(245,240,232,0.8)] placeholder:text-[rgba(245,240,232,0.25)] outline-none focus:border-[rgba(201,169,110,0.5)]";

function SecsionRsvp(props: RsvpProps) {
  const { fullName, setFullName, nickname, setNickname, guestOf, setGuestOf, willAttend, setWillAttend, numGuests, setNumGuests, specialNotes, setSpecialNotes, submitState, errors, onSubmit } = props;

  const selBtnBase = "flex-[1_0_0] h-full min-w-px rounded-[14px] cursor-pointer transition-all";
  const selBtnOff = "bg-[rgba(255,255,255,0.04)] border-[1.364px] border-[rgba(201,169,110,0.15)] border-solid";
  const selBtnOn = "border-0";

  if (submitState === "success") {
    return (
      <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
        <GoldDivider />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
          <p className="font-['Cinzel:Regular',sans-serif] font-normal min-w-full shrink-0 text-[#c9a96e] text-[12px] w-[min-content]">will you join us?</p>
          <p className="font-cinzel-dec min-w-full not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-[min-content]">rsvp</p>
        </div>
        <div className="bg-[rgba(0,0,0,0.15)] rounded-[16px] shrink-0 w-full border-[1.364px] border-[rgba(201,169,110,0.15)] border-solid">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[25.364px]">
            <p className="font-cinzel-dec not-italic text-[#c9a96e] text-[20px] text-center">Thank you!</p>
            <p className="font-['Lato:Light',sans-serif] not-italic text-[rgba(245,240,232,0.7)] text-[14px] text-center">We have received your RSVP. We can't wait to celebrate with you!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal min-w-full shrink-0 text-[#c9a96e] text-[12px] w-[min-content]">will you join us?</p>
        <p className="font-cinzel-dec min-w-full not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-[min-content]">rsvp</p>
        <p className="font-['Lato:Light',sans-serif] not-italic shrink-0 text-[12px] text-[rgba(245,240,232,0.5)] whitespace-nowrap">Kindly reply by 30 September 2026</p>
      </div>

      <div className="bg-[rgba(0,0,0,0.15)] rounded-[16px] shrink-0 w-full border-[1.364px] border-[rgba(201,169,110,0.15)] border-solid">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center p-[25.364px]">

          {/* Full Name */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[6px]">
              <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">Full Name</p>
            </div>
            <input
              type="text"
              placeholder="Your full name"
              value={fullName ?? ""}
              onChange={(e) => setFullName(e.target.value)}
              className={`${inputBase} ${errors.fullName ? "border-red-500" : "border-[rgba(201,169,110,0.2)]"}`}
              style={{ background: "rgba(255,255,255,0.04)", font: "inherit" }}
            />
          </div>

          {/* Nickname */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[6px]">
              <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">Nickname *</p>
            </div>
            <input
              type="text"
              placeholder="Your nickname"
              value={nickname ?? ""}
              onChange={(e) => setNickname(e.target.value)}
              className={`${inputBase} ${errors.nickname ? "border-red-500" : "border-[rgba(201,169,110,0.2)]"}`}
              style={{ background: "rgba(255,255,255,0.04)", font: "inherit" }}
            />
            {errors.nickname && <p className="text-red-400 text-[10px] mt-1">{errors.nickname}</p>}
          </div>

          {/* Email */}
          {/* <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[6px]">
              <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">Email *</p>
            </div>
            <input
              type="email"
              placeholder="your@email.com"
              value={email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputBase} ${errors.email ? "border-red-500" : "border-[rgba(201,169,110,0.2)]"}`}
              style={{ background: "rgba(255,255,255,0.04)", font: "inherit" }}
            />
            {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
          </div> */}

          {/* Guest of */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start">
              <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">are you the guest of? *</p>
            </div>
            <div className="h-[51.921px] shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-start pt-[6px] size-full">
                <button
                  onClick={() => setGuestOf("groom")}
                  className={`${selBtnBase} ${guestOf === "groom" ? selBtnOn : selBtnOff}`}
                  style={guestOf === "groom" ? { backgroundImage: "linear-gradient(97.4069deg, rgb(201, 169, 110) 0.13492%, rgb(154, 122, 69) 100.13%)" } : {}}
                >
                  <div className="flex flex-row items-center justify-center size-full px-[17.364px] py-[13.364px]">
                    <p className={`[word-break:break-word] font-['Lato:Medium',sans-serif] leading-[normal] not-italic shrink-0 text-[12px] text-center whitespace-nowrap ${guestOf === "groom" ? "text-[#0a0b08]" : "text-[rgba(245,240,232,0.5)]"}`}>THE GROOM</p>
                  </div>
                </button>
                <button
                  onClick={() => setGuestOf("bride")}
                  className={`${selBtnBase} ${guestOf === "bride" ? selBtnOn : selBtnOff}`}
                  style={guestOf === "bride" ? { backgroundImage: "linear-gradient(97.4069deg, rgb(201, 169, 110) 0.13492%, rgb(154, 122, 69) 100.13%)" } : {}}
                >
                  <div className="flex flex-row items-center justify-center size-full px-[17.364px] py-[13.364px]">
                    <p className={`[word-break:break-word] font-['Lato:Medium',sans-serif] leading-[normal] not-italic shrink-0 text-[12px] text-center whitespace-nowrap ${guestOf === "bride" ? "text-[#0a0b08]" : "text-[rgba(245,240,232,0.5)]"}`}>THE BRIDE</p>
                  </div>
                </button>
              </div>
            </div>
            {errors.guestOf && <p className="text-red-400 text-[10px] mt-1">{errors.guestOf}</p>}
          </div>

          {/* Will attend */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start">
              <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">Will you attend? *</p>
            </div>
            <div className="h-[51.921px] shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-start pt-[6px] size-full">
                <button
                  onClick={() => setWillAttend("yes")}
                  className={`${selBtnBase} ${willAttend === "yes" ? selBtnOn : selBtnOff}`}
                  style={willAttend === "yes" ? { backgroundImage: "linear-gradient(97.4069deg, rgb(201, 169, 110) 0.13492%, rgb(154, 122, 69) 100.13%)" } : {}}
                >
                  <div className="flex flex-row items-center justify-center size-full gap-[8px] px-[17.364px] py-[13.364px]">
                    <div className="shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9999 13.9999">
                        <g id="CheckIcon">
                          <path d={svgPaths.pebacc20} stroke={willAttend === "yes" ? "#0a0b08" : "rgba(245,240,232,0.5)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                        </g>
                      </svg>
                    </div>
                    <p className={`[word-break:break-word] font-['Lato:Medium',sans-serif] leading-[normal] not-italic shrink-0 text-[12px] text-center whitespace-nowrap ${willAttend === "yes" ? "text-[#0a0b08]" : "text-[rgba(245,240,232,0.5)]"}`}>Yes</p>
                  </div>
                </button>
                <button
                  onClick={() => setWillAttend("no")}
                  className={`${selBtnBase} ${willAttend === "no" ? selBtnOn : selBtnOff}`}
                  style={willAttend === "no" ? { backgroundImage: "linear-gradient(97.4069deg, rgb(201, 169, 110) 0.13492%, rgb(154, 122, 69) 100.13%)" } : {}}
                >
                  <div className="flex flex-row items-center justify-center size-full gap-[8px] px-[17.364px] py-[13.364px]">
                    <div className="shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9999 13.9999">
                        <g id="CloseIcon">
                          <path d={svgPaths.p17321300} stroke={willAttend === "no" ? "#0a0b08" : "rgba(245,240,232,0.5)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                          <path d={svgPaths.p33ddba00} stroke={willAttend === "no" ? "#0a0b08" : "rgba(245,240,232,0.5)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
                        </g>
                      </svg>
                    </div>
                    <p className={`[word-break:break-word] font-['Lato:Medium',sans-serif] leading-[normal] not-italic shrink-0 text-[12px] text-center whitespace-nowrap ${willAttend === "no" ? "text-[#0a0b08]" : "text-[rgba(245,240,232,0.5)]"}`}>No</p>
                  </div>
                </button>
              </div>
            </div>
            {errors.willAttend && <p className="text-red-400 text-[10px] mt-1">{errors.willAttend}</p>}
          </div>

          {/* Number of guests — only shown when attending */}
          {willAttend === "yes" && (
            <div className="shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[6px]">
                <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">number of guests *</p>
              </div>
              <input
                type="number"
                min="1"
                placeholder="Number"
                value={numGuests ?? ""}
                onChange={(e) => setNumGuests(e.target.value)}
                className={`${inputBase} ${errors.numGuests ? "border-red-500" : "border-[rgba(201,169,110,0.2)]"}`}
                style={{ background: "rgba(255,255,255,0.04)", font: "inherit" }}
              />
              {errors.numGuests && <p className="text-red-400 text-[10px] mt-1">{errors.numGuests}</p>}
            </div>
          )}

          {/* Special notes */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[6px]">
              <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] uppercase whitespace-nowrap">Special Notes</p>
            </div>
            <textarea
              placeholder="Allergies, accessibility needs, or a message for the couple..."
              value={specialNotes ?? ""}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className={`${inputBase} border-[rgba(201,169,110,0.2)] resize-none h-[95.762px]`}
              style={{ background: "rgba(255,255,255,0.04)", font: "inherit" }}
            />
          </div>

          {/* Error banner */}
          {submitState === "error" && (
            <div className="w-full rounded-[12px] bg-red-900/30 border border-red-500/30 p-3">
              <p className="text-red-400 text-[12px] text-center font-['Lato:Regular',sans-serif]">Something went wrong. Please try again.</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            onClick={onSubmit}
            disabled={submitState === "loading"}
            className="rounded-[14px] shrink-0 w-full cursor-pointer disabled:opacity-60"
            style={{ backgroundImage: "linear-gradient(170.383deg, rgb(201, 169, 110) 0%, rgb(154, 122, 69) 100%)" }}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[16px] size-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] min-w-px text-[#0a0b08] text-[12px] text-center uppercase">
                  {submitState === "loading" ? "Sending..." : "Send RSVP"}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION: GIFT REGISTRY ──────────────────────────────────────────────────

function CreditCardIcon() {
  return (
    <div className="shrink-0 size-[17.985px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9847 17.9847">
        <g clipPath="url(#clip-cc)" id="CreaditCardIcon">
          <path d={svgPaths.p3b63a080} stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
          <path d="M1.49872 7.49363H16.486" stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49873" />
        </g>
        <defs><clipPath id="clip-cc"><rect fill="white" height="17.9847" width="17.9847" /></clipPath></defs>
      </svg>
    </div>
  );
}

function CopyIconSvg() {
  return (
    <div className="shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9999 13.9999">
        <g clipPath="url(#clip-copy)" id="CopyIcon">
          <path d={svgPaths.p33fc0d80} stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
          <path d={svgPaths.p3c4697e0} stroke="var(--stroke-0, #C9A96E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16666" />
        </g>
        <defs><clipPath id="clip-copy"><rect fill="white" height="13.9999" width="13.9999" /></clipPath></defs>
      </svg>
    </div>
  );
}

function SecsionGiftRegistry({ onCopy }: { onCopy: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[#c9a96e] text-[12px] w-full">Your presence is our greatest gift</p>
        <p className="font-cinzel-dec not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-full">gift registry</p>
        <p className="font-['Lato:Light',sans-serif] not-italic shrink-0 text-[12px] text-[rgba(245,240,232,0.45)] w-full">If you wish to bless us with a gift, we humbly accept monetary gifts through the following accounts. Your generosity means the world to us.</p>
      </div>
      <div className="bg-[rgba(255,255,255,0.05)] rounded-[16px] shrink-0 w-full border-[1.364px] border-[rgba(201,169,110,0.15)] border-solid">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[25.364px]">
          {/* Bank name */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center size-full">
              <div className="flex-[1_0_0] min-w-px">
                <div className="content-stretch flex gap-[12px] items-center justify-center size-full">
                  <div className="bg-[rgba(201,169,110,0.13)] content-stretch flex items-center justify-center p-[1.364px] rounded-[14px] shrink-0 size-[39.997px] border-[1.364px] border-[rgba(201,169,110,0.27)] border-solid">
                    <CreditCardIcon />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] shrink-0 text-[#f5f0e8] w-[145px]">
                    <p className="font-['DB_Adman_X:Regular',sans-serif] not-italic shrink-0 text-[20px] w-full">ธนาคาร กรุงไทย</p>
                    <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[10px] w-full">krungthai bank (KTB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Account details */}
          <div className="shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center shrink-0 w-[173px]">
                <div className="shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] text-center uppercase w-full">Account Name</p>
                </div>
                <div className="shrink-0 w-full">
                  <p className="[word-break:break-word] font-['Play:Regular','Noto_Sans_Thai:Regular',sans-serif] leading-[normal] shrink-0 text-[#f5f0e8] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100, "wght" 400' }}>อาทิตยา วงศ์ศรีชา</p>
                </div>
              </div>
              {/* Prompt Pay */}
              <div className="content-stretch flex flex-col h-[51.727px] items-center justify-center pt-[8px] shrink-0 w-[197.727px]">
                <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[10px] text-[rgba(201,169,110,0.7)] text-center uppercase w-full">prompt pay</p>
                <div className="shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center size-full">
                    <p className="[word-break:break-word] font-['Play:Regular',sans-serif] leading-[normal] not-italic shrink-0 text-[#f5f0e8] text-[24px] whitespace-nowrap">090-970-3424</p>
                    <button
                      onClick={onCopy}
                      className="bg-[rgba(201,169,110,0.1)] rounded-[10px] shrink-0 border-[1.364px] border-[rgba(201,169,110,0.2)] border-solid p-[7.364px] cursor-pointer hover:bg-[rgba(201,169,110,0.2)] transition-colors"
                    >
                      <CopyIconSvg />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* QR Code - downloadable */}
          <a href={imgImg} download="payment-qr.png" className="h-[379px] rounded-[16px] shrink-0 w-[291px] grid overflow-hidden">
            <img alt="Payment QR Code" className="[grid-area:1/1] block w-full h-full object-cover rounded-[16px]" src={imgImg} />
            <div className="[grid-area:1/1] self-end justify-self-center mb-2 flex justify-center">
              <span className="bg-black/50 text-white text-[10px] px-3 py-1 rounded-full font-['Cinzel:Regular',sans-serif] uppercase tracking-wider">Tap to download</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION: CONTACT US ─────────────────────────────────────────────────────

function PhoneIconSvg() {
  return (
    <div className="shrink-0 size-[11.997px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9969 11.9969">
        <g clipPath="url(#clip-phone)" id="PhoneIcon">
          <path d={svgPaths.p1fa99700} stroke="var(--stroke-0, #0A0B08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999742" />
        </g>
        <defs><clipPath id="clip-phone"><rect fill="white" height="11.9969" width="11.9969" /></clipPath></defs>
      </svg>
    </div>
  );
}

function InstagramIconSvg() {
  return (
    <div className="shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip-ig)" id="InstagramIcon">
          <path d={svgPaths.p3f863000} fill="var(--fill-0, #0A0B08)" />
          <path d={svgPaths.p3615a880} fill="var(--fill-0, #0A0B08)" />
          <path d={svgPaths.p3a519700} fill="var(--fill-0, #0A0B08)" />
        </g>
        <defs><clipPath id="clip-ig"><rect fill="white" height="12" width="12" /></clipPath></defs>
      </svg>
    </div>
  );
}

function ContactCard({
  label, name, phone, instagram, isDesktop,
}: {
  label: string; name: string; phone: string; instagram?: string; isDesktop?: boolean;
}) {
  const w = isDesktop ? "w-[299.27px]" : "w-full";
  return (
    <div className="bg-[rgba(255,255,255,0.02)] rounded-[16px] shrink-0 w-full border-[1.364px] border-[rgba(201,169,110,0.12)] border-solid">
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[17.364px] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] text-center whitespace-nowrap">
          <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[16px] text-[rgba(201,169,110,0.7)]">{label}</p>
          <p className="font-cinzel-dec not-italic shrink-0 text-[#f5f0e8] text-[20px]">{name}</p>
        </div>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className={`${w} h-[38.399px] rounded-[14px] shrink-0 flex items-center justify-center gap-[8px] cursor-pointer`}
          style={{ backgroundImage: "linear-gradient(97.4069deg, rgb(201, 169, 110) 0.13492%, rgb(154, 122, 69) 100.13%)" }}
        >
          <PhoneIconSvg />
          <p className="[word-break:break-word] font-['Lato:Light',sans-serif] leading-[19.68px] not-italic shrink-0 text-[#0a0b08] text-[13.12px] text-center whitespace-nowrap">{phone}</p>
        </a>
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noreferrer"
            className={`${w} rounded-[14px] shrink-0 flex items-center justify-center gap-[8px] py-[8px] cursor-pointer`}
            style={{ backgroundImage: "linear-gradient(96.8428deg, rgb(201, 169, 110) 0.11024%, rgb(154, 122, 69) 100.13%)" }}
          >
            <InstagramIconSvg />
            <p className="[word-break:break-word] font-['Lato:Light',sans-serif] leading-[19.68px] not-italic shrink-0 text-[#0a0b08] text-[13.12px] text-center whitespace-nowrap">{instagram}</p>
          </a>
        )}
      </div>
    </div>
  );
}

function WeddingHelpCard({ isDesktop }: { isDesktop?: boolean }) {
  const w = isDesktop ? "w-[299.27px]" : "w-full";
  return (
    <div className="bg-[rgba(255,255,255,0.02)] rounded-[16px] shrink-0 w-full border-[1.364px] border-[rgba(201,169,110,0.12)] border-solid">
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[17.364px] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] text-center whitespace-nowrap">
          <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[16px] text-[rgba(201,169,110,0.7)]">wedding help</p>
          <div className="content-stretch flex flex-col font-cinzel-dec items-center not-italic shrink-0 text-[#f5f0e8]">
            <p className="shrink-0 text-[20px]">k. nan</p>
            <p className="shrink-0 text-[12px]">(sister of groom)</p>
          </div>
        </div>
        <a
          href="tel:+66809432628"
          className={`${w} h-[38.399px] rounded-[14px] shrink-0 flex items-center justify-center gap-[8px] cursor-pointer`}
          style={{ backgroundImage: "linear-gradient(97.219deg, rgb(201, 169, 110) 0.10342%, rgb(154, 122, 69) 100.12%)" }}
        >
          <PhoneIconSvg />
          <p className="[word-break:break-word] font-['Lato:Light',sans-serif] leading-[19.68px] not-italic shrink-0 text-[#0a0b08] text-[13.12px] text-center whitespace-nowrap">080 943 2628</p>
        </a>
        <div className="[word-break:break-word] content-stretch flex flex-col font-cinzel-dec items-center leading-[normal] not-italic text-[#f5f0e8] text-center whitespace-nowrap">
          <p className="shrink-0 text-[20px]">k. warm</p>
          <p className="shrink-0 text-[12px]">(sister of bride)</p>
        </div>
        <a
          href="tel:+66818085488"
          className={`${w} h-[38.399px] rounded-[14px] shrink-0 flex items-center justify-center gap-[8px] cursor-pointer`}
          style={{ backgroundImage: "linear-gradient(97.219deg, rgb(201, 169, 110) 0.12002%, rgb(154, 122, 69) 100.1%)" }}
        >
          <PhoneIconSvg />
          <p className="[word-break:break-word] font-['Lato:Light',sans-serif] leading-[19.68px] not-italic shrink-0 text-[#0a0b08] text-[13.12px] text-center whitespace-nowrap">081 808 5488</p>
        </a>
      </div>
    </div>
  );
}

function SecsionContactUs({ isDesktop }: { isDesktop?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-center leading-[normal] shrink-0 text-center w-full">
        <p className="font-['Cinzel:Regular',sans-serif] font-normal shrink-0 text-[#c9a96e] text-[12px] w-full">Get in touch</p>
        <p className="font-cinzel-dec not-italic shrink-0 text-[#f5f0e8] text-[24px] tracking-[1.28px] w-full">Contact us</p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start shrink-0 w-full">
        <ContactCard label="THE groom" name="chonratid prayongkul" phone="085 045 0124" instagram="olovva" isDesktop={isDesktop} />
        <ContactCard label="THE BRIDE" name="artitaya wongsricha" phone="090 970 3424" instagram="artitiyya" isDesktop={isDesktop} />
        <WeddingHelpCard isDesktop={isDesktop} />
      </div>
    </div>
  );
}

// ─── SMALL LOGO (contact section footer) ─────────────────────────────────────

// function SmallAcLogo() {
//   return (
//     <div className="size-[39px] mt-[43px]">
//       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
//         <g id="ACWeddingLogo">
//           <path d={svgPaths.p3364ee80} fill="var(--fill-0, #3E0000)" />
//         </g>
//       </svg>
//     </div>
//   );
// }

// ─── SECTION: BOTTOM ─────────────────────────────────────────────────────────

function SecsionBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center w-full">
      <GoldDivider />
      <div className="[word-break:break-word] font-['AngsanaUPC:Italic',sans-serif] italic leading-[0] shrink-0 text-[#f5f0e8] text-[30px] text-center w-full">
        <p className="leading-[30px] mb-0">" Our sincerest apologies</p>
        <p className="leading-[30px]">if the invitation was not personally delivered "</p>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic shrink-0 text-center w-full">
        <p className="font-['Lato:Light',sans-serif] shrink-0 text-[#f5f0e8] text-[18px] w-full">Share your memories with us.</p>
        <p className="font-['Lato:Medium',sans-serif] shrink-0 text-[#c9a96e] text-[22px] w-full">#becauseAOFFTT</p>
      </div>
    </div>
  );
}

// ─── SECTION: SEE YOU THERE (Desktop only) ──────────────────────────────────
//
// Note: in the previous absolute-positioned version, the "See you there!" and
// date text for this section were mispositioned (landing near the Gallery/RSVP
// boundary instead of over this photo) due to a fragile calc()+translate
// offset. Restored here to match the working mobile pattern, since preserving
// that bug would be at odds with removing the absolute-positioning fragility
// that caused it.

function SeeYouThereSecsion() {
  return (
    <div className="relative w-full flex flex-col items-center bg-white">

      <div className="absolute z-[999] top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="size-[51px] ml-[21px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
              <g id="ACWeddingLogo">
                <path d={desktopSvgPaths.pb3fc780} fill="var(--fill-0, #3E0000)" />
              </g>
            </svg>
          </div>


          <div className="content-stretch flex flex-col items-center leading-[normal] not-italic text-[#3e0000] text-center mt-[16px]">
            <p className="font-cinzel-dec text-[20px]">See you</p>
            <p className="font-cinzel-dec text-[40px]">there!</p>
          </div>
        </div>
      <div className="grid relative w-full aspect-[4096/2006] overflow-hidden">
        


        <img alt="See you there background" className="[grid-area:1/1] block w-full h-full object-cover" src={imgDesktopBg} />
        <p className="[grid-area:1/1] self-end justify-self-center mb-[40px] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] text-[#3e0000] text-[18px] text-center whitespace-nowrap">14 . 11 . 2026</p>

      </div>
    </div>
  );
}

// ─── MOBILE SEE YOU THERE (bottom of mobile page) ────────────────────────────

function MobileBottomPhoto() {
  return (
    <div className="grid w-full aspect-[402/644] overflow-hidden">
      <img alt="See you there" className="[grid-area:1/1] block w-full h-full object-cover pointer-events-none" src={imgPreWedding} />
      <div className="[grid-area:1/1] content-stretch flex flex-col items-center leading-[normal] not-italic text-[#3e0000] text-center pt-[45px]">
      <div className="size-[51px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51"><g id="ACWeddingLogo"><path d="M40.7524 29.1312C39.8021 30.2813 38.4731 31.3807 37.5492 32.2524C36.3932 33.3434 35.2576 34.2163 34.142 34.8721C34.0786 34.9095 34.0123 34.9469 33.9426 34.9843C33.0166 35.4824 31.3119 36.4786 29.7483 36.8811L30.0135 36.0659C30.0135 36.0659 30.9409 33.4649 32.4084 30.7326C33.1075 29.4291 33.9312 28.0963 34.8351 27.0024C35.0064 26.795 35.1981 26.5719 35.4063 26.3398C37.6104 23.874 41.6649 20.309 43.5255 22.1081C45.09 23.6202 42.9097 26.8005 40.752 29.1308L40.7524 29.1312ZM23.1464 37.2351L29.0411 21.3975L31.8737 29.2506C30.1295 32.1071 28.274 37.0205 28.274 37.0205C28.274 37.0205 25.7546 37.5547 23.1464 37.2355V37.2351ZM27.9323 38.6954C27.7138 40.0146 27.7198 41.3963 27.9514 42.84L28.9128 42.4044C28.8248 41.3946 28.8324 40.4834 28.9357 39.6708C28.9888 39.2522 29.0802 38.8365 29.209 38.4238C30.8491 38.0031 33.0463 37.2564 34.4662 36.4357L36.7349 42.724C37.3409 44.3862 37.6435 45.6 37.6435 46.3645C37.6435 47.6829 36.6036 48.402 34.5249 48.521V49.49H46.6217V48.521C45.2162 48.4156 44.1711 47.937 43.486 47.0857C42.8009 46.2349 42.0869 44.7814 41.3444 42.724L38.0732 33.6966C39.9181 32.1385 41.9951 29.9077 41.9951 29.9077C44.8316 26.9769 47.1971 23.0367 44.8252 20.7438C42.1868 18.1938 37.8369 21.817 34.9465 25.0699L30.6697 13.2672H29.8813L21.1025 36.9657C17.9482 36.3269 15.2732 34.7174 13.0768 32.7016C10.214 30.0743 8.16042 26.1192 8.16042 20.8365C8.16042 15.5537 9.94203 11.6144 12.2638 8.33255C14.5847 5.0524 18.8636 2.78843 23.857 2.78843C30.6361 2.78843 37.0702 6.83995 39.4217 13.6952H40.3623L39.4217 1.51045H38.3461C37.9168 3.16455 37.0774 3.99075 35.8267 3.99075C35.4748 3.99075 34.8645 3.79823 33.9945 3.41105C31.1381 2.14455 28.2221 1.51045 25.2442 1.51045C19.3205 1.51045 14.3612 3.35197 10.3687 7.03247C6.37585 10.7142 4.37963 15.3025 4.37963 20.7969C4.37963 25.8655 6.17695 30.161 9.77373 33.6813C12.5736 36.4246 16.1351 38.0983 20.4587 38.7048L19.0867 42.4082C18.0242 45.2566 17.2104 46.9281 16.6443 47.4232C16.079 47.9183 15.2137 48.2838 14.0492 48.521V49.49H23.7129V48.521C21.3482 48.3238 20.1671 47.5843 20.1671 46.3046C20.1671 45.5936 20.4183 44.5647 20.9202 43.2191L22.5246 38.9096C23.1132 38.9453 23.7142 38.9632 24.3279 38.9632C25.676 38.9632 26.6994 38.9028 27.9331 38.6954" fill="var(--fill-0, #3E0000)"></path></g></svg></div>
        <p className="font-cinzel-dec text-[18px] whitespace-nowrap">See you</p>
        <p className="font-cinzel-dec text-[36px] whitespace-nowrap">there!</p>
      </div>
      <p className="[grid-area:1/1] self-end justify-self-center mb-[36px] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] text-[#3e0000] text-[16px] text-center whitespace-nowrap">14 . 11 . 2026</p>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

interface InvitationPageProps {
  isDesktop?: boolean;
}

export default function InvitationPage({ isDesktop = false }: InvitationPageProps) {
  const cd = useCountdown();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  // const [email, setEmail] = useState("");
  const [guestOf, setGuestOf] = useState<GuestOf>(null);
  const [willAttend, setWillAttend] = useState<WillAttend>(null);
  const [numGuests, setNumGuests] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleOpenMaps = useCallback(() => {
    window.open("https://maps.apple.com/?q=Pullman+Bangkok+Hotel+G&ll=13.7243,100.5234&z=16", "_blank");
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("0909703424").then(() => {
      toast.success("Copied!", { description: "PromptPay number copied to clipboard" });
    }).catch(() => {
      toast.error("Could not copy. Please copy manually: 090-970-3424");
    });
  }, []);

  const handlePhotoClick = useCallback((i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  const handleSubmit = useCallback(async () => {
    const newErrors: Record<string, string> = {};
    if (!nickname.trim()) newErrors.nickname = "Required";
    // if (!email.trim()) newErrors.email = "Required";
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email";
    if (!guestOf) newErrors.guestOf = "Please select one";
    if (willAttend === null) newErrors.willAttend = "Please select one";
    if (willAttend === "yes" && !numGuests.trim()) newErrors.numGuests = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in the required fields", { description: "Check the highlighted fields above." });
      return;
    }
    setErrors({});
    setSubmitState("loading");

    const payload = {
      name: fullName ? `${fullName} (${nickname})` : nickname,
      // email: email,
      status: `${willAttend === "yes" ? "Yes" : "No"} | Guest of ${guestOf === "groom" ? "the Groom" : "the Bride"} | ${numGuests} guest(s)`,
      dietary: specialNotes || "-",
    };

    const params = new URLSearchParams();
    params.append("data", JSON.stringify(payload));

    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitState("success");
      toast.success("RSVP sent!", { description: "We look forward to seeing you!" });
    } catch {
      setSubmitState("error");
    }
  }, [fullName, nickname, guestOf, willAttend, numGuests, specialNotes]);

  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#360000] px-[34px] pt-[70px] pb-[43px]">
        <SecsionCountdown cd={cd} />
      </div>

      <div className="bg-[#400b0b] px-[34px] pt-[35px] pb-[43px]">
        <SecsionWeddingDetails onOpenMaps={handleOpenMaps} />
      </div>

      <div className="bg-[#c99563] px-[34px] pt-[38px] pb-[43px]">
        <SecsionAgenda />
      </div>

      <div className="bg-[#360000] px-[34px] pt-[39px] pb-[43px]">
        <SecsionGallery onPhotoClick={handlePhotoClick} />
      </div>

      <div className="bg-[#400b0b] px-[34px] pt-[34px] pb-[43px]">
        <SecsionRsvp
          fullName={fullName} setFullName={setFullName}
          nickname={nickname} setNickname={setNickname}
          // email={email} setEmail={setEmail}
          guestOf={guestOf} setGuestOf={setGuestOf}
          willAttend={willAttend} setWillAttend={setWillAttend}
          numGuests={numGuests} setNumGuests={setNumGuests}
          specialNotes={specialNotes} setSpecialNotes={setSpecialNotes}
          submitState={submitState}
          errors={errors}
          onSubmit={handleSubmit}
        />
      </div>

      <div className="bg-[#360000] px-[34px] pt-[35px] pb-[43px]">
        <SecsionGiftRegistry onCopy={handleCopy} />
      </div>

      <div className="bg-[#400b0b] px-[34px] pt-[29px] pb-[43px] flex flex-col items-center">
        <SecsionContactUs isDesktop={isDesktop} />
        {/* <SmallAcLogo /> */}
      </div>

      <div className="bg-[#4b0e0e] px-[34px] pt-[36px] pb-[36px]">
        <SecsionBottom />
      </div>

      {/* Bottom content — mobile vs desktop */}
      {isDesktop ? <SeeYouThereSecsion /> : <MobileBottomPhoto />}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={GALLERY_IMAGES}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
