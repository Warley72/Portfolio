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
              width={50}
              height={40}
              priority
            />
            <a className="link-footer" href="https://www.instagram.com/warley02/" target="_blank">
              warley02
            </a>
          </div>
          <div className="email">
            <Image
              className="image-footer"
              src="/email.svg"
              alt="imagemm do email"
              width={50}
              height={40}
              priority
            />
            <a className="link-footer" href="#" target="_blank">
              carloswarley0
            </a>
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
