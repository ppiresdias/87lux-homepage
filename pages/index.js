import Head from 'next/head'

import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>87Lux Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
