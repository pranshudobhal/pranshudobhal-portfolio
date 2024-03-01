import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex w-full justify-between'>
      <div className=''>
        <h2 className='font-bold uppercase tracking-widest'>
          <Link href='/'>Pranshu Dobhal</Link>
        </h2>
      </div>
      {/* <div className='flex space-x-4'>
        <a href='#'>Work</a>
        <a href='#'>Blog</a>
      </div> */}
    </nav>
  )
}
