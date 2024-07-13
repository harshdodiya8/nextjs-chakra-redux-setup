
import { Rubik, Inter } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const fonts = {
  rubik,
  inter
}