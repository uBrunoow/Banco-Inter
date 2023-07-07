import { ChevronUp } from "lucide-react";
import popupImage from '../assets/popup-image.png'

import Image from "next/image";

export default function Popup() {
  return (
    <div className=" bg-white p-[10px] rounded-lg shadow-lg shadow-black-500/40 flex items-center absolute right-[12.7%] bottom-[3%] w-[223px]">
        <Image src={popupImage} alt="" className=" w-[34px]"/>
        <p className=" mx-2 font-bold leading-[17px] text-[14px] text-[#525252] font-inter">Central de Ajuda</p>
        <div>
          <ChevronUp className=" h-[1em] w-[1em] text-[#FF7A00]"/>
        </div>
      </div>
  )
}