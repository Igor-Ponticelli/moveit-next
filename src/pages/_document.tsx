import Document, { Html, Head, Main, NextScript } from 'next/document';
// Tudo o que é estático e tem que ser renderizado apenas uma vez, vem aqui. (como se fosse o index.html do react-app).
// Exemplos: fontes

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Html>
    );
  }
}