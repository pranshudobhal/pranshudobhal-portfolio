import { Introduction, Navbar } from './components'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='my-16'>
        <Introduction />
      </div>
    </main>
  )
}
