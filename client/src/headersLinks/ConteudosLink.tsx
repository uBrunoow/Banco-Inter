import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import ConteudosContent from './Contents/ConteudosContent'

export default function ConteudosLinks() {
  // Abrir os links do header
  const [isConteudosLinksOpen, setIsConteudosLinksOpen] = useState(false)

  const handleConteudosLinkAcess = () => {
    const ConteudosArrow = document.getElementById(
      'ConteudosArrow',
    ) as HTMLImageElement
    const ConteudosLink = document.getElementById(
      'ConteudosLink',
    ) as HTMLDivElement

    setIsConteudosLinksOpen(!isConteudosLinksOpen)

    // Transicao da inter arrow
    ConteudosArrow.style.transition = 'all .2s ease-in-out'

    if (isConteudosLinksOpen) {
      document.body.style.overflowY = 'scroll'
      ConteudosArrow.style.transform = 'rotate(0deg)'
      ConteudosLink.style.color = 'rgb(22, 22, 22)'
    } else {
      document.body.style.overflowY = 'hidden'
      ConteudosArrow.style.transform = 'rotate(-180deg)'
      ConteudosLink.style.color = '#ff7a00'
    }
  }

  return (
    <>
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
        <ChevronDown className=" ml-[5px] text-[#B6B7BB]" id="ConteudosArrow" />
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

                <ConteudosContent title="Inter Invest" desc="Saiba mais" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
