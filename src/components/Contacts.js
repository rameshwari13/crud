
import React, {useState, useEffect} from 'react'
import Contactform from './Contactform'
import firebaseDb from '../firebase'

const  Contacts  = () => {

                var [currentId, setCurrentId] = useState('');
                var [contactObjects,setContactObjects]=useState({})

                useEffect(() => {
                    firebaseDb.child('contacts').on('value', snapshot =>{

                        if(snapshot.val()!=null){
                            setContactObjects({
                                ...snapshot.val()
                            });
                        }
                    })
                   
                
                }, [])//similer to componentDidMount


                const addOrEdit = (obj) => {

                    if(currentId=='')

                    firebaseDb.child('contacts').push(
                        obj,
                        err =>{
                            if (err)
                            console.log(err)
                            else
                             setCurrentId('')
                        

                        }
                    )

                    firebaseDb.child(`contacts/${currentId}`).set(
                        obj,
                        err =>{
                            if (err)
                            console.log(err)
                            else
                             setCurrentId('')
                        

                        }
                    )

                
                }

                const onDelete = id =>{

                    if(window.confirm('Are you sure to delete this record?'))
                    {

                    firebaseDb.child(`contacts/${id}`).remove(
                        
                        err =>{
                            if (err)
                            console.log(err)
                            else
                             setCurrentId('')
                        

                        }
                    )
                    }
                    

                }

    return (

        <>
        <div class="jumbotron jumbotron-fluid">
                <div class="container">
                 <h1 class="display-4  text-center">Contact Register</h1>
                     </div>
                        </div>

        <div className='row'>
           <div className='col-md-5'>
               <Contactform {...({currentId,contactObjects,addOrEdit})}></Contactform>
           </div>

           <div className='col-md-7'>
               <table className='table table-borderless table-stripped'>
                   <thread className='thread-light'>
                       <tr>
                           <th>Name</th> 
                           <th>Mobile</th>
                           <th>Email</th>
                           <th>Actions</th>
                       </tr>
                   </thread>

                    <tbody>
                        
                           {
                            Object.keys(contactObjects).map((key) => (
                                  <tr key={key}>

                                    <td>{contactObjects[key].fullName}</td>
                                    <td>{contactObjects[key].mobile}</td>
                                    <td>{contactObjects[key].email}</td>

                                    <td className='bg-light'>
                                        <a className='btn text-primary' onClick={() => {setCurrentId(key)}}>
                                            <i className='fas fa-pencil-alt'>Edit</i>

                                        </a>
                                        <a className='btn text-danger' onClick={() => {onDelete(key)}}>
                                            <i className='fas fa-trash-alt'>Delete</i>
                                            </a>
                                             </td>
                                              </tr>

                              ))
                            }
                           
                        
                    </tbody>

               </table>
           </div>
           </div>
           </>
    );
}

export default  Contacts;