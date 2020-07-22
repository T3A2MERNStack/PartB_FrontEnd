import React, { useContext } from 'react'
// import Axios from 'axios'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import StateContext from './store'
// import styled from 'styled-components'
// import LoginPageView from './LoginPage'

export default function Home(props) {
    // const [recipe, getRecipe] = useState("")
    // const history = useHistory();

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     Axios.post("http://localhost:4000/lists", {"name":"TEST", "duration":"1111"})
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     Axios.get("http://localhost:4000/lists")
    //     .then(res => {
    //         getRecipe(res.data.map(value=> value.name))
    //     })
    //     .catch(err => console.log(err))
    // },[])

    const { store, dispatch } = useContext(StateContext)
    const { user } = store

    return (
        <>
            { user ? (
                <>
                    <h2>You have already Logged, {user.username} </h2>
                    {/* <button onClick={handleLogOut}>Log Out</button> */}
                </>
            ) : (null) 
            }
        <div className="text-center">
            <Jumbotron style={{marginTop : '30px'}}>
                <Container>
                    <h1>Welcome to EcoA</h1>
                    <p>
                        Your resource for zero waste home products
                    </p>
                </Container>
            </Jumbotron>
        </div>
        <div className="container" style={{backgroundColor: 'grey'}}>
            <div className="row">
                <div className="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', minHeight : '200px'}}>
                    <h2>Skincare</h2>
                    
                </div>
                <div className="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', minHeight : '200px'}}>
                    <h2>Cleaning</h2>
                </div>
            </div> 
            <div className="row">
                <div className="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', marginTop : '40px', minHeight : '200px'}}>
                    <h2>Personal Care</h2>
                </div>
                <div className="col" style={{backgroundColor: 'red', maxWidth : '40%', marginLeft : '5%', marginRight : '5%', marginTop : '40px', minHeight : '200px'}}>
                    <h2>Home Care</h2>
                </div>
            </div> 
        </div>   
        </>  
    )
}
