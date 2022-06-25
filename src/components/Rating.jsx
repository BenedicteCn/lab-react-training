import React from 'react'

function Rating({children}) {

  if (children === 0 || children === 1 || children < 1) {
    return <p>*</p>
  }
  if (children === 2 || children < 2) {
    return <p>**</p>
  }

  if (children === 3 || children < 3) {
    return <p>***</p>
  }

  if (children === 4 || children < 4) {
    return <p>****</p>
  }

  if (children === 5 || children > 4.1 ) {
    return <p>*****</p>
  }

  return (
    <div>

    </div>
  )
}

export default Rating
