import { useState } from 'react';
import Head from 'next/head';

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
    <div className="app">
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
          <h1 className="section__title">URL Shortener</h1>
          
          <form onSubmit={handleSubmit} className="center">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
            <button type="submit" className="btn">Shorten</button>
          </form>
          
          {shortCode && (
            <div className="center">
              <span>Shortened URL: </span>
              <a href={`/r/${shortCode}`} className="link">r/{shortCode}</a>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
