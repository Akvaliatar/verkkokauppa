import { useEffect, useState } from "react";

export default function Services () {

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
      <h1>Palvelut</h1>
      <p>
        Sivuiltamme löydät tietoa eläinpuistostamme ja voit myös käydä
        katsomassa verkkokauppamme sisältöä ja tarjottavia palveluita
      </p>

      <h2>Opastetut kierrokset</h2>

      <p>
        Tarjoamme opastettuja kierroksia missä tutustumme puiston tiloihin ja eläimiin. 
        Pääset tapaamaan tilalla asuvia eläimiä. Kerromme tietoa tilan asukkaista ja heidän
        elämästä tilalla. Miten kotieläinpuisto toimii ja miten eläimet meille valitaan. 
        Samalla tutustumme tilalla oleva kahvilan herkkuihin ja puotiin. Opastettujen 
        kierrosten ryhmäkoko on 10-30 henkeä. 
      </p>

      <h2>Terapiatoiminta</h2>

      <p>
        Tarjoamme erilaisia eläinpohjaista terapian muotoja asiakkaille. Terapia toteutetaan osaavien
         ohjaajien avulla ja terapiassa hyödynnetään kotieläinpuiston eläimiä. Terapia tapahtuu joko 
         yksilö- tai ryhmäterapiana. Suosituimmat tarjolla olevat terapia ryhmät ovat ratsastusterapia 
         ja toimintaterapia, missä hoidamme ryhmässä tilan eläimiä. 
      </p>

      <h2>Kummitoiminta </h2>

      <p>
        Kiinnostaisiko ryhtyä eläimelle kummiksi? Meillä on  siihen mahdollisuus. Pääset valitsemaan 
        tilan  asukkaista “oman” eläimen, jota pääset hoitamaan ja tapaamaan etukäteen sovittuina 
        tapaamisilla. Jos kiinnostuit ota rohkeasti yhteyttä meihin joko soittamalla tai somen kautta. 
      </p>

      <h2>Kurssitoiminta</h2>

      <p>
        Tarjoamme monipuolisesti opettavia kursseja eläinten hoidosta ja niiden terveyden ylläpitämisestä.
         Kursseilla käydään ensin läpi teoriaa ja loppupuolella päästään kokeilemaan kurssilla opittua 
         tietoa puiston turvallisessa ympäristössä opettajan ohjauksen avulla. Opettajina toimii osaava 
         kotieläinpuiston tallimestari. Kurssien henkilö määrä on 10-50. 
      </p>

      <h2>Kesäleirit</h2>

      <p>
        Kesällä tarjoamme perheen pienemmille opettavaisia kesäkursseja. Tutustumme eri eläimiin ja niiden
         hoitoon. Kursseilla päästään osallistumaan tilan eläinten hoitoon ja jokaiselle kurssilaiselle 
         annetaan kurssin ajaksi oma hoidokki, jonka hoitoon osallistumaan kesäleirin aikana. 
      </p>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  )
}
