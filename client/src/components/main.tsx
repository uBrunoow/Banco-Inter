'use client'

import Pix from '@/assets/pix.svg'
import InterBank from '@/assets/inter-bank-home.png'
import InterCashback from '@/assets/inter-cashback.png'

import LogoMagalu from '@/assets/logo-magalu.png'
import LogoAliexpress from '@/assets/logo-aliexpress.png'
import LogoAmazon from '@/assets/logo-amazon.png'
import LogoKabum from '@/assets/logo-kabum.png'
import LogoCentauro from '@/assets/logo-centauro.png'
import LogoFastShop from '@/assets/logo-fastshop.png'

import IconCashback from '@/assets/cashback.svg'
import IconLojas from '@/assets/lojas.svg'
import IconCategorias from '@/assets/categorias.svg'
import IconMoney from '@/assets/money.svg'

import Image from "next/image";

export default function Main() {
  return(
    <>
      <section className="py-12 bg-white w-full h-full">
        <div className=" mx-[231.500px] px-[12px] py-12">
          <div className=" flex flex-row justify-between w-full">
            <main className=" px-3 w-[500px]">
              <h3 className=" font-sora leading-[50px] text-[#161616] font-semibold text-[40px] mb-5">Você muda para o Super App do Inter e para de mudar de aplicativo.</h3>
              <p className=" block leading-[22px] text-[18px] text-[#58595B] font-normal font-sora mb-[16px]">Quem tem conta no Inter tem  soluções <br/> completas para todos os momentos.</p>
              <div className="flex items-end justify-start w-[456px] h-[70px]">
                <button className=" text-[14px] leading-[17px] font-bold pt-[6px] px-5 pb-[7px] mt-6 h-[46px] w-[360px] flex items-center justify-center outline-none border-none bg-[#FF7A00] text-white rounded-[7px] duration-[0.1s] ease-in-out hover:bg-[#ff8700]">Quero ser Inter</button>
              </div>
            </main>
            <aside className=" flex">
              <a href="" className="bg-[#f5f6fa] py-12 pl-6 h-[266px] font-sora mr-4 w-[348px] rounded-[10px] flex justify-between flex-col">
                <Image src={Pix} alt="" className=" w-[51px] h-[51px]" />
                <p className=" text-[24px] ml-2 mb-4">Pix</p>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className=" h-full w-full bg-white">
        <div className="mx-[231.500px] px-3 py-12">
          <div className=" flex items-center justify-start ">
            <div className=" px-3 w-[576px] h-[514px] flex justify-end">
              <Image src={InterBank} alt=""/>
            </div>
            <div className=" w-[590px] h-[280px] ml-[110px] px-3">
              <p className=" leading-[30px] font-semibold text-[24px] text-[#6a6c72] mb-4">Inter Bank</p>
              <h3 className=" mb-5 font-sora leading-[50px] text-[40px] text-[#161616] font-semibold">Diferente, sem pegadinhas e sem anuidade: como você sempre quis</h3>
              <p className=" mt-6 mb-4 leading-[22px] text-[18px] text-[#6a6c72] font-sora">Planeje e invista no futuro do seu filho com a <a href="" className=" text-[#fa7a00] font-semibold">Conta Kids</a> ou abra uma <a href="" className=" text-[#fa7a00] font-semibold">Conta Digital</a> e com tudo que você precisa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full flex items-center justify-center">
        <div className="pb-12 px-3 w-[1416px]">
          <div className=" flex justify-between items-center">
            <div className="w-[696px] h-[475.500px] px-3"> 
              <div>
                <Image src={InterCashback} alt="" className=" w-[456px] h-[472px] object-cover object-center "/>
              </div>
            </div>
            <div className=" mt-6 px-3 w-[590px] ">
              <p className=" font-sora leading-[30px] font-semibold text-[24px] text-[#6a6c72] mb-4">Inter Shop</p>
              <h2 className="font-sora leading-[50px] font-semibold text-[40px] text-[#161616] mb-2">No Inter todo mundo ganha cashback</h2>
              <p className=" my-4 leading-[22px] text-[18px] text-[#161616] text-justify font-sora">Tudo o que você procura em um só lugar. Aqui você ganha o cashback,<span className=" font-bold text-[#ff7a00] leading-[22px] text-[18px]"> direto na sua conta, seja ela Inter ou não. </span>É fácil, rápido, e você sai ganhando sempre!</p>
              <div className="flex items-center m-1">
                <Image src={IconCashback} alt="" />
                <span className=" ml-2 leading-[22px] text-[18px] text-[#161616] font-sora">O melhor e mais rápido cashback do país</span>
              </div>
              <div className="flex items-center m-1" >
                <Image src={IconLojas} alt="" />
                <span className=" ml-2 leading-[22px] text-[18px] text-[#161616] font-sora">Mais de 900 lojas</span>
              </div>
              <div className="flex items-center m-1">
                <Image src={IconCategorias} alt="" />
                <span className=" ml-2 leading-[22px] text-[18px] text-[#161616] font-sora">Dezenas de categorias</span>
              </div>
              <div className="flex items-center m-1">
                <Image src={IconMoney} alt="" />
                <span className=" ml-2 leading-[22px] text-[18px] text-[#161616] font-sora">Ofertas cumulativas com cashback</span>
              </div>
              <a href="" className=" flex items-center justify-center mt-12 px-5 pt-[6px] pb-[7px] bg-[#FF7A00] text-white text-[14px] leading-[17px] font-bold h-[46px] w-full rounded-[0.4rem] hover:bg-[#ff8700]">Ganhar Cashback</a>
            </div>
          </div>
          <div className="mt-12">
            <div className=" pt-[30px] pb-[50px] flex justify-between">
              {/* 1° Cashback */}
              <div className="h-[180px] w-[160px] p-[10px] bg-transparent border-y-[1px] border-x-[1px] border-[#b6b7bb] flex flex-col justify-between rounded-[12px]">
                <div className="w-[138px] h-[84px] flex items-center justify-center">
                  <Image src={LogoMagalu} alt="" className="object-cover"/>
                </div>
                <div>
                  <p className=" leading-[16px] text-[14px] text-[#161616] mb-2 font-sora">Magazine Luiza</p>
                  <p className=" mb-1 text-[#00aa4f] font-sora leading-[16px] font-semibold text-[14px]">3% cashback</p>
                </div>
              </div> 

              {/* 2° Cashback */}
              <div className="h-[180px] w-[160px] p-[10px] bg-transparent border-y-[1px] border-x-[1px] border-[#b6b7bb] flex flex-col justify-between rounded-[12px]">
                <div className="w-[138px] h-[84px] flex items-center justify-center">
                  <Image src={LogoAliexpress} alt="" className="object-cover"/>
                </div>
                <div>
                  <p className=" leading-[16px] text-[14px] text-[#161616] mb-2 font-sora">Aliexpress</p>
                  <p className=" mb-1 text-[#00aa4f] font-sora leading-[16px] font-semibold text-[14px]">3.5% cashback</p>
                </div>
              </div>

              {/* 3° Cashback */}
              <div className="h-[180px] w-[160px] p-[10px] bg-transparent border-y-[1px] border-x-[1px] border-[#b6b7bb] flex flex-col justify-between rounded-[12px]">
                <div className="w-[138px] h-[84px] flex items-center justify-center">
                  <Image src={LogoAmazon} alt="" className="object-cover w-[120px]"/>
                </div>
                <div>
                  <p className=" leading-[16px] text-[14px] text-[#161616] mb-2 font-sora">Amazon</p>
                  <p className=" mb-1 text-[#00aa4f] font-sora leading-[16px] font-semibold text-[14px]">3% cashback</p>
                </div>
              </div>

              {/* 4° Cashback */}
              <div className="h-[180px] w-[160px] p-[10px] bg-transparent border-y-[1px] border-x-[1px] border-[#b6b7bb] flex flex-col justify-between rounded-[12px]">
                <div className="w-[138px] h-[84px] flex items-center justify-center">
                  <Image src={LogoKabum} alt="" className="object-cover h-[42px] w-[120px]"/>
                </div>
                <div>
                  <p className=" leading-[16px] text-[14px] text-[#161616] mb-2 font-sora">KaBum</p>
                  <p className=" mb-1 text-[#00aa4f] font-sora leading-[16px] font-semibold text-[14px]">1.61% cashback</p>
                </div>
              </div>    

              {/* 5° Cashback */}
              <div className="h-[180px] w-[160px] p-[10px] bg-transparent border-y-[1px] border-x-[1px] border-[#b6b7bb] flex flex-col justify-between rounded-[12px]">
                <div className="w-[138px] h-[84px] flex items-center justify-center">
                  <Image src={LogoCentauro} alt="" className="object-cover"/>
                </div>
                <div>
                  <p className=" leading-[16px] text-[14px] text-[#161616] mb-2 font-sora">Centauro</p>
                  <p className=" mb-1 text-[#00aa4f] font-sora leading-[16px] font-semibold text-[14px]">5.6% cashback</p>
                </div>
              </div>    

              {/* 6° Cashback */}
              <div className="h-[180px] w-[160px] p-[10px] bg-transparent border-y-[1px] border-x-[1px] border-[#b6b7bb] flex flex-col justify-between rounded-[12px]">
                <div className="w-[138px] h-[84px] flex items-center justify-center">
                  <Image src={LogoFastShop} alt="" className="object-cover h-[50px] w-[100px]"/>
                </div>
                <div>
                  <p className=" leading-[16px] text-[14px] text-[#161616] mb-2 font-sora">Fast Shop</p>
                  <p className=" mb-1 text-[#00aa4f] font-sora leading-[16px] font-semibold text-[14px]">3% cashback</p>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>
    </>
  )
}