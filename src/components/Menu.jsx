import React from 'react'

export const Menu = ({menuData}) => {
  return (
    <div className="col-md-4 mt-4">
        <button className='btn-menu py-3 px-2'>
            <div className="container">
              <h5 className=''>{menuData.name}</h5>
              <div className="row">
                <div className="col-12">
                  <small><label>{menuData.mainDish} {menuData.sideDishOne} {menuData.sideDishTwo} {menuData.drink}.</label></small>
                </div>
                {/* <div className="col-6">
                  <small><label>{menuData.sideDishOne}</label></small>
                </div>
                <div className="col-6">
                  <small><label>{menuData.sideDishTwo}</label></small>
                </div>
                <div className="col-6">
                  <small><label>{menuData.drink}</label></small>
                </div> */}
              </div>
            </div>
        </button>
    </div> 
  )
}
