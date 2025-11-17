import svgPaths from "./svg-wgxjjl8wrk";
import imgHeroSection from "figma:asset/2d6b9f242fb18a17f17c2cf47657cbeb3f0e4995.png";
import imgImage from "figma:asset/4ae69e9c6ed100295cdd8b67845163f3282c8ea2.png";
import imgImage1 from "figma:asset/a3c0900542b90ba3b4380abe8e98b58e944a5729.png";
import imgCardImage from "figma:asset/7632ea81909f397947bb066c2ef1d69cc0b2901f.png";
import imgEllipse2 from "figma:asset/a55d4dc08f38c1f87e0aa0d3ffcc1aa639b48271.png";
import imgImage2 from "figma:asset/2d16d6d02e44f8e9a341cdccbc78d82b41eef666.png";
import imgImage3 from "figma:asset/1d73227544c0495b3c1cdff071bf2cd77790d8a8.png";
import imgImage4 from "figma:asset/756cef7edc31661f18aa52fad0f875a289a69738.png";

function PinLight({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Pin_light">
      <div className="absolute inset-[18.75%_18.75%_10.42%_18.75%]">
        <div className="absolute inset-[-2.94%_-3.33%_-2.28%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
            <path d={svgPaths.p71209c0} id="Ellipse 4" stroke="var(--stroke-0, #DA7906)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 5" r="3.5" stroke="var(--stroke-0, #DA7906)" />
        </svg>
      </div>
    </div>
  );
}

function MessageLight({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Message_light">
      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4" data-name="Email Icon">
        <div aria-hidden="true" className="absolute border border-[#da7906] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
      </div>
      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
        <div className="absolute inset-[-11.18%_-1.4%_-6.6%_-1.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 5">
            <path d={svgPaths.p2894d580} id="Vector 3" stroke="var(--stroke-0, #DA7906)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StarLight({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Star_light">
      <div className="absolute inset-[15.36%_14.06%_15.04%_14.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p37081900} fill="var(--fill-0, #FFB800)" id="Star 1" />
        </svg>
      </div>
    </div>
  );
}

function PhoneLight({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Phone_light">
      <div className="absolute left-[3px] size-[18px] top-[3px]">
        <div className="absolute inset-[-2.07%_-2.07%_5.57%_5.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pd568d00} id="Vector 189" stroke="var(--stroke-0, #222222)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[45px]" data-name="Logo Icon">
      <p className="font-['Irish_Grover:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[17px]">N</p>
    </div>
  );
}

function LogoTextContainer() {
  return (
    <div className="box-border content-stretch flex flex-col h-[50px] items-start leading-[normal] pb-[6px] pt-0 px-0 relative shrink-0 text-neutral-50 w-[115px]" data-name="Logo Text Container">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold relative shrink-0 text-[28px] w-full">{`NOD `}</p>
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[12px] w-full">Premium Real Estate</p>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Logo Container">
      <LogoIcon />
      <LogoTextContainer />
    </div>
  );
}

function NavLink() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Nav - Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-50 text-nowrap whitespace-pre">Properties</p>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Nav - Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-50 text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Nav - Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-50 text-nowrap whitespace-pre">Services</p>
    </div>
  );
}

function NavLink3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Nav - Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-50 text-nowrap whitespace-pre">Blog</p>
    </div>
  );
}

function NavLink4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Nav - Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-50 text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function NavigationLinks() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-name="Navigation Links">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
      <NavLink3 />
      <NavLink4 />
    </div>
  );
}

function ProiconsCall() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proicons:call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="proicons:call">
          <path d={svgPaths.p99eb9c0} id="Vector" stroke="var(--stroke-0, #1B2638)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fadcb9] box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <ProiconsCall />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Call Us</p>
    </div>
  );
}

function StashArrowUpLight() {
  return (
    <div className="relative size-[24px]" data-name="stash:arrow-up-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:arrow-up-light">
          <path d={svgPaths.p72e7700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#5a7aae] from-[9.524%] gap-[10px] items-center justify-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 to-[#1b2638]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Get Started</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <StashArrowUpLight />
        </div>
      </div>
    </div>
  );
}

function CallToActionContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[296px]" data-name="Call to Action Container">
      <Button />
      <Button1 />
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-end relative shrink-0 w-[862px]" data-name="Navigation Container">
      <NavigationLinks />
      <CallToActionContainer />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex gap-[165px] items-center relative shrink-0 w-full" data-name="Header Content">
      <LogoContainer />
      <NavigationContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[47px] shrink-0 w-full" data-name="Header Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[12px] relative w-full">
          <HeaderContent />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[100px] items-start left-[90px] top-[10px] w-[1260px]" data-name="Main Content">
      <HeaderContainer />
    </div>
  );
}

function TaglineContainer() {
  return (
    <div className="backdrop-blur-[4.9px] backdrop-filter bg-[rgba(218,121,6,0.25)] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[52px] shrink-0" data-name="Tagline Container">
      <div aria-hidden="true" className="absolute border border-[#fcc128] border-solid inset-0 pointer-events-none rounded-[52px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ffb800] text-[18px] text-nowrap whitespace-pre">#1 Trusted Used Home Platform</p>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[553px]" data-name="Title Container">
      <div className="font-['Lora:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-white w-[551px]">
        <p className="leading-[normal] mb-0 text-[65px]">{`Premium Used `}</p>
        <p className="leading-[normal] text-[65px]">
          <span>{`Homes, `}</span>
          <span className="font-['Lora:Bold',sans-serif] font-bold text-[#fbbf23]">Honestly Priced</span>
        </p>
      </div>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Description Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[618px]">Quality pre-owned homes for discerning men who value transparency, fair pricing, and solid investments. Professional service, honest dealings, exceptional results.</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title and Description Container">
      <TitleContainer />
      <DescriptionContainer />
    </div>
  );
}

function TaglineAndTitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Tagline and Title Container">
      <TaglineContainer />
      <TitleAndDescriptionContainer />
    </div>
  );
}

function StashArrowUpLight1() {
  return (
    <div className="relative size-[24px]" data-name="stash:arrow-up-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:arrow-up-light">
          <path d={svgPaths.p72e7700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fcc128] box-border content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[10px] relative rounded-[8px] shrink-0 w-[298px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Browse Property</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <StashArrowUpLight1 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#fadcb9] box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[25px] py-[10px] relative rounded-[8px] shrink-0 w-[298px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Schedule Consultation</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full" data-name="Buttons Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function LeftSectionInnerContent() {
  return (
    <div className="content-stretch flex flex-col gap-[45px] items-start relative shrink-0 w-full" data-name="Left Section Inner Content">
      <TaglineAndTitleContainer />
      <ButtonsContainer />
    </div>
  );
}

function PropertySoldContainer() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-center text-white w-[104px]" data-name="Property Sold Container">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">500+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[14px] w-full">Property Sold</p>
    </div>
  );
}

function ClientSatisfactionContainer() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-center text-white w-[132px]" data-name="Client Satisfaction Container">
      <p className="font-['Lora:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[28px] w-[min-content]">98%</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[14px] w-[155px]">Client Satisfaction</p>
    </div>
  );
}

function YearExperienceContainer() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-center text-white w-[116px]" data-name="Year Experience Container">
      <p className="font-['Lora:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[28px] w-[min-content]">15+</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[14px] w-[155px]">Year Experience</p>
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="content-stretch flex gap-[79px] items-center relative shrink-0" data-name="Stats Container">
      <PropertySoldContainer />
      <ClientSatisfactionContainer />
      <YearExperienceContainer />
    </div>
  );
}

function LeftSectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-[618px]" data-name="Left Section Content">
      <LeftSectionInnerContent />
      <StatsContainer />
    </div>
  );
}

function SearchHeaderContent() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[normal] relative shrink-0 w-full" data-name="Search Header Content">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[#fdfdfd] text-[26px] w-full">Find Your Perfect Home</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#c2c2c2] text-[18px] w-full">Search our curated collection of quality used homes</p>
    </div>
  );
}

function SearchHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <SearchHeaderContent />
        </div>
      </div>
    </div>
  );
}

function EpLocation() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ep:location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ep:location">
          <path d={svgPaths.p1e251cc0} fill="var(--fill-0, #ACACAC)" id="Vector" />
          <path d={svgPaths.p2c095300} fill="var(--fill-0, #ACACAC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LocationInputContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Location Input Container">
      <EpLocation />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#acacac] text-[16px] text-nowrap whitespace-pre">Enter Location (city, state, or zip)</p>
    </div>
  );
}

function LocationFilter() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Location Filter">
      <div aria-hidden="true" className="absolute border-[#797979] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <LocationInputContainer />
        </div>
      </div>
    </div>
  );
}

function WeuiArrowOutlined() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p18a2a6f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PriceFilterContainer() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative rounded-[8px] shrink-0 w-[259px]" data-name="Price Filter Container">
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#515151] text-[16px]">Price Ranger</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[225px] top-[15px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowOutlined />
        </div>
      </div>
    </div>
  );
}

function WeuiArrowOutlined1() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p18a2a6f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PropertyTypeFilterContainer() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative rounded-[8px] shrink-0 w-[264px]" data-name="Property Type Filter Container">
      <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#515151] text-[16px]">Property Type</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[230px] top-[13px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <WeuiArrowOutlined1 />
        </div>
      </div>
    </div>
  );
}

function FilterOptions() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full" data-name="Filter Options">
      <PriceFilterContainer />
      <PropertyTypeFilterContainer />
    </div>
  );
}

function WeuiArrowOutlined2() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p18a2a6f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilterActionContainer() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Filter Action Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#515151] text-[16px]">Number of bedrooms</p>
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-[10px] top-[14px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "24" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <WeuiArrowOutlined2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#1b2638] box-border content-stretch flex gap-[10px] items-center justify-center left-0 px-[12px] py-[10px] rounded-[8px] top-0 w-[548px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Search Property</p>
    </div>
  );
}

function MynauiSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mynaui:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mynaui:search">
          <path d={svgPaths.p32697080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SearchButtonContainer() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Search Button Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center px-[159px] py-[9px] relative w-full">
          <Button4 />
          <MynauiSearch />
        </div>
      </div>
    </div>
  );
}

function FilterActionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full" data-name="Filter Action Content">
      <SearchButtonContainer />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">
        <span className="text-white">Or</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">&nbsp;</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fbc632] underline">browse all properties</span>
      </p>
    </div>
  );
}

function FilterActions() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Filter Actions">
      <FilterActionContainer />
      <FilterActionContent />
    </div>
  );
}

function AdditionalFilters() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="Additional Filters">
      <FilterOptions />
      <FilterActions />
    </div>
  );
}

function SearchFilters() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[548px]" data-name="Search Filters">
      <LocationFilter />
      <AdditionalFilters />
    </div>
  );
}

function SearchContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[34px] items-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[568px]" data-name="Search Content">
      <SearchHeader />
      <SearchFilters />
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(228,228,228,0.1)] h-[433px] relative rounded-[24px] shrink-0 w-[616px]" data-name="Search Container">
      <div className="h-[433px] overflow-clip relative rounded-[inherit] w-[616px]">
        <SearchContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="absolute content-stretch flex gap-[26px] items-center left-[90px] top-0 w-[1260px]" data-name="Left Section">
      <LeftSectionContent />
      <SearchContainer />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="absolute h-[683px] left-[2px] overflow-clip top-[calc(50%+42px)] translate-y-[-50%] w-[1438px]" data-name="Main Content">
      <LeftSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[947px] left-0 overflow-clip top-0 w-[1440px]" data-name="Hero Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[101.37%] left-0 max-w-none top-0 w-full" src={imgHeroSection} />
        </div>
        <div className="absolute bg-[rgba(27,68,111,0.8)] inset-0" />
      </div>
      <MainContent />
      <MainContent1 />
    </div>
  );
}

function OurFoundation() {
  return (
    <div className="bg-amber-100 box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[8px] relative rounded-[63px] shrink-0" data-name="Our Foundation">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-amber-800 text-nowrap whitespace-pre">Our Foundation</p>
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[886px]" data-name="Title Container">
      <OurFoundation />
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1b2638] text-[60px] w-[min-content]">Built on Principles That Matter</p>
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[965px]" data-name="Header Container">
      <TitleContainer1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-center text-slate-600 w-[min-content]">{`More than just transactions - we're building relationships based on trust, integrity, and results that last.`}</p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute inset-[25.38%_35.79%_24.62%_33.95%]" data-name="Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 40">
        <g id="Icon Container">
          <path d={svgPaths.pe839000} fill="var(--fill-0, #FCC128)" id="Vector" />
          <path d={svgPaths.p1c874480} fill="var(--fill-0, #FCC128)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function OcticonFileBadge() {
  return (
    <div className="bg-[#1b2638] overflow-clip relative rounded-[8px] shrink-0 size-[80px]" data-name="octicon:file-badge-24">
      <IconContainer />
    </div>
  );
}

function IconAndTitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-[234px]" data-name="Icon and Title Container">
      <OcticonFileBadge />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[32px] text-black text-center w-[min-content]">Faith Over Flash</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-[264px]" data-name="Card Content">
      <IconAndTitleContainer />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[22px] text-center text-slate-600 w-[min-content]">We believe in honest dealings and genuine relationships over flashy marketing tactics.</p>
    </div>
  );
}

function Faith() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center overflow-clip px-[70px] py-[48px] relative rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Faith">
      <CardContent />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[30px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[26px]" data-name="Group">
      <div className="absolute inset-[-5%_-5.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 33">
          <g id="Group">
            <path d={svgPaths.p2d7f1000} id="Vector" stroke="var(--stroke-0, #FCC128)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsSecurityCheck() {
  return (
    <div className="bg-[#1b2638] overflow-clip relative rounded-[8px] shrink-0 size-[80px]" data-name="hugeicons:security-check">
      <Group />
    </div>
  );
}

function IconAndTitleContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full" data-name="Icon and Title Container">
      <HugeiconsSecurityCheck />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[32px] text-black text-center w-[min-content]">Real Homes for Real Men</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-[264px]" data-name="Card Content">
      <IconAndTitleContainer1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-slate-600 w-full">Quality pre-owned homes that provide solid foundations for building your future.</p>
    </div>
  );
}

function Affordable() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center overflow-clip px-[70px] py-[48px] relative rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Affordable">
      <CardContent1 />
    </div>
  );
}

function GraphIconContainer() {
  return (
    <div className="absolute inset-[35.71%_24.53%_34.07%_19.35%]" data-name="Graph Icon Container">
      <div className="absolute inset-[-6.2%_-3.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 28">
          <g id="Graph Icon Container">
            <path d="M32.5832 1.5H46.3979V15.3147" id="Vector" stroke="var(--stroke-0, #FCC128)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p58fc4d0} id="Vector_2" stroke="var(--stroke-0, #FCC128)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[35.71%_24.53%_34.07%_19.35%]" data-name="Group">
      <GraphIconContainer />
    </div>
  );
}

function StreamlineGraphArrowIncrease() {
  return (
    <div className="bg-[#1b2638] overflow-clip relative rounded-[8px] shrink-0 size-[80px]" data-name="streamline:graph-arrow-increase">
      <Group1 />
    </div>
  );
}

function IconAndTitleContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full" data-name="Icon and Title Container">
      <StreamlineGraphArrowIncrease />
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[32px] text-black text-center w-[min-content]">Affordable by Design</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-[264px]" data-name="Card Content">
      <IconAndTitleContainer2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[22px] text-center text-slate-600 w-full">Fair pricing on quality properties without hidden fees or surprise costs.</p>
    </div>
  );
}

function Affordable1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center overflow-clip px-[70px] py-[48px] relative rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Affordable">
      <CardContent2 />
    </div>
  );
}

function CardsContainer() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full" data-name="Cards Container">
      <Faith />
      <Affordable />
      <Affordable1 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full" data-name="Content Container">
      <HeaderContainer1 />
      <CardsContainer />
    </div>
  );
}

function BuiltOnPriciples() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-1/2 overflow-clip px-[90px] py-[100px] top-[947px] translate-x-[-50%] w-[1440px]" data-name="Built On Priciples">
      <ContentContainer />
    </div>
  );
}

function OurFoundation1() {
  return (
    <div className="bg-[#f2f2ff] box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[8px] relative rounded-[63px] shrink-0" data-name="Our Foundation">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Featured Properties</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[886px]" data-name="Container">
      <OurFoundation1 />
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1b2638] text-[60px] text-center w-[min-content]">Handpicked Premium Homes</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-slate-600 w-[886px]">{`More than just transactions - we're building relationships based on trust, integrity, and results that last.`}</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[10.4%_17.24%_13.62%_17%]" data-name="Group">
      <div className="absolute inset-[-2.74%_-3.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
          <g id="Group">
            <path d={svgPaths.p3f601100} id="Vector" stroke="var(--stroke-0, #1B2638)" strokeLinejoin="round" />
            <path d={svgPaths.p3061f100} id="Vector_2" stroke="var(--stroke-0, #1B2638)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProiconsLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="proicons:location">
      <Group2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <ProiconsLocation />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">Springfield, MA</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2638] text-[24px] w-full">Executive Colonial Estate</p>
      <Container2 />
    </div>
  );
}

function LucideBed() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide:bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide:bed">
          <path d={svgPaths.pcbc1c00} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <LucideBed />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">4</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.63%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
          <g id="Group">
            <path d={svgPaths.p2b0e5300} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p33660400} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconoirBathroom() {
  return (
    <div className="overflow-clip relative size-[24px]" data-name="iconoir:bathroom">
      <Group3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconoirBathroom />
        </div>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">3</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="relative rounded-[2px] shrink-0 size-[24px]" data-name="Feature Icon">
        <div aria-hidden="true" className="absolute border-[0.8px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">2,850 sqft</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Hardwood Floors</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Update Kitchen</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">2-Car Garage</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-slate-600 w-full">Key Features:</p>
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[normal] not-italic relative shrink-0 w-[206px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2638] text-[20px] w-[103px]">$485,000</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal line-through relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">$525,000</p>
    </div>
  );
}

function SystemUiconsArrowRight() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="system-uicons:arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="system-uicons:arrow-right">
          <path d={svgPaths.p306b1a00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#1b2638] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">View Details</p>
      <SystemUiconsArrowRight />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[25px] py-[10px] relative w-full">
          <Container16 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[404px]" data-name="Container">
      <div className="h-[233px] relative shrink-0 w-full" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage} />
        </div>
      </div>
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[8px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[10.4%_17.24%_13.62%_17%]" data-name="Group">
      <div className="absolute inset-[-2.74%_-3.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
          <g id="Group">
            <path d={svgPaths.p3f601100} id="Vector" stroke="var(--stroke-0, #1B2638)" strokeLinejoin="round" />
            <path d={svgPaths.p3061f100} id="Vector_2" stroke="var(--stroke-0, #1B2638)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProiconsLocation1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="proicons:location">
      <Group4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <ProiconsLocation1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">Springfield, MA</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2638] text-[24px] w-full">Executive Colonial Estate</p>
      <Container23 />
    </div>
  );
}

function LucideBed1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide:bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide:bed">
          <path d={svgPaths.pcbc1c00} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <LucideBed1 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">6</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.63%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
          <g id="Group">
            <path d={svgPaths.p2b0e5300} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p33660400} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconoirBathroom1() {
  return (
    <div className="overflow-clip relative size-[24px]" data-name="iconoir:bathroom">
      <Group5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconoirBathroom1 />
        </div>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">6</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="relative rounded-[2px] shrink-0 size-[24px]" data-name="Feature Icon">
        <div aria-hidden="true" className="absolute border-[0.8px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">3,750 sqft</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Open Floor Plan</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Master Suite</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Covered Patio</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-slate-600 w-full">Key Features:</p>
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container36 />
    </div>
  );
}

function PriceTextContainer() {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[normal] not-italic relative shrink-0 w-[206px]" data-name="Price Text Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2638] text-[20px] w-[99px]">$735,000</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal line-through relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">$760,000</p>
    </div>
  );
}

function SystemUiconsArrowRight1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="system-uicons:arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="system-uicons:arrow-right">
          <path d={svgPaths.p306b1a00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ViewDetailsContainer() {
  return (
    <div className="bg-[#1b2638] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="View Details Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">View Details</p>
      <SystemUiconsArrowRight1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <PriceTextContainer />
      <ViewDetailsContainer />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[25px] py-[10px] relative w-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center relative shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-[404px]" data-name="Container">
      <div className="h-[233px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[8px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Container">
      <Container40 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[10.4%_17.24%_13.62%_17%]" data-name="Group">
      <div className="absolute inset-[-2.74%_-3.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
          <g id="Group">
            <path d={svgPaths.p3f601100} id="Vector" stroke="var(--stroke-0, #1B2638)" strokeLinejoin="round" />
            <path d={svgPaths.p3061f100} id="Vector_2" stroke="var(--stroke-0, #1B2638)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProiconsLocation2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="proicons:location">
      <Group6 />
    </div>
  );
}

function LocationContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Location Container">
      <ProiconsLocation2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">Portland, OR</p>
    </div>
  );
}

function CardTitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Card Title Container">
      <p className="font-['Lora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2638] text-[24px] w-full">Craftsman Gem</p>
      <LocationContainer />
    </div>
  );
}

function LucideBed2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide:bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide:bed">
          <path d={svgPaths.pcbc1c00} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function FeatureIconContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Icon Container">
      <LucideBed2 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">3</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.63%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
          <g id="Group">
            <path d={svgPaths.p2b0e5300} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p33660400} id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconoirBathroom2() {
  return (
    <div className="overflow-clip relative size-[24px]" data-name="iconoir:bathroom">
      <Group7 />
    </div>
  );
}

function FeatureItemContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Item Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconoirBathroom2 />
        </div>
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">2</p>
    </div>
  );
}

function FeatureItemContainer1() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Feature Item Container">
      <FeatureIconContainer />
      <FeatureItemContainer />
    </div>
  );
}

function FeatureItemContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Feature Item Container">
      <div className="relative rounded-[2px] shrink-0 size-[24px]" data-name="Feature Icon">
        <div aria-hidden="true" className="absolute border-[0.8px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-slate-600 whitespace-pre">1,950 sqft</p>
    </div>
  );
}

function FeaturesContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Features Container">
      <FeatureItemContainer1 />
      <FeatureItemContainer2 />
    </div>
  );
}

function CardTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Card Text Container">
      <CardTitleContainer />
      <FeaturesContainer />
    </div>
  );
}

function KeyFeatureTextContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Key Feature Text Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Original Character</p>
    </div>
  );
}

function KeyFeatureTextContainer1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Key Feature Text Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Updated Systems</p>
    </div>
  );
}

function KeyFeatureItem() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Key Feature Item">
      <KeyFeatureTextContainer />
      <KeyFeatureTextContainer1 />
    </div>
  );
}

function KeyFeatureTextContainer2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Key Feature Text Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-slate-600 border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Large Lot</p>
    </div>
  );
}

function KeyFeaturesList() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Key Features List">
      <KeyFeatureItem />
      <KeyFeatureTextContainer2 />
    </div>
  );
}

function KeyFeaturesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Key Features Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-slate-600 w-full">Key Features:</p>
      <KeyFeaturesList />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Card Info">
      <CardTextContainer />
      <KeyFeaturesContainer />
    </div>
  );
}

function PriceTextContainer1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[normal] not-italic relative shrink-0 w-[206px]" data-name="Price Text Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2638] text-[20px] w-[100px]">$365,000</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal line-through relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">$395,000</p>
    </div>
  );
}

function SystemUiconsArrowRight2() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="system-uicons:arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="system-uicons:arrow-right">
          <path d={svgPaths.p306b1a00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ViewDetailsContainer1() {
  return (
    <div className="bg-[#1b2638] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="View Details Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">View Details</p>
      <SystemUiconsArrowRight2 />
    </div>
  );
}

function PriceContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Price Container">
      <PriceTextContainer1 />
      <ViewDetailsContainer1 />
    </div>
  );
}

function CardDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Details">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[25px] py-[10px] relative w-full">
          <CardInfo />
          <PriceContainer />
        </div>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[404px]" data-name="Card Content">
      <div className="h-[233px] relative shrink-0 w-full" data-name="Card Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCardImage} />
      </div>
      <CardDetails />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[8px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Card Container">
      <CardContent3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container41 />
      <CardContainer />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container42 />
    </div>
  );
}

function HandPicked() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-1/2 overflow-clip px-[90px] py-[100px] top-[1836px] translate-x-[-50%] w-[1440px]" data-name="HandPicked">
      <Container43 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center leading-[normal] relative shrink-0 text-center text-neutral-50 w-full" data-name="Text Container">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold relative shrink-0 text-[60px] w-[988px]">Ready to Find Your Dream Home?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic opacity-70 relative shrink-0 text-[28px] w-[857px]">Join hundreds of satisfied homeowners who found their perfect property through our platform.</p>
    </div>
  );
}

function StashArrowUpLight2() {
  return (
    <div className="relative size-[24px]" data-name="stash:arrow-up-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:arrow-up-light">
          <path d={svgPaths.p72e7700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#fcc128] box-border content-stretch flex gap-[10px] items-center justify-center px-[25px] py-[10px] relative rounded-[8px] shrink-0 w-[298px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Browse Property</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <StashArrowUpLight2 />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#fadcb9] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff9500] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[25px] py-[10px] relative w-full">
          <PhoneLight className="relative shrink-0 size-[24px]" />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Schedule Consultation</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[298px]" data-name="Button Container">
      <Button6 />
    </div>
  );
}

function ButtonsContainer1() {
  return (
    <div className="content-stretch flex gap-[22px] h-[44px] items-center relative shrink-0 w-[618px]" data-name="Buttons Container">
      <Button5 />
      <ButtonContainer />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full" data-name="Content Container">
      <TextContainer />
      <ButtonsContainer1 />
    </div>
  );
}

function ReadyDreamHome() {
  return (
    <div className="absolute bg-[#1b2638] box-border content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+1px)] overflow-clip px-[90px] py-[100px] top-[2810px] translate-x-[-50%] w-[1440px]" data-name="Ready Dream Home">
      <ContentContainer1 />
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[886px]" data-name="Title Container">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b2638] text-[60px] text-center w-full">What Our Clients Say</p>
    </div>
  );
}

function HeaderContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[986px]" data-name="Header Container">
      <TitleContainer2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-center text-slate-600 w-[min-content]">Real testimonials from real men who found their perfect homes with Nod.</p>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full" data-name="Content Container">
      <HeaderContainer2 />
    </div>
  );
}

function StarLight1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Star_light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Star_light">
          <path d={svgPaths.p20e1b200} fill="var(--fill-0, #FFB800)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <StarLight className="relative shrink-0 size-[26px]" />
      {[...Array(4).keys()].map((_, i) => (
        <StarLight1 key={i} />
      ))}
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[20px] text-slate-600 w-[min-content]">{`"Nod delivered exactly what they promised - a quality home at a fair price. The process was transparent from start to finish."`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1b2638] w-full">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[20px] w-full">Marcus Johnson</p>
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[16px] w-full">Software Engineer</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 w-[156px]">
      <Frame2 />
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[14px] text-slate-600 w-full">Denver, CO</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[70px]">
        <img alt="" className="block max-w-none size-full" height="70" src={imgEllipse2} width="70" />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip p-[50px] relative rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-[620px]" data-name="Testimonials">
      <Frame5 />
      <div className="absolute left-[521px] size-[186px] top-[-92px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186 186">
          <circle cx="93" cy="93" fill="var(--fill-0, #FDF5E7)" id="Ellipse 1" r="93" />
        </svg>
      </div>
    </div>
  );
}

function StarLight2() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Star_light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Star_light">
          <path d={svgPaths.p20e1b200} fill="var(--fill-0, #FFB800)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      {[...Array(5).keys()].map((_, i) => (
        <StarLight2 key={i} />
      ))}
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame8 />
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[20px] text-slate-600 w-[min-content]">{`"Finally found a company that understands what working men need. No games, just honest real estate done right."`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#1b2638] w-[174px]">
      <p className="font-['Lora:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre">David Chen</p>
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[16px] w-[174px]">Construction Manager</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative shrink-0 w-[174px]">
      <Frame10 />
      <p className="font-['Inter:Light',sans-serif] font-light min-w-full not-italic relative shrink-0 text-[14px] text-slate-600 w-[min-content]">Austin, TX</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[70px]">
        <img alt="" className="block max-w-none size-full" height="70" src={imgEllipse2} width="70" />
      </div>
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function Testimonials1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip p-[50px] relative rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-[618px]" data-name="Testimonials">
      <Frame13 />
      <div className="absolute left-[521px] size-[186px] top-[-92px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186 186">
          <circle cx="93" cy="93" fill="var(--fill-0, #FDF5E7)" id="Ellipse 1" r="93" />
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full">
      <Testimonials />
      <Testimonials1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start opacity-80 relative shrink-0 w-full">
      <ContentContainer2 />
      <Frame6 />
    </div>
  );
}

function OurClients() {
  return (
    <div className="absolute bg-[#ecf1f6] box-border content-stretch flex flex-col gap-[10px] items-start left-1/2 overflow-clip px-[90px] py-[100px] top-[3269px] translate-x-[-50%] w-[1440px]" data-name="Our Clients">
      <Frame7 />
    </div>
  );
}

function OurFoundation2() {
  return (
    <div className="bg-[#f2f2ff] box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[8px] relative rounded-[63px] shrink-0" data-name="Our Foundation">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[18px] text-nowrap whitespace-pre">Expert Insights</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[886px]" data-name="Container">
      <OurFoundation2 />
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1b2638] text-[60px] text-center w-[min-content]">Latest Market Intelligence</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-slate-600 w-[920px]">Stay informed with professional insights, market trends, and expert advice from our real estate specialists.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[61px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(71, 85, 105, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2595700} fill="var(--fill-0, #475569)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">Dec 15, 2024</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #475569)" id="Ellipse 3" r="1.5" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">8 min read</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[298px]" data-name="Container">
      <Container49 />
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1b2638] text-[22px] w-[min-content]">5 Critical Inspections Every Used Home Needs</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#1b2638] text-[16px] w-[min-content]">Professional insights on evaluating pre-owned properties for structural integrity and hidden issues.</p>
    </div>
  );
}

function UilUser() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uil-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="uil-user">
          <rect fill="var(--fill-0, #1B2638)" height="20" rx="10" width="20" />
          <path d={svgPaths.p29f83812} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <UilUser />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">by Mike Rodriguez</p>
    </div>
  );
}

function SystemUiconsArrowRight3() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="system-uicons:arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="system-uicons:arrow-right">
          <path d={svgPaths.p306b1a00} id="Vector" stroke="var(--stroke-0, #DA7906)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#da7906] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#da7906] text-[12px] text-nowrap whitespace-pre">Read More</p>
      <SystemUiconsArrowRight3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[106px] items-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[354px]" data-name="Container">
      <Container51 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] h-[501px] items-center left-0 top-0 w-[404px]" data-name="Container">
      <div className="h-[233px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white h-[501px] overflow-clip relative rounded-[8px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-[404px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(71, 85, 105, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2595700} fill="var(--fill-0, #475569)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">Dec 10, 2024</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #475569)" id="Ellipse 3" r="1.5" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">21 min read</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[298px]" data-name="Container">
      <Container60 />
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1b2638] text-[22px] w-[min-content]">{`Market Analysis: Why 2024 Favors Used Home Buyers `}</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#1b2638] text-[16px] w-[min-content]">Understanding current market conditions and how they create opportunities for smart buyers.</p>
    </div>
  );
}

function UilUser1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uil-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="uil-user">
          <rect fill="var(--fill-0, #1B2638)" height="20" rx="10" width="20" />
          <path d={svgPaths.p29f83812} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <UilUser1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">by Sarah Williams</p>
    </div>
  );
}

function SystemUiconsArrowRight4() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="system-uicons:arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="system-uicons:arrow-right">
          <path d={svgPaths.p306b1a00} id="Vector" stroke="var(--stroke-0, #DA7906)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#da7906] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#da7906] text-[12px] text-nowrap whitespace-pre">Read More</p>
      <SystemUiconsArrowRight4 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[111px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[354px]" data-name="Container">
      <Container62 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] h-[501px] items-center left-0 top-0 w-[404px]" data-name="Container">
      <div className="h-[233px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-white h-[501px] overflow-clip relative rounded-[8px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-[404px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[12px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(71, 85, 105, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2595700} fill="var(--fill-0, #475569)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">Dec 5, 2024</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #475569)" id="Ellipse 3" r="1.5" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">12 min read</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#1b2638] text-[22px] w-[min-content]">The Total Cost of Homeownership: A Reality Check</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1b2638] text-[16px] w-full">Comprehensive breakdown of ownership costs including maintenance, taxes, and unexpected expenses.</p>
    </div>
  );
}

function UilUser2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uil-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="uil-user">
          <rect fill="var(--fill-0, #1B2638)" height="20" rx="10" width="20" />
          <path d={svgPaths.p29f83812} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <UilUser2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-600 whitespace-pre">by Tom Anderson</p>
    </div>
  );
}

function SystemUiconsArrowRight5() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="system-uicons:arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="system-uicons:arrow-right">
          <path d={svgPaths.p306b1a00} id="Vector" stroke="var(--stroke-0, #DA7906)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#da7906] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#da7906] text-[12px] text-nowrap whitespace-pre">Read More</p>
      <SystemUiconsArrowRight5 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[112px] items-center relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[354px]" data-name="Container">
      <Container73 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] h-[501px] items-center left-0 top-0 w-[404px]" data-name="Container">
      <div className="h-[233px] relative shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-white h-[501px] overflow-clip relative rounded-[8px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-[404px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container57 />
      <Container68 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container80 />
    </div>
  );
}

function LatestMarketIntelligence() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-1/2 overflow-clip px-[90px] py-[100px] top-[3965px] translate-x-[-50%] w-[1440px]" data-name="Latest Market Intelligence">
      <Container81 />
    </div>
  );
}

function LogoIcon1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[45px]" data-name="Logo Icon">
      <p className="font-['Irish_Grover:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[17px]">N</p>
    </div>
  );
}

function LogoTextContainer1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[50px] items-start leading-[normal] pb-[6px] pt-0 px-0 relative shrink-0 text-neutral-50 w-[115px]" data-name="Logo Text Container">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold relative shrink-0 text-[28px] w-full">{`NOD `}</p>
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[12px] w-full">Premium Real Estate</p>
    </div>
  );
}

function LogoContainer1() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Logo Container">
      <LogoIcon1 />
      <LogoTextContainer1 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <LogoContainer1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-neutral-50 w-[min-content]">Quality used homes for discerning men who value honesty, affordability, and solid investments. Building futures, one exceptional property at a time.</p>
    </div>
  );
}

function FaceBook() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="FaceBook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="FaceBook">
          <path d={svgPaths.p1342a100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="absolute bottom-1/4 left-1/4 right-[25.04%] top-1/4" data-name="Instagram Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Instagram Icon">
          <path d={svgPaths.p29186400} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pe9e3780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1a8afa00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="overflow-clip relative rounded-[15px] shrink-0 size-[40px]" data-name="Instagram">
      <InstagramIcon />
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Twitter">
          <path d={svgPaths.pe595200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Telegram() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Telegram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Telegram">
          <path d={svgPaths.p273b6b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaLinksContainer() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0" data-name="Social Media Links Container">
      <FaceBook />
      <Instagram />
      <Twitter />
      <Telegram />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[511px]" data-name="Container">
      <Container82 />
      <SocialMediaLinksContainer />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[14px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-neutral-50 w-[79px]" data-name="Container">
      <p className="relative shrink-0 w-full">Properties</p>
      <p className="relative shrink-0 w-full">About Us</p>
      <p className="relative shrink-0 w-full">Services</p>
      <p className="relative shrink-0 w-full">Blog</p>
      <p className="relative shrink-0 w-full">Contact</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[190px]" data-name="Container">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[22px] text-neutral-50 w-[min-content]">Quick Links</p>
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[131px] items-center relative shrink-0" data-name="Container">
      <Container83 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-[190px]" data-name="Container">
      <p className="font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[22px] text-neutral-50 w-full">Quick Links</p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Phone Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Phone Icon">
          <path d={svgPaths.p1dc8bd00} id="Vector 189" stroke="var(--stroke-0, #DA7906)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Contact Info">
      <PhoneIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap whitespace-pre">(555) 123-4567</p>
    </div>
  );
}

function ContactInfo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Contact Info">
      <MessageLight className="relative shrink-0 size-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-neutral-50 text-nowrap whitespace-pre">hello@nod-reality.com</p>
    </div>
  );
}

function ContactInfo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Contact Info">
      <PinLight className="relative shrink-0 size-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-neutral-50 w-[193px]">
        123 Real Estate Blvd
        <br aria-hidden="true" />
        Suite 100, City, ST 12345
      </p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <ContactInfo />
      <ContactInfo1 />
      <ContactInfo2 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[296px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex gap-[132px] items-start justify-center left-[90px] top-[100px]" data-name="Container">
      <Container86 />
      <Container89 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#1b2638] h-[513px] left-0 overflow-clip top-[4914px] w-[1440px]" data-name="Footer">
      <Container90 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-329px)] not-italic text-[#9e9e9e] text-[16px] text-nowrap top-[394px] whitespace-pre">
        <span>{`© 2024 Nod Premium Real Estate. All rights reserved. |  `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid text-[#fbc632] underline" href="https://app--nod-home-finder-25f2f5d9.base44.app/#">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal]" href="https://app--nod-home-finder-25f2f5d9.base44.app/#">
            Privacy Policy
          </span>
        </a>
        <span>{`  | `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid text-[#fbc632] underline" href="https://app--nod-home-finder-25f2f5d9.base44.app/#">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal]" href="https://app--nod-home-finder-25f2f5d9.base44.app/#">
            Terms of Service
          </span>
        </a>
      </p>
      <div className="absolute h-0 left-[90px] top-[354px] w-[1260px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(71, 85, 105, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1260 1">
            <line id="Line 1" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="0.5" x1="0.25" x2="1259.75" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function NodRealEstate() {
  return (
    <div className="bg-[#939393] relative size-full" data-name="NOD - Real Estate">
      <HeroSection />
      <BuiltOnPriciples />
      <HandPicked />
      <ReadyDreamHome />
      <OurClients />
      <LatestMarketIntelligence />
      <Footer />
    </div>
  );
}