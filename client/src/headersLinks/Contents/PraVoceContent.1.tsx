'use client'
import '@/styles/headersLinks.css'

type HeaderPraVoce1ContentProps = {
  title: string
  desc1: string
  desc2: string
  desc3: string
  desc4: string
  desc5: string
  desc6: string
}

export default function PraVoceContent1(props: HeaderPraVoce1ContentProps) {
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
        <div
          className=" rounded-[8px] border-x-[1px] border-y-[1px] border-[#dedfe4] bg-transparent"
          style={divStyleHeight}
        >
          <div className=" flex flex-col px-4 py-4">
            <p className=" mb-6 font-sora text-[16px] font-semibold leading-[20px] text-[#161616] ">
              {props.title}
            </p>
            <div className="flex h-full cursor-pointer flex-col justify-start">
              <a
                href=""
                className="block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc1}
              </a>
              <a
                href=""
                className="marginTop block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc2}
              </a>
              <a
                href=""
                className="marginTop block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc3}
              </a>
              <a
                href=""
                className="marginTop block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc4}
              </a>
              <a
                href=""
                className="marginTop block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc5}
              </a>
              <a
                href=""
                className="marginTop block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc6}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
