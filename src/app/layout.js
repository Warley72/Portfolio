import { Roboto } from 'next/font/google'

const inter = Roboto({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700']
})
export const metadata = {
  title: 'Carlos Warley',
  description: 'Carlos Warlety is a software engineer...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
