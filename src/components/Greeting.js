import React from 'react'

function Greeting() {

    function SayHi(LastName,FirstName,MiddleName){
        alert('Hi ' + LastName + ", " + FirstName + " " + MiddleName );
    }

  return (
    <div>
        <button onClick={() => SayHi('Tagupa','James Christopher','Cinches')}>Say Hi</button>
    </div>
  )
}

export default Greeting