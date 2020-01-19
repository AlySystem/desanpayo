import React from 'react'
import services from '../helpers/services'

const DropDown = () => {
  return (
    <div className='dropdown'>
      {services.map(service => {
        return (
          <div className='dropdown-content' key={service.id}>
            <a className='dropdown-a' target='_blank' href={service.routeName}>
              <img className='dropdown-image' src={service.logo} alt={service.name} />
              <p className='dropdown-title'>{service.name}</p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default DropDown
