import React, { useState } from "react";

import "./App.css";


function App() {

     const [enterdName, setEnterdName] = useState('')
     const [enterdEmail, setEnterdEmail] = useState('')
     const [enterdWebsite, setEnterdwebsite] = useState('')
     const [enterdImage, setEnterdImage] = useState('')
     const [enterdGender, setEnterdGender] = useState('Male')
     const [enterdSkill, setEnterdSkill] = useState([])
     const [AllData, setAllDta] = useState([])

     const nameChangeHandler = (event) => {
          setEnterdName(event.target.value)
     };
     const emailChangeHandler = (event) => {
          setEnterdEmail(event.target.value)
     };
     const websiteChangeHandler = (event) => {
          setEnterdwebsite(event.target.value)
     };
     const imageChangeHandler = (event) => {
          setEnterdImage(event.target.value)
     }
     const genderChangeHandler = (gender) => {
          setEnterdGender(gender)
     }

     const clear = (event) => {
          event.preventDefault();
          setEnterdName('')
          setEnterdEmail('')
          setEnterdwebsite('')
          setEnterdImage('')
          setEnterdGender('Male')
          setEnterdSkill([''])
     }

     const onJavaChange = (event) => {
          if (event.target.checked && !enterdSkill.includes('Java')) {
               setEnterdSkill([...enterdSkill, 'Java']);
          } else if (!event.target.checked && enterdSkill.includes('Java')) {
               const index = enterdSkill.indexOf('Java');
               enterdSkill.splice(index, 1);
               setEnterdSkill(enterdSkill);
          }
     }
     const onHtmlChange = (event) => {
          if (event.target.checked && !enterdSkill.includes('HTML')) {
               setEnterdSkill([...enterdSkill, 'HTML']);
          } else if (!event.target.checked && enterdSkill.includes('HTML')) {
               enterdSkill.splice(enterdSkill.indexOf('HTML'), 1);
               enterdSkill(enterdSkill);
          }
     }
     const onCssChange = (event) => {
          if (event.target.checked && !enterdSkill.includes('CSS')) {
               setEnterdSkill([...enterdSkill, 'CSS']);
          } else if (!event.target.checked && enterdSkill.includes('CSS')) {
               enterdSkill.splice(enterdSkill.indexOf('CSS'), 1);
               enterdSkill(enterdSkill);
          }
     }

     const submitHandler = (event) => {
          event.preventDefault();

          const student = {
               name: enterdName,
               email: enterdEmail,
               website: enterdWebsite,
               image: enterdImage,
               gender: enterdGender,
               skills: enterdSkill
          }
          setAllDta([...AllData, student])

          // console.log('Current data: ', [...AllData, student])

          clear(event);
     }


     return (
          <form className="main">
               <header className="header">
                    Student Enrollment Form
               </header>
               <div className="line">
                    <div className="form-div">
                         Name
                         <input className="name margin" required="" value={enterdName} onChange={nameChangeHandler} />
                         <br />
                         <br />
                         Email
                         <input className="name email" value={enterdEmail} onChange={emailChangeHandler} />
                         <br />
                         <br />
                         Website
                         <input className="name website" value={enterdWebsite} onChange={websiteChangeHandler} />
                         <br />
                         <br />
                         Image link
                         <input type="text" name="image" className="name image-link" value={enterdImage} onChange={imageChangeHandler} />
                         <br />
                         <br />
                         Gender
                         <input type="radio" value="Male" name="gender" checked={enterdGender === 'Male'} onChange={() => genderChangeHandler('Male')} /> male
                         <br />
                         <input type="radio" value="Female" name="gender" checked={enterdGender === 'Female'} onChange={() => genderChangeHandler('Female')} /> Female
                         <br />
                         <br />
                         Skills
                         <input type="checkbox" name="course" value="java" checked={enterdSkill.includes('Java')} onChange={onJavaChange} /> Java
                         <input type="checkbox" name="course" value="html" checked={enterdSkill.includes('HTML')} onChange={onHtmlChange} /> Html
                         <input type="checkbox" name="course" value="css" checked={enterdSkill.includes('CSS')} onChange={onCssChange} /> Css
                         <br />
                         <br />
                         <button className="enrole-student" onClick={submitHandler}> Enrole Students </button>
                         <button className="clear" onClick={clear}> Clear </button>
                         <span className="center-line"> </span>

                    </div>
                    <span> Enrolled Student </span>



                    <div className="div-1">
                         <div className="row-1"> Description
                              <div className="row-1-col-2"> Image</div>
                         </div>
                         <img src="images(1).png" /> 

                         {/* <div className="row-2">
                              <div className="row-2-col-2">image </div>
                              <div> Johan Doe </div>
                              <div> Male </div>
                              <div> Johan.doe@emai.com</div>
                              <div> www.Johandoe.com</div>
                         </div>

                         <div className="row-3">
                              <div className="row-2-col-2"> imge</div>
                              <div> Matt Rolling </div>
                              <div> Male </div>
                              <div> www.mattr.com</div>
                              <div> matt.r@emai.com</div>
                         </div> */} 
                         {AllData.map((student, index) => {
                              if (index % 2 === 1) {
                                   return <div className="row-3">
                                        <div className="row-2-col-2"><img height={100} width={100} src={student.image}/></div>
                                        <div> {student.name} </div>
                                        <div> {student.gender} </div>
                                        <div> {student.website}</div>
                                        <div> {student.email}</div>
                                        <div> {student.skills}</div>
                                   </div>
                              }
                              else if (index % 2 === 0) {
                                   return <div className="row-2">
                                        <div className="row-2-col-2"><img height={100} width={100} src={student.image}/></div>
                                        <div> {student.name} </div>
                                        <div> {student.gender} </div>
                                        <div> {student.website}</div>
                                        <div> {student.email}</div>
                                        <div> {student.skills}</div>
                                   </div>
                              }
                         })}
                    </div>


               </div>
          </form>

     )
};

export default App;

