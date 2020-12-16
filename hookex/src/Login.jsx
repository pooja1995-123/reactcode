import React,{useState} from "react";

let Login=()=>{
    let details={
        email:"",
        password:"",
    }
    const [user, setLogin] = useState(details);

    let mailHandler=(e)=>{
        setLogin({...user,email:e.target.value})
    }

    let passHandler=(e)=>{
        setLogin({...user,password:e.target.value})
    }
    let formSubmit=(e)=>{
        e.preventDefault();
       
    }


    return(<>
            <div className="container col-md-5 mt-5">
                <pre>{JSON.stringify(user)}</pre>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning "><h4>Login Form Using Hook</h4></div>
                            <div className="card-body bg-light">
                                <form onSubmit={formSubmit}>
                                    <div className="form-group">
                                        Email:
                                        <input className="form-control" type="email" value={user.email} onChange={mailHandler} placeholder="Enter your email" name="email"/>
                                    </div>
                                    <div>
                                        Password:
                                        <input className="form-control" type="password" value={user.password} onChange={passHandler} name="password" />
                                     </div>
                                     <button type="submit" className="btn btn-primary mt-3">Log In</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>

            </div>




    </>)
}

export default Login;