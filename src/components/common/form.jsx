
import UseInput from "./inputVlidate"


const ContactForm = () => {
    const {
        value: enterrdName,
        isValid: enterdnameisvalid,
        isError: nameError,
        inputValue: nameChnger,
        inputBlur: nameBlur,
        reset: resetName } = UseInput(value => value!== '')
    const {
        value: enterdEmail,
        isValid: enterdEmailValid,
        isError: emailError,
        inputValue: emailChanger,
        inputBlur: emailBlur,
        reset: resetEmail,
    } = UseInput(value => value.includes('@') && value.trim() !== '')
    const {
        value: entrednumber,
        isValid: enterdNumberValid,
        isError: numberError,
        inputValue: PhonenumberChanger,
        inputBlur: PhonenumberBlur,
        reset: resetPhoneNumber,
    } = UseInput(value => value.trim() !== '')

    let formValid = false;

    if (enterdnameisvalid && enterdEmailValid &&enterdNumberValid) {
        formValid = true
    }
    const submiter = (e) => {
        e.preventDefault()
        if (!enterdnameisvalid) {
            return;
        }
    
        // const reseting=(e)=>{
     resetName();
       resetEmail();
        resetPhoneNumber();
    }

    
    const nameclss = nameError ? 'invalid' : 'name'
    const emailclss = emailError ? ' invalid':''
    const numberclss= numberError ? 'invalid':''

    return (
        <div className="center contact-continer">
            {/* <div className=" flex-grow max-width"> */}
            <div className=" flex-grow max-width">
                <h1 style={{ color: 'white', fontSize: '3rem' }}>Contact Us </h1>

                {/* <form className=" name glass"> */}

                <div className=" form-container  glass">
                    <form className="name" onSubmit={submiter}>
                        <label htmlFor="firstName">Full name :</label>
                        <div className={nameclss}>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={enterrdName}
                                onChange={nameChnger}
                                onBlur={nameBlur} />

                        </div>
                        {nameError && (<p style={{ color: 'red' }}>Name must not be empty</p>)}

                        <label htmlFor="Number " className="firstName">Phone Number :</label>
                        <div className={numberclss}>
                        <input className="lastName"
                            type="number"
                              placeholder="Enter your phone number"
                            tabIndex="2"
                            value={entrednumber}
                            onChange={PhonenumberChanger}
                            onBlur={PhonenumberBlur}
                        // value={enterdvalue}
                        /></div> {numberError && (<p style={{ color: 'red' }}>please enter phone number</p>)}

                        <label htmlFor="email" className="firstName">E- mail :</label>
                        <div className={emailclss}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="email"
                                placeholder="example@corp.com"
                                tabIndex="3"
                                value={enterdEmail}
                                onChange={emailChanger}
                                onBlur={emailBlur}
                            /></div> {emailError && (<p style={{ color: 'red' }}>please enter a valid email</p>)}

                        <label htmlFor="message">Message</label>

                        <textarea
                            placeholder="Start typing..."
                            className="message"
                            name="message"
                        />
                        {/* {enterdnameisvalid  + 'g'} */}
                        <button disabled={!formValid} className="send">Send</button>

                    </form>
                </div>

            </div>
        </div>
        // </div>
    )
}
export default ContactForm