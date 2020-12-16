import React, { useState } from "react";

const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    })
    const InputHandler=(event)=>{
        const{name,value}=event.target;
        setData((preVal=>{
            return{
                ...preVal,[name]:value,
            }
        }))
    }
    const formSubmit=(e)=>{
            e.preventDefault();
            alert(`My name is ${data.fullname},contact number ${data.phone},email ${data.email}`)
    }
    return(<React.Fragment>
        <div className="my-5">
            <h1 className="text-center">Contact us</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" 
                 name="full name" value={data.fullname} onchange={InputHandler} placeholder="Enter your name"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1"
                 name="phone" value={data.phone} onchange={InputHandler}  placeholder="Enter your mobile no"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" 
                 name="email" value={data.email} onchange={InputHandler} placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Meassage</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"
                    name="msg" value={data.msg} onchange={InputHandler}  rows="3"></textarea>
                    </div>
                    <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                    </form>
                </div>
            </div>

        </div>
    </React.Fragment>)
}

export default Contact