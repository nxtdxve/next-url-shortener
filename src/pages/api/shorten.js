import { PrismaClient } from '@prisma/client';
import { generateShortCode } from '../../utils';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const originalUrl = req.body.url;
    const shortCode = generateShortCode();

    try {
      await prisma.shortenedUrl.create({
        data: {
          short_code: shortCode,
          original_url: originalUrl,
        },
      });
      res.status(200).json({ shortCode });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
