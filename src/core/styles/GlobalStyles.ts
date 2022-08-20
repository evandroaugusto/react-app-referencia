import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
      background: #f0f0f0;
      font-family: "Roboto","Helvetica","Arial",sans-serif;
      color: #545454;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
      color: #545454;
      margin: 0 0 8px 0;
    }

    html, body {
        width: 100%;
        height: 100vh;
        padding: 0px;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;
