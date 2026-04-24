export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-[#FFC400] py-2 sm:py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        
        <div className="flex items-center gap-6 sm:gap-10 text-black font-extrabold text-sm sm:text-base md:text-xl tracking-wide px-4 sm:px-5">
          <span>ISTANBUL PERFUME EXPO 2026</span>
          <span>✱</span>
          <span>LUXURY FRAGRANCE EXPERIENCE</span>
          <span>✱</span>
          <span>WORLD CLASS PERFUMERS</span>
          <span>✱</span>
          <span>EXCLUSIVE SCENT COLLECTIONS</span>
        </div>

        <div className="flex items-center gap-6 sm:gap-10 text-black font-extrabold text-sm sm:text-base md:text-xl tracking-wide px-4 sm:px-5">
          <span>ISTANBUL PERFUME EXPO 2026</span>
          <span>✱</span>
          <span>LUXURY FRAGRANCE EXPERIENCE</span>
          <span>✱</span>
          <span>WORLD CLASS PERFUMERS</span>
          <span>✱</span>
          <span>EXCLUSIVE SCENT COLLECTIONS</span>
        </div>

      </div>
    </div>
  );
}