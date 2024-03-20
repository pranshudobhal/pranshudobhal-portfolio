import { Introduction, Navbar, Posts } from './components'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className='mb-20 mt-16'>
        <Introduction />
      </section>
      <section>
        <Posts />
      </section>
    </main>
  )
}
