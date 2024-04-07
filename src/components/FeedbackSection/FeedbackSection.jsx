import './FeedbackSection.css'
import Button from '../Button/Button'
import { useState, useRef } from 'react'


function StateVsRef(){
    const input = useRef()
    const [inputValue, setInputValue] = useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)
        } 
    }

    return(
        <div>
            <h3>Input Value: {show && input.current?.value}</h3>
            <input ref={input} type="text" onKeyDown={handleKeyDown} className='control' />
        </div>
    )
}


export default function FeedbackSection() {
    const [name, setName] = useState('')
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help')

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function toggleError() {
        setHasError((prev) => !prev)
    }

    return (
        <section>
            <h3>Feedback</h3>

            <Button onClick={toggleError}>Toggle Error</Button>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="control" value={name} onChange={handleNameChange} style={{border: hasError ? '1px solid red' : null}}/>

                <label htmlFor="reason"></label>
                <select id="reason" className='control' value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">Suggest</option>
                </select>

                <Button disabled={hasError} isActive={!hasError}>Send</Button>

                <hr />
                {/* <StateVsRef /> */}
            </form>
        </section>
    )
}