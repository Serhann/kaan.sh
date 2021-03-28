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

export default function Portfoy() {
  return (
    <LayoutGA>
      <body className="text-white bg-white dark:bg-black dark:text-black">
        <Container>
          <div>
            <Head>
              <title>kaan.sh</title>
              <link rel="icon" href="./favicon.png" />
              <meta name="keywords" content="Kaan Mutlu"></meta>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js" />
            </Head>
            <NextSeo
              title="Portfoy | Kaan Mutlu"
              description="Software Developer Based In Copenhagen, Denmark"
            />
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Domain Portföyü
              </h1>
              <h2 className="mb-10 text-gray-600 dark:text-gray-400">
              kolayodev.com<br />
              yasalmevzuat.com<br />
              teknolojiturkiye.com<br />
              kurdihaber.com
              </h2>
          </div>
    </div>
        </Container>
      </body>
    </LayoutGA>
  );
}
