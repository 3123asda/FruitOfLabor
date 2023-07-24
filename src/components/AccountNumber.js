import React from 'react'

function AccountNumber({StudentAccNum,StudentGra12Stra,Teacher}) {
    
  return (
    <div>
        Account Number: {StudentAccNum}<br/>
        Grade 12 Strand: {StudentGra12Stra}<br/>
        Advisir: {Teacher}
    </div>
  )
}

export default AccountNumber