import axios from 'axios';
import { useState } from 'react';

export function UrlShortenerForm() {
  const [longUrl, setLongUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleShorten = async () => {
    setError(null);
    setShortUrl(null);

    if (!longUrl.trim()) {
      setError('Please, insert a valid URL');
      return;
    }

    try {
      const response = await axios.post('/api/api/v1/shorten', {
        url: encodeURI(longUrl.trim()),
      });
      setShortUrl(response.data.result_url);
    } catch (e) {
      setError("It's not possible to short this URL. Please try again later");
    }
  };

  return (
    <div className="url-shortener-form">
      <div>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button onClick={handleShorten}>Encurtar</button>
      </div>
      {shortUrl && (
        <div>
          <p>Short URL</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
