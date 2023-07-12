import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import EmpresasContent from './Contents/EmpresasContent'

export default function EmpresasLinks() {
  // Abrir os links do header
  const [isEmpresasLinksOpen, setIsEmpresasLinksOpen] = useState(false)

  const handleEmpresasLinkAcess = () => {
    const EmpresasArrow = document.getElementById(
      'EmpresasArrow',
    ) as HTMLImageElement
    const EmpresasLink = document.getElementById(
      'EmpresasLink',
    ) as HTMLDivElement

    setIsEmpresasLinksOpen(!isEmpresasLinksOpen)

    // Transicao da inter arrow
    EmpresasArrow.style.transition = 'all .2s ease-in-out'

    if (isEmpresasLinksOpen) {
      document.body.style.overflowY = 'scroll'
      EmpresasArrow.style.transform = 'rotate(0deg)'
      EmpresasLink.style.color = 'rgb(22, 22, 22)'
    } else {
      document.body.style.overflowY = 'hidden'
      EmpresasArrow.style.transform = 'rotate(-180deg)'
      EmpresasLink.style.color = '#ff7a00'
    }
  }

  return (
    <>
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
        <ChevronDown className=" ml-[5px] text-[#B6B7BB]" id="EmpresasArrow" />
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
                  desc4=""
                  desc5=""
                />

                <EmpresasContent
                  title="Cartão de débito e crédito"
                  desc1="Saiba mais"
                  desc2=""
                  desc3=""
                  desc4=""
                  desc5=""
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
                  desc2=""
                  desc3=""
                  desc4=""
                  desc5=""
                />

                <EmpresasContent
                  title="Global Account"
                  desc1="Lista VIP"
                  desc2="Câmbio"
                  desc3=""
                  desc4=""
                  desc5=""
                />

                <EmpresasContent
                  title="Serviços"
                  desc1="Folha de Pagamento"
                  desc2="Maquininha de cartão"
                  desc3=""
                  desc4=""
                  desc5=""
                />

                <EmpresasContent
                  title="Seguros"
                  desc1="Ver todos os seguros"
                  desc2=""
                  desc3=""
                  desc4=""
                  desc5=""
                />

                <EmpresasContent
                  title="Relacionamentos"
                  desc1="Programa de pontos"
                  desc2="Conta PJ Pro"
                  desc3="Conta PJ Enterprise"
                  desc4=""
                  desc5=""
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
