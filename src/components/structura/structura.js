import Image from "next/image";
import { render } from "react-dom";
import React, { useState } from 'react';

import structurasDesktop from "../../assets/images/structura.jpg";
import structurasMobile from "../../assets/images/structura2.jpg";

function Structuras() {
   const [img, setImg] = useState(structurasDesktop);
   const [width, setiWdth] = useState("1517");
   const [height, setHeight] = useState("865");

   React.useEffect(() => {
      if (window.innerWidth < 700) {
         setImg(structurasMobile);
         setiWdth('540')
         setHeight('1029')
      } else {
         setImg(structurasDesktop)
         setiWdth('1517')
         setHeight('865')
      }
   }, []);

   return (
      <section className="structura">
         <div className="container">
            <h1 className="structura__heading">структура института</h1>

            <Image className="structura__img" src={img} alt="structura" width={width} height={height} />
         </div>
      </section>
   )
}

export default Structuras