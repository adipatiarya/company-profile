import Head from 'next/head';
import Script from 'next/script'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// own css files here
import "../css/styles.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Adipatarya Developers</title>
    
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="adipatiarya github.com adipatiarya"/>
        <meta name="author" content="Adipati arya"/>    
        <link rel="shortcut icon" href="favicon.ico"/>  
        
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic&display=optional" rel='stylesheet' type='text/css'/>
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700&display=optional' rel='stylesheet' type='text/css'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css"/>
        <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"/>
        <link rel="stylesheet" href="https://unpkg.com/octicons@4.4.0/build/font/octicons.css"/>
        <link rel="stylesheet" href="https://unpkg.com/github-activity-feed@latest/dist/github-activity.min.css"></link>

      </Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js"></Script>
      <Script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"/>

      <Script type="text/javascript" src="https://unpkg.com/mustache@4.2.0/mustache.min.js"/>
      <Script type="text/javascript" src="https://unpkg.com/github-activity-feed@latest/dist/github-activity.min.js"/>

      <Script src="https://code.jquery.com/jquery-1.11.0.js"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-rss/3.3.0/jquery.rss.min.js"/>

      <Script src="./assets/js/main.js" strategy="lazyOnload"/>

      <Component {...pageProps} />

      
    </>
  );
}

export default MyApp
