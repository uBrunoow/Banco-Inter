import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import InterContent from '@/headersLinks/Contents/InterContent'

export default function InterLinks() {
  // Abrir os links do header
  const [isInterLinksOpen, setIsInterLinksOpen] = useState(false)

  const handleInterLinkAcess = () => {
    const InterArrow = document.getElementById('InterArrow') as HTMLImageElement
    const InterLink = document.getElementById('InterLink') as HTMLDivElement

    setIsInterLinksOpen(!isInterLinksOpen)

    // Transicao da inter arrow
    InterArrow.style.transition = 'all .2s ease-in-out'

    if (isInterLinksOpen) {
      document.body.style.overflowY = 'scroll'
      InterArrow.style.transform = 'rotate(0deg)'
      InterLink.style.color = 'rgb(22, 22, 22)'
    } else {
      document.body.style.overflowY = 'hidden'
      InterArrow.style.transform = 'rotate(-180deg)'
      InterLink.style.color = '#ff7a00'
    }
  }

  return (
    <>
      <div className=" flex" onClick={handleInterLinkAcess}>
        <div
          className=" font-[rgb(22, 22, 22)] cursor-pointer font-inter text-[14px] font-semibold"
          id="InterLink"
        >
          O Inter
        </div>
        <ChevronDown className=" ml-[5px] text-[#B6B7BB]" id="InterArrow" />
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
                <InterContent title="Conheça o Inter" desc="Saiba mais" />
                <InterContent
                  title="Governança Corporativa"
                  desc="Saiba mais"
                />
                <InterContent title="Sustentabilidade" desc="Saiba mais" />
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
                <InterContent title="Privacidade de Dados" desc="Saiba mais" />
                <InterContent title="Segurança" desc="Saiba mais" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
