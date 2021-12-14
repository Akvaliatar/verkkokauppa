export default function Maintenance () {
    return (
      <div>
        <h3>Verkkokaupan ylläpito</h3>
        <div>
        <form>
            <ul>
                <li>
                    <label>Uusi tuoteryhmä/kategoria:</label>
                </li>
                <li>
                    <input  placeholder="tuoteryhmän nimi"></input>
                </li>
                <li>
                    <input  placeholder="tuoteryhmän teksti"></input>
                </li>
                <li>
                    <button >lisää tuoteryhmä</button>
                </li>
            </ul>
        </form>

        <form>
            <ul>
                <li>
                    <label>Uusi tuote</label>
                    </li>
                <li>    
                    <input  placeholder="nimi"></input>
                    </li>
                <li>
                    <input  placeholder="hinta"></input>
                    </li>
                <li>
                    <input  placeholder="kustannus"></input>
                </li>
                <li>
                    <input  placeholder="tuoteryhmän numero"></input>
                </li>
                <li>
                    <input  placeholder="väri"></input>
                </li>
                <li>
                    <input  placeholder="määrä"></input>
                </li>
                <li>
                    <input  placeholder="koko"></input>
                </li>
                <li>
                    <input  placeholder="Lankatyyppi"></input>
                </li>
                <li>
                    <input  placeholder="pituus"></input>
                </li>
                <li>
                    <input  placeholder="lisätietoa tuotteesta"></input>
                </li>
                <li>
                    <button >lisää tuote</button>
                </li>
            </ul>
        </form>
        </div>
      </div>
    )
  }