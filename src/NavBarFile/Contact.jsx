import React from 'react'
import contactimg from './Images/contact-coffee.jpg'

const Contact = () => {
  return (
    <>
      <div className='ContactCon'>
        <h1>CONTACT US</h1>
        <table>
          <tr>
            <td>CAFE</td>
            <td>PRESS</td>
          </tr>
          <tr>
            <td>4400 - 88 - 823</td>
            <td>press@campos.com</td>
          </tr>
          <br />
          <tr>
            <td>EMAILS</td>
            <td>EVENTS</td>
          </tr>
          <tr>
            <td>info@campos.com</td>
            <td>events@campos.com</td>
          </tr>
          <br />
          <tr>
            <td>BOOKINGS</td>
            <td>MARKETING</td>
          </tr>
          <tr>
            <td>bookings@campos.com</td>
            <td>partners@campos.com</td>
          </tr>
        </table>
        <div className='contactcoffee'>
        <img src={contactimg} alt="contact-img" />
      </div>
      </div>
      
    </>
  )
}

export default Contact