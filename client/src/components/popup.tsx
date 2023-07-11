'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronUp, ChevronRight, Search } from 'lucide-react'
import popupImage from '../assets/popup-image.png'
import Image from 'next/image'

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = async () => {
    const textoAjuda = document.getElementById(
      'TextoAjuda',
    ) as HTMLParagraphElement
    const BackgroundPopup = document.getElementById(
      'BackgroundPopup',
    ) as HTMLDivElement

    setIsOpen(!isOpen)

    if (textoAjuda && BackgroundPopup) {
      if (textoAjuda.innerHTML === 'Central de Ajuda') {
        textoAjuda.innerHTML = 'Olá, posso ajudar?'
        BackgroundPopup.style.background = '#F5F6FA'
      } else {
        textoAjuda.innerHTML = 'Central de Ajuda'
        BackgroundPopup.style.background = '#fff'
      }
    }
  }

  return (
    <main className="z-1">
      {/* Popup Fechado */}
      <div
        className="shadow-3xl fixed bottom-[3%] right-[12.7%] w-[223px] rounded-lg bg-white transition duration-500 ease-in-out"
        id="BackgroundPopup"
      >
        <div className="flex items-center p-[10px]">
          <Image src={popupImage} alt="" className="w-[34px]" />
          <div className="flex cursor-pointer" onClick={handleClick}>
            <p
              className="mx-2 font-inter text-[14px] font-bold leading-[17px] text-[#525252]"
              id="TextoAjuda"
            >
              Central de Ajuda
            </p>
            <div>
              <ChevronUp
                className={`h-[1em] w-[1em] text-[#FF7A00] ${
                  isOpen ? 'rotate-180' : ''
                }`}
                id="Flecha"
              />
            </div>
          </div>
        </div>

        {/* Popup Aberto */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className=" w-full overflow-hidden rounded-b-lg bg-[#f5f6fa] p-[10px]"
              id="PopupAberto"
              initial={{ height: 0 }}
              animate={{ height: '301px' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form
                action=""
                className="relative mb-2 flex w-full items-center"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Pesquisar"
                  className="h-8 w-full rounded-lg border-none pl-2 pr-12 text-[15px] font-bold outline-none placeholder:text-[12px] "
                />
                <Search className="absolute right-5 h-5 w-5 rounded-full bg-transparent p-0" />
              </form>
              <div className="mb-2">
                <a href="">
                  <div className="relative mb-2 w-full bg-white px-3 py-4">
                    <p className="text[#6a6c72] mb-4 font-inter text-[12.5px] font-normal leading-[15px]">
                      Posso ter uma Conta Conjunta?
                    </p>
                    <div className="flex gap-1">
                      <p className="mb-0 font-inter text-[10px] font-normal leading-[12px]">
                        Escrito por{' '}
                      </p>
                      <strong className="mb-0 font-inter text-[10px] font-normal leading-[12px] text-[#FF7A00]">
                        Babi.
                      </strong>
                      <ChevronRight className="absolute right-2 h-[17px] text-[#FF7A00]" />
                    </div>
                  </div>
                </a>
                <a href="" className="mb-2">
                  <div className="relative w-full  bg-white px-3 py-4">
                    <p className="text[#6a6c72] mb-4 font-inter text-[12.5px] font-normal leading-[15px]">
                      Como solicito abertura de Conta Digital?
                    </p>
                    <div className="flex gap-1">
                      <p className="mb-0 font-inter text-[10px] font-normal leading-[12px]">
                        Escrito por{' '}
                      </p>
                      <strong className="mb-0 font-inter text-[10px] font-normal leading-[12px] text-[#FF7A00]">
                        Babi.
                      </strong>
                      <ChevronRight className="absolute right-2 h-[17px] text-[#FF7A00]" />
                    </div>
                  </div>
                </a>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="h-8 w-full rounded-lg bg-[#FF7A00] text-[10.5px] font-bold leading-[12px] text-white"
                  >
                    Ver todas as respostas
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
