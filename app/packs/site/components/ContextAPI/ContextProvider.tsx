import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from 'react'
export interface User {
    fullName: string,
    username: string
}

export interface ApplicationStatus {
    user?: User
}

type Dispatch = React.Dispatch<React.SetStateAction<ApplicationStatus>>

const ApplicationContext = createContext({})

const ContextProvider = ({ children }: PropsWithChildren<ReactNode>): ReactElement => {
  const [status, setStatus] = useState({})
  const stuff = () => { return [status, setStatus] }
  return (<ApplicationContext.Provider value={stuff()}>{children}</ApplicationContext.Provider>)
}

export const useStatus = ():[ApplicationStatus, Dispatch] => {
  const context = useContext(ApplicationContext) as [ApplicationStatus, Dispatch]
  if (context === undefined) { throw new Error('useStatus can only be used inside ContextProvider') }
  return context
}

export default ContextProvider
