import "./EnrolledStudent.css";

const EnrolledStudent = (props) => {

     return (<>
          <div className={props.class}>
               <div className="row-2-col-2"><img height={100} width={100} src={props.studentData.image} /></div>
               <div> {props.studentData.name} </div>
               <div> {props.studentData.gender} </div>
               <div> {props.studentData.website}</div>
               <div> {props.studentData.email}</div>
               <div> {props.studentData.skills}</div>
          </div>
     </>)
}

export default EnrolledStudent;