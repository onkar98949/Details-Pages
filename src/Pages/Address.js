import React from 'react'

const Address = () => {
    return (
        <div>
            <div className='h-screen flex items-center bg-blue-300'>
                <div className="container">
                    <div className="signup-content">
                        <div className="address-form">
                            <h2 className="form-title h-14">Address</h2>
                            <form className="register-form">
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress2" class="form-label">Address 2</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCity" class="form-label">City</label>
                                        <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" class="form-label">State</label>
                                        <select id="inputState" class="form-select">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="inputZip" />
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label" for="gridCheck">
                                            I agree all statements in Terms of service
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                    <button  className='submitbtn'>Submit</button>
                                   </div>
                                </form>
                            </form>
                        </div>
                        {/* <div className="pd-image">
                            <div><img src='https://img.freepik.com/premium-vector/businessman-sitting-desk-working-computer-office_165488-1059.jpg' alt="sing up image" /></div>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address