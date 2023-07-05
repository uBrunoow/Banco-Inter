import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

import logo from '../assets/logo.svg'
import segundaLogo from '../assets/segundaLogo.svg'

export default function Home() {
  return (
    <body>
      <header className=" ml-[231.500px] mr-[231.500px] pb-8 pl-3 pr-3 pt-8">
        <section className=" flex items-center">
          {/* Logos */}
          <div className=" flex flex-col items-center justify-center ">
            <a href="" className=" mb-2">
              <Image src={logo} alt="Logo" className=" h-[29px] w-[84px]" />
            </a>
            <Image src={segundaLogo} alt="" />
          </div>

          {/* Links */}
          <div className=" flex ">
            <div className=" flex">
              <Link href={'/'}>O inter</Link>
              <ChevronDown />
            </div>

            <div className=" flex">
              <Link href={'/'}>Pra você</Link>
              <ChevronDown />
            </div>

            <div className=" flex">
              <Link href={'/'}>Empresas</Link>
              <ChevronDown />
            </div>

            <div className=" flex">
              <Link href={'/'}>Conteúdos</Link>
              <ChevronDown />
            </div>

            <div className=" flex">
              <Link href={'/'}>Portal RI</Link>
              <ChevronDown />
            </div>
            {/* Usabilidades */}
            <div>Usabilidades</div>
          </div>
        </section>
      </header>
      <section className="flex h-[820px] items-center bg-[url('../assets/background.png')] bg-cover bg-right-center bg-no-repeat ">
        <div className="ml-[231.500px] mr-[231.500px] pb-8 pl-3 pr-3 pt-8">
          <div className="">
            <div>
              .{' '}
              <h1 className="mb-6 pl-[6px] pr-[12px] pt-[48px] text-7xl font-semibold text-white">
                Inter Day 2023
              </h1>
            </div>

            <div className=" mb-4 pl-[6px] pr-[12px]">
              <p className=" mb-4 text-left text-xl leading-[25px] text-white">
                Um dia de Black Friday no meio de julho? <br /> O Inter Shop
                tem!
              </p>
              <span className=" text-[17px] font-bold text-white ">
                Faltam:
              </span>
            </div>

            <div>
              <div className=" flex ">
                <div className="flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-white">
                  <span className=" text-[32px] font-bold leading-[32px]">
                    2
                  </span>
                  <span>dias</span>
                </div>

                <div className="ml-6 flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-white">
                  <span className=" text-[32px] font-bold leading-[32px]">
                    2
                  </span>
                  <span>horas</span>
                </div>

                <div className="ml-6 flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-white">
                  <span className=" text-[32px] font-bold leading-[32px]">
                    2
                  </span>
                  <span>minutos</span>
                </div>

                <div className="ml-6 flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-white">
                  <span className=" text-[32px] font-bold leading-[32px]">
                    2
                  </span>
                  <span>segundos</span>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className=" mt-6  flex  h-12 w-[420px] items-center justify-center rounded-[8px] border-white bg-white px-[20px] pb-[7px] pt-[6px] text-[14px] font-bold leading-[17px] text-[#161616]  "
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}
