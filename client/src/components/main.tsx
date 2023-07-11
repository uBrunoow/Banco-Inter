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

import Image from 'next/image'

export default function Main() {
  return (
    <>
      <section className="h-full w-full bg-white py-12">
        <div className=" mx-[231.500px] px-[12px] py-12">
          <div className=" flex w-full flex-row justify-between">
            <main className=" w-[500px] px-3">
              <h3 className=" mb-5 font-sora text-[40px] font-semibold leading-[50px] text-[#161616]">
                Você muda para o Super App do Inter e para de mudar de
                aplicativo.
              </h3>
              <p className=" mb-[16px] block font-sora text-[18px] font-normal leading-[22px] text-[#58595B]">
                Quem tem conta no Inter tem soluções <br /> completas para todos
                os momentos.
              </p>
              <div className="flex h-[70px] w-[456px] items-end justify-start">
                <button className=" mt-6 flex h-[46px] w-[360px] items-center justify-center rounded-[7px] border-none bg-[#FF7A00] px-5 pb-[7px] pt-[6px] text-[14px] font-bold leading-[17px] text-white outline-none duration-[0.1s] ease-in-out hover:bg-[#ff8700]">
                  Quero ser Inter
                </button>
              </div>
            </main>
            <aside className=" flex">
              <a
                href=""
                className="mr-4 flex h-[266px] w-[348px] flex-col justify-between rounded-[10px] bg-[#f5f6fa] py-12 pl-6 font-sora"
              >
                <Image src={Pix} alt="" className=" h-[51px] w-[51px]" />
                <p className=" mb-4 ml-2 text-[24px]">Pix</p>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className=" h-full w-full bg-white">
        <div className="mx-[231.500px] px-3 py-12">
          <div className=" flex items-center justify-start ">
            <div className=" flex h-[514px] w-[576px] justify-end px-3">
              <Image src={InterBank} alt="" />
            </div>
            <div className=" ml-[110px] h-[280px] w-[590px] px-3">
              <p className=" mb-4 text-[24px] font-semibold leading-[30px] text-[#6a6c72]">
                Inter Bank
              </p>
              <h3 className=" mb-5 font-sora text-[40px] font-semibold leading-[50px] text-[#161616]">
                Diferente, sem pegadinhas e sem anuidade: como você sempre quis
              </h3>
              <p className=" mb-4 mt-6 font-sora text-[18px] leading-[22px] text-[#6a6c72]">
                Planeje e invista no futuro do seu filho com a{' '}
                <a href="" className=" font-semibold text-[#fa7a00]">
                  Conta Kids
                </a>{' '}
                ou abra uma{' '}
                <a href="" className=" font-semibold text-[#fa7a00]">
                  Conta Digital
                </a>{' '}
                e com tudo que você precisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-full items-center justify-center">
        <div className="w-[1416px] px-3 pb-12">
          <div className=" flex items-center justify-between">
            <div className="h-[475.500px] w-[696px] px-3">
              <div>
                <Image
                  src={InterCashback}
                  alt=""
                  className=" h-[472px] w-[456px] object-cover object-center "
                />
              </div>
            </div>
            <div className=" mt-6 w-[590px] px-3 ">
              <p className=" mb-4 font-sora text-[24px] font-semibold leading-[30px] text-[#6a6c72]">
                Inter Shop
              </p>
              <h2 className="mb-2 font-sora text-[40px] font-semibold leading-[50px] text-[#161616]">
                No Inter todo mundo ganha cashback
              </h2>
              <p className=" my-4 text-justify font-sora text-[18px] leading-[22px] text-[#161616]">
                Tudo o que você procura em um só lugar. Aqui você ganha o
                cashback,
                <span className=" text-[18px] font-bold leading-[22px] text-[#ff7a00]">
                  {' '}
                  direto na sua conta, seja ela Inter ou não.{' '}
                </span>
                É fácil, rápido, e você sai ganhando sempre!
              </p>
              <div className="m-1 flex items-center">
                <Image src={IconCashback} alt="" />
                <span className=" ml-2 font-sora text-[18px] leading-[22px] text-[#161616]">
                  O melhor e mais rápido cashback do país
                </span>
              </div>
              <div className="m-1 flex items-center">
                <Image src={IconLojas} alt="" />
                <span className=" ml-2 font-sora text-[18px] leading-[22px] text-[#161616]">
                  Mais de 900 lojas
                </span>
              </div>
              <div className="m-1 flex items-center">
                <Image src={IconCategorias} alt="" />
                <span className=" ml-2 font-sora text-[18px] leading-[22px] text-[#161616]">
                  Dezenas de categorias
                </span>
              </div>
              <div className="m-1 flex items-center">
                <Image src={IconMoney} alt="" />
                <span className=" ml-2 font-sora text-[18px] leading-[22px] text-[#161616]">
                  Ofertas cumulativas com cashback
                </span>
              </div>
              <a
                href=""
                className=" mt-12 flex h-[46px] w-full items-center justify-center rounded-[0.4rem] bg-[#FF7A00] px-5 pb-[7px] pt-[6px] text-[14px] font-bold leading-[17px] text-white hover:bg-[#ff8700]"
              >
                Ganhar Cashback
              </a>
            </div>
          </div>
          <div className="mt-12">
            <div className=" flex justify-between pb-[50px] pt-[30px]">
              {/* 1° Cashback */}
              <div className="flex h-[180px] w-[160px] flex-col justify-between rounded-[12px] border-x-[1px] border-y-[1px] border-[#b6b7bb] bg-transparent p-[10px]">
                <div className="flex h-[84px] w-[138px] items-center justify-center">
                  <Image src={LogoMagalu} alt="" className="object-cover" />
                </div>
                <div>
                  <p className=" mb-2 font-sora text-[14px] leading-[16px] text-[#161616]">
                    Magazine Luiza
                  </p>
                  <p className=" mb-1 font-sora text-[14px] font-semibold leading-[16px] text-[#00aa4f]">
                    3% cashback
                  </p>
                </div>
              </div>

              {/* 2° Cashback */}
              <div className="flex h-[180px] w-[160px] flex-col justify-between rounded-[12px] border-x-[1px] border-y-[1px] border-[#b6b7bb] bg-transparent p-[10px]">
                <div className="flex h-[84px] w-[138px] items-center justify-center">
                  <Image src={LogoAliexpress} alt="" className="object-cover" />
                </div>
                <div>
                  <p className=" mb-2 font-sora text-[14px] leading-[16px] text-[#161616]">
                    Aliexpress
                  </p>
                  <p className=" mb-1 font-sora text-[14px] font-semibold leading-[16px] text-[#00aa4f]">
                    3.5% cashback
                  </p>
                </div>
              </div>

              {/* 3° Cashback */}
              <div className="flex h-[180px] w-[160px] flex-col justify-between rounded-[12px] border-x-[1px] border-y-[1px] border-[#b6b7bb] bg-transparent p-[10px]">
                <div className="flex h-[84px] w-[138px] items-center justify-center">
                  <Image
                    src={LogoAmazon}
                    alt=""
                    className="w-[120px] object-cover"
                  />
                </div>
                <div>
                  <p className=" mb-2 font-sora text-[14px] leading-[16px] text-[#161616]">
                    Amazon
                  </p>
                  <p className=" mb-1 font-sora text-[14px] font-semibold leading-[16px] text-[#00aa4f]">
                    3% cashback
                  </p>
                </div>
              </div>

              {/* 4° Cashback */}
              <div className="flex h-[180px] w-[160px] flex-col justify-between rounded-[12px] border-x-[1px] border-y-[1px] border-[#b6b7bb] bg-transparent p-[10px]">
                <div className="flex h-[84px] w-[138px] items-center justify-center">
                  <Image
                    src={LogoKabum}
                    alt=""
                    className="h-[42px] w-[120px] object-cover"
                  />
                </div>
                <div>
                  <p className=" mb-2 font-sora text-[14px] leading-[16px] text-[#161616]">
                    KaBum
                  </p>
                  <p className=" mb-1 font-sora text-[14px] font-semibold leading-[16px] text-[#00aa4f]">
                    1.61% cashback
                  </p>
                </div>
              </div>

              {/* 5° Cashback */}
              <div className="flex h-[180px] w-[160px] flex-col justify-between rounded-[12px] border-x-[1px] border-y-[1px] border-[#b6b7bb] bg-transparent p-[10px]">
                <div className="flex h-[84px] w-[138px] items-center justify-center">
                  <Image src={LogoCentauro} alt="" className="object-cover" />
                </div>
                <div>
                  <p className=" mb-2 font-sora text-[14px] leading-[16px] text-[#161616]">
                    Centauro
                  </p>
                  <p className=" mb-1 font-sora text-[14px] font-semibold leading-[16px] text-[#00aa4f]">
                    5.6% cashback
                  </p>
                </div>
              </div>

              {/* 6° Cashback */}
              <div className="flex h-[180px] w-[160px] flex-col justify-between rounded-[12px] border-x-[1px] border-y-[1px] border-[#b6b7bb] bg-transparent p-[10px]">
                <div className="flex h-[84px] w-[138px] items-center justify-center">
                  <Image
                    src={LogoFastShop}
                    alt=""
                    className="h-[50px] w-[100px] object-cover"
                  />
                </div>
                <div>
                  <p className=" mb-2 font-sora text-[14px] leading-[16px] text-[#161616]">
                    Fast Shop
                  </p>
                  <p className=" mb-1 font-sora text-[14px] font-semibold leading-[16px] text-[#00aa4f]">
                    3% cashback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
