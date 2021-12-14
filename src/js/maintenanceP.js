import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Maintenance () {
    const URL = "http://localhost/kotielainpuisto"

    const [item, setItem] = useState([])
    const [tuotenimi, setTuotenimi] = useState("")
    const [hinta, setHinta] = useState("")
    const [kustannus, setKustannus] = useState("")
    const [trnro, setTrnro] = useState("")
    const [vari, setVari] = useState("")
    const [maara, setMaara] = useState("")
    const [koko, setKoko] = useState("")
    const [lankaTyyppiElain, setLankaTyyppiElain] = useState("")
    const [pituus, setPituus] = useState("")
    const [teksti, setTeksti] = useState("")

      useEffect(() => {
        axios.get(URL + "/products/getallproducts.php/")
        .then ((response) => {
          setItem(response.data)
        }).catch(error => {
          alert(error.response ? error.response.data.error : error);
        })
      }, [])

      function save(e) {
        e.preventDefault()
        const json = JSON.stringify({
            tuotenimi:tuotenimi,
            hinta:hinta,
            kustannus:kustannus,
            trnro:trnro,
            vari:vari,
            maara:maara,
            koko:koko,
            lankaTyyppiElain:lankaTyyppiElain,
            pituus:pituus,
            teksti:teksti,
            })
        axios.post(URL + "/maintenance/addproduct.php", json,{
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then((response) => {
            setItem(item => [...item,response.data])
            setTuotenimi("");
            setHinta("");
            setKustannus("");
            setTrnro("");
            setVari("");
            setMaara("");
            setKoko("");
            setLankaTyyppiElain("");
            setPituus("");
            setTeksti("");
            console.log(response.data)
        }).catch (error => {
            alert(error.response.data.error)
            
        })
    }

    function remove(tuotenimi) {
        const json = JSON.stringify({tuotenimi:tuotenimi})
        axios.post(URL + "/maintenance/deleteproduct.php", json,{
          headers: {
            "Content-Type" : "application/json"
          }
        })
          .then((response) => {
            const newListWithoutRemoved = item.filter((item) => item.tuotenimi !== tuotenimi)
            setItem(newListWithoutRemoved)
          }).catch (error => {
            alert(error.response ? error.response.data.error : error)
          })
      }

      return (
        <div>
            <h3>Verkkokaupan ylläpito</h3>
            <div>
            <form>
            <ul>
                <li>
                    <label>Uusi tuote</label>
                    </li>
                <li>    
                    <input value={tuotenimi} onChange={e => setTuotenimi(e.target.value)} placeholder="nimi"></input>
                    </li>
                <li>
                    <input value={hinta} onChange={e => setHinta(e.target.value)} placeholder="hinta"></input>
                    </li>
                <li>
                    <input value={kustannus} onChange={e => setKustannus(e.target.value)} placeholder="kustannus"></input>
                </li>
                <li>
                    <input value={trnro} onChange={e => setTrnro(e.target.value)} placeholder="tuoteryhmän numero"></input>
                </li>
                <li>
                    <input value={vari} onChange={e => setVari(e.target.value)} placeholder="väri"></input>
                </li>
                <li>
                    <input value={maara} onChange={e => setMaara(e.target.value)} placeholder="määrä"></input>
                </li>
                <li>
                    <input value={koko} onChange={e => setKoko(e.target.value)} placeholder="koko"></input>
                </li>
                <li>
                    <input value={lankaTyyppiElain} onChange={e => setLankaTyyppiElain(e.target.value)} placeholder="Lankatyyppi"></input>
                </li>
                <li>
                    <input value={pituus} onChange={e => setPituus(e.target.value)} placeholder="pituus"></input>
                </li>
                <li>
                    <input value={teksti} onChange={e => setTeksti(e.target.value)} placeholder="lisätietoa tuotteesta"></input>
                </li>
                <li>
                    <button onClick={save}>lisää tuote</button>
                </li>
            </ul>
        </form>

        <ol>
            {item?.map(item => (
                <li key={item.tuotenro}>
                <div className="layout">
                <p>{item.tuotenimi}</p>
                <a href="#" className="delete" onClick={() => remove(item.tuotenimi)}>Poista</a>
                </div>
                </li>
            ))}
        </ol>
        </div>
        </div>
      )
}