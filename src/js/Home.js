import { useEffect, useState } from "react";
import Logo from '../img/logo.png'

export default function Home() {

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
      <h1>Tervetuloa sivuillemme!</h1>
      <p>
        Toivon kotipuisto sijaitsee Oulun keskustasta n.30 min ajomatkan päästä luonnon keskuudessa 
        kauniin  merinäkymän vieressä. Tilalle pääsee helposti myös julkisia käyttäen. 
      </p>
      <p>Verkkosivuillamme pääset tarkistamaan ajankohtaiset tapahtumat, tutkimaan puiston tekemiä
        tuotteita (mm. alpakan villalankaa, maapähkinäherkkuja koirille ja hunajaa) sekä tilaamaan lippuja
        puistoon. Kaiken voi myös ostaa lahjaksi!</p>
      <p>
        Tilalla pääset tutustumaan kiltteihin ja hellyttäviin kotieläimiin, kuten lampaisiin, laamoihin, 
        lehmiin, poroihin, kissoihin, koiriin, pupuihin, kanoihin, ankkoihin, vuohiin tai jopa hieman 
        harvinaisempiin eläimiin.
      </p>
      <p>Puistosta löytyy myös eläinten lisäksi muuta toimintaa leikkipuisto perheen pienemmille, missä 
        on kiipeilyteline ja keinuja. Myös askartelupaja missä pääsee kokeilemaan huovutusta tai maalaamista.
      </p>
      <p>
        Jos nälkä yllättää vieraillessa tilalta löytyy laadukas kahvila, josta saa ostettua erilaisia herkkuja. 
        Samasta rakennuksesta löytyy myös kotieläinpuiston pieni putiikki, jonka villatuotteet on valmistettu tilan 
        omasta villasta.
      </p>

      <figure className="picture">
        <img src={Logo} />
      </figure>

      <h3>Palvelut</h3>
      <p>
        Tarjoamme monipuolisia palveluita vierailijoille, kuten opastettuja kierroksia, kummitoimintaa eläimille, terapiaa ja
        monipuolisesti opettavia kursseja. Palveluihin voi tutustua tarkemmin palvelut sivuilta.
      </p>

      <figure className="picture">
        <img src={Logo} />
      </figure>

      <h3>Ajankohtaista</h3>

      <p><b>5.9</b> Koiran koulutus kurssi osa.2</p>
      <p><b>20.8</b> Villahuovutus kurssi</p>
      <p><b>18.7</b> Koiran koulutus kurssi osa.1</p>
      <p><b>10.7</b> Vaellus retki ponien ja laamojen kanssa</p>
      <p><b>5.6</b> Avoimet ovet</p>



      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}

    </div>
  );
}
