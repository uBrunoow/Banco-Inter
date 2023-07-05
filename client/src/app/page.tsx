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
              <h1 className="mb-6 text-7xl font-semibold text-white pl-[6px] pt-[48px] pr-[12px]">
                Inter Day 2023
              </h1>
            </div>

            <div className=" pr-[12px] pl-[6px] mb-4">
              <p className=" mb-4 text-left text-xl leading-[25px] text-white">
                Um dia de Black Friday no meio de julho? <br /> O Inter Shop
                tem!
              </p>
              <span className=" font-bold text-[17px] text-white ">
                Faltam:
              </span>
            </div>

            <div>
              <div className=" flex ">
                <div className="flex flex-col w-[87px] h-[87px] bg-white rounded-[8px] items-center justify-center">
                  <span className=" text-[32px] leading-[32px] font-bold">
                    2
                  </span>
                  <span>dias</span>
                </div>

                <div className="flex flex-col w-[87px] h-[87px] bg-white rounded-[8px] items-center justify-center ml-6">
                  <span className=" text-[32px] leading-[32px] font-bold">
                    2
                  </span>
                  <span>horas</span>
                </div>

                <div className="flex flex-col w-[87px] h-[87px] bg-white rounded-[8px] items-center justify-center ml-6">
                  <span className=" text-[32px] leading-[32px] font-bold">
                    2
                  </span>
                  <span>minutos</span>
                </div>

                <div className="flex flex-col w-[87px] h-[87px] bg-white rounded-[8px] items-center justify-center ml-6">
                  <span className=" text-[32px] leading-[32px] font-bold">
                    2
                  </span>
                  <span>segundos</span>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className=" flex  items-center  justify-center text-[14px] leading-[17px] font-bold rounded-[8px] pt-[6px] pb-[7px] px-[20px] border-white bg-white mt-6 text-[#161616] w-[420px] h-12  "
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
