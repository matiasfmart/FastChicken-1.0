import React from 'react'

export const ItemDetail = () => {
  return (
    <li className="list-group-item">
        <div className="container">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="p-2"><label><b>Combo 1</b></label></div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div className="p-2"><button className='btn-addRemove btn btn-outline-primary'>-</button></div>
                    <div className="p-2"><label><b>2</b></label></div>
                    <div className="p-2"><button className='btn-addRemove btn btn-outline-primary'>+</button></div>
                </div>
                <div className="p-2"><label><b>$1050</b></label></div>
            </div>
        </div>
    </li>
  )
}
