import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../Utilidades/Spinner'

const Container = () => {
    const[items,setItems]=useState(null)
    const[carga,setCarga]=useState(false);
    
    const getItems = async() => {
        
        setCarga(true)
        
        try{
            const respuesta = await axios.get('../../Components')
            
            console.log(respuesta )
            setCarga(false)
            setItems(respuesta)
        }
            catch(error){
                console.log(error)
            }
    }
    useEffect(() =>{
        getItems()
    }
      ,[]
    )
    return (
        <div className="container d-flex justify-content-center">
            {carga && <Spinner/> }
        </div>
    )
}

export default Container
