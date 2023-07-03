import Theme from '../styles/theme';
import '../components/Projects/style.css'
import '../constants/pagination.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 