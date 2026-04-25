import { SmartLink } from '../../components/SmartLink';

export default function TestingPage() {
  return (
    <>
      <style data-page-style="testing.html:1">{`/* --- ADDED THIS FOR BETTER SMOOTH SCROLL --- */
        body {
            overscroll-behavior: none;
        }

        /* Basic syntax highlighting for the demo code */
        .token-keyword { color: #c792ea; }
        .token-function { color: #82aaff; }
        .token-string { color: #c3e88d; }
        .token-comment { color: #546e7a; }
        .token-punctuation { color: #89ddff; }
        .token-tag { color: #f07178; }
        .token-attr-name { color: #ffcb6b; }`}</style>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <header className="absolute top-0 left-0 w-full z-50 p-6 md:px-10">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-7">
                <SmartLink
                  href="#"
                  className="text-xl font-bold border-2 border-white rounded px-1.5 py-0"
                >
                  pipe
                </SmartLink>
                <SmartLink
                  href="#"
                  className="text-sm font-medium hidden md:block hover:opacity-80 transition-opacity"
                >
                  For Entrepreneurs
                </SmartLink>
                <SmartLink
                  href="#"
                  className="text-sm font-medium hidden md:block hover:opacity-80 transition-opacity"
                >
                  For Partners
                </SmartLink>
              </div>
              <div className="flex items-center gap-6">
                <SmartLink
                  href="#"
                  className="text-sm font-medium hidden md:block hover:opacity-80 transition-opacity"
                >
                  Resources
                </SmartLink>
                <SmartLink
                  href="#"
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Sign in
                </SmartLink>
                <SmartLink
                  href="#"
                  className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  Get Started
                </SmartLink>
              </div>
            </nav>
          </header>
          <main className="min-h-[90vh] flex items-center justify-center text-center px-4 pt-32 pb-16">
            <div className="max-w-4xl mx-auto">
              <span
                className="text-xs font-bold text-gray-400 tracking-widest uppercase"
                data-speed="0.8"
              >
                GROW ON YOUR TERMS
              </span>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-semibold my-4 leading-none"
                data-speed="0.5"
              >
                The modern capital platform
                <span className="block">For growth on your terms</span>
              </h1>
              <SmartLink
                href="#"
                className="inline-block bg-white text-black text-lg font-semibold px-7 py-3.5 rounded-full mt-6 hover:opacity-90 transition-opacity"
              >
                Unlock Capital
              </SmartLink>
            </div>
          </main>
          <section className="horizontal-scroll-container relative w-full mb-24">
            <div className="panels-container flex w-max py-16 pl-10 md:pl-20 lg:pl-40">
              <div className="panel w-[420px] h-[550px] mr-5 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0">
                <img
                  src="https://placehold.co/420x550/111111/333333?text=Mobile+UI"
                  alt="Mobile UI Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="panel w-[420px] h-[550px] mr-5 rounded-2xl bg-[#050505] border border-zinc-800 overflow-hidden shrink-0 p-5">
                <div className="flex gap-5 pb-3 border-b border-zinc-800 mb-4">
                  <span className="text-sm font-semibold text-white cursor-pointer">
                    React
                  </span>
                  <span className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-white">
                    PHP
                  </span>
                  <span className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-white">
                    Lisp
                  </span>
                  <span className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-white">
                    Smalltalk
                  </span>
                  <span className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-white">
                    Brainf...
                  </span>
                </div>
                <pre>
                  <code className="font-mono text-xs leading-relaxed text-gray-400">
                    {'\n'}
                    <span className="token-keyword">import</span> React{' '}
                    <span className="token-keyword">from</span>{' '}
                    <span className="token-string">"react"</span>
                    {'\n'}
                    <span className="token-keyword">import</span>{' '}
                    <span className="token-punctuation">{'{'}</span> PjsEmbed{' '}
                    <span className="token-punctuation">{'}'}</span>{' '}
                    <span className="token-keyword">from</span>{' '}
                    <span className="token-string">"@pipe/ui-embeddable"</span>
                    {'\n'}
                    {'\n'}
                    <span className="token-keyword">function</span>{' '}
                    <span className="token-function">PipeEmbedPage</span>
                    <span className="token-punctuation">(</span>{' '}
                    <span className="token-punctuation">)</span>{' '}
                    <span className="token-punctuation">=&gt;</span>{' '}
                    <span className="token-punctuation">{'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className="token-keyword">return</span>{' '}
                    <span className="token-punctuation">(</span>
                    {'\n'}
                    {'    '}
                    <span className="token-tag">&lt;Layout&gt;</span>
                    {'\n'}
                    {'      '}
                    <span className="token-tag">&lt;PjsEmbed</span>
                    {'\n'}
                    {'        '}
                    <span className="token-attr-name">clientName</span>
                    <span className="token-punctuation">=</span>
                    <span className="token-string">"YOUR_CLIENT_NAME"</span>
                    {'\n'}
                    {'        '}
                    <span className="token-attr-name">onSuccess</span>
                    <span className="token-punctuation">=</span>
                    <span className="token-punctuation">{'{'}</span>{' '}
                    <span className="token-punctuation">(</span>
                    <span className="token-attr-name">authCode</span>
                    <span className="token-punctuation">)</span>{' '}
                    <span className="token-punctuation">=&gt;</span>{' '}
                    <span className="token-punctuation">{'{'}</span>
                    {'\n'}
                    {'          '}
                    <span className="token-comment">
                      // send authCode to your backend
                    </span>
                    {'\n'}
                    {'        '}
                    <span className="token-punctuation">
                      {'}'}
                      {'}'}
                    </span>
                    {'\n'}
                    {'      '}
                    <span className="token-tag">/&gt;</span>
                    {'\n'}
                    {'    '}
                    <span className="token-tag">&lt;/Layout&gt;</span>
                    {'\n'}
                    {'  '}
                    <span className="token-punctuation">)</span>
                    {'\n'}
                    <span className="token-punctuation">{'}'}</span>
                    {'\n'}
                    {'                        '}
                  </code>
                </pre>
              </div>
              <div className="panel w-[420px] h-[550px] mr-5 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0">
                <img
                  src="https://placehold.co/420x550/1c3a4a/ffffff?text=Image+1"
                  alt="Person in blue turtleneck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="panel w-[420px] h-[550px] mr-5 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0">
                <img
                  src="https://placehold.co/420x550/4a3a2a/ffffff?text=Image+2"
                  alt="Person holding paper"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="panel w-[420px] h-[550px] mr-5 rounded-2xl bg-[#030303] border border-zinc-800 overflow-hidden shrink-0 flex items-center justify-center">
                <svg
                  width={144}
                  height={48}
                  viewBox="0 0 144 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120 2L142 24L120 46"
                    className="stroke-orange-500"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M84 2L106 24L84 46"
                    className="stroke-orange-500"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0 24H142"
                    className="stroke-orange-500"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="panel w-[420px] h-[550px] mr-5 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0">
                <img
                  src="https://placehold.co/420x550/4a4a2a/ffffff?text=Image+3"
                  alt="Person at desk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="max-w-4xl mx-auto text-center py-24 px-6">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              We’re eliminating the friction and bias of traditional financing,
            </h2>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              connecting business builders to quick, easy capital, and helping
              small to mid-size businesses build something bigger.
            </p>
          </section>
          <footer className="bg-zinc-900/50 border-t border-zinc-800 p-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-around gap-x-10 gap-y-6 text-gray-400">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg text-white">⚲</span>
                <p>Click, connect, and unlock capital</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg text-white">🔖</span>
                <p>One flat fee with no hidden interest</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg text-white">⇆</span>
                <p>Automatic payments that flex with sales</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg text-white">⚡</span>
                <p>Frictionless payouts in just days</p>
              </div>
            </div>
          </footer>
        </div>{' '}
      </div>
    </>
  );
}
