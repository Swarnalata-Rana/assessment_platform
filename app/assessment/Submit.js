import React from 'react'
import './Submit.css'
const Submit = ({onSubmit}) => {
    return (
        <>
            <div className='sumbitComponent'>
                <div className='submitDiv'>
                    <a className='submit' href='successfully' onClick={onSubmit}>Submit</a>
                </div>
            </div>
        </>
    )
}

export default Submit
