import React, {useState} from 'react';

const Main = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");


    const [username_error, setUsername_error] = useState("");
    const [email_error, setEmail_error] = useState("");
    const [password_error, setPassword_error] = useState("");
    const [cpassword_error, setCpassword_error] = useState("");


    const [username_color, setUsername_color] = useState("");
    const [email_color, setEmail_color] = useState("");
    const [password_color, setPassword_color] = useState("");
    const [cpassword_color, setCpassword_color] = useState("");


    function validate() {

        if (username.length >= 8) {
            setUsername_error("")
            setUsername_color("green")
        } else {
            setUsername_error("username must be 8 letters long ")
            setUsername_color("red")
        }

        if (email.includes("@")) {
            setEmail_error("")
            setEmail_color("green")
        } else {
            setEmail_error("email should have symbol @")
            setEmail_color("red")
        }

        if (password.length > 8 && password.includes(".")) {
            setPassword_error("")
            setPassword_color("green")
        } else {
            setPassword_error("password must have eight characters and include .")
            setPassword_color("red")
        }

        if (password === cpassword) {
            setCpassword_error("")
            setCpassword_color("green")
        } else {
            setCpassword_error("the passwords don't match")
            setCpassword_color("red")
        }


    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Form Validation</h1>

                    <input
                        type="text"
                        style={{borderColor: username_color}}
                        placeholder={"username"}
                        className={"form-control"}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <small>{username_error}</small>

                    <input
                        type="email"
                        style={{borderColor: email_color}}
                        placeholder={"email"}
                        className={"form-control"}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <small>{email_error}</small>

                    <input
                        type="password"
                        style={{borderColor: password_color}}
                        placeholder={"password"}
                        className={"form-control"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <small>{password_error}</small>

                    <input
                        type="password"
                        style={{borderColor: cpassword_color}}
                        placeholder={"confirm-password"}
                        className={"form-control"}
                        value={cpassword}
                        onChange={(e) => {
                            setCpassword(e.target.value)
                        }}
                    />
                    <small>{cpassword_error}</small>

                    <br/>
                    <button
                        className={"btn btn-success"}
                        onClick={validate}>
                        SUBMIT
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Main;
