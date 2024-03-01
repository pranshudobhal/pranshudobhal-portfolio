import { Introduction, Navbar } from './components'

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <div className='my-16'>
        <Introduction />
      </div>
    </main>
  )
}
