'use client'

import Header from '@/components/header'
import Popup from '@/components/popup'
import InterDay from '@/components/interday'
import Main from '@/components/main'

export default function Home() {
  return (
    <body>
      <Header />
      <InterDay />
      <Main />
      <Popup />
    </body>
  )
}
