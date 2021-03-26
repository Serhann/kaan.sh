import { useLastFM } from 'use-last-fm';

const CurrentlyPlaying = () => {
  const lastFM = useLastFM('kaanmutlu', 'd5f4757d3e893690cac17f3579841f33');

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>;
  }

  return (
    <p>
      Listening to {lastFM.song.name} by {lastFM.song.artist}
    </p>
  );
};
