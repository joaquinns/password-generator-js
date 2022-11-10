import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen dark:bg-slate-900 dark:text-slate-100 transition-colors duration-500'>
      <Navbar />
      <main className='container mx-auto max-w-screen-lg p-4 lg:p-0'>
        <Hero />
      </main>
    </div>
  )
}

export default App
