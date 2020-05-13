import Link from 'next/link'

export default function Header() {
  return (
    <header className="space-y-4">
      <Link href="/">
        <a class="block">
          <img className="h-6 w-auto" src="/img/tailwind-ui-logo.svg" alt="Tailwind UI" />
        </a>
      </Link>
      <dl class="flex space-x-6">
        <div>
          <dt className="sr-only">Company headquarters</dt>
          <dl className="flex items-center space-x-2 text-sm leading-5">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>

            <span className="text-gray-600">
              Kitchener, ON<span className="hidden sm:inline">, Canada</span>
            </span>
          </dl>
        </div>
        <div>
          <dt className="sr-only">Company size</dt>
          <dl className="flex items-center space-x-2 text-sm leading-5">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
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
  )
}
