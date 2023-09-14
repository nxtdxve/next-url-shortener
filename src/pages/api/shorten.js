import urls from '../../db';
import { generateShortCode } from '../../utils';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const originalUrl = req.body.url;
    const shortCode = generateShortCode();
    urls[shortCode] = originalUrl;
    res.status(200).json({ shortCode });
  } else {
    res.status(405).end(); // Method not allowed
  }
}
