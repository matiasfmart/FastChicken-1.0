import React, { useState, useEffect } from 'react'
import { Menu } from './Menu'
import { getData } from '../db/local-db'
// import { collection, getDocs } from "firebase/firestore";
// import db from '../db/firebaseConfig';
// import userEvent from '@testing-library/user-event';

export const MenuList = () => {

  // useEffect(() => {
  //   const obtenerDatos = async() => {
  //     const datos = await getDocs(collection(db, 'menus'))
  //     console.log(datos);
  //   }

  //   obtenerDatos();
  // }, [])
  const [menus, setMenus] = useState([]);

  useEffect(()=>{
    getData.then(item => {
      setMenus(item);
    })
  }, [])
  
  return (
    <div className='container'>
        <div className="row">
          {
            menus.map((item) => (
              <Menu menuData={item} key={item.name}/>
            ))
          }
        </div>
    </div>
  )
}
