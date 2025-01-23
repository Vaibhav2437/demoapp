import '../Home.css'
import Virat from '../Images/Virat.jpg' 
import Rohit from '../Images/Rohit.jpg'
import Dhoni from '../Images/Dhoni.jpg'
const Home = () =>{
    let str = [
        {id : 101, name : "virat" ,     Profile: Virat ,    Role: 'Batsman',   age : 30 , grade: 'A'},
        {id : 102, name : "Rohit" ,     Profile: Rohit,     Role: 'Batsman',   age : 33 , grade: 'A+'},
        {id : 103, name : "Ms Dhoni" ,  Profile: Dhoni ,    Role: 'Wk-Batsman',  age : 22 , grade: 'A'}
    ]
    
    return (
        <div>
            <h1>This is function </h1>
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Profile</th>
                        <th>Role</th>
                        <th>Age</th>
                        <th>GRade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        str.map((a,index)=>{
                           return (
                            <tr key={index}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td><img src = {a.Profile} width={100}></img></td>
                                <td>{a.age}</td>
                                <td>{a.name}</td>
                                <td>{a.grade}</td>
                            </tr>
                           ) 
                        })

                    }
                    
                </tbody>
            </table>
        </div>
        
    )
}
export default Home;