import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/index";

export default function Layout({ children }) {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "DELETE",
    });
    mutate(null);
  };
  return (
    <>
      <style jsx global>
        {`
          a {
            text-decoration: none !important;
            cursor: pointer;
            color: #70ad89;
          }
          a:hover {
            color: #70ad89;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: "Fira Code", monospace;
            color: #f5f2e2;
            background-color: #1e1e20;
          }
          h1 {
            color: #f5f2e2;

          }

          h2 {
            color: #f5f2e2;

          }
          label {
            display: flex;
            margin-bottom: 0.5rem;
            align-items: center;
            width: 100%;
          }
          form {
            margin-bottom: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          input,
          textarea {
            font-family: monospace;
            flex: 1 1 0%;
            margin-left: 0.5rem;
            box-shadow: none;
            width: 100%;
            color: #f5f2e2;
            background-color: transparent;
            border: 1px solid #d8d8d8;
            border-radius: 5px;
            outline: 0px;
            padding: 10px 25px;
          }
          button {
            display: block;
            margin-bottom: 0.5rem;
            color: #fff;
            border-radius: 5px;
            border: none;
            background-color: #000;
            cursor: pointer;
            transition: all 0.2s ease 0s;
            padding: 10px 25px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
          }
          button:hover,
          button:active {
            transform: translate3d(0px, -1px, 0px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }
          header {
            border-bottom: 1px solid #d8d8d8;
          }
          nav {
            max-width: 1040px;
            margin: auto;
            padding: 1rem 2rem;
          }
          nav div {
            float: right;
          }
          nav div a {
            font-size: 0.9rem;
            margin-left: 1rem;
          }
          nav h1 {
            font-size: 1rem;
            margin: 0;
            font-weight: 700;
            float: left;
          }
          nav:after {
            content: "";
            clear: both;
            display: table;
          }

          main {
            padding: 1rem;
            max-width: 1040px;
            margin: 0 auto;
          }
          footer {
            text-align: center;
            font-size: 0.8rem;
            margin-top: 1rem;
            padding: 3rem;
            color: #888;
          }
        `}
      </style>
      <Head>
        <title>Next.js + MongoDB App</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
        <script async defer data-website-id="ee5ddd4c-db4b-4d90-8575-f3aad940a7d5" src="https://umami.tinyfactories.space/umami.js"></script>
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>
              <h1>Tiny Hardware Club</h1>
            </a>
          </Link>
          <div>

            <Link href="/catalog">
              <a>catalog</a>
            </Link>
            <Link href="/newsletter">
              <a>newsletter</a>
            </Link>
          </div>
          <div>
            {!user ? (
              <></>
            ) : (
              <>
                <Link href={`/user/${user._id}`}>
                  <a>acount</a>
                </Link>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                {/* <a tabIndex={0} role="button" onClick={handleLogout}>
                  Logout
                </a> */}
              </>
            )}
          </div>
        </nav>
      </header>

      <main>{children}</main>
      <footer className="dt w-100 pa3-ns">
        <div className="dtc v-mid w-50 tl">
          <div className="link diblink dib b">
            <a
              href="https://tinyfactories.space"
              target="_blank"
              rel="noopener noreferrer"
            >
              a tiny factories project ↗
            </a>
          </div>
        </div>
        <div className="dtc v-mid w-15 tr">
          <a
            href="https://github.com/tiny-factories/code-of-conduct"
            className="link dib"
            target="_blank"
            rel="noopener noreferrer"
          >
            code of conduct ↗
          </a>{" "}
          ·
          <a
            href="hyper://ce361e407fd3cf2a3cdf3ed7e08b3fb0383f95b502ee88ebd76c977dc280b215/"
            className="link dib"
            target="_blank"
            rel="noopener noreferrer"
          >
            p2p ↗
          </a>
        </div>
      </footer>
    </>
  );
}
