'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Popup from '@/components/popup'
import Provider from '@/context/Provider'

export default function Home() {
  return (
    <Provider>
      <Header />
      <Popup />
      <Footer />
    </Provider>
  )
}
