import svgPaths from "./svg-dxxpenpsow";
import imgImage1 from "./3ee240c14c16fce454428d4ef9d07ff317ac8a95.png";

function Artboard() {
  return (
    <div className="absolute right-[152px] size-[128px] top-0" data-name="Artboard 6 1">
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
    <div className="absolute bottom-0 content-stretch flex h-[39px] items-center justify-center right-[88px] rounded-[999px] w-[257px]" style={{ backgroundImage: "linear-gradient(143.56deg, rgb(62, 0, 0) 12.507%, rgb(201, 169, 110) 146.53%)" }}>
      <p className="[word-break:break-word] font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">OPEN THE INVITATION</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-0 contents right-[88px]" data-name="Button">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[28.03%] left-[calc(50%+351.5px)] top-[28.03%] w-[433px]">
      <Artboard />
      <p className="[word-break:break-word] absolute font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] right-[293px] text-[#3e0000] text-[18px] top-[calc(50%-20px)] translate-x-full whitespace-nowrap">The wedding of</p>
      <p className="[word-break:break-word] absolute font-['Cinzel:Regular',sans-serif] font-normal leading-[normal] right-[291px] text-[#3e0000] text-[24px] top-[calc(50%+82px)] translate-x-full whitespace-nowrap">14 . 11 . 2026</p>
      <p className="[word-break:break-word] absolute font-['Halimun:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] right-[433px] text-[#3e0000] text-[28px] top-[215px] translate-x-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>{`Chonratid & Artitaya`}</p>
      <Button />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <div className="-translate-y-1/2 absolute aspect-[1167.4942755309157/1708.0715520281647] flex items-center justify-center left-[-201.72px] right-[314.23px] top-[calc(50%+46.46px)]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-4.35252cqw,98.0157cqh)] rotate-[1.74deg] w-[hypot(95.6475cqw,1.98434cqh)]">
          <div className="relative size-full" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}