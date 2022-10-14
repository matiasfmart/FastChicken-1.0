import React from 'react'

export const ItemDetail = ({orderItem}) => {

  return (
    <li className="list-group-item">
        <div className="container">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="p-2"><label><b>{orderItem.name}</b></label></div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div className="p-2"><button className='btn-addRemove btn btn-outline-primary'>-</button></div>
                    <div className="p-2"><label><b>{orderItem.count}</b></label></div>
                    <div className="p-2"><button className='btn-addRemove btn btn-outline-primary'>+</button></div>
                </div>
                <div className="p-2"><label><b>$1050</b></label></div>
            </div>
        </div>
    </li>
  )
}
