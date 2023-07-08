'use client'

import Header from "@/components/header";
import Popup from "@/components/popup";
import Main from "@/components/main"
import Image from "next/image";
import Pix from '@/assets/pix.svg'

import InterBank from '@/assets/inter-bank-home.png'

export default function Home() {
  return (
    <body>
      <Header/>
      <Main/>
      <section className="py-12 bg-white w-full">
        <div className=" mx-[231.500px] px-[12px] py-12">
          <div className=" flex flex-row justify-between w-full">
            <main className=" px-3 w-[500px]">
              <h3 className=" font-sora leading-[50px] text-[#161616] font-semibold text-[40px] mb-5">Você muda para o Super App do Inter e para de mudar de aplicativo.</h3>
              <p className=" leading-[22px] text-[18px] text-[#58595B] font-normal">Quem tem conta no Inter tem  soluções <br/> completas para todos os momentos.</p>
              <div>
                <button className=" text-[14px] leading-[17px] font-bold pt-[6px] px-5 pb-[7px] mt-6 h-[46px] w-[360px] flex items-center justify-center outline-none border-none bg-[#FF7A00] text-white rounded-[7px] duration-[0.1s] ease-in-out hover:bg-[#ff8700]">Quero ser Inter</button>
              </div>
            </main>
            <aside className=" flex">
              <a href="" className="bg-[#f5f6fa] py-12 pl-6 h-[266px] font-sora mr-4 w-[348px] rounded-[10px] flex justify-between flex-col">
                <Image src={Pix} alt="" className=" w-[51px] h-[51px]" />
                <p className=" text-[24px] ml-2 mb-4">Pix</p>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className=" h-[613px] w-full bg-white">
        <div className="mx-[231.500px] px-12 py-3">
          <div className=" flex items-center justify-start ">
            <div className=" px-3 w-[576px] h-[514px] flex justify-end">
              <Image src={InterBank} alt=""/>
            </div>
            <div className=" w-[590px] h-[280px] ml-[110px] px-3">
              <p className=" leading-[30px] font-semibold text-[24px] text-[#6a6c72] mb-4">Inter Bank</p>
              <h3 className=" mb-5 font-sora leading-[50px] text-[40px] text-[#161616] font-semibold">Diferente, sem pegadinhas e sem anuidade: como você sempre quis</h3>
              <p className=" mt-6 mb-4 leading-[22px] text-[18px] text-[#6a6c72] font-sora">Planeje e invista no futuro do seu filho com a <a href="" className=" text-[#fa7a00] font-semibold">Conta Kids</a> ou abra uma <a href="" className=" text-[#fa7a00] font-semibold">Conta Digital</a> e com tudo que você precisa.</p>
            </div>
          </div>
        </div>
      </section>
      <Popup/>
    </body>
  );
}
