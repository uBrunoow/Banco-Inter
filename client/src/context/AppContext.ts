import React, { createContext, useContext } from 'react'

interface AppContextType {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isAcessOpen: boolean
  setIsAcessOpen: React.Dispatch<React.SetStateAction<boolean>>
  isPraVoceLinksOpen: boolean
  setIsPraVoceLinksOpen: React.Dispatch<React.SetStateAction<boolean>>
  isInterLinksOpen: boolean
  setIsInterLinksOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEmpresasLinksOpen: boolean
  setIsEmpresasLinksOpen: React.Dispatch<React.SetStateAction<boolean>>
  isConteudosLinksOpen: boolean
  setIsConteudosLinksOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error(
      'useAppContext deve ser usado dentro de um Provider AppContext',
    )
  }
  return context
}

export default AppContext
