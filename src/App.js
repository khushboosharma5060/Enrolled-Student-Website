import React, { useState } from "react";
import "./App.css";
import EnrolledStudent from "./EnrolledStudent";

const App = () => {

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
     console.log(enterdSkill)

     const onJavaChange = (event) => {
          if (event.target.checked) {
               setEnterdSkill([...enterdSkill, 'Java'])
          } else {
               const index = enterdSkill.indexOf('Java')
               if (index > -1) {
                    enterdSkill.splice(index, 1);
                    setEnterdSkill(enterdSkill)
               }
          }
     }

     const onHtmlChange = (event) => {
          if (event.target.checked) {
               setEnterdSkill([...enterdSkill, 'html'])
          } else {
               const index = enterdSkill.indexOf('html')
               if (index > -1) {
                    enterdSkill.splice(index, 1)
                    setEnterdSkill(enterdSkill)
               }
          }
     }

     const onCssChange = (event) => {
          if (event.target.checked) {
               setEnterdSkill([...enterdSkill, 'css'])
          } else {
               const index = enterdSkill.indexOf('css')
               if (index > -1) {
                    enterdSkill.splice(index, 1)
                    setEnterdSkill(enterdSkill)
               }
          }
     }

     const clear = (event) => {
          event.preventDefault();
          setEnterdName('')
          setEnterdEmail('')
          setEnterdwebsite('')
          setEnterdImage('')
          setEnterdGender('Male')
          setEnterdSkill([])
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
                         <input type="checkbox" name="course" value="html" checked={enterdSkill.includes('html')} onChange={onHtmlChange} /> Html
                         <input type="checkbox" name="course" value="css" checked={enterdSkill.includes('css')} onChange={onCssChange} /> Css
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


                         {AllData.map((student, index) => {
                              if (index % 2 === 1) {
                                   return <EnrolledStudent
                                        class='row-3'
                                        studentData={student}
                                   />
                              }
                              else if (index % 2 === 0) {
                                   return <EnrolledStudent
                                        class='row-2'
                                        studentData={student}
                                   />
                              }
                         })}
                    </div>
               </div>
          </form>
     )
};

export default App;

