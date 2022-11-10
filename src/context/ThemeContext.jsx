import { useState, useEffect, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext({
  handleToggleTheme: () => {},
  dark: false
})

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const [dark, setDark] = useState(false)

  const handleToggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const value = {
    handleToggleTheme,
    dark
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
}
