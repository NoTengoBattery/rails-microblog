import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import AxiosWrapper from '../utils/Requests/AxiosWrapper'
export interface User {
  fullName: string,
  username: string,
  following: number,
  followers: number
}

export interface ApplicationStatus {
  user?: User
}

export type Dispatcher = React.Dispatch<React.SetStateAction<ApplicationStatus>>

const ApplicationContext = createContext({})

const ContextProvider = ({ children }: PropsWithChildren<ReactNode>): ReactElement => {
  const [status, setStatus]: [ApplicationStatus, Dispatcher] = useState({})
  const stuff = () => { return [status, setStatus] }
  useEffect(() => {
    AxiosWrapper.post('api/v1/twixies/sign_in')
      .then((ans) => {
        setStatus({ user: ans.data.twixy })
        console.info('Authenticated!')
      })
      .catch(() => { console.error('Unable to authenticate') })
  }, [status.user?.username])
  return (<ApplicationContext.Provider value={stuff()}>{children}</ApplicationContext.Provider>)
}

export const useStatus = (): [ApplicationStatus, Dispatcher] => {
  const context = useContext(ApplicationContext) as [ApplicationStatus, Dispatcher]
  if (context === undefined) { throw new Error('useStatus can only be used inside ContextProvider') }
  return context
}

export default ContextProvider
