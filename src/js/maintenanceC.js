import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Maintenance () {
    const URL = "http://localhost/kotielainpuisto"

    const [item, setItem] = useState([])
    const [trnimi, setTrnimi] = useState("")
    const [teksti, setTeksti] = useState("")

    function save(e) {
        e.preventDefault()
        const json = JSON.stringify({trnimi:trnimi, teksti:teksti})
        axios.post(URL + "/maintenance/addcategory.php", json,{
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then((response) => {
            setItem(item => [...item,response.data])
            setTrnimi("");
            setTeksti("")
        }).catch (error => {
            alert(error.response.data.error)
        })
    }

    function remove(trnro) {
        const json = JSON.stringify({trnro:trnro})
        axios.post(URL + "/maintenance/deletecategory.php", json,{
          headers: {
            "Content-Type" : "application/json"
          }
        })
          .then((response) => {
            const newListWithoutRemoved = item.filter((item) => item.trnro !== trnro)
            setItem(newListWithoutRemoved)
          }).catch (error => {
            alert(error.response ? error.response.data.error : error)
          })
      }

      useEffect(() => {
        axios.get(URL + "/products/getcategories.php/")
        .then ((response) => {
          setItem(response.data)
        }).catch(error => {
          alert(error.response ? error.response.data.error : error);
        })
      }, [])

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
                    <input value={trnimi} onChange={e => setTrnimi(e.target.value)} placeholder="tuoteryhmän nimi"></input>
                </li>
                <li>
                    <input value={teksti} onChange={e => setTeksti(e.target.value)} placeholder="tuoteryhmän teksti"></input>
                </li>
                <li>
                    <button onClick={save}>lisää tuoteryhmä</button>
                </li>
            </ul>
        </form>

        <ol>
            {item?.map(item => (
                <li key={item.trnro}>
                <div className="layout">
                <p>{item.trnimi}</p>
                <p>{item.teksti}</p>
                <a href="#" className="delete" onClick={() => remove(item.trnro)}>Poista</a>
                </div>
                </li>
            ))}
        </ol>
        </div>
      </div>
    )
  }