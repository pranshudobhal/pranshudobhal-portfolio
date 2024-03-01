import type { Metadata } from 'next'
import { Lato, Roboto } from 'next/font/google'
import './globals.css'
import classNames from 'classnames'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Pranshu Dobhal',
  description: 'Front end developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={classNames(
        'bg-background text-white',
        roboto.variable,
        lato.variable,
        'font-lato'
      )}
    >
      <body className='mx-auto my-12 max-w-2xl px-6'>{children}</body>
    </html>
  )
}
