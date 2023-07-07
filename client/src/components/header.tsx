import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";

import logo from "../assets/logo.svg";
import segundaLogo from "../assets/segundaLogo.svg";
import ptBr from '../assets/brasil.svg'
import us from '../assets/eua.svg'

export default function Header() {
  return (
    <header className=" ml-[231.500px] mr-[231.500px] pb-8 pl-3 pr-3 pt-8 flex justify-between">
    <section className=" flex items-center gap-12">
      {/* Logos */}
      <div className=" flex flex-col items-center justify-center ">
        <a href="" className=" mb-2">
          <Image src={logo} alt="Logo" className=" h-[29px] w-[84px]" />
        </a>
        <Image src={segundaLogo} alt="" />
      </div>

      {/* Links */}
      <div className=" flex">
        <div className=" flex">
          <div className=" flex">
            <Link href={"/"} className=" text-[14px]  font-[rgb(22, 22, 22)] font-semibold font-inter">O Inter</Link>
            <ChevronDown className=" text-[#B6B7BB]"/>
          </div>

          <div className=" flex py-[5] px-1 ml-[14px]">
            <Link href={"/"} className=" text-[14px]  font-[rgb(22, 22, 22)] font-semibold font-inter">Pra você</Link>
            <ChevronDown className=" text-[#B6B7BB] ml-[5px]"/>
          </div>

          <div className=" flex py-[5] px-1 ml-[14px]">
            <Link href={"/"} className=" text-[14px]  font-[rgb(22, 22, 22)] font-semibold font-inter">Empresas</Link>
            <ChevronDown className=" text-[#B6B7BB]"/>
          </div>

          <div className=" flex py-[5] px-1 ml-[14px]">
            <Link href={"/"} className=" text-[14px]  font-[rgb(22, 22, 22)] font-semibold font-inter">Conteúdos</Link>
            <ChevronDown className=" text-[#B6B7BB]"/>
          </div>

          <div className=" flex py-[5] px-1 ml-[14px]">
            <Link href={"/"} className=" text-[14px]  font-[rgb(22, 22, 22)] font-semibold font-inter">Portal RI</Link>
          </div>
        </div>
      </div>
    </section>
    <section className=" flex items-center justify-center gap-7">
      <form action="">
        <Search className=" w-6 h-6 text-[#FF7A00]"/>
      </form>
      <div className=" flex items-center gap-[16px]">
        <button className=" bg-[#FF7A00] text-white px-4 pt-[14px] pb-[15px] border-none rounded-lg h-12 font-bold text-[14px] leading-[14px] w-[136px]">Abra sua conta</button>
        <button className=" border-[#FF7A00] border-x-[1px] border-y-[1px] px-4 pt-[14px] pb-[15px] rounded-lg h-12 text-[14px] leading-[14px] w-[89px] font-bold text-[#FF7A00]">Acessar</button>
      </div>
      <div className=" flex justify-between items-center border-x-[1px] border-[rgb(222, 223, 228)] border-y-[1px] rounded-xl w-20 h-6 p-1">
        <a href="" className=" px-2 bg-[#dedfe4] rounded-[100px] h-4 w-8"> <Image src={ptBr} alt=""/></a>
        <a href="" className=" px-2"> <Image src={us} alt=""/></a>
      </div>
    </section>
  </header>
  )
}