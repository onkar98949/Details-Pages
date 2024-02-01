import React from 'react'
import { useNavigate } from 'react-router-dom'

const PersonalDetails = () => {
    const naviagte = useNavigate();

    return (
        <div>
            <div className='h-screen flex items-center bg-blue-300'>
                <div className="container">
                    <div className="signup-content">
                        <div className="pd-form">
                            <h2 className="form-title">Personal Details</h2>
                            <form method="POST" className="register-form">
                                <div class="form-floating my-4">
                                    <textarea class="form-control h-12" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Phone Number</label>
                                </div>
                                <select class="form-select h-12" aria-label="Default select example">
                                    <option selected>Maritial Status</option>
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>

                                </select>
                                <div className='mt-4 ml-1'>
                                    <span>Gender:</span>
                                    <div className='flex gap-4 mt-3'>
                                    <div className='mt-2 ml-3' class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className='ml-3' class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center mt-4'>
                                    <span>DOB:</span>
                                    <input type='date'/>
                                </div>
                                <select class="form-select my-4 h-12" aria-label="Default select example">
                                    <option selected>Nationality</option>
                                    <option value="married">Indian</option>
                                    <option value="unmarried">Non-Indian</option>

                                </select>
                                <div>
                                    <button onClick={()=>{naviagte('/address')}} type='submit' className='submitbtn'>Next</button>
                                </div>
                            </form>
                        </div>
                        <div className="pd-image">
                            <div><img src='https://img.freepik.com/premium-vector/businessman-sitting-desk-working-computer-office_165488-1059.jpg' alt="sing up image" /></div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails