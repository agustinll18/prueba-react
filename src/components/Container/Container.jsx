import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../Utilidades/Spinner'

const Container = () => {
    const[Prod,setProd]=useState(null)
    const[carga,setCarga]=useState(false);
    
    const getItems = async() => {
        
        setCarga(true)
        
        try{
            const respuesta = await axios.get('../../Components')
            
            console.log(respuesta )
            setCarga(false)
            setProd(respuesta)
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
