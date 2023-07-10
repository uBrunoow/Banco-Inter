'use client'

type HeaderPraVoce2ContentProps = {
  title : string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
  desc7: string;
  desc8: string;
}

import '@/styles/headersLinks.css'

export default function PraVoceContent2(props : HeaderPraVoce2ContentProps) {

  const divStyleWidth2 = {
   width: '25%',
 }

  const divStyleHeight = {
    height: '268px',
  }

  return (
    <>
      {/* 2° Item do link */}
      <div className="mt-6 px-3" style={divStyleWidth2}>
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
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc7}</a>
            <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px] marginTop">{props.desc8}</a>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}