import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import PraVoceContent1 from '@/headersLinks/Contents/PraVoceContent.1'
import PraVoceContent2 from '@/headersLinks/Contents/PraVoceContent.2'
import PraVoceContent3 from '@/headersLinks/Contents/PraVoceContent.3'

export default function PraVoceLinks() {
  // Abrir os links do header
  const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = useState(false)

  const handlePraVoceLinkAcess = () => {
    const PraVoceArrow = document.getElementById(
      'PraVoceArrow',
    ) as HTMLImageElement
    const PraVoceLink = document.getElementById('PraVoceLink') as HTMLDivElement

    setIsPraVoceLinksOpen(!isPraVoceLinksOpen)

    // Transicao da inter arrow
    PraVoceArrow.style.transition = 'all .2s ease-in-out'

    if (isPraVoceLinksOpen) {
      document.body.style.overflowY = 'scroll'
      PraVoceArrow.style.transform = 'rotate(0deg)'
      PraVoceLink.style.color = 'rgb(22, 22, 22)'
    } else {
      document.body.style.overflowY = 'hidden'
      PraVoceArrow.style.transform = 'rotate(-180deg)'
      PraVoceLink.style.color = '#ff7a00'
    }
  }

  return (
    <>
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
        <ChevronDown className=" ml-[5px] text-[#B6B7BB]" id="PraVoceArrow" />
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
                  desc5=""
                  desc6=""
                />

                <PraVoceContent1
                  title="Inter Investl"
                  desc1="Investimentos"
                  desc2="Inter DTVM"
                  desc3=""
                  desc4=""
                  desc5=""
                  desc6=""
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
                  desc5=""
                  desc6=""
                  desc7=""
                  desc8=""
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
                  desc2=""
                  desc3=""
                  desc4=""
                  desc5=""
                  desc6=""
                />

                <PraVoceContent1
                  title="Câmbio"
                  desc1="Conheça"
                  desc2=""
                  desc3=""
                  desc4=""
                  desc5=""
                  desc6=""
                />

                <PraVoceContent2
                  title="Consórcio"
                  desc1="Consórcios Inter"
                  desc2="Consórcio Auto e Moto"
                  desc3="Imobiliário"
                  desc4=""
                  desc5=""
                  desc6=""
                  desc7=""
                  desc8=""
                />

                <PraVoceContent2
                  title="Relacionamento"
                  desc1="Inter One"
                  desc2="Inter Black"
                  desc3="Inter Wealth Management"
                  desc4=""
                  desc5=""
                  desc6=""
                  desc7=""
                  desc8=""
                />
              </div>

              <div className="widthHeight">
                <div className=" backgroundHeight"></div>
              </div>

              <div className="flexFuncionando2">
                <PraVoceContent3 title="Inter Cel" desc1="Saiba mais" />
                <PraVoceContent3 title="Inter Shop" desc1="Saiba mais" />
                <PraVoceContent3 title="Duo Gourmet" desc1="Saiba mais" />
                <PraVoceContent3 title="Inter Arcade" desc1="Saiba mais" />
                <PraVoceContent3 title="Viagens" desc1="Saiba mais" />
                <PraVoceContent3 title="Gift Card" desc1="Saiba mais" />
                <PraVoceContent3 title="Recarga" desc1="Saiba mais" />
              </div>
              <div className="bgTransparent"></div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
