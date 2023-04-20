import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,  shrink-to-fit=no"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
