import React from 'react'

const ContactForm = () => {
    return (
        <div style={{ background: "#f3f3f3", padding:"10px 0px", margin:"10px 0px" }}>


            <div className="container py-5">
                <h1 className='text-center'>Contact form </h1>
                <div className='row align-items-center d-flex py-5 px-5'>
                    <div className='col-md-6 col-lg-6 col-12 d-sm-none d-lg-block d-md-block'>
                        <img src="https://img.freepik.com/free-vector/mobile-messaging-modern-communication-technology-online-chatting-sms-texting-modern-leisure-activity-guy-checking-email-inbox-with-smartphone_335657-1584.jpg?t=st=1710672659~exp=1710676259~hmac=785b68fbfd41e8e735d494eed98bb60a49ef987860724a182f5048eec450c179&w=826" className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-12'>
                        <form className="p-md-5 rounded-3 bg-body-tertiary">



                            <div className="form-floating mb-3">

                                <input type="text" id="form4Example1" className="form-control" />

                                <label className="form-label" for="form4Example1">Name</label>

                            </div>





                            <div className="form-floating mb-3">

                                <input type="email" id="form4Example2" className="form-control" />

                                <label className="form-label" for="form4Example2">Email address</label>

                            </div>


                            <div className="form-floating mb-3">

                                <input type="text" className="form-control" />

                                <label className="form-label">Mobile</label>

                            </div>




                            <div className="form-floating mb-3">

                                <textarea className="form-control" id="form4Example3" rows="4"></textarea>

                                <label className="form-label" for="form4Example3">Message</label>

                            </div>

                            <div className='form-floating pt-2'>
                                <button type="submit" className="w-25 p-addtocart_button_contact ">Send</button>
                            </div>


                        </form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ContactForm
