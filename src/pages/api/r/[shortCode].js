import urls from '../../../db';

export default function handler(req, res) {
  const { shortCode } = req.query;
  const originalUrl = urls[shortCode];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('URL not found');
  }
}
