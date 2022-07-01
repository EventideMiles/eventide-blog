import '@styles/globals.css';
import "@node/react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import supabase from '@utils/supabaseClient';
import { Session } from '@supabase/supabase-js';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          updateSupabaseCookie(event, session);
        } else if (event === "SIGNED_OUT") {
          removeSupabaseCookie(event);
        }
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  });

  async function updateSupabaseCookie(event: string, session: Session | null) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  async function removeSupabaseCookie(event: string) {
    await fetch("api/auth", {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event }),
    })
  }
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
