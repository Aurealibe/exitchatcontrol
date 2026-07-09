import { useHead } from '@unhead/react'
import { T } from '../lib/i18n'
import { TopBar, FilterBar } from '../components/Chrome'
import { Footer } from '../components/Footer'
import { Hero, StatusBanner, Toc, Threat, Memo } from '../sections/intro'
import { Precedents } from '../sections/precedents'
import { Messaging, Email, Browsers, Dns } from '../sections/tools-foundations'
import { Vpn, Censorship, LeaveGoogle, Storage, Passwords, TwoFa } from '../sections/tools-network'
import { Social, Money, Ai, Toolbox } from '../sections/tools-social'
import { SelfHost, TorSection, FreeOs, Telephony, Opsec, Ecosystem } from '../sections/tools-advanced'
import { Allies } from '../sections/allies'
import { Action } from '../sections/action'

export default function Home() {
  useHead({
    title: 'Devenir Ingouvernable — Échapper à Chat Control',
  })

  return (
    <>
      <a className="skip-link" href="#menace">
        <T fr="Aller au contenu" en="Skip to content" />
      </a>
      <TopBar />
      <Hero />
      <StatusBanner />
      <main className="wrap">
        <Toc />
        <FilterBar />
        <Threat />
        <Precedents />
        <Memo />
        <Messaging />
        <Email />
        <Browsers />
        <Dns />
        <Vpn />
        <Censorship />
        <LeaveGoogle />
        <Storage />
        <Passwords />
        <TwoFa />
        <Social />
        <Money />
        <Ai />
        <Toolbox />
        <SelfHost />
        <TorSection />
        <FreeOs />
        <Telephony />
        <Opsec />
        <Ecosystem />
        <Allies />
        <Action />
      </main>
      <Footer />
    </>
  )
}
