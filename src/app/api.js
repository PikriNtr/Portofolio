import axios from 'axios';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  const response = await axios.post(TOKEN_ENDPOINT, new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  }), {
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
}

export default async function handler(req, res) {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await response.data;

    res.status(200).json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map(artist => artist.name).join(', '),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch now playing' });
  }
}
