import '@/styles/header.css'

type HeaderPraVoce3ContentProps = {
  title?: string
  desc1?: string
}

export default function PraVoceContent2(props: HeaderPraVoce3ContentProps) {
  const divStyleWidth2 = {
    width: '16.666666667%',
  }

  const divStyleHeight = {
    height: '93px',
  }

  return (
    <>
      <div className="mt-6 px-3" style={divStyleWidth2}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
