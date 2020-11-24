import React, {useState, useEffect} from 'react';

const  Contactform  = (props) => {

        const initialValues ={

            fullName:'',
            mobile:'',
            email:'',
            address: ''
        }

        var [values, setValues] = useState(initialValues)

        useEffect(() => {

            if(props.currentId==='')
            setValues({...initialValues})
            else 
            setValues({
                ...props.contactObjects[props.currentId]
            } )

         },[props.currentId,props.contactObjects] )

        const handleInputChange = e =>{
            var { name, value } =e.target

            setValues({

                ...values,
                [name]:value
            }

            )

        }

        const handleFormChange= e =>{

            e.preventDefault()
            props.addOrEdit(values);
        }


    return (

        <form autoComplete='off' onSubmit={ handleFormChange }>
                <div className='form-group input-group col-nd-6'>
                        <div className= 'input-group-prepend'>
                            <div className='input-group-text'>
                                <i className='fas fa-user'></i>
                            </div>
                        </div>
                        <input className='form-control' placeholder='full name' name='fullName'
                            value = {values.fullName}
                            onChange ={handleInputChange}
                         />
                    </div> 
                    <div className='form-row'>
                    <div className='form-group input-group col-nd-6'>
                        <div className= 'input-group-prepend'>
                            <div className='input-group-text'>
                                <i className='fas fa-mobile-alt'></i>
                            </div>
                        </div>
                        <input className='form-control' placeholder='Mobile' name='mobile'
                            value = {values.mobile}
                            onChange ={handleInputChange}
                         />
                    </div> 
                    <div className='form-row'>
                    <div className='form-group input-group col-nd-6'>
                        <div className= 'input-group-prepend'>
                            <div className='input-group-text'>
                                <i className='fas fa-envolop'></i>
                            </div>
                        </div>
                        <input className='form-control' placeholder='Email' name='email'
                            value = {values.email}
                            onChange ={handleInputChange}
                         />
                    </div> 
                    
                    <div className='form-group'>
                        <textarea className='form-control' placeholder='Address' name='address'
                            value = {values.address}
                            onChange ={handleInputChange}
                            />
                    </div>
                    </div>
                   
                    </div>
                    <div className='form-group'>
                            <input type='submit' value={props.currentId===''? 'Save':'Update'} className='btn btn-primary btn-block'/>

                        </div>
        </form>
        
    );
}

export default  Contactform;