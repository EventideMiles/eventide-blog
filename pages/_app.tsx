import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import "./../node_modules/react-toastify/dist/ReactToastify.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={5000}
        newestOnTop={true}
        pauseOnHover
        pauseOnFocusLoss
        draggable
        closeOnClick
      />
    </>
  );
}

export default MyApp;
