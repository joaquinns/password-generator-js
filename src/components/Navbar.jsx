import { useTheme } from '../context/ThemeContext'
import { BiSun, BiMoon } from 'react-icons/bi'

export const Navbar = () => {
  const { handleToggleTheme, dark } = useTheme()
  return (
    <header className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
      <nav className='max-w-screen-lg mx-auto h-full flex justify-between items-center p-4 lg:px-0'>
        <div></div>

        <div>
          <button
            onClick={handleToggleTheme}
            className='p-2 bg-violet-700 hover:bg-violet-900 dark:bg-blue-400
             dark:hover:bg-blue-500 rounded-md ease duration-150'
          >
            {dark ? (
              <BiSun color='white' size='1.5rem' />
            ) : (
              <BiMoon color='white' size='1.5rem' />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
