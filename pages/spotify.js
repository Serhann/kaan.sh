import { useLastFM } from 'use-last-fm';

export default function CurrentlyPlaying() {
  const lastFM = useLastFM('kaanmutlu', 'd5f4757d3e893690cac17f3579841f33');

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>;
  }

  return (
    <div class="flex items-center space-x-5 border-2 w-96 border-black h-24 rounded-2xl">
  <img src={lastFM.song.art} class="rounded-lg ml-4 w-16 h-16" />
  <div class="flex flex-col">
    <h1>Listening to <strong>{lastFM.song.name}</strong> by <strong>{lastFM.song.artist}</strong></h1>
    <h1 class="text-sm">Spotify</h1>
  </div>
</div>
  );
};
