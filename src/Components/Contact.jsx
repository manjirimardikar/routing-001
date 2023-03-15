import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftcontact">
            <h1>| Connect With Us</h1>
            <div className="enquirycontainer">
                <h2>Enquiry</h2>
                <p> enquiry@urbansciencemep.com</p>
                <p> 0509418224</p>

            </div>
            <div className="enquirycontainer">
                <h2>Procurement Team</h2>
                <p> urbansciencemep@gmail.com</p>
                <p> +971 543565450</p>

            </div>
            <div className="enquirycontainer">
            <h2>General Enquiry</h2>

                <p>  0509418224</p>

            </div>


        </div>
        <div className="rightcontact">
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Country</label>
            <select name="" id="">
                <option value=""> India</option>
            </select>
            <label htmlFor="">Contact Number</label>
            <input type="text" />
            <label htmlFor="">Expected date</label>
            <input type="date"/>
            <label htmlFor=""></label>
            <textarea name="" id="" cols="15" rows="5">

            </textarea>
            <button>Submit</button>

        </div>

    </div>
  )
}