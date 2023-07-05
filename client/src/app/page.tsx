<<<<<<< HEAD
=======
import Logo from './assets/logo.svg'
import BR from './assets/brasil.svg'
import EUA from './assets/eua.svg'
>>>>>>> ea274ec04cee35e62156519478168f9e83fccb6f
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

import logo from '../assets/logo.svg'
import segundaLogo from '../assets/segundaLogo.svg'

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <>
      <header className="flex h-28 w-full items-center justify-center border-2 border-zinc-500">
        <nav className=" flex items-center justify-center gap-24">
          <div className="flex items-center justify-center">
            {/* Logo */}
            <div>
              <Image src={Logo} alt="" className="h-14 w-14" />
            </div>

            {/* Links */}
            <div className=" flex items-center justify-center">
              <div>
                <a
                  title="O Inter"
                  className="m-3 flex w-full items-center justify-center"
                >
                  <div>O Inter</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Pra você"
                  className=" m-3 flex w-full items-center justify-center"
                >
                  <div>Pra você</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Empresas"
                  className=" m-3 flex w-full items-center justify-center"
                >
                  <div>Empresas</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Conteúdos"
                  className="m-3 flex w-full items-center justify-center"
                >
                  <div>Conteúdos</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Portal RI"
                  className="m-3 flex w-full items-center justify-center"
                >
                  <div>Portal RI</div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Pesquisar */}
            <div className="m-7">
              <Search className="text-orange-500" />
            </div>

            {/* Login e Register */}
            <div className="flex gap-5">
              <button className=" h-12 w-36 rounded-lg bg-orange-400 text-zinc-50">
                Abra sua conta
              </button>
              <button className=" h-12 w-28 rounded-lg border-2 border-orange-400 text-orange-400">
                Acessar
              </button>
            </div>

            {/* PT-BR / US */}
            <div className="m-5 flex w-20 justify-center rounded-full border-2 border-zinc-400">
              <a
                href=""
                className="m-[3px] flex w-10 items-center justify-center rounded-full bg-zinc-400"
              >
                <Image src={BR} alt={''} />
              </a>
              <a
                href=""
                className="m-[3px] flex w-10 items-center justify-center rounded-full hover:bg-zinc-400  "
              >
                <Image src={EUA} alt={''} />
              </a>
            </div>
>>>>>>> ea274ec04cee35e62156519478168f9e83fccb6f
          </div>
        </section>
      </header>
<<<<<<< HEAD
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
=======

      <section>
        <div className=" bg-[url('./assets/bg-inter.png')]"></div>
      </section>
    </>
>>>>>>> ea274ec04cee35e62156519478168f9e83fccb6f
  )
}
