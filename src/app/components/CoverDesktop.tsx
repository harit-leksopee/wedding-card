import svgPaths from "../../imports/Desktop/svg-81ajdhz6pi";
import imgImage1 from "../../imports/img-layout/Desktop2.png";
import imgImage2 from "../../imports/img-layout/Mobile2.png";
interface Props {
  onOpen: () => void;
}

/**
 * Hero photo — bleeds off the left edge intentionally, rotated slightly.
 * Sizing already uses container-query units (cqw/cqh) against its own box,
 * so it stays correct at any viewport size.
 */
function HeroPhoto() {
  return (
    <div
      className="absolute aspect-[1069.3862103039082/1564.5370326999946] flex items-center justify-center"
      style={{
        bottom: "-43.526%",
        top: "-33.201%",
        left: "-10.602%",
        containerType: "size",
      }}
    >
      <div
        className="flex-none"
        style={{
          height: "hypot(-4.35252cqw, 98.0157cqh)",
          width: "hypot(95.6475cqw, 1.98434cqh)",
          transform: "rotate(1.74deg)",
        }}
      >
        <div className="relative size-full" data-name="image 1">
          <img
            alt="Chonratid & Artitaya"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImage1}
          />
        </div>
      </div>
    </div>
  );
}

function MonogramMark() {
  return (
    <div className="w-[clamp(56px,7.8vw,150px)] h-[clamp(56px,7.8vw,150px)]" data-name="Artboard 6 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 128 128">
        <g id="Artboard 6 1">
          <path d={svgPaths.p101ebfe8} fill="var(--fill-0, #3E0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function CoverDesktop({ onOpen }: Props) {
  return (
    // <div className="size-full overflow-hidden bg-white relative">
    //   <HeroPhoto />

    //   {/* Content column — monogram, heading, and CTA, centered as one block */}
    //   <div className="absolute top-[49.5%] left-[76.4%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[clamp(24px,3.5vw,68px)]">
    //     <MonogramMark />

    //     <div className="flex flex-col items-center gap-[clamp(4px,0.75vw,14px)]">
    //       <p className="font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] text-[#3e0000] text-[clamp(13px,1.15vw,22px)] whitespace-nowrap mb-[clamp(4px,0.85vw,16px)]">
    //         The wedding of
    //       </p>
    //       <p
    //         className="font-['Halimun:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[#3e0000] text-[clamp(16px,1.72vw,34px)] whitespace-nowrap"
    //         style={{ fontFamily: "'Halimun', 'Noto Sans', sans-serif" }}
    //       >
    //         {`Chonratid & Artitaya`}
    //       </p>
    //       <p className="font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] text-[#3e0000] text-[clamp(16px,1.45vw,28px)] whitespace-nowrap">
    //         14 . 11 . 2026
    //       </p>
    //     </div>

    //     <button
    //       onClick={onOpen}
    //       className="flex h-[clamp(32px,2.6vw,50px)] items-center justify-center rounded-[999px] w-[clamp(180px,17.2vw,330px)] cursor-pointer transition-transform hover:scale-[1.03]"
    //       style={{
    //         backgroundImage: "linear-gradient(143.56deg, rgb(62, 0, 0) 12.507%, rgb(201, 169, 110) 146.53%)",
    //       }}
    //     >
    //       <p className="font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[clamp(9px,0.83vw,16px)] text-white whitespace-nowrap">
    //         OPEN THE INVITATION
    //       </p>
    //     </button>
    //   </div>
    // </div>
    <button onClick={onOpen}>
      <img src={imgImage1} alt="Chonratid & Artitaya" className="w-fulll absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" />
      <img src={imgImage2} alt="Chonratid & Artitaya" className="w-fulll absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block md:hidden" />
    </button>
  );
}
