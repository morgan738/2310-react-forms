import { useState } from "react"

const Form = () => {
    const [userName, setUserName] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log(userName)

        setUserName("")

    }

    return(
        <div>
            <h1>This is my form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input 
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value)
                            
                        }}
                    />
                </label>
                <button type="submit" disabled={userName.length < 6 ? true : false}> Submit </button>
            </form>
        </div>
    )
}

export default Form