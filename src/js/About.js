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
      <h1>Yhteystiedot</h1>
      <p>
        Tilan puhelinaika arkisin on klo 9-16. Viikonloppuisin klo 10-14. Muina aikoina voi laittaa viestiä somen kautta.
      </p>
      <ul>
        <li>puhelinumero 040-14581893</li>
        <li>sähköposti toivonkotielainpusito@gmail.fi</li>
        <li>Instagram</li>
        <li>Facebook</li>
      </ul>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}

    </div>
  )
}
