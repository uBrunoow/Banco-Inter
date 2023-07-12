type HeaderConteudosContentProps = {
  title: string
  desc: string
}

export default function ConteudosContent(props: HeaderConteudosContentProps) {
  const divStyleWidth = {
    width: '25%',
  }

  const divStyleHeight = {
    height: '95px',
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
            <div className=" flex h-full cursor-pointer flex-col justify-start">
              <a
                href=""
                className=" block font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00]"
              >
                {props.desc}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
