'use client'

import { ChevronUp } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Search } from "lucide-react";
import popupImage from '../assets/popup-image.png'

import Image from "next/image";

export default function Popup() {

  function OpenPopup() {
    var myImage = document.getElementById("Flecha") as HTMLImageElement; // Pegar a variavel da flecha
    var detalhes = document.getElementById("PopupAberto") as HTMLDivElement; // Pegar a variavel dos detalhes
    var textoAjuda = document.getElementById('TextoAjuda') as HTMLParagraphElement // Pegar a variavel do texto
    var BackgroundPopup = document.getElementById('BackgroundPopup') as HTMLDivElement // Pegar a variavel do background

    if (myImage.style.transform == "rotate(180deg)") {
      myImage.style.transform = "rotate(0deg)";
    } else {
      myImage.style.transform = "rotate(180deg)";
    }

    if (detalhes.style.display == "block") {
      detalhes.style.display = "none";
      textoAjuda.innerHTML = 'Central de ajuda'
      BackgroundPopup.style.background = '#fff'
      
    } else {
      detalhes.style.display = "block";
      textoAjuda.innerHTML = 'Olá, posso ajudar?'
      BackgroundPopup.style.background = '#F5F6FA'
    }
  }
  
  return (
    <main>
      {/* Popup Fechado */}
      <div className=" bg-white rounded-lg fixed right-[12.7%] bottom-[3%] w-[223px] transition duration-500 ease-in-out shadow-3xl" id="BackgroundPopup">
        <div className="flex items-center p-[10px] ">
          <Image src={popupImage} alt="" className=" w-[34px]"/>
          <div className=" flex cursor-pointer" onClick={OpenPopup}>
            <p className=" mx-2 font-bold leading-[17px] text-[14px] text-[#525252] font-inter" id="TextoAjuda">Central de Ajuda</p>
            <div>
              <ChevronUp className=" h-[1em] w-[1em] text-[#FF7A00]" id="Flecha"/>
            </div>
          </div>
      </div>

        {/* Popup Aberto */}
        <div className="h-[301px] rounded-b-lg w-full bg-[#f5f6fa] p-[10px] hidden" id="PopupAberto">
          <form action="" className=" w-full relative flex items-center mb-2">
            <input type="text" name="" id="" placeholder="Pesquisar" className=" w-full border-none outline-none h-8 pl-2 pr-12 text-[15px] rounded-lg font-bold placeholder:text-[12px] "/>
            <Search className=" rounded-full p-0 right-5 h-5 w-5 bg-transparent absolute"/>
          </form>
          <div className=" mb-2">
            <a href="">
              <div className="w-full bg-white mb-2 py-4 px-3 relative">
                <p className=" text-[12.5px] font-normal leading-[15px] mb-4 font-inter text[#6a6c72]">Posso ter uma Conta Conjunta?</p>
                <div className=" flex gap-1">
                  <p className=" text-[10px] mb-0 font-normal font-inter leading-[12px]">Escrito por </p>
                  <strong className=" text-[10px] mb-0 font-normal font-inter leading-[12px] text-[#FF7A00]">
                    Babi.
                    </strong>
                  <ChevronRight className=" h-[17px] absolute right-2 text-[#FF7A00]"/>
                </div>
              </div>
            </a>
            <a href="" className="mb-2">
              <div className="w-full bg-white  py-4 px-3 relative">
              <p className=" text-[12.5px] font-normal leading-[15px] mb-4 font-inter text[#6a6c72]">Como solicito abertura de Conta Digital?</p>
                <div className=" flex gap-1">
                  <p className=" text-[10px] mb-0 font-normal font-inter leading-[12px]">Escrito por </p>
                  <strong className=" text-[10px] mb-0 font-normal font-inter leading-[12px] text-[#FF7A00]">
                    Babi.
                    </strong>
                  <ChevronRight className="h-[17px] absolute right-2 text-[#FF7A00]"/>
                </div>
              </div>
            </a>
            <div className=" mt-5">
              <button type="submit" className=" bg-[#FF7A00] font-bold text-[10.5px] leading-[12px] h-8 w-full rounded-lg text-white">Ver todas as respostas</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}