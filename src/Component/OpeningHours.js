import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewHours from './NewHours';

const OpeningHours = () => {
    const [hours, setHours] = useState([]);
   const [requete, setRequete] = useState(`http://localhost:4000/openingHoursWithDelay`);
  
    const [error, setError] = useState(false);

    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [day, setDay] = useState()



    async function handleDelete(id, day) {
        
    const param = id
   
    const stringifiedParam = JSON.stringify({from: param?.from, to: param?.to, day})

    setRequete(`http://localhost:4000/deleteHours?param=${stringifiedParam}`)
    
   }


  function handleAdd (item) {
    const stringifiedParam = JSON.stringify(item)

    setRequete(`http://localhost:4000/addHours2?param=${stringifiedParam}`)
    
  }
 

   useEffect(() => {
    // côté front
       
        fetch(requete)
        .then(response => {
            response.json()
            .then(data => {
                setHours(data);
               
            })
        })   
        .catch(() => {
            setError(true)
        })
   

  
  
}, [requete]);

   
    return (
       <div>

        <Table striped bordered hover>

        <thead>
                <tr>
                    <td></td>
                    <td colspan="3" align="center"> Matin</td>
                    <td colspan="3" align="center"> Soir</td>
                    <td></td>
                </tr>
                <tr>
                    <td >Jours</td>
                    <td >Ouverture</td>
                    <td >Fermerture</td>
                    <td>Action</td>

                    <td >Ouverture</td>
                    <td >Fermerture</td>


                    <td>  Action </td>
                </tr> 
         </thead>
         <tbody>
                {hours.map( (hour, index) =>
            <tr key={index}>
                <td>{hour.day}</td>
                <td> {hour.hours[0]?.from ===undefined ? "fermé" :  hour.hours[0]?.from} </td>
                <td> {hour.hours[0]?.to ===undefined ? "fermé" :  hour.hours[0]?.to } </td>
                <td>  <button onClick={()=>handleDelete(hour.hours[0], hour.day)} >Supprimer</button>  </td>
                <td>{hour.hours[1]?.from ===undefined ? "fermé" :  hour.hours[1]?.from}</td>
                <td> {hour.hours[1]?.to ===undefined ? "fermé" :  hour.hours[1]?.to } </td>
                <td>   <button onClick={()=>handleDelete(hour.hours[1], hour.day)} >Supprimer</button>  </td>

            </tr>)}
            </tbody>

        </Table>

        <h3>Ajouter un horaire</h3>

       <NewHours onAdd={handleAdd}/>
       
    
       </div>
    );
};

export default OpeningHours;