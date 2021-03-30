import Head from "next/head";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";

import { LogoTwitter, LogoGithub, Key, Mail } from 'react-ionicons';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";

  const [song, setSong] = useState({ name: null, artist: null, photo: null, playing: false });

  useEffect(async () => {
    const res = await fetch("https://api.lanyard.rest/v1/users/182292736790102017");

    if (res.ok) {
      const parsedResponse = (await res.json());

      if (parsedResponse.success && parsedResponse.data.listening_to_spotify)
        setSong({ name: parsedResponse.data.spotify.song, artist: parsedResponse.data.spotify.artist, photo: parsedResponse.data.spotify.album_art_url, playing: true });
    }

    console.log(song);
  }, [])

  return (
    <LayoutGA>
        <Container>
            <Head>
              <link rel="icon" href="./favicon.png" />
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
                <ExternalLink href="https://twitter.com/kaanmtl17">
                  <span className="sr-only">Twitter</span>
                  <LogoTwitter color={color} />
                </ExternalLink>
                <ExternalLink href="https://github.com/kaanmutlu17">
                  <span className="sr-only">Github</span>
                  <LogoGithub color={color} />
                </ExternalLink>
                <ExternalLink href="https://keybase.io/kaanmutlu">
                  <span className="sr-only">Keybase</span>
                  <Key color={color} />
                </ExternalLink>
                <ExternalLink href="mailto:kaan@kaan.sh">
                  <span className="sr-only">Email</span>
                  <Mail color={color} />
                </ExternalLink>
              </div>
    
              <h2 className="mb-10 text-gray-600 dark:text-gray-400">
                CEO & Founder of Sanvia Digital | Software Developer
              </h2>
    
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                About
              </h1>

              <h2 className="mb-10 text-gray-600 dark:text-gray-400">
                Hello, I'm Kaan Mutlu. I am a 16 year old software developer. I am also the CEO & Founder of Sanvia Digital media company. You can click the mail icon to contact me.
              </h2>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Contact
              </h1>
              
              <h2 className="mb-1 text-gray-600 dark:text-gray-400" style={{ verticalAlign: 'middle' }}>
                Github: <ExternalLink href="https://github.com/kaanmutlu17"><code>kaanmutlu17</code></ExternalLink>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                Keybase: <a href="https://keybase.io/kaanmutlu"><code>kaanmutlu</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                Twitter: <a href="https://twitter.com/kaanmtl17"><code>@kaanmtl17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                LinkedIn: <a href="https://linkedin.com/in/kaanmutlu17"><code>kaanmutlu17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                Instagram: <a href="https://instagram.com/kaanmutlu17"><code>@kaanmutlu17</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                Discord: <a href="https://discord.com/users/524681391959441419"><code>Kaan#0005</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                E-Mail: <a href="mailto:kaan@kaan.sh"><code>kaan@kaan.sh</code></a>
              </h2>
              <h2 className="mb-1 text-gray-600 dark:text-gray-400">
                PGP Fingerprint: <a href="https://kaan.sh/kaanmutlu.asc"><code>ADFE 6659 69BA B089 F1A0 C96E A62A E36C 4EA5 8164</code></a>
              </h2>

              <div class="px-40 py-5">
                <div class="flex items-center space-x-5 border-2 border-black h-24 rounded-2xl dark:border-white" style={{ width: '21.5rem' }}>
                  <img src={song.photo} class="rounded-lg ml-4 w-16 h-16" />
                  <div class="flex flex-col">
                    <h1 style={{ color }}>{song.name}</h1>
                    <h1 style={{ color }}>{song.artist}</h1>
                  </div>
                </div>
              </div>
            </div>

        </Container>
    </LayoutGA>
  );
}
