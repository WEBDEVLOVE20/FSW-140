import React, { useState } from 'react';


function AddEmployees(props){

    const initInputs = { EmpFirstName: props.EmpFirstName || "", EmpLastName: props.EmpLastName || "", EmpStreetAddress: props.EmpStreetAddress || "", EmpCity: props.EmpCity|| "", EmpState: props.EmpState || "", EmpPhoneNumber: props.EmpPhoneNumber || "", EmpZipCode: props.EmpZipCode || "", EmpAreaCode: props.EmpAreaCode || ""  }
    
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = ((e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    })
    
    const handleSubmit = ((e) => {
        e.preventDefault() 
        // if (inputs.living.toLowerCase() === "alive" ) {
        //     inputs.living = true
        // } else {
        //     inputs.living = false
        // }
        props.submit(inputs, props.EmployeeID)
        setInputs(initInputs)
    })

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="EmpFirstName"
                    value={inputs.EmpFirstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpLastName"
                    value={inputs.EmpLastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpStreetAddress"
                    value={inputs.EmpStreetAddress}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpCity"
                    value={inputs.EmpCity}
                    onChange={handleChange}
                    placeholder="City"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpState"
                    value={inputs.EmpState}
                    onChange={handleChange}
                    placeholder="State ex.(CA)"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpZipCode"
                    value={inputs.EmpZipCode}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpAreaCode"
                    value={inputs.EmpAreaCode}
                    onChange={handleChange}
                    placeholder="Area Code"
                    className="badge-text"
                />
                <input
                    type="text"
                    name="EmpPhoneNumber"
                    value={inputs.EmpPhoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="badge-text"
                />
                <button className="add-btn">{ props.btnText }</button>
            </form>
        </div>
    )
}

export default AddEmployees;