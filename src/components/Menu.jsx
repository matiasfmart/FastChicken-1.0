import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../db/firebaseConfig';

export const Menu = () => {

  useEffect(() => {
    const obtenerDatos = async() => {
      const datos = await getDocs(collection(db, 'menus'))
      console.log(datos);
    }

    obtenerDatos();
  }, [])

  return (
    <div className="col-md-4 mt-4">
        <button className='btn-menu py-3 px-2'>
            <div className="container">
              <h5 className=''>Fast Chicken</h5>
              <div className="row">
                <div className="col-6"><label>Hamburguesa</label></div>
                <div className="col-6"><label>Papas</label></div>
                <div className="col-6"><label>Coca-Cola</label></div>
                <div className="col-6"><label>Extra</label></div>
              </div>
            </div>
        </button>
    </div> 
  )
}
