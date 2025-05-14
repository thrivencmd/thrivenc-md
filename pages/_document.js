import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="ThriveNC MD PLLC - Physician-led, cash-pay telemedicine clinic based in North Carolina offering weight loss, hormone optimization, and functional medicine services." />
        <meta name="theme-color" content="#111827" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thrivencmd.com/" />
        <meta property="og:title" content="ThriveNC MD PLLC - Telemedicine Specialists" />
        <meta property="og:description" content="Physician-led, cash-pay telemedicine clinic based in North Carolina offering weight loss, hormone optimization, and functional medicine services." />
        <meta property="og:image" content="https://thrivencmd.com/images/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://thrivencmd.com/" />
        <meta name="twitter:title" content="ThriveNC MD PLLC - Telemedicine Specialists" />
        <meta name="twitter:description" content="Physician-led, cash-pay telemedicine clinic based in North Carolina offering weight loss, hormone optimization, and functional medicine services." />
        <meta name="twitter:image" content="https://thrivencmd.com/images/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}