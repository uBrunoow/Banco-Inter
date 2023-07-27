'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Check, ChevronDown, Search, X } from 'lucide-react'

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
import { useAppContext } from '@/context/AppContext'
import InterContent from '@/headersLinks/Contents/InterContent'
import PraVoceContent1 from '@/headersLinks/Contents/PraVoceContent.1'
import PraVoceContent2 from '@/headersLinks/Contents/PraVoceContent.2'
import PraVoceContent3 from '@/headersLinks/Contents/PraVoceContent.3'
import EmpresasContent from '@/headersLinks/Contents/EmpresasContent'
import ConteudosContent from '@/headersLinks/Contents/ConteudosContent'

export default function Header() {
  // Open inter link
  const { isInterLinksOpen, setIsInterLinksOpen } = useAppContext()
  const handleInterLinkAcess = () => {
    setIsInterLinksOpen(!isInterLinksOpen)
    setIsPraVoceLinksOpen(false)
    setIsEmpresasLinksOpen(false)
    setIsConteudosLinksOpen(false)
  }

  // -------------------- //

  // Open pra voce link
  const { isPraVoceLinksOpen, setIsPraVoceLinksOpen } = useAppContext()
  const handlePraVoceLinkAcess = () => {
    setIsPraVoceLinksOpen(!isPraVoceLinksOpen)
    setIsInterLinksOpen(false)
    setIsEmpresasLinksOpen(false)
    setIsConteudosLinksOpen(false)
  }

  // -------------------- //

  // Open empresas link
  const { isEmpresasLinksOpen, setIsEmpresasLinksOpen } = useAppContext()
  const handleEmpresasLinkAcess = () => {
    setIsEmpresasLinksOpen(!isEmpresasLinksOpen)
    setIsInterLinksOpen(false)
    setIsPraVoceLinksOpen(false)
    setIsConteudosLinksOpen(false)
  }

  // -------------------- //

  // Abrir os links do header
  const { isConteudosLinksOpen, setIsConteudosLinksOpen } = useAppContext()

  const handleConteudosLinkAcess = () => {
    setIsConteudosLinksOpen(!isConteudosLinksOpen)
    setIsInterLinksOpen(false)
    setIsPraVoceLinksOpen(false)
    setIsEmpresasLinksOpen(false)
  }

  // -------------------- //

  // Abrir o Login
  const { isOpen, setIsOpen } = useAppContext()
  const handleLoginClick = () => {
    setIsOpen(!isOpen)
  }

  // -------------------- //

  // Abrir o acessar
  const { isAcessOpen, setIsAcessOpen } = useAppContext()
  const handleAcessClick = () => {
    setIsAcessOpen(!isAcessOpen)
  }

  // -------------------- //

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
      <header className="container flex justify-between pb-8 pl-3 pr-3 pt-8">
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
              <div className=" flex" onClick={handleInterLinkAcess}>
                <div
                  className=" font-[rgb(22, 22, 22)] cursor-pointer font-inter text-[14px] font-semibold"
                  id="InterLink"
                >
                  O Inter
                </div>
                <ChevronDown
                  className=" ml-[5px] text-[#B6B7BB]"
                  id="InterArrow"
                />
              </div>

              {isInterLinksOpen && (
                <motion.div
                  className="calcHeight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="alturaPreDefinida">
                      <div className=" mb-4 px-3">
                        <div className=" flex items-center justify-between">
                          <p className=" cursor-pointer font-sora text-[20px] font-semibold leading-[25px] text-[#161616]">
                            O Inter
                          </p>
                          <X
                            className=" h-7 w-7 cursor-pointer text-[#B6B7BB]"
                            onClick={handleInterLinkAcess}
                          />
                        </div>
                      </div>
                      <div className=" flexFuncionando">
                        <InterContent
                          title="Conheça o Inter"
                          desc="Saiba mais"
                        />
                        <InterContent
                          title="Governança Corporativa"
                          desc="Saiba mais"
                        />
                        <InterContent
                          title="Sustentabilidade"
                          desc="Saiba mais"
                        />
                        <InterContent
                          title="Ética e Compliance"
                          desc="Conheça as ações"
                        />
                        <InterContent title="Pix" desc="Conheça o Pix" />
                        <InterContent
                          title="Canais de atendimento"
                          desc="Conheça nossos canais oficiais de atendimento"
                        />
                        <InterContent title="Open Finance" desc="Saiba mais" />
                        <InterContent title="Carreiras" desc="Saiba mais" />
                        <InterContent
                          title="Portabilidade de salário"
                          desc="Saiba mais"
                        />
                        <InterContent
                          title="Privacidade de Dados"
                          desc="Saiba mais"
                        />
                        <InterContent title="Segurança" desc="Saiba mais" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Links do Pra você */}
              <div
                className=" ml-[14px] flex px-1 py-[5]"
                onClick={handlePraVoceLinkAcess}
              >
                <div
                  className=" font-[rgb(22, 22, 22)] cursor-pointer font-inter text-[14px] font-semibold "
                  id="PraVoceLink"
                >
                  Pra você
                </div>
                <ChevronDown
                  className=" ml-[5px] text-[#B6B7BB]"
                  id="PraVoceArrow"
                />
              </div>

              {isPraVoceLinksOpen && (
                <motion.div
                  className="calcHeight "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center ">
                    <div className="alturaPreDefinida ">
                      <div className=" px-3 ">
                        <div className=" marginBottom">
                          <p className=" cursor-pointer font-sora text-[20px] font-semibold leading-[25px] text-[#161616]">
                            Pra você
                          </p>
                          <X
                            className=" h-7 w-7 cursor-pointer text-[#B6B7BB]"
                            onClick={handlePraVoceLinkAcess}
                          />
                        </div>
                        <div className="font-sora text-[16px] font-semibold  leading-[25px] text-[#161616]">
                          Tudo em sua conta
                        </div>
                      </div>
                      <div className=" flexFuncionando">
                        <PraVoceContent1
                          title="Conta Digital"
                          desc1="Conta Digital"
                          desc2="Conta Kids"
                          desc3="Inter You"
                          desc4="Indique e Ganhe"
                        />

                        <PraVoceContent1
                          title="Inter Investl"
                          desc1="Investimentos"
                          desc2="Inter DTVM"
                        />

                        <PraVoceContent1
                          title="Cartões"
                          desc1="Cartão de Crédito"
                          desc2="Programa de Pontos"
                          desc3="Cartão Platinum"
                          desc4="Cartão Black"
                          desc5="Cartão INSS"
                          desc6="Carteiras Digitais"
                        />

                        <PraVoceContent2
                          title="Empréstimos"
                          desc1="Com Garantia de Imóvel"
                          desc2="Consignado Público"
                          desc3="Consignado INSS"
                          desc4="Portabilidade de consignado"
                          desc5="Antecipação de FGTS"
                          desc6="Consignado Empresa Privada"
                          desc7="Cheque Especial"
                          desc8="Todas modalidades de crédito"
                        />

                        <PraVoceContent2
                          title="Financiamento"
                          desc1="Financiamento imobiliário"
                          desc2="Portabilidade de Financiamento Imobiliário"
                          desc3="Financiamento para Construção"
                          desc4="Financiamento Imobiliário nos EUA"
                        />

                        <PraVoceContent1
                          title="Seguros"
                          desc1="Seguros"
                          desc2="Seguro Pix"
                          desc3="Plano Odontológico"
                          desc4="Planos de saúde"
                          desc5="Plano de saúde Pet"
                          desc6="Doutor Inter"
                        />

                        <PraVoceContent1
                          title="Global Account"
                          desc1="Conheça"
                        />

                        <PraVoceContent1 title="Câmbio" desc1="Conheça" />

                        <PraVoceContent2
                          title="Consórcio"
                          desc1="Consórcios Inter"
                          desc2="Consórcio Auto e Moto"
                          desc3="Imobiliário"
                        />

                        <PraVoceContent2
                          title="Relacionamento"
                          desc1="Inter One"
                          desc2="Inter Black"
                          desc3="Inter Wealth Management"
                        />
                      </div>

                      <div className="widthHeight">
                        <div className=" backgroundHeight"></div>
                      </div>

                      <div className="flexFuncionando2">
                        <PraVoceContent3 title="Inter Cel" desc1="Saiba mais" />
                        <PraVoceContent3
                          title="Inter Shop"
                          desc1="Saiba mais"
                        />
                        <PraVoceContent3
                          title="Duo Gourmet"
                          desc1="Saiba mais"
                        />
                        <PraVoceContent3
                          title="Inter Arcade"
                          desc1="Saiba mais"
                        />
                        <PraVoceContent3 title="Viagens" desc1="Saiba mais" />
                        <PraVoceContent3 title="Gift Card" desc1="Saiba mais" />
                        <PraVoceContent3 title="Recarga" desc1="Saiba mais" />
                      </div>
                      <div className="bgTransparent"></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Links do Empresas */}
              <div
                className="  ml-[14px] flex px-1 py-[5]"
                onClick={handleEmpresasLinkAcess}
              >
                <div
                  className=" font-[rgb(22, 22, 22)] cursor-pointer font-inter text-[14px] font-semibold"
                  id="EmpresasLink"
                >
                  Empresas
                </div>
                <ChevronDown
                  className=" ml-[5px] text-[#B6B7BB]"
                  id="EmpresasArrow"
                />
              </div>

              {isEmpresasLinksOpen && (
                <motion.div
                  className="calcHeight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="alturaPreDefinida">
                      <div className=" mb-4 px-3">
                        <div className=" marginBottom">
                          <p className=" font-sora text-[20px] font-semibold  leading-[25px] text-[#161616]">
                            Empresas
                          </p>
                          <X
                            className=" h-7 w-7 cursor-pointer text-[#B6B7BB]"
                            onClick={handleEmpresasLinkAcess}
                          />
                        </div>
                        <div className="font-sora text-[16px] font-semibold  leading-[25px] text-[#161616]">
                          Tudo o que a sua empresa precisa
                        </div>
                      </div>
                      <div className=" flexFuncionando">
                        <EmpresasContent
                          title="Conta Digital"
                          desc1="Pessoa Jurídica"
                          desc2="Micro Empreendedor (MEI)"
                          desc3="Conta condomínio"
                        />

                        <EmpresasContent
                          title="Cartão de débito e crédito"
                          desc1="Saiba mais"
                        />

                        <EmpresasContent
                          title="Empréstimos"
                          desc1="Antecipação de Recebíveis"
                          desc2="Empréstimo Corporativo"
                          desc3="Home Equity"
                          desc4="Financiamento Imobiliário"
                          desc5="Empréstimo Consignado Privado"
                        />

                        <EmpresasContent
                          title="Investimentos"
                          desc1="Saiba mais"
                        />

                        <EmpresasContent
                          title="Global Account"
                          desc1="Lista VIP"
                          desc2="Câmbio"
                        />

                        <EmpresasContent
                          title="Serviços"
                          desc1="Folha de Pagamento"
                          desc2="Maquininha de cartão"
                        />

                        <EmpresasContent
                          title="Seguros"
                          desc1="Ver todos os seguros"
                        />

                        <EmpresasContent
                          title="Relacionamentos"
                          desc1="Programa de pontos"
                          desc2="Conta PJ Pro"
                          desc3="Conta PJ Enterprise"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Links do Conteudos */}
              <div
                className="  ml-[14px] flex px-1 py-[5]"
                onClick={handleConteudosLinkAcess}
              >
                <div
                  className=" font-[rgb(22, 22, 22)] cursor-pointer font-inter text-[14px] font-semibold"
                  id="ConteudosLink"
                >
                  Conteudos
                </div>
                <ChevronDown
                  className=" ml-[5px] text-[#B6B7BB]"
                  id="ConteudosArrow"
                />
              </div>

              {isConteudosLinksOpen && (
                <motion.div
                  className="calcHeight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="alturaPreDefinida">
                      <div className=" mb-4 px-3">
                        <div className=" flex items-center justify-between ">
                          <p className=" font-sora text-[20px] font-semibold  leading-[25px] text-[#161616]">
                            Conteudos
                          </p>
                          <X
                            className=" h-7 w-7 cursor-pointer text-[#B6B7BB]"
                            onClick={handleConteudosLinkAcess}
                          />
                        </div>
                      </div>
                      <div className=" flexFuncionando">
                        <ConteudosContent title="Blog" desc="Saiba mais" />

                        <ConteudosContent
                          title="Inter Invest"
                          desc="Saiba mais"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

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
