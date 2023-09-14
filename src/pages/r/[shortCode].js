import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function RedirectToOriginalUrl() {
  // This component won't actually render anything, 
  // as the redirection will be handled server-side
  return null;
}

export async function getServerSideProps(context) {
  const { shortCode } = context.params;

  try {
    const url = await prisma.shortenedUrl.findUnique({
      where: {
        short_code: shortCode,
      },
    });

    const originalUrl = url?.original_url;

    if (originalUrl) {
      // Redirect to the original URL if it's found
      return {
        redirect: {
          destination: originalUrl,
          permanent: false,
        },
      };
    } else {
      // Return a 404 status if the URL is not found
      return {
        notFound: true,
      };
    }
  } catch (error) {
    // Handle any other errors
    return {
      notFound: true,
    };
  }
}
