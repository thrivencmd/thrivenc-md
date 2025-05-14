import '../styles/globals.css';
import { Inter, Merriweather } from 'next/font/google';

// Import components
import Layout from '../components/layout/Layout';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${merriweather.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}