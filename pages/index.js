import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Tailwind Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="text-6xl">👀</div>
    </div>
  )
}
