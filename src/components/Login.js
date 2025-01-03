import React from 'react'

export default function Login({ mode }) {
    return (
        <div className={`login-container my-3 bg-${mode === "light" ? "light-shade" : "dark-shade"
            } text-${mode === "light" ? "dark" : "light"}`}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className={`form-control bg-${mode === "light" ? "light" : "dark"
                        } text-${mode === "light" ? "dark" : "light"}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className={`form-control bg-${mode === "light" ? "light" : "dark"
                        } text-${mode === "light" ? "dark" : "light"}`} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label2" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
