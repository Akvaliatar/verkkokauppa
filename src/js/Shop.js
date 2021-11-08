import { useEffect, useState } from "react";

export default function Shop () {

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
      <h1>Tervetuloa shoppailemaan!</h1>
      <p>
        Sivuiltamme löydät tietoa eläinpuistostamme ja voit myös käydä
        katsomassa verkkokauppamme sisältöä ja tarjottavia palveluita
      </p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum dapibus varius. Nullam dictum risus non tempus finibus. Sed faucibus nunc eros, vitae tincidunt leo ultricies in. Sed suscipit vel lectus vitae aliquam. Mauris et pellentesque dui. In consectetur dolor arcu, sit amet cursus neque porta in. Curabitur eu nisl mattis, gravida massa pellentesque, aliquet eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus metus erat, porta non lorem eu, rhoncus euismod felis. Phasellus vehicula justo eget ullamcorper varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam mauris sem, gravida et purus vel, ornare efficitur libero. Donec iaculis venenatis porttitor. Sed sodales est sed pulvinar eleifend. Mauris posuere non neque at imperdiet.</p>

      <p>Sed gravida lacus sit amet leo feugiat luctus a at mi. Fusce vestibulum justo at dui fermentum fringilla. Donec neque odio, porta non diam sed, suscipit luctus elit. Proin eget metus vulputate, luctus purus nec, porta lorem. Ut vel est justo. Duis sit amet nisi eu purus accumsan ornare. Sed dapibus dui et mi luctus, in blandit sapien tristique. Pellentesque tempus augue eu lacinia aliquet. Sed ac sem a sem euismod vehicula a rhoncus diam. Sed pretium pharetra odio et porta. Quisque faucibus ligula in augue vestibulum maximus. Nullam tempus rutrum nibh, non pretium libero dapibus non. Nam sit amet est ac sapien tincidunt lobortis. Duis mi nisl, rhoncus a sodales vel, euismod id urna.</p>

      <p>Vestibulum elementum molestie lacinia. Phasellus molestie tincidunt libero ut congue. Proin porttitor metus vitae turpis ultrices molestie. In suscipit pharetra dolor, sed vulputate nibh ullamcorper at. Aliquam erat volutpat. Maecenas sagittis nibh non nibh ornare hendrerit. Ut nisi sapien, fringilla ac nisl vel, maximus lobortis sapien. Vivamus purus nisi, bibendum tincidunt sagittis eget, placerat a tortor. Nam ac ullamcorper neque. Praesent dignissim turpis quis tempor condimentum. Cras auctor sollicitudin nisi eu cursus. Proin odio tortor, blandit sit amet nunc quis, tincidunt luctus est. Ut efficitur nulla eget tortor euismod, non posuere elit rutrum. Cras sed metus interdum mi egestas accumsan eu a quam.</p>

      <p>Curabitur mollis eu nulla vel pellentesque. Vestibulum nec justo sed dui efficitur efficitur. Nullam viverra dolor massa, eu faucibus ipsum sodales quis. Etiam in libero id tortor dictum rutrum vitae at diam. Nullam et lorem nisi. Suspendisse non sem augue. Vestibulum facilisis viverra urna vel tempus.</p>

      <p>Donec at lobortis felis, ut accumsan ex. Ut placerat massa lorem, a sagittis augue volutpat ac. Vestibulum suscipit sagittis ligula, nec posuere augue fermentum scelerisque. Aliquam nisl est, aliquet in dignissim nec, pellentesque a erat. Aenean non turpis neque. Etiam sit amet tellus gravida, luctus enim in, consectetur eros. Ut placerat neque eget tellus fringilla faucibus. Donec dignissim massa sed massa pretium, non feugiat justo porttitor. Integer aliquam massa vel gravida viverra. Pellentesque blandit nisl id orci interdum, sed faucibus erat vulputate. Vivamus vel lacinia diam. Nunc vel erat mollis, pharetra sapien vitae, mollis odio. Maecenas egestas, quam vel aliquet facilisis, justo quam porta dui, eget placerat metus nisl vel ipsum. In pharetra porta ipsum a vulputate. Sed faucibus nisl nec sem varius varius. Maecenas ac luctus nibh.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum dapibus varius. Nullam dictum risus non tempus finibus. Sed faucibus nunc eros, vitae tincidunt leo ultricies in. Sed suscipit vel lectus vitae aliquam. Mauris et pellentesque dui. In consectetur dolor arcu, sit amet cursus neque porta in. Curabitur eu nisl mattis, gravida massa pellentesque, aliquet eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus metus erat, porta non lorem eu, rhoncus euismod felis. Phasellus vehicula justo eget ullamcorper varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam mauris sem, gravida et purus vel, ornare efficitur libero. Donec iaculis venenatis porttitor. Sed sodales est sed pulvinar eleifend. Mauris posuere non neque at imperdiet.</p>

      <p>Sed gravida lacus sit amet leo feugiat luctus a at mi. Fusce vestibulum justo at dui fermentum fringilla. Donec neque odio, porta non diam sed, suscipit luctus elit. Proin eget metus vulputate, luctus purus nec, porta lorem. Ut vel est justo. Duis sit amet nisi eu purus accumsan ornare. Sed dapibus dui et mi luctus, in blandit sapien tristique. Pellentesque tempus augue eu lacinia aliquet. Sed ac sem a sem euismod vehicula a rhoncus diam. Sed pretium pharetra odio et porta. Quisque faucibus ligula in augue vestibulum maximus. Nullam tempus rutrum nibh, non pretium libero dapibus non. Nam sit amet est ac sapien tincidunt lobortis. Duis mi nisl, rhoncus a sodales vel, euismod id urna.</p>

      <p>Vestibulum elementum molestie lacinia. Phasellus molestie tincidunt libero ut congue. Proin porttitor metus vitae turpis ultrices molestie. In suscipit pharetra dolor, sed vulputate nibh ullamcorper at. Aliquam erat volutpat. Maecenas sagittis nibh non nibh ornare hendrerit. Ut nisi sapien, fringilla ac nisl vel, maximus lobortis sapien. Vivamus purus nisi, bibendum tincidunt sagittis eget, placerat a tortor. Nam ac ullamcorper neque. Praesent dignissim turpis quis tempor condimentum. Cras auctor sollicitudin nisi eu cursus. Proin odio tortor, blandit sit amet nunc quis, tincidunt luctus est. Ut efficitur nulla eget tortor euismod, non posuere elit rutrum. Cras sed metus interdum mi egestas accumsan eu a quam.</p>

      <p>Curabitur mollis eu nulla vel pellentesque. Vestibulum nec justo sed dui efficitur efficitur. Nullam viverra dolor massa, eu faucibus ipsum sodales quis. Etiam in libero id tortor dictum rutrum vitae at diam. Nullam et lorem nisi. Suspendisse non sem augue. Vestibulum facilisis viverra urna vel tempus.</p>

      <p>Donec at lobortis felis, ut accumsan ex. Ut placerat massa lorem, a sagittis augue volutpat ac. Vestibulum suscipit sagittis ligula, nec posuere augue fermentum scelerisque. Aliquam nisl est, aliquet in dignissim nec, pellentesque a erat. Aenean non turpis neque. Etiam sit amet tellus gravida, luctus enim in, consectetur eros. Ut placerat neque eget tellus fringilla faucibus. Donec dignissim massa sed massa pretium, non feugiat justo porttitor. Integer aliquam massa vel gravida viverra. Pellentesque blandit nisl id orci interdum, sed faucibus erat vulputate. Vivamus vel lacinia diam. Nunc vel erat mollis, pharetra sapien vitae, mollis odio. Maecenas egestas, quam vel aliquet facilisis, justo quam porta dui, eget placerat metus nisl vel ipsum. In pharetra porta ipsum a vulputate. Sed faucibus nisl nec sem varius varius. Maecenas ac luctus nibh.</p>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  )
}
