import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meu Site</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
