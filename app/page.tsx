import { Introduction, Posts } from './components'
import { postData } from './mocks'

export default function Home() {
  return (
    <main>
      <section className='mb-20'>
        <Introduction />
      </section>
      <section>
        <h2 className='mb-8 text-lg font-bold uppercase'>Recent Posts</h2>
        <Posts data={postData} />
      </section>
    </main>
  )
}
