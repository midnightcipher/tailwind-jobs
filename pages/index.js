import Head from 'next/head'

export default function Home() {
  return (
    <div className="border-t-4 border-teal-400">
      <Head>
        <title>Tailwind Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-6">
        <div className="divide-y-2 divide-gray-200">
          <header className="py-8">
            <img className="h-6 w-auto" src="/img/tailwind-logo.svg" alt="Tailwind CSS" />
          </header>
          <main className="py-12">
            <article className="grid grid-cols-3 gap-6">
              <aside className="rounded-lg bg-gray-50 p-10">
                <div className="-my-4 divide-y-2 divide-gray-100">
                  <dl className="divide-y-2 divide-gray-100">
                    <div className="py-4">
                      <dt className="sr-only">Employment type</dt>
                      <dl className="flex items-center space-x-2">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-gray-600">Full-time</span>
                      </dl>
                    </div>
                    <div className="py-4">
                      <dt className="sr-only">Location</dt>
                      <dl className="flex items-center space-x-2">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span className="text-gray-600">Remote</span>
                      </dl>
                    </div>
                    <div className="py-4">
                      <dt className="sr-only">Salary</dt>
                      <dl className="flex items-center space-x-2">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-600">$120,000 USD / $160,000 CAD</span>
                      </dl>
                    </div>
                    <div className="py-4">
                      <dt className="sr-only">Closing date</dt>
                      <dl className="flex items-center space-x-2">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-gray-600">
                          <span aria-hidden>Closes on</span>{' '}
                          <time dateTime="2020-05-27T21:00:00.0-05:00">May 27, 2020</time>
                        </span>
                      </dl>
                    </div>
                  </dl>
                  <div className="py-4">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3 py-2.5 text-base leading-6 font-semibold text-white"
                    >
                      Apply for this job
                    </a>
                  </div>
                </div>
              </aside>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
