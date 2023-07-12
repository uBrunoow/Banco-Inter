'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Check, Search, X } from 'lucide-react'

import logo from '@/assets/logo.svg'
import segundaLogo from '@/assets/segundaLogo.svg'

import ptBr from '@/assets/brasil.svg'
import us from '@/assets/eua.svg'
import fogueteInter from '@/assets/fogueteInter.svg'
import seguroInter from '@/assets/seguroInter.svg'
import acessivelInter from '@/assets/accesivelInter.svg'

import { useState } from 'react'
import { motion } from 'framer-motion'

import '../styles/header.css'
import InterLinks from '@/headersLinks/InterLinks'
import PraVoceLinks from '@/headersLinks/PraVoceLinks'
import EmpresasLinks from '@/headersLinks/EmpresasLink'
import ConteudosLinks from '@/headersLinks/ConteudosLink'

export default function Header() {
  // Abrir o Login
  const [isOpen, setIsOpen] = useState(false)

  const handleLoginClick = () => {
    setIsOpen(!isOpen)
  }

  // Abrir o acessar
  const [isAcessOpen, setIsAcessOpen] = useState(false)

  const handleAcessClick = () => {
    setIsAcessOpen(!isAcessOpen)
  }

  // Dar "Check" no checkbox
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)

    const continueButton = document.getElementById(
      'ContinueButton',
    ) as HTMLButtonElement

    if (isChecked) {
      continueButton.style.background = '#dedfe4'
      continueButton.style.cursor = 'default'
    } else {
      continueButton.style.background = '#ff7a00'
      continueButton.style.cursor = 'pointer'
    }
  }

  return (
    <>
      <header className=" ml-[231.500px] mr-[231.500px] flex justify-between pb-8 pl-3 pr-3 pt-8">
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
              {/* Link do Inter */}
              <InterLinks />

              {/* Links do Pra você */}
              <PraVoceLinks />

              {/* Links do Empresas */}
              <EmpresasLinks />

              {/* Links do Conteudos */}
              <ConteudosLinks />

              <div className=" ml-[14px] flex px-1 py-[5]">
                <Link
                  href={'/'}
                  className=" font-[rgb(22,  22, 22)] font-inter text-[14px] font-semibold"
                >
                  Portal RI
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex items-center justify-center gap-7">
          <form action="">
            <Search className=" h-6 w-6 text-[#FF7A00]" />
          </form>
          <div className=" flex items-center gap-[16px]">
            <button
              className=" h-12 w-[136px] rounded-lg border-none bg-[#FF7A00] px-4 pb-[15px] pt-[14px] text-[14px] font-bold leading-[14px] text-white"
              onClick={handleLoginClick}
            >
              Abra sua conta
            </button>
            <button
              className=" h-12 w-[89px] rounded-lg border-x-[1px] border-y-[1px] border-[#FF7A00] px-4 pb-[15px] pt-[14px] text-[14px] font-bold leading-[14px] text-[#ff7b00]"
              onClick={handleAcessClick}
            >
              Acessar
            </button>
          </div>
          <div className=" border-[rgb(222, 223, 228)] flex h-6 w-20 items-center justify-between rounded-xl border-x-[1px] border-y-[1px] p-1">
            <a href="" className=" h-4 w-8 rounded-[100px] bg-[#dedfe4] px-2">
              {' '}
              <Image src={ptBr} alt="" />
            </a>
            <a href="" className=" px-2">
              {' '}
              <Image src={us} alt="" />
            </a>
          </div>
        </section>
      </header>

      {/* PopupLogin */}
      {isOpen && (
        <>
          <motion.div
            className="fixed right-0 top-0 z-[1000] flex min-h-[100vh] w-full max-w-[596px] items-center justify-center overflow-auto bg-white px-[100px] py-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className=" absolute right-[25px] top-0 z-[10] px-[6px] pb-[1px] pt-6 outline-none"
              onClick={handleLoginClick}
            >
              <X className="h-6 w-6 overflow-hidden" />
            </button>
            <div className=" flex w-full flex-col items-center justify-center">
              <div className="px-3 py-2">
                <h2 className=" mb-2 mt-4 text-center font-inter text-[20px] font-semibold leading-[24px] text-[#161616]">
                  Abra agora sua Conta Digital
                </h2>
              </div>
              <div className="block w-full py-3">
                <form action="" className="">
                  <div className=" flex flex-col justify-center">
                    {/* Form nome */}
                    <div className="mb-4 flex flex-col items-start justify-center px-4 pb-1">
                      <label
                        htmlFor=""
                        className=" mb-1 font-sora text-[12px] font-semibold leading-[15px] text-[#6a6c72] "
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        className=" block w-full rounded-[4px] border-none bg-[#f5f6fa] p-[10px] font-inter text-[14px] leading-[17px] text-[#161616]"
                        placeholder="Digite seu nome"
                      />
                    </div>

                    {/* Form telefone */}
                    <div className="mb-4 flex flex-col items-start justify-center px-4 pb-1">
                      <label
                        htmlFor=""
                        className=" mb-1 font-sora text-[12px] font-semibold leading-[15px] text-[#6a6c72] "
                      >
                        Telefone
                      </label>
                      <input
                        type="text"
                        className=" block w-full rounded-[4px] border-none bg-[#f5f6fa] p-[10px] font-inter text-[14px] leading-[17px] text-[#161616]"
                        placeholder="Digite seu telefone"
                      />
                    </div>

                    {/* Form email */}
                    <div className="mb-4 flex flex-col items-start justify-center px-4 pb-1">
                      <label
                        htmlFor=""
                        className=" mb-1 font-sora text-[12px] font-semibold leading-[15px] text-[#6a6c72] "
                      >
                        E-mail
                      </label>
                      <input
                        type="text"
                        className=" block w-full rounded-[4px] border-none bg-[#f5f6fa] p-[10px] font-inter text-[14px] leading-[17px] text-[#161616]"
                        placeholder="Digite seu e-mail"
                      />
                    </div>

                    {/* Form CPF */}
                    <div className="mb-4 flex flex-col items-start justify-center px-4 pb-1">
                      <label
                        htmlFor=""
                        className=" mb-1 font-sora text-[12px] font-semibold leading-[15px] text-[#6a6c72] "
                      >
                        CPF
                      </label>
                      <input
                        type="text"
                        className=" block w-full rounded-[4px] border-none bg-[#f5f6fa] p-[10px] font-inter text-[14px] leading-[17px] text-[#161616]"
                        placeholder="Digite seu CPF"
                      />
                    </div>

                    {/* Form data de nascimento */}
                    <div className="flex flex-col items-start justify-center px-4 pb-1">
                      <label
                        htmlFor=""
                        className=" mb-1 font-sora text-[12px] font-semibold leading-[15px] text-[#6a6c72] "
                      >
                        Data de nascimento
                      </label>
                      <input
                        type="text"
                        className=" block w-full rounded-[4px] border-none bg-[#f5f6fa] p-[10px] font-inter text-[14px] leading-[17px] text-[#161616]"
                        placeholder="dd/mm/aaaa"
                      />
                    </div>

                    {/* Form checkbox */}
                    <div className="my-[10px] flex items-center justify-center px-3 pb-1">
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
                      <label
                        htmlFor="CheckBox"
                        className=" font-sorapl-[30px] relative h-[68px] w-[354px] pl-[25px] font-inter text-[14px] leading-[17px] text-[#6a6c72]"
                      >
                        Autorizo o Inter a tratar meus dados pessoais para envio
                        de comunicações sobre seus produtos e serviços e também
                        estou de acordo com a{' '}
                        <a
                          href=""
                          className="font-bold text-[#ff8700] hover:text-zinc-400"
                        >
                          Política de Privacidade.
                        </a>
                      </label>
                    </div>

                    {/* Botão para continuar */}
                    <div className=" flex justify-center">
                      <div className=" h-10 w-[386px] px-3 ">
                        <button
                          className="flex h-full w-full items-center justify-center rounded-[8px] bg-[#dedfe4] px-5 pb-[7px] pt-[6px] text-[14px] font-bold leading-[17px] text-white"
                          id="ContinueButton"
                        >
                          {' '}
                          Continuar
                        </button>
                      </div>
                    </div>

                    {/* Baixe o app */}
                    <div className=" flex items-center justify-center pt-4">
                      <div>
                        <span className="font-inter text-[14px] leading-[18px] text-[#6a6c72]">
                          Já preencheu?{' '}
                          <a href="" className=" font-bold text-[#FF7A00]">
                            Agora baixe o app
                          </a>{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="fixed left-0 top-0 z-[999] h-full w-full bg-black opacity-[0.5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={handleLoginClick}
          ></motion.div>
        </>
      )}

      {isAcessOpen && (
        <>
          <motion.div
            className="fixed right-0 top-0 z-[1000] flex min-h-[100vh] w-full max-w-[596px] items-center justify-center overflow-auto bg-white px-[64px] py-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Botão para fechar o popup */}
            <button
              className=" absolute right-[25px] top-0 z-[10] px-[6px] pb-[1px] pt-6 outline-none"
              onClick={handleAcessClick}
            >
              <X className="h-6 w-6 overflow-hidden" />
            </button>

            <div className=" flex w-full flex-col items-center justify-center">
              <div className="px-3 py-2">
                {/* Textos acessasr */}
                <h3 className=" pb-6 text-left font-sora text-[32px] font-semibold leading-[40px] text-[#161616]">
                  O internet banking <br />
                  PF/MEI está de cara nova!
                </h3>
                <p className=" pb-2 font-inter text-[16px] leading-[20px] text-[#161616]">
                  Mais segurança e praticidade para você aproveitar o Inter pelo
                  app e no seu computador.
                </p>
                {/* Benefícios do acessar */}
                <div className="flex w-full justify-center">
                  <div className=" flex w-full justify-between py-6">
                    <div className=" min-h-[129px] rounded-[9.6px] bg-[#F5F6FA] p-4">
                      <Image src={fogueteInter} alt="" />
                      <div className="mt-12">
                        <span className="block  w-[97px] font-inter text-[16px] font-semibold leading-[20px] text-[#161616]">
                          Simples
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex w-full justify-between py-6">
                    <div className=" min-h-[129px] rounded-[9.6px] bg-[#F5F6FA] p-4">
                      <Image src={seguroInter} alt="" />
                      <div className="mt-12">
                        <span className="block  w-[97px] font-inter text-[16px] font-semibold leading-[20px] text-[#161616]">
                          Seguro
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex w-full justify-between py-6">
                    <div className=" min-h-[129px] rounded-[9.6px] bg-[#F5F6FA] p-4">
                      <Image src={acessivelInter} alt="" />
                      <div className="mt-12">
                        <span className="block  w-[97px] font-inter text-[16px] font-semibold leading-[20px] text-[#161616]">
                          Acessível
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões para continuar */}
                <div className="pt-2">
                  <a
                    href=""
                    className=" flex h-[50px] max-w-full select-none items-center justify-center rounded-[6.4px] bg-[#FF7A00] px-5 pb-[7px] pt-[6px] text-center font-inter text-[14px] font-bold leading-[17px] text-white outline-none"
                  >
                    Acessar minha conta digital PF / MEI
                  </a>
                  <a
                    href=""
                    className="mt-4 flex h-[50px] max-w-full select-none items-center justify-center rounded-[6.4px] border-x-[1px] border-y-[1px] border-[#FF7A00] px-5 pb-[7px] pt-[6px] text-center font-inter text-[14px] font-bold leading-[17px] text-[#FF7A00] outline-none"
                  >
                    Acessar minha conta digital PJ
                  </a>
                </div>

                {/* Política de privacidade */}
                <div className=" mt-12 text-center">
                  <span className=" font-inter text-[12px] leading-[14px]">
                    Leia a nossa{' '}
                    <a
                      href=""
                      className=" text-center text-[12px] leading-[14px] text-[#FF7A00]"
                    >
                      Politica de Privacidade
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="fixed left-0 top-0 z-[999] h-full w-full bg-black opacity-[0.5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={handleAcessClick}
          ></motion.div>
        </>
      )}
    </>
  )
}
