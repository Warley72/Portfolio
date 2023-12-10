import "../Footer/style.sass";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <h1>Contato</h1>
        <div className="contact">
          <div className="instagram">
            <Image
              className="image-footer"
              src="/instagram.svg"
              alt="Imagem do instagram"
              width={60}
              height={50}
              priority
            />
            <a className="link-footer" href="">warley02</a>
          </div>
          <div className="email">
            <Image
              className="image-footer"
              src="/email.svg"
              alt="imagemm do email"
              width={60}
              height={50}
              priority
            />
            <a className="link-footer" href="">carloswarley0</a>
          </div>
        </div>
        <div className="design">
          <Image
            src="/by-CW-Design.svg"
            alt="Logo do design"
            width={207}
            height={53}
            priority
          />
        </div>
      </footer>
    </>
  );
}
