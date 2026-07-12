import svgPaths from "./svg-61rifmbnww";
import imgImage1 from "./3ee240c14c16fce454428d4ef9d07ff317ac8a95.png";

function AcWeddingLogo() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[96px] top-[62px]" data-name="ACWeddingLogo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="ACWeddingLogo">
          <path d={svgPaths.p2edac500} fill="var(--fill-0, #3E0000)" id="ACWeddingLogo_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[25px] content-stretch flex h-[39px] items-center justify-center left-1/2 rounded-[999px] w-[232px]" style={{ backgroundImage: "linear-gradient(140.72deg, rgb(62, 0, 0) 12.507%, rgb(201, 169, 110) 146.53%)" }}>
      <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">OPEN THE INVITATION</p>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[25px] contents left-1/2" data-name="Button">
      <Frame />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile">
      <div className="absolute aspect-[679.860824192594/983.9515976357807] bottom-[-84px] flex items-center justify-center left-[-138.85px] top-[-25.95px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(6.24373cqw,97.1225cqh)] rotate-[-2.54deg] w-[hypot(93.7563cqw,-2.87751cqh)]">
          <div className="relative size-full" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <AcWeddingLogo />
      <p className="[word-break:break-word] absolute font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-44px)] text-[#3e0000] text-[12px] top-[calc(50%+259px)] whitespace-nowrap">The wedding of</p>
      <p className="[word-break:break-word] absolute font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-44px)] text-[#3e0000] text-[14px] top-[calc(50%+331px)] whitespace-nowrap">14 . 11 . 2026</p>
      <p className="[word-break:break-word] absolute font-['Halimun:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] left-[46px] right-[47px] text-[#3e0000] text-[20px] text-center top-[725px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`Chonratid & Artitaya`}</p>
      <Button />
    </div>
  );
}