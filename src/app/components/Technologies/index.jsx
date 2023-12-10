import React from "react";

import Image from "next/image";
import "../Technologies/style.sass";

export default function Technologies() {
  return (
    <>
      <section className="container-technologies">
        <div className="technologies">
          <Image
            className="image-technologies"
            src="/type.svg"
            width={80}
            height={80}
            priority
          />
          <p>Typescript</p>
        </div>
        <div className="technologies">
          <Image
            className="image-technologies"
            src="/react.svg"
            width={80}
            height={80}
            priority
          />
          <p>React-native</p>
        </div>
        <div className="technologies">
          <Image
            className="image-technologies"
            src="/react.svg"
            width={80}
            height={80}
            priority
          />
          <p>React</p>
        </div>
        <span></span>
      </section>
    </>
  );
}
