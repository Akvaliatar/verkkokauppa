import { useEffect, useState } from "react";

export default function AboutUs () {

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
      <h1>Meistä</h1>
      <p>
        Toivon kotipuisto sijaitsee Oulun keskustasta n. 30  min ajomatkan päästä luonnon keskuudessa 
        kauniin  merinäkymän vieressä. Tilalle pääsee helposti myös julkisia käyttäen. 
      </p>
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

      <h2>Toimita</h2>
      <p>
        Tarjoamme monipuolisia palveluita vierailijoille, kuten opastettuja kierroksia, kummitoimintaa eläimille, terapiaa ja
        monipuolisesti opettavia kursseja. Palveluihin voi tutustua tarkemmin palvelut sivuilta.
      </p>


      <h2>Ohjeita vierailijalle</h2>
      
      <p></p>

      
      <h2>Eläimet</h2>
      <p>Vestibulum elementum molestie lacinia. Phasellus molestie tincidunt libero ut congue. Proin porttitor metus vitae turpis ultrices molestie. In suscipit pharetra dolor,
         sed vulputate nibh ullamcorper at. Aliquam erat volutpat. Maecenas sagittis nibh non nibh ornare hendrerit. Ut nisi sapien, fringilla ac nisl vel, maximus lobortis sapien.
          Vivamus purus nisi, bibendum tincidunt sagittis eget, placerat a tortor. Nam ac ullamcorper neque. Praesent dignissim turpis quis tempor condimentum. Cras auctor sollicitudin
           nisi eu cursus. Proin odio tortor, blandit sit amet nunc quis, tincidunt luctus est. Ut efficitur nulla eget tortor euismod, non posuere elit rutrum. Cras sed metus 
           interdum mi egestas accumsan eu a quam.</p>

      <p>Curabitur mollis eu nulla vel pellentesque. Vestibulum nec justo sed dui efficitur efficitur. Nullam viverra dolor massa, eu faucibus ipsum sodales quis. Etiam in libero id
         tortor dictum rutrum vitae at diam. Nullam et lorem nisi. Suspendisse non sem augue. Vestibulum facilisis viverra urna vel tempus.</p>

      <p>Donec at lobortis felis, ut accumsan ex. Ut placerat massa lorem, a sagittis augue volutpat ac. Vestibulum suscipit sagittis ligula, nec posuere augue fermentum scelerisque.
         Aliquam nisl est, aliquet in dignissim nec, pellentesque a erat. Aenean non turpis neque. Etiam sit amet tellus gravida, luctus enim in, consectetur eros. Ut placerat neque 
         eget tellus fringilla faucibus. Donec dignissim massa sed massa pretium, non feugiat justo porttitor. Integer aliquam massa vel gravida viverra. Pellentesque blandit nisl id
          orci interdum, sed faucibus erat vulputate. Vivamus vel lacinia diam. Nunc vel erat mollis, pharetra sapien vitae, mollis odio. Maecenas egestas, quam vel aliquet facilisis,
           justo quam porta dui, eget placerat metus nisl vel ipsum. In pharetra porta ipsum a vulputate. Sed faucibus nisl nec sem varius varius. Maecenas ac luctus nibh.</p>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  )
}
