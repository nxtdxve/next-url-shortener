import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortCode, setShortCode] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setShortCode(data.shortCode);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortCode && (
        <div>
          Shortened URL: <a href={`/api/r/${shortCode}`}>/api/r/{shortCode}</a>
        </div>
      )}
    </div>
  );
}
