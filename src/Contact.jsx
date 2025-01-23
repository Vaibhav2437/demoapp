import { Component } from "react";

class Contact extends Component{
    stu ={
        roll_no : 101,
        name : 'Vaibhav',
        city : 'Nagpur',

    }
    render(){
        return(
            <div>
                <h2>This is Contact Page</h2>
                <h2>{this.stu.roll_no} {this.stu.name} {this.stu.city}</h2>
            </div>
        )
    }
}
export default Contact;