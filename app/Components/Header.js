import React from 'react'

const Header = () => {
    return (
        <>
            <div className='headerDiv'>
                <div className='headerDiv1'>
                    <img className='logoImg' src='LogoGrp.png' />
                    <img className='QAdiv' src='QA.png' />
                </div>
                <div className='headerDiv2'>
                    <div className='startTest'>Start Test</div>
                    <p>Score</p>
                </div>
            </div>
        </>
    )
}

export default Header;