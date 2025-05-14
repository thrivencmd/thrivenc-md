import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | ThriveNC MD PLLC</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <section className="bg-dark-900 py-24 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-gray-300 max-w-lg mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}