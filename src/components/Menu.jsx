import React from 'react'

export const Menu = ({menuData}) => {
  return (
    <div className="col-md-4 mt-4">
        <button className='btn-menu py-3 px-2'>
            <div className="container">
              <h5 className=''>{menuData.name}</h5>
              <div className="row">
                <div className="col-12">
                  <h6 className='text-muted'><small>{menuData.description}</small></h6>
                </div>
              </div>
            </div>
        </button>
    </div> 
  )
}
