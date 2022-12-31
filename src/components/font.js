import { Global } from "@emotion/react";
import React from 'react';
const Fonts = () => (
    <Global
      styles={`
      @import url(//db.onlinewebfonts.com/c/a21764905c623777a48ec557b4229c22?family=Anurati);
      @font-face {
        font-family: 'Calibri';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/l/font?kit=J7afnpV-BGlaFfdAhLEY6w&skey=a1029226f80653a8&v=v15) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
        `}
    />
  )
  
  export default Fonts