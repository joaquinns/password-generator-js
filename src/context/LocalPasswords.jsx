import { createContext, useEffect, useState, useContext } from 'react'

const LocalPasswordsContext = createContext({
  passwords: [],
  setPasswords: () => {},
  setAddPassword: () => {}
})

export function LocalPasswordsProvider({ children }) {
  const [passwords, setPasswords] = useState([])
  const [addPassword, setAddPassword] = useState(passwords)

  useEffect(() => {
    const local = window.localStorage.getItem('passwords')
    if (local) {
      setPasswords((prev) => prev.concat(JSON.parse(local)))
    } 
  }, [addPassword])

  useEffect(() => {
    if (addPassword.length > 0) {
      window.localStorage.setItem(
        'passwords',
        JSON.stringify(passwords.concat(addPassword))
      )
    }
  }, [addPassword])

  const value = {
    passwords,
    setAddPassword
  }

  return (
    <LocalPasswordsContext.Provider value={value}>
      {children}
    </LocalPasswordsContext.Provider>
  )
}

export const useLocalPassword = () => {
  return useContext(LocalPasswordsContext)
}
