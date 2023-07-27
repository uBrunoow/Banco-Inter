import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from './AppContext'

interface ProviderProps {
  children: React.ReactNode
}

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

function Provider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAcessOpen, setIsAcessOpen] = useState(false)
  const [isPraVoceLinksOpen, setIsPraVoceLinksOpen] = useState(false)
  const [isInterLinksOpen, setIsInterLinksOpen] = useState(false)
  const [isEmpresasLinksOpen, setIsEmpresasLinksOpen] = useState(false)
  const [isConteudosLinksOpen, setIsConteudosLinksOpen] = useState(false)

  const contextValue: AppContextType = {
    isOpen,
    setIsOpen,
    isAcessOpen,
    setIsAcessOpen,
    isPraVoceLinksOpen,
    setIsPraVoceLinksOpen,
    isInterLinksOpen,
    setIsInterLinksOpen,
    isEmpresasLinksOpen,
    setIsEmpresasLinksOpen,
    isConteudosLinksOpen,
    setIsConteudosLinksOpen,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
