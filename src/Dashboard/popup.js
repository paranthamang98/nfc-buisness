import React, { useState } from 'react'

function Popup({onClick}) {
   const [savelabel , setSaveLabel] = useState()
   const ValueGet =(e) =>{
      setSaveLabel({...savelabel, [e.target.name]: e.targert.value})
    console.log(savelabel);

   }
   const [inputFields, setInputField] = useState(
    [{
        firstName:''
    }]);
    const handleChangeInput = (index, event)=>{
        console.log(index,event.targert.name)
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
    }
    const handleAddFields =() =>{
        setInputField([...inputFields, {firstName:''}])
    }
    const handleRemoveFields = (index) =>{
        const values = [...inputFields];
        values.splice(index, 1);
        setInputField(values);
    }
  return (
      <>

    
          
    





      <div className='labelPopup'>

      <div>
              {inputFields.map((inputFields, index) =>(
                      <div key={index}>
                          <label>firstName</label>
                          <input type='text' value={inputFields.firstName} onChange={event => handleChangeInput(index, event)} />
                          <button onClick={() => handleAddFields()}>+</button>
                          <button onClick={() => handleRemoveFields()}>-</button>
                      </div>
                  ))}
          </div>
        <h1>Add Field</h1>
        <div>
            <lable>Label Name</lable>
            <input type="text" name='labelName' onChange={ValueGet}/>
        </div>
        <div className='buttonInner'><button className='btnSave'>Save</button>
        <button className='btnCancel' onClick={onClick}>Cancel</button></div>
      
    </div>

    </>
    
  )
}

export default Popup
