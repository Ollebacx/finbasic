
import Head from "next/head";

import Header from '../components/Header'
import { NavBar } from '../components'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  padding: '1em',
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const MainLayout = props => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <meta charSet='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title style={{
        fontFamily: 'Montserrat Alternates, sans-serif',
        fontWeight: '800',
        fontStyle: 'italic',
        color: 'white',
        fontSize: '24px',
        margin: '.6em'
      }}>Finbasic</title>

      <link rel='manifest' href='/manifest.json' />
      <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        media="print"
        onLoad="this.media='all'"
      ></link>
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        ></link>
      </noscript>
      <meta name='theme-color' content='#444444' />
    </Head>
    <Header />
    <NavBar />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default MainLayout;