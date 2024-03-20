import { Introduction, Posts } from './components'

export default function Home() {
  return (
    <main>
      <section className='mb-20'>
        <Introduction />
      </section>
      <section>
        <Posts />
      </section>
    </main>
  )
}
