'use client'

type HeaderLinksContentProps = {
  title : string;
  desc: string;
}

export default function InterContent(props : HeaderLinksContentProps) {

  const divStyleWidth = {
    width: '25%',
  }

  const divStyleHeight = {
    height: '115px',
  }

  return (
    <>
      {/* 1° Item do link */}
      <div className="mt-6 px-3"  style={divStyleWidth}>
        <div className=" bg-transparent rounded-[8px] border-y-[1px] border-x-[1px] border-[#dedfe4]" style={divStyleHeight}>
          <div className=" flex px-[15px] py-4 flex-col">
            <p className=" mb-6 font-sora font-semibold text-[16px] leading-[20px] text-[#161616] "> {props.title} </p>
            <div className=" flex h-full flex-col justify-start cursor-pointer">
              <a href="" className="block font-inter text-[#FF7A00] font-bold text-[14px] leading-[17px]"> {props.desc}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}