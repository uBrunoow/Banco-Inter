import Logo from './assets/logo.svg'
import BR from './assets/brasil.svg'
import EUA from './assets/eua.svg'
import Image from 'next/image'
import { ChevronDown, Search } from 'lucide-react'

export default function Home() {
  return (
    <>
      <header className="flex h-28 w-full items-center justify-center border-2 border-zinc-500">
        <nav className=" flex items-center justify-center gap-24">
          <div className="flex items-center justify-center">
            {/* Logo */}
            <div>
              <Image src={Logo} alt="" className="h-14 w-14" />
            </div>

            {/* Links */}
            <div className=" flex items-center justify-center">
              <div>
                <a
                  title="O Inter"
                  className="m-3 flex w-full items-center justify-center"
                >
                  <div>O Inter</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Pra você"
                  className=" m-3 flex w-full items-center justify-center"
                >
                  <div>Pra você</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Empresas"
                  className=" m-3 flex w-full items-center justify-center"
                >
                  <div>Empresas</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Conteúdos"
                  className="m-3 flex w-full items-center justify-center"
                >
                  <div>Conteúdos</div>
                  <div>
                    <ChevronDown />
                  </div>
                </a>
              </div>
              <div>
                <a
                  title="Portal RI"
                  className="m-3 flex w-full items-center justify-center"
                >
                  <div>Portal RI</div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Pesquisar */}
            <div className="m-7">
              <Search className="text-orange-500" />
            </div>

            {/* Login e Register */}
            <div className="flex gap-5">
              <button className=" h-12 w-36 rounded-lg bg-orange-400 text-zinc-50">
                Abra sua conta
              </button>
              <button className=" h-12 w-28 rounded-lg border-2 border-orange-400 text-orange-400">
                Acessar
              </button>
            </div>

            {/* PT-BR / US */}
            <div className="m-5 flex w-20 justify-center rounded-full border-2 border-zinc-400">
              <a
                href=""
                className="m-[3px] flex w-10 items-center justify-center rounded-full bg-zinc-400"
              >
                <Image src={BR} alt={''} />
              </a>
              <a
                href=""
                className="m-[3px] flex w-10 items-center justify-center rounded-full hover:bg-zinc-400  "
              >
                <Image src={EUA} alt={''} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className=" bg-[url('./assets/bg-inter.png')]"></div>
      </section>
    </>
  )
}
