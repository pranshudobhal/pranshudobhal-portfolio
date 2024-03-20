import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='mb-16 flex w-full justify-between'>
      <h2 className='font-bold uppercase tracking-widest'>
        <Link href='/'>Pranshu Dobhal</Link>
      </h2>
      <div className='flex space-x-4'>
        <Link href='/blog'>Blog</Link>
      </div>
    </nav>
  )
}
