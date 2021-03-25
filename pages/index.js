import Head from "next/head";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 transition hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <LayoutGA>
      <body className="text-white bg-white dark:bg-black dark:text-black">
        <Container>
          <div>
            <Head>
              <title>kaan.sh</title>
              <link rel="icon" href="./favicon.png" />
              <meta name="keywords" content="Kaan Mutlu"></meta>
            </Head>
            <NextSeo
              title="Kaan Mutlu"
              description="Software Developer Based In Copenhagen, Denmark"
            />
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Hey, I'm Kaan <span className="emoji-wave">👋</span>
              </h1>
              <div className="flex mb-4 space-x-4">
                <ExternalLink href="https://github.com/kaanmutlu17">
                  <span className="sr-only">Github</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </g>
                  </svg>
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/kaanmutlu17/">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </g>
                  </svg>
                </ExternalLink>
                <ExternalLink href="mailto:kaan@kaan.sh">
                  <span className="sr-only">Email</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </g>
                  </svg>
                </ExternalLink>
              </div>
              <h2 className="mb-10 text-gray-600 dark:text-gray-400">
              CEO & Founder of Sanvia Digital | Software Developer
              </h2>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                About
              </h1>
              <h2 className="mb-10 text-gray-600 dark:text-gray-400">
              Hello, I'm Kaan Mutlu. I am a 16 year old software developer. I am also the CEO & Founder of the Sanvia Digital media company. You can click the mail icon to contact me.
              </h2>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Contact
              </h1>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="logo-github"/> Github: <a href="https://github.com/kaanmutlu17"><code>@kaanmutlu17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="key"/> Keybase: <a href="https://keybase.io/kaanmutlu"><code>@kaanmutlu</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="logo-twitter"/> Twitter: <a href="https://twitter.com/kaanmtl17"><code>@kaanmtl17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="logo-linkedin"/> LinkedIn: <a href="https://linkedin.com/in/kaanmutlu17"><code>@kaanmutlu17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="logo-instagram"/> Instagram: <a href="https://instagram.com/kaanmutlu17"><code>@kaanmutlu17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="logo-discord"/> Discord: <a href="https://discord.com/users/524681391959441419"><code>Kaan#0005</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
              <ion-icon name="mail"/> E-Mail: <a href="mailto:kaan@kaan.sh"><code>kaan@kaan.sh</code></a>
              </h2>
            </div>
          </div>
          <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </Container>
      </body>
    </LayoutGA>
  );
}
