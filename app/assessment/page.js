import React from 'react'

const page = () => {
    return (
        <>
            <div className='container'>
                <div className='secondPageMainDiv'>

                    {/* <div className='a'> */}
                    <div className='filterinside'>
                        <img src='' />
                        <div>Filter</div>
                    </div>
                    <div className='main'>
                        <div className='mainQuestionDiv1'>
                            <h4>QUESTION 1</h4>
                            <p>Score +1</p>
                        </div>
                        <div className='mainQuestionDiv2'>
                            <div>
                                <p> What is the capital of France?</p>
                            </div>
                            <div>
                                <ul class="options">
                                    <li>
                                        <input type="radio" id="paris" name="capital" value="paris" />
                                        <label for="paris">Paris</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="london" name="capital" value="london" />
                                        <label for="london">London</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="rome" name="capital" value="rome" />
                                        <label for="rome">Rome</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="berlin" name="capital" value="berlin" />
                                        <label for="berlin">Berlin</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

            </div>
        </>
    )
}

export default page;
