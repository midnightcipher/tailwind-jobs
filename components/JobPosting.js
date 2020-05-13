import Head from 'next/head'

export default function JobPosting({ children, metadata }) {
  return (
    <div className="border-t-4 border-teal-400">
      <Head>
        <title>Tailwind Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto px-6">
        <div className="divide-y-2 divide-gray-100">
          <header className="py-8 space-y-4">
            <img className="h-6 w-auto" src="/img/tailwind-ui-logo.svg" alt="Tailwind UI" />
            <dl class="flex space-x-6">
              <div>
                <dt className="sr-only">Company headquarters</dt>
                <dl className="flex items-center space-x-2 text-sm leading-5">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span className="text-gray-600">
                    Kitchener, ON<span className="hidden sm:inline">, Canada</span>
                  </span>
                </dl>
              </div>
              <div>
                <dt className="sr-only">Company size</dt>
                <dl className="flex items-center space-x-2 text-sm leading-5">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="text-gray-600">3 people</span>
                </dl>
              </div>
            </dl>
            <div class="max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Tailwind UI is a small team of developers and designers building tools to help other
                developers build better user interfaces.
              </p>
            </div>
          </header>
          <main className="py-12">
            <article className="grid lg:grid-cols-3 lg:gap-16">
              <div className="hidden lg:block">
                <aside className="sticky top-6 rounded-lg bg-gray-50 p-8">
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
                            strokeWidth="1.5"
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
                            strokeWidth="1.5"
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
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="text-gray-600">$120,000 USD</span>
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
                            strokeWidth="1.5"
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
                        className="inline-block rounded-md bg-indigo-600 px-4 py-2.5 text-base leading-6 font-semibold text-white"
                      >
                        Apply for this job
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-span-2 space-y-8">
                <div className="space-y-2">
                  <h1 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
                    {metadata.title}
                  </h1>
                  <p className="text-lg leading-7 text-gray-500">{metadata.subtitle}</p>
                </div>
                <div className="flow-root lg:hidden">
                  <div className="-my-4">
                    <dl className="divide-y divide-gray-100">
                      <div className="py-4">
                        <dt className="sr-only">Employment type</dt>
                        <dl className="flex items-center space-x-2 text-sm leading-5">
                          <svg
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
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
                        <dl className="flex items-center space-x-2 text-sm leading-5">
                          <svg
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
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
                        <dl className="flex items-center space-x-2 text-sm leading-5">
                          <svg
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="text-gray-600">$120,000 USD</span>
                        </dl>
                      </div>
                      <div className="py-4">
                        <dt className="sr-only">Closing date</dt>
                        <dl className="flex items-center space-x-2 text-sm leading-5">
                          <svg
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
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
                  </div>
                </div>
                <div className="prose">{children}</div>
                <div>
                  <a
                    href="#"
                    className="inline-block rounded-md bg-indigo-600 px-4 py-2.5 text-base leading-6 font-semibold text-white"
                  >
                    Apply for this job
                  </a>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
