import React, { useState } from 'react'

function Train() {
    const [text, setText] = useState([])
    const HandleText = (val) => {
        setText(val.target.value)

    }
    return (
        <div>
            <input type="text" placeholder='enter the text' onChange={HandleText} />
            <p>{text}</p>
        </div>
    )
}

export default Train