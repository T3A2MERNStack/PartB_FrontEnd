import React, { useContext } from 'react'
// import Axios from 'axios'
// import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import StateContext from '../store'
import { Search, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './styling/welcome.css'
// import styled from 'styled-components'
// import LoginPageView from './LoginPage'

export default function Home(props) {

    const { store } = useContext(StateContext)
    const { user } = store

    return (
        <>
            { user ? (
                <>
                    <h2>Hi {user.username}, </h2>
                    {/* <button onClick={handleLogOut}>Log Out</button> */}
                </>
            ) : (null) 
            }
        <div className="text-center">
            <Jumbotron style={{marginTop : '30px'}}>
                <Container>
                    <h1>Welcome to EcoA</h1>
                    <p> Your resource for zero waste home products </p>
                </Container>
            </Jumbotron>
        </div>
        <div className="text-center">
            <Search style={{margin: '30px'}} placeholder='Search.... '/>
        </div>
        <div className="container" style={{backgroundColor: 'grey'}}>
            <div className="row justify-content-center">
                <div className="col-6 col-md-3" style={{maxWidth : '80%', padding: 0}}>
                    <Link to="/homecare">
                    <img alt="home care link" src={ require('./img/homecare.png') } style={{width: '100%', margin: 0, padding: 0, height: '100%' }}/>
                    </Link>
                </div>
                <div className="col-6 col-md-3" style={{maxWidth : '80%', padding: 0}}>
                    <Link to="/cleaning">
                        <img alt="cleaning care link" src={ require('./img/cleaning.png') } style={{width: '100%', margin: 0, padding: 0 , height: '100%'}}/>
                    </Link>
                </div>
                <div className="col-6 col-md-3" style={{maxWidth : '80%', padding: 0}}>
                    <Link to="/personalcare">
                        <img alt="personal care link" src={ require('./img/personalcare.png') } style={{width: '100%', margin: 0, padding: 0, height: '100%' }}/>
                    </Link>
                </div>
                <div className="col-6 col-md-3" style={{maxWidth : '80%', padding: 0}}>
                    <Link to="/skincare">
                        <img alt="skin care link" src={ require('./img/skincare.png') } style={{width: '100%', margin: 0, padding: 0 , height: '100%'}}/>
                    </Link>
                </div>
            </div> 
        </div>   
        <div className="text-right p-5">
            <Button style={{marginRight: '10px'}} circular color='facebook' icon='facebook' />
            <Button style={{marginRight: '10px'}} circular color='twitter' icon='twitter' />
            <Button circular color='instagram' icon='instagram' />
        </div>
        </>  
    )
}
