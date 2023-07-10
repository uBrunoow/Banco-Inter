'use client'

type HeaderPraVoce1ContentProps = {
  title : string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
}

import '@/styles/headersLinks.css'

export default function PraVoceContent1(props : HeaderPraVoce1ContentProps) {

  const divStyleWidth = {
    width: '16.66666667%',
  }

  const divStyleHeight = {
    height: '268px',
  }

  return (
    <>
      {/* 1° Item do link */}
      <div className="mt-6 px-3" style={divStyleWidth}>
        <div className=" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4]"  style={divStyleHeight}>
          <div className=" flex px-[15px] py-4 flex-col">
            <p className=" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] ">{props.title}</p>
            <div className="flex h-full flex-col justify-start cursor-pointer">
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]">{props.desc1}</a>
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc2}</a>
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc3}</a>
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc4}</a>
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc5}</a>
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc6}</a>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}