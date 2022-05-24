import React from 'react'
import filedlogo from '../image/Field.png'

function AddContact() {
  return (
    <div>
       <h1 className='das_header'>Contact Detail</h1>
      <div className='col-12'>
        <div className='con_list'>
          <h1>List of Contacts</h1>
          <div className='add_contact_btn'>
            <button>Add Field</button>
          </div>
        </div>
        <div className='field'>
          <div className='logo_inner'>
          <img src={filedlogo}/>
          </div>
          <button>Change LOGO</button>
          <p>Remove Photo </p>

        </div>
        <h4>
        Basic Information
        </h4>
        </div>
    </div>
  )
}

export default AddContact
