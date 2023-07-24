/*
  When Importing you need the first letter be UpperCase because when importing
  because when the variable start at small letter the JSX with all lowercase letters,
  which suggested it was a variable, not a component 
*/

// import HelloWorld from "./components/HelloWorld.js"
// import StudentData from "./components/student_data_name.js"
// import StudentSchool from "./components/student_school.js"
// import StudentAddress from "./components/Address.js"
// import AccountNumberStudent from "./components/AccountNumber.js"
// import BackgroundColors from "./components/backgroundcolor.js"
import NavigationBar from "./components/NavBar.js"
// import Button from './components/Greeting.js'
import './App.css';
import { useState } from "react"


function App() {
  // const firstNumber = 1000
  // const secondNumebr = 1587
  // const AccountNumber = firstNumber + secondNumebr
  // const Grade12Strand = "Grade 12 TVL-ICT FOCUS IN COMPUTER PROGRAMMING"
  // const Grade12Teacher = "Ralph Angelo"
  // const backgroundColor = 'Red'
  // const link = "https://learn.microsoft.com/en-us/windows/dev-environment/javascript/react-on-windows"

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudent(currentStudent => [...currentStudent, name]);
    setName('');
  }

  const [AddStudentName, setStudent] = useState([]);

  const handleDelete = (DeleteStudent) => {
    const newStudents = AddStudentName.filter((student) => student !== DeleteStudent);
    setStudent(newStudents)
  }

  // const students = ['Alex','David','Joe'];

  // const [FirstNum,setFirstNum] = useState("");
  // const [SecondNum,setSecondNum] = useState("");

  // const number = parseInt(FirstNum) + parseInt(SecondNum)
  // const firstNumInt = parseInt(FirstNum);
  // const secondNumInt = parseInt(SecondNum);
  // const totalNum = (Addtion) =>{
  //   Addtion.preventDefault();
  //   alert("Total Addtion is: " + number )
  // }

  // function calculate(firstNumInt,secondNumInt){
  //   const add = firstNumInt + secondNumInt;
  //   const sub = firstNumInt - secondNumInt;
  //   const multip = firstNumInt * secondNumInt;
  //   const division = firstNumInt / secondNumInt;

  //   return [add,sub,multip,division]
  // }

  // const [add,sub,multip,division] = calculate(firstNumInt, secondNumInt)

  return (
    <div>
      <NavigationBar></NavigationBar>
      {/* 
      <NavigationBar></NavigationBar>
      <HelloWorld/>
      <StudentData/>
      <StudentSchool/>
      <StudentAddress/>
      <AccountNumberStudent StudentAccNum = {AccountNumber} StudentGra12Stra = {Grade12Strand} Teacher = {Grade12Teacher}/>
      <a href = {link} >How to Install React js</a>
      <div>
        <BackgroundColors ChangeColor = {backgroundColor}/>
      </div>
      <div className="sample-css">Bakit Galit Ang beshy Ko?</div> */}
      {/* <Button/> */}

      <form onSubmit={handleSubmit}>
        <div>My name is :   {name}</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
      </form>

      {/* <div className="box-container">
        <div className="box">
        <form onSubmit={totalNum}>
        <div>First Number:</div>
        <input type="number" value={FirstNum} onChange={(a) => setFirstNum(a.target.value)}/>
        <div>Second Number:</div>
        <input type="number" value={SecondNum} onChange={(b) => setSecondNum(b.target.value)}/><br/>
        <input type="submit"/>
        <div>{number}</div>
        <div>Addition: {add} </div>
        <div>Subtraction: {sub}</div>
        <div>Multiplication: {multip}</div>
        <div>Division: {division}</div>
        </form>
        </div>
      </div> */}

      <br></br>
      <h1>All Student</h1>
      <ul>
        {
          AddStudentName.map((student, index) => <li key={index}>{student} <button onClick={() => handleDelete(student)}>Delete</button></li>)
        }
      </ul>
    </div>
  );
}

export default App;
