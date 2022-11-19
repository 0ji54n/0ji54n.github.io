import { Global } from "@emotion/react";
import React from 'react';
const Fonts = () => (
    <Global
      styles={`
      @font-face {font-family: "Calibri"; src: url("//db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.eot"); src: url("//db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.woff") format("woff"), url("//db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.svg#Calibri") format("svg"); }
        `}
    />
  )
  
  export default Fonts