import { useState, useRef, useEffect} from 'react'

const chars = {
  letters: 'qwertyuiopasdfghjklzxcvbnm',
  capital: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  numbers: '1234567890',
  specialChars: '~!@#$%?.'
}

export const Form = () => {
  const [randomPassword, setRandomPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [copy, setCopy] = useState(false)
  const specialChars = useRef(null)
  const addNumbers = useRef(null)
  const capitalLetters = useRef(null)

  const randomChars = (length) => {
    setRandomPassword('')
    let password = ''
    let charsList = chars.letters
    for (let i = 0; i < Number(length); i++) {
      if (specialChars.current.checked) {
        charsList += chars.specialChars
      }
      if (addNumbers.current.checked) {
        charsList += chars.numbers
      }
      if (capitalLetters.current.checked) {
        charsList += chars.capital
      }
      const randomNumber = Math.floor(Math.random() * charsList.length)
      password += charsList.substring(randomNumber, randomNumber + 1)
    }
    setRandomPassword(password)
  }

  const handleChangeLength = (e) => setPasswordLength(Number(e.target.value))

  const handleCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(randomPassword)
    setCopy(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    randomChars(e.target.length.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setCopy(false)
    }, 600)

    return () => clearTimeout()
  }, [copy])

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-8 w-full justify-center items-center'
    >
      <span className='text-2xl text-zinc-800/90 dark:text-slate-100 font-bold'>
        {passwordLength}
      </span>
      <input
        type='range'
        name='length'
        className='w-full md:w-1/2 h-2 bg-gray-300/70 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
        defaultValue='8'
        min='8'
        max='30'
        onChange={handleChangeLength}
      />

      <div className='flex flex-col items-start lg:flex-row lg:items-center lg:justify-center gap-8 w-full md:w-1/2 h-full'>
        <label className='inline-flex relative items-center cursor-pointer'>
          <input
            ref={specialChars}
            type='checkbox'
            className='sr-only peer'
            name='specialChars'
          />
          <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500 dark:peer-checked:bg-violet-500"></div>
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Special Characters
          </span>
        </label>

        <label className='inline-flex relative items-center cursor-pointer'>
          <input
            ref={capitalLetters}
            type='checkbox'
            className='sr-only peer'
            name='capitalLetters'
          />
          <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500 dark:peer-checked:bg-violet-500"></div>
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Capital letters
          </span>
        </label>

        <label className='inline-flex relative items-center cursor-pointer'>
          <input
            ref={addNumbers}
            type='checkbox'
            className='sr-only peer'
            name='addNumbers'
          />
          <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500 dark:peer-checked:bg-violet-500"></div>
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Numbers
          </span>
        </label>
      </div>

      <div className='w-full md:1/2 flex justify-center items-center'>
        <input
          type='text'
          className='w-full md:w-1/2 rounded-l p-2 bg-zinc-800/90 text-slate-100 dark:bg-slate-800 font-semibold text-sm md:text-lg dark:text-pink-400 border-t border-b border-l border-slate-600/50'
          value={randomPassword}
          placeholder='Random Password...'
          readOnly
        />

        <button
          className='relative text-slate-200 dark:text-slate-500 dark:hover:text-slate-400 dark:bg-slate-800 bg-zinc-800/90 hover:bg-zinc-600 dark:hover:bg-slate-700 ease duration-75 rounded-r p-[0.13rem] md:p-[0.35rem] border-t border-b border-r border-slate-600/50 hover:border-slate-700'
          onClick={handleCopy}
        >
          {copy && (

          <span className={`ease-in-out duration-75 transition-opacity ${copy ? 'opacity-100' : 'opacity-0' } z-20 absolute top-[-2.2rem] right-0 bg-black py-1 px-2 text-sm rounded font-semibold flex items-center`}>copied!</span>
          )}
          <svg
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
            className='w-8 h-8'
          >
            <path d='M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19'></path>
            <path d='M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5'></path>
          </svg>
        </button>
      </div>

      <button className='p-4 dark:bg-violet-700 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold text-lg dark:hover:bg-violet-600 duration-150'>
        Create Password
      </button>
    </form>
  )
}
