import { useEffect, useState } from 'react';

interface Song {
  isPlaying: boolean;
  songUrl: string;
  albumImageUrl: string;
  title: string;
  artist: string;
}

export default function NowPlaying() {
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/now-playing');
      const data = await res.json();
      setSong(data);
    }
    fetchData();
  }, []);

  if (!song || !song.isPlaying) return null;

  return (
    <div>
      <a href={song.songUrl} target="_blank" rel="noopener noreferrer">
        <img src={song.albumImageUrl} alt={song.title} width="50" height="50" />
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </a>
    </div>
  );
}