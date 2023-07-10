'use client'

import Image from "next/image";
import Link from "next/link";

import { Check, ChevronDown, Search, X } from "lucide-react";

import logo from "@/assets/logo.svg";
import segundaLogo from "@/assets/segundaLogo.svg";

import ptBr from '@/assets/brasil.svg'
import us from '@/assets/eua.svg'
import fogueteInter from '@/assets/fogueteInter.svg'
import seguroInter from '@/assets/seguroInter.svg'
import acessivelInter from '@/assets/accesivelInter.svg'


import { useState } from "react";
import { motion } from "framer-motion";

import '../styles/header.css'

export default function Header() {

  // Abrir o Login
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(!isOpen);
  };

  // Abrir o acessar
  const [isAcessOpen , setIsAcessOpen] = useState(false)

  const handleAcessClick = () => {
    setIsAcessOpen(!isAcessOpen)
  }

  // Abrir os links do header
  const [ isLinksOpen , setIsLinksOpen ] = useState(false) 

  const handleLinkAcess = () => {
    const InterArrow = document.getElementById('InterArrow') as HTMLImageElement
    const InterLink = document.getElementById('InterLink') as HTMLLinkElement

    setIsLinksOpen(!isLinksOpen)

    // Transicao da inter arrow
    InterArrow.style.transition = 'all .2s ease-in-out'
    
    if ( isLinksOpen ) {
      document.body.style.overflowY = 'scroll'
      InterArrow.style.transform = 'rotate(0deg)'
      InterLink.style.color = 'rgb(22, 22, 22)'
    } else {
      document.body.style.overflowY = 'hidden'
      InterArrow.style.transform = 'rotate(-180deg)'
      InterLink.style.color = '#ff7a00'
    }
  }

  // Dar "Check" no checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    const continueButton = document.getElementById('ContinueButton') as HTMLButtonElement

    if(isChecked) {
      continueButton.style.background = '#dedfe4'
      continueButton.style.cursor = 'default'
    } else {
      continueButton.style.background = '#ff7a00'
      continueButton.style.cursor = 'pointer'
    }
  };

  return (
    <>
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
              <div className=" flex" onClick={handleLinkAcess}>
                <Link href={"/"} className=" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter" id="InterLink">O Inter</Link>
                <ChevronDown className=" text-[#B6B7BB] ml-[5px]" id="InterArrow"/>
              </div>

              <div className=" flex py-[5] px-1 ml-[14px]">
                <Link href={"/"} className=" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter ">Pra você</Link>
                <ChevronDown className=" text-[#B6B7BB] ml-[5px]" />
              </div>

              <div className=" flex py-[5] px-1 ml-[14px]">
                <Link href={"/"} className=" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter ">Empresas</Link>
                <ChevronDown className=" text-[#B6B7BB] ml-[5px]" />
              </div>

              <div className=" flex py-[5] px-1 ml-[14px]">
                <Link href={"/"} className=" text-[14px] font-[rgb(22, 22, 22)] font-semibold font-inter ">Conteúdos</Link>
                <ChevronDown className=" text-[#B6B7BB] ml-[5px]" />
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
            <button className=" bg-[#FF7A00] text-white px-4 pt-[14px] pb-[15px] border-none rounded-lg h-12 font-bold text-[14px] leading-[14px] w-[136px]" onClick={handleLoginClick}>Abra sua conta</button>
            <button className=" border-[#FF7A00] border-x-[1px] border-y-[1px] px-4 pt-[14px] pb-[15px] rounded-lg h-12 text-[14px] leading-[14px] w-[89px] font-bold text-[#ff7b00]" onClick={handleAcessClick}>Acessar</button>
          </div>
          <div className=" flex justify-between items-center border-x-[1px] border-[rgb(222, 223, 228)] border-y-[1px] rounded-xl w-20 h-6 p-1">
            <a href="" className=" px-2 bg-[#dedfe4] rounded-[100px] h-4 w-8"> <Image src={ptBr} alt=""/></a>
            <a href="" className=" px-2"> <Image src={us} alt=""/></a>
          </div>
        </section>
      </header>

      {/* PopupLogin */}
      {isOpen && (
        <>
          <motion.div          
            className="fixed right-0 top-0 max-w-[596px] w-full min-h-[100vh] px-[100px] py-10 bg-white overflow-auto z-[10] flex items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className=" absolute right-[25px] top-0 z-[10] outline-none pt-6 px-[6px] pb-[1px]" onClick={handleLoginClick}>
              <X className="h-6 w-6 overflow-hidden"/>
            </button>
            <div className=" flex items-center justify-center flex-col w-full">
              <div className="px-3 py-2">
                <h2 className=" mt-4 mb-2 text-[20px] leading-[24px] text-[#161616] text-center font-inter font-semibold">Abra agora sua Conta Digital</h2>
              </div>
              <div className="block py-3 w-full">
                <form action="" className="">
                  <div className=" flex flex-col justify-center">
                    {/* Form nome */}
                    <div className="flex items-start flex-col justify-center mb-4 px-4 pb-1">
                      <label htmlFor="" className=" font-sora mb-1 text-[#6a6c72] leading-[15px] font-semibold text-[12px] ">Nome</label>
                      <input type="text" className=" block bg-[#f5f6fa] p-[10px] rounded-[4px] border-none text-[#161616] text-[14px] leading-[17px] w-full font-inter" placeholder="Digite seu nome"/>
                    </div>
                    
                    {/* Form telefone */}
                    <div className="flex items-start flex-col justify-center mb-4 px-4 pb-1">
                      <label htmlFor="" className=" font-sora mb-1 text-[#6a6c72] leading-[15px] font-semibold text-[12px] ">Telefone</label>
                      <input type="text" className=" block bg-[#f5f6fa] p-[10px] rounded-[4px] border-none text-[#161616] text-[14px] leading-[17px] w-full font-inter" placeholder="Digite seu telefone"/>
                    </div>

                    {/* Form email */}
                    <div className="flex items-start flex-col justify-center mb-4 px-4 pb-1">
                      <label htmlFor="" className=" font-sora mb-1 text-[#6a6c72] leading-[15px] font-semibold text-[12px] ">E-mail</label>
                      <input type="text" className=" block bg-[#f5f6fa] p-[10px] rounded-[4px] border-none text-[#161616] text-[14px] leading-[17px] w-full font-inter" placeholder="Digite seu e-mail"/>
                    </div>

                    {/* Form CPF */}
                    <div className="flex items-start flex-col justify-center mb-4 px-4 pb-1">
                      <label htmlFor="" className=" font-sora mb-1 text-[#6a6c72] leading-[15px] font-semibold text-[12px] ">CPF</label>
                      <input type="text" className=" block bg-[#f5f6fa] p-[10px] rounded-[4px] border-none text-[#161616] text-[14px] leading-[17px] w-full font-inter" placeholder="Digite seu CPF"/>
                    </div>

                    {/* Form data de nascimento */}
                    <div className="flex items-start flex-col justify-center px-4 pb-1">
                      <label htmlFor="" className=" font-sora mb-1 text-[#6a6c72] leading-[15px] font-semibold text-[12px] ">Data de nascimento</label>
                      <input type="text" className=" block bg-[#f5f6fa] p-[10px] rounded-[4px] border-none text-[#161616] text-[14px] leading-[17px] w-full font-inter" placeholder="dd/mm/aaaa"/>
                    </div>

                    {/* Form checkbox */}
                    <div className="flex my-[10px] px-3 pb-1 items-center justify-center">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="hidden"
                        id="CheckBox"
                      />
                      <div
                        className={`checkbox ${isChecked ? 'checked' : ''}`}
                        onClick={handleCheckboxChange}
                      >
                        {isChecked && <Check className="check-icon" />}
                      </div>
                      <label htmlFor="CheckBox" className=" text-[14px] leading-[17px] font-sorapl-[30px] w-[354px] h-[68px] relative pl-[25px] font-inter text-[#6a6c72]">
                        Autorizo o Inter a tratar meus dados pessoais para envio de comunicações sobre seus produtos e serviços e também estou de acordo com a <a href="" className="text-[#ff8700] font-bold hover:text-zinc-400">Política de Privacidade.</a>
                      </label>
                    </div>

                    {/* Botão para continuar */}
                    <div className=" flex justify-center">
                      <div className=" w-[386px] h-10 px-3 ">
                        <button className="pt-[6px] pb-[7px] px-5 bg-[#dedfe4] w-full text-[14px] leading-[17px] font-bold rounded-[8px] flex items-center justify-center text-white h-full" id="ContinueButton"> Continuar</button>
                      </div>
                    </div>

                    {/* Baixe o app */}
                    <div className=" flex items-center justify-center pt-4">
                      <div>
                        <span className="font-inter text-[#6a6c72] leading-[18px] text-[14px]">Já preencheu? <a href="" className=" font-bold text-[#FF7A00]">Agora baixe o app</a> </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 w-full h-full opacity-[0.5] z-2 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={handleLoginClick}
          >  
          </motion.div>
        </>
      )}

      {isAcessOpen && (
        <>
          <motion.div          
            className="fixed right-0 top-0 max-w-[596px] w-full min-h-[100vh] px-[64px] py-10 bg-white overflow-auto z-[10] flex items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Botão para fechar o popup */}
            <button className=" absolute right-[25px] top-0 z-[10] outline-none pt-6 px-[6px] pb-[1px]" onClick={handleAcessClick}>
              <X className="h-6 w-6 overflow-hidden"/>
            </button>

            <div className=" flex items-center justify-center flex-col w-full">
              <div className="px-3 py-2">

                {/* Textos acessasr */}
                <h3 className=" pb-6 text-[32px] leading-[40px] text-[#161616] text-left font-sora font-semibold">O internet banking <br /> 
                PF/MEI está de cara nova!
                </h3>
                <p className=" leading-[20px] text-[16px] text-[#161616] pb-2 font-inter">Mais segurança e praticidade para você aproveitar o Inter pelo app e no seu computador.</p>
                {/* Benefícios do acessar */}
                <div className="flex justify-center w-full">
                  <div className=" flex justify-between py-6 w-full">
                    <div className=" bg-[#F5F6FA] min-h-[129px] rounded-[9.6px] p-4">
                      <Image src={fogueteInter} alt=""/>
                      <div className="mt-12">
                        <span className="block  w-[97px] leading-[20px] font-semibold text-[16px] text-[#161616] font-inter">Simples</span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-between py-6 w-full">
                    <div className=" bg-[#F5F6FA] min-h-[129px] rounded-[9.6px] p-4">
                      <Image src={seguroInter} alt=""/>
                      <div className="mt-12">
                        <span className="block  w-[97px] leading-[20px] font-semibold text-[16px] text-[#161616] font-inter">Seguro</span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-between py-6 w-full">
                    <div className=" bg-[#F5F6FA] min-h-[129px] rounded-[9.6px] p-4">
                      <Image src={acessivelInter} alt=""/>
                      <div className="mt-12">
                        <span className="block  w-[97px] leading-[20px] font-semibold text-[16px] text-[#161616] font-inter">Acessível</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões para continuar */}
                <div className="pt-2">
                  <a href="" className=" bg-[#FF7A00] h-[50px] text-[14px] leading-[17px] font-bold pt-[6px] pb-[7px] px-5 flex items-center rounded-[6.4px] justify-center outline-none max-w-full text-center text-white select-none font-inter">Acessar minha conta digital PF / MEI</a>
                  <a href="" className="border-y-[1px] border-x-[1px] border-[#FF7A00] h-[50px] text-[14px] leading-[17px] font-bold pt-[6px] pb-[7px] px-5 flex items-center rounded-[6.4px] justify-center outline-none max-w-full text-center text-[#FF7A00] select-none mt-4 font-inter">Acessar minha conta digital PJ</a>
                </div>

                {/* Política de privacidade */}
                <div className=" mt-12 text-center">
                  <span className=" leading-[14px] text-[12px] font-inter"> 
                    Leia a nossa <a href="" className=" text-[#FF7A00] text-[12px] leading-[14px] text-center">Politica de Privacidade</a>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 w-full h-full opacity-[0.5] z-2 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={handleAcessClick}
          >
          </motion.div>
        </>
      )}

      {isLinksOpen && (
        <motion.div
          className="fixed top-[114px] left-0 w-full calcHeight z-10 bg-white py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-center">
            <div className="w-[1428px] h-[500px]">
              <div className=" mb-4">
                <div className=" flex items-center justify-between">
                  <p className=" font-sora font-semibold text-[20px]  leading-[25px] text-[#161616]">O Inter</p>
                  <X className=" cursor-pointer h-7 w-7 text-[#B6B7BB]" onClick={handleLinkAcess}/>
                </div>
              </div>
              <div className=" flex-wrap flex justify-between items-center">

                {/* 1° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Governança Corporativa</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Sustentabilidade</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Ética e Compliance</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Conheça as ações</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Conheça o Inter</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Pix</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Conheça o Pix</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Canais de atendimento</p>
                      <div>
                        <a href="" className="block font-inter text-[#FF7A00] font-semibold text-[14px] leading-snug w-[306px] h-[34px]">Conheça nossos canais oficiais de atendimento</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Open Financer</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Portabilidade de salário</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Privacidade de Dados</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Segurança</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11° Item do link */}
                <div className="mt-6 pr-3">
                  <div className="bg-transparent rounded-[8px] h-[130px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Carreiras</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12° Item do link (transparente) */}
                <div className="mt-6 pr-3 invisible">
                  <div className="bg-transparent rounded-[8px] h-[134px] w-[333px] border-y-[1px] border-x-[1px] border-[#dedfe4]">
                    <div className=" flex px-[15px] py-4 flex-col">
                      <p className=" mb-6 font-sora font-semibold">Carreiras</p>
                      <div>
                        <a href="" className=" font-inter text-[#FF7A00] font-semibold text-[14px] leading-[17px]">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </motion.div>
      )}

    </>
  )
}