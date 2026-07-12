import svgPaths from "./svg-81ajdhz6pi";
import imgImage1 from "./3ee240c14c16fce454428d4ef9d07ff317ac8a95.png";

function Artboard() {
  return (
    <div className="absolute right-[224px] size-[128px] top-[245px]" data-name="Artboard 6 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g id="Artboard 6 1">
          <path d={svgPaths.p101ebfe8} fill="var(--fill-0, #3E0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[245px] content-stretch flex h-[39px] items-center justify-center left-[calc(50%+351.5px)] rounded-[999px] w-[257px]" style={{ backgroundImage: "linear-gradient(143.56deg, rgb(62, 0, 0) 12.507%, rgb(201, 169, 110) 146.53%)" }}>
      <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">OPEN THE INVITATION</p>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[245px] contents left-[calc(50%+351.5px)]" data-name="Button">
      <Frame />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <div className="absolute aspect-[1069.3862103039082/1564.5370326999946] bottom-[-391.73px] flex items-center justify-center left-[-152.67px] top-[-298.81px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-4.35252cqw,98.0157cqh)] rotate-[1.74deg] w-[hypot(95.6475cqw,1.98434cqh)]">
          <div className="relative size-full" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <Artboard />
      <p className="[word-break:break-word] absolute font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] right-[365px] text-[#3e0000] text-[18px] top-[calc(50%-20px)] translate-x-full whitespace-nowrap">The wedding of</p>
      <p className="[word-break:break-word] absolute font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] right-[363px] text-[#3e0000] text-[24px] top-[calc(50%+82px)] translate-x-full whitespace-nowrap">14 . 11 . 2026</p>
      <p className="[word-break:break-word] absolute font-['Halimun:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] right-[505px] text-[#3e0000] text-[28px] top-[460px] translate-x-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`Chonratid & Artitaya`}</p>
      <Button />
    </div>
  );
}