import { Form } from './Form'

export const Hero = () => {
  return (
    <section className='flex flex-col gap-4 justify-center items-center mt-16'>
      <h1 className='text-3xl md:text-4xl dark:text-pink-400 font-bold text-zinc-800/90'>
        Password Generator
      </h1>
      <Form />
    </section>
  )
}
