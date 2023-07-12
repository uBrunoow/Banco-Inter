import React, { createContext, useContext, useState, ReactNode } from 'react'

interface MyContextType {
  data: string
  updateData: (newData: string) => void
}

const MyContext = createContext<MyContextType | undefined>(undefined)

interface MyContextProviderProps {
  children: ReactNode
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [data, setData] = useState('')

  const updateData = (newData: string) => {
    setData(newData)
  }

  const contextValue: MyContextType = {
    data,
    updateData,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

const useMyContext = (): MyContextType => {
  const context = useContext(MyContext)

  if (!context) {
    throw new Error(
      'useMyContext deve ser usado dentro de um MyContextProvider',
    )
  }

  return context
}

const MyComponent: React.FC = () => {
  const { data, updateData } = useMyContext()

  const handleButtonClick = () => {
    updateData('Novo valor do contexto')
  }

  return (
    <div>
      <p>Valor do contexto: {data}</p>
      <button onClick={handleButtonClick}>Atualizar contexto</button>
    </div>
  )
}

// const App: React.FC = () => {
//   return (
//     <MyContextProvider>
//       <MyComponent />
//     </MyContextProvider>
//   );
// };

// export default App;
