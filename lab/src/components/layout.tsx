import type { PropsWithChildren } from 'react'

import { Footer } from './footer'
import { Header } from './header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl">

      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">
        {children}
      </main>
      <Footer />
    </div>
  )
}



