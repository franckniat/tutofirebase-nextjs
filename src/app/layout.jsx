"use client";
import './globals.scss';
import { Inter } from 'next/font/google';
import { UserContextProvider } from '@/context/Authcontext';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Firebase Test',
  description: 'Apprentissage de firebase + next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  )
}
