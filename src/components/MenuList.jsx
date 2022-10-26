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
  const [menus, setMenus] = useState();

  useEffect(()=>{
    getData.then(item => {
      setMenus(item);
    })
  }, [])
  
  return (
    <div className='container' id="MenuListContainer">
      <div className="row mb-4 mx-2 p-3 shadow rounded bg-white"> 
        <h4 className='mb-3 fw-bold'>Pollos</h4>
        {
          menus ? 
            menus.map((item) => (
              item.type == "po" && <Menu menuData={item} key={item.name} />
            ))
          :
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
      </div>
      <div className="row mb-3 mx-2 p-3 shadow rounded bg-white"> 
        <h4 className='mb-3 fw-bold'>Hamburguesas</h4>
        {
          menus ? 
            menus.map((item) => (
              item.type == "bg" && <Menu menuData={item} key={item.name} />
            ))
          :
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>  
        }
      </div>
      <div className="row mb-3 mx-2 p-3 shadow rounded bg-white"> 
        <h4 className='mb-3 fw-bold'>Extras</h4>
        {
          menus ?
            menus.map((item) => (
              item.type == "ex" && <Menu menuData={item} key={item.name} />
            ))
          :
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
      </div>
    </div>
  );
};
