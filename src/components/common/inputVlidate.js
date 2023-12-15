import { useState, useEffect } from "react";


const UseInput = (validation) => {
    const [enteredValue, SetenteredValue] = useState('');
    const [touched, setTouched] = useState(false)
    const [valueIsVaalid, setvalueIsVaalid] = useState(false)

    useEffect(() => {
        setvalueIsVaalid(validation(enteredValue));
      }, [enteredValue, validation]);

      const hasError = !valueIsVaalid && touched;

    const inputValue = (event) => {
        SetenteredValue(event.target.value)
    }
    console.log(';;;');
    console.log(validation)
    console.log(validation(enteredValue))
    console.log(';;;');


    const inputBlur = () => {
        setTouched(true)
    }
    const reset = () => {
        SetenteredValue('')
        setTouched(false)
        setvalueIsVaalid(false)
    }
    return {
        value: enteredValue,
        isError: hasError,
        isValid: valueIsVaalid,
        inputValue,
        inputBlur,
        reset,
    }
}

export default UseInput