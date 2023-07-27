import React from 'react'
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  YoutubeIcon,
} from 'lucide-react'

function footer() {
  return (
    <>
      <section className="pb-[34px] pt-10">
        <div className="container mb-4 grid grid-cols-4 px-3">
          <div className="px-3">
            <div></div>
            <div></div>
            <div></div>
            <div>
              <h1>Siga o Inter</h1>
              <div>
                <Instagram className=" fill-black text-[#fff]" />
                <Linkedin className=" fill-black" />
                <Facebook className=" fill-black " />
                <Twitter className=" fill-black " />
                <YoutubeIcon className=" fill-black text-[#fff]" />
              </div>
            </div>
          </div>
          <div className="px-3">
            <ul className="">
              <li className="mb-4 h-5 font-sora text-[16px] font-bold leading-[20px]">
                Pra você
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Conta Digital Pessoa Física
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Cartão de Crédito
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Conta Digital PJ
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Conta Digital MEI
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Empréstimos e Crédito Imobiliário
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Inter Invest
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Inter Shop
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Seguros
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Super App
              </li>
            </ul>
          </div>
          <div className="px-3">
            <ul className="">
              <li className="mb-4 h-5 font-sora text-[16px] font-bold leading-[20px] ">
                Precisa de ajuda?
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Central de ajuda
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Canais de atendimento
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Ouvidoria
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                2ª via do boleto
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Saldo devedor
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Negocie sua dívida
              </li>
              <li className="mb-6 text-[12px] leading-[15px] text-[#6a6c72]">
                Blog
              </li>
            </ul>
          </div>
          <div className="px-3">
            <ul className="">
              <li className="mb-4 h-5 font-sora text-[16px] font-bold leading-[20px] ">
                Nossos números
              </li>
              <li className="mb-6 flex flex-col text-[12px] leading-[15px] text-[#6a6c72]">
                Capitais e regiões metropolitanas
                <a
                  href=""
                  className="font-inter text-[14px] font-semibold text-[#161616]"
                >
                  3003 4070
                </a>
              </li>
              <li className="mb-6 flex flex-col text-[12px] leading-[15px] text-[#6a6c72]">
                Demais localidades
                <a
                  href=""
                  className="font-inter text-[14px] font-semibold text-[#161616]"
                >
                  0800 940 0007
                </a>
              </li>
              <li className="mb-6 flex flex-col text-[12px] leading-[15px] text-[#6a6c72]">
                SAC
                <a
                  href=""
                  className="font-inter text-[14px] font-semibold text-[#161616]"
                >
                  0800 940 9999
                </a>
              </li>
              <li className="mb-6 flex flex-col text-[12px] leading-[15px] text-[#6a6c72]">
                Pessoa Com Deficiência de fala e audição
                <a
                  href=""
                  className="font-inter text-[14px] font-semibold text-[#161616]"
                >
                  0800 979 7099
                </a>
              </li>
              <li className="mb-6 flex flex-col text-[12px] leading-[15px] text-[#6a6c72]">
                Ouvidoria
                <a
                  href=""
                  className="font-inter text-[14px] font-semibold text-[#161616]"
                >
                  0800 940 7772
                </a>
              </li>
              <li className="mb-6 flex flex-col text-[12px] leading-[15px] text-[#6a6c72]">
                <span className=" font-bold">
                  Não ligamos pra você por esses telefones.
                </span>
                Também não solicitamos dados pessoais, senha da conta, código de
                transação por telefone. Estes números são apenas para você fazer
                ligações para o Inter.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default footer
