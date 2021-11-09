import { useEffect, useState } from "react";

export default function About () {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <h1>Omat tiedoot</h1>
      <p>
        Sivuiltamme löydät tietoa eläinpuistostamme ja voit myös käydä
        katsomassa verkkokauppamme sisältöä ja tarjottavia palveluita
      </p>
      
      <h3>Yhteystiedot</h3>

      <p>Sed gravida lacus sit amet leo feugiat luctus a at mi. Nullam tempus rutrum nibh, non pretium libero dapibus non. Nam sit amet est ac sapien tincidunt lobortis. Duis mi nisl, rhoncus a sodales vel, euismod id urna.</p>

      <h3>Palaute</h3>

      <p>Donec at lobortis felis, ut accumsan ex. Ut placerat massa lorem, a sagittis augue volutpat ac. Vestibulum suscipit sagittis ligula, nec posuere augue fermentum scelerisque.
         Aliquam nisl est, aliquet in dignissim nec, pellentesque a erat. In pharetra porta ipsum a vulputate. Sed faucibus nisl nec sem varius varius. Maecenas ac luctus nibh.</p>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}

    </div>
  )
}
