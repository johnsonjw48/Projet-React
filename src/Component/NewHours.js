import React, { useState } from 'react';


const NewHours = (props) => {
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [day, setDay] = useState()

    const handleSubmit = (event) =>{
        event.preventDefault()
        
        let obj = {from: from, to: to, days: [day] }

       props.onAdd(obj)
    }
    return (
        <div>

<form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="Jour">Jour</label>
              <input type="text"  placeholder="" onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="De">De</label>
              <input type="time" placeholder="" onChange= {(e)=> setFrom(e.target.value)}  />
            </div>
            <div>
              <label htmlFor="A">A</label>
              <input type="time" placeholder="" onChange= {(e)=> setTo(e.target.value)}  />
            </div>
            <button >Add</button>
</form>


        </div>
    );
};

export default NewHours;