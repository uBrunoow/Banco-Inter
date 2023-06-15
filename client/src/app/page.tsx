import Logo from './assets/logo.svg'
import Image from 'next/image'
import { ChevronDown, Search } from 'lucide-react'

export default function Home() {
  return (
    <>
      <header className="h-28 w-full bg-zinc-500">
        <nav>
          {/* Logo */}
          <div>
            <Image src={Logo} alt="" />
          </div>

          {/* Links */}
          <div>
            <div>
              <a title="O Inter">
                <div>O Inter</div>
                <div>
                  <ChevronDown />
                </div>
              </a>
            </div>
            <div>
              <a title="Pra você">
                <div>Pra você</div>
                <div>
                  <ChevronDown />
                </div>
              </a>
            </div>
            <div>
              <a title="Empresas">
                <div>Empresas</div>
                <div>
                  <ChevronDown />
                </div>
              </a>
            </div>
            <div>
              <a title="Conteúdos">
                <div>Conteúdos</div>
                <div>
                  <ChevronDown />
                </div>
              </a>
            </div>
            <div>
              <a title="Portal RI">
                <div>Portal RI</div>
                <div></div>
              </a>
            </div>
          </div>

          {/* Pesquisar */}
          <div>
            <Search />
          </div>

          {/* Login e Register */}
          <div>
            <button className=" h-12 w-40 bg-orange-400 text-zinc-50">
              Abra sua conta
            </button>
            <button className=" h-12 w-40 border-2 border-orange-400 text-orange-400">
              Acessar
            </button>
          </div>

          {/* PT-BR / US */}
          <div>
            <a href="">BR</a>
            <a href="">US</a>
          </div>
        </nav>
      </header>
    </>
  )
}
