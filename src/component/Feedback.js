import React from 'react'

function Feedback() {
    const fquality = ["Exellent", "Very Good", "Good", "Average", "Poor"];
    return (
        <div className='container'>
            <h1 className='text-center'>FEEDBACK FORM</h1>
            <div className='card'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="feedback"><p>Email address</p> </label>
                        <input type="email" className="form-control" id="feedback" placeholder="name@example.com" />
                    </div>
                    <p>Please Provide Your feedback on the quality of our service </p>
                    {
                        fquality.map((item) => {
                            return (
                                <div className="form-check" key={item}>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        {item}
                                    </label>
                                </div>
                            )
                        })
                    }
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1"><p>Do you have suggetion ton want we can provide you a better service?</p></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className='btn btn-success'>Submite</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback
