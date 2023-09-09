import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-center p-3' >
                <h3> تست  </h3>
            </div>
            <div className='d-flex justify-content-center' >
                <Link className='link item nav nav-link mx-4 border border-primary rounded-4 ' to="/matris" >
                    ماتریس اعداد
                </Link>
                <Link
                    className='link item nav nav-link mx-4 border border-primary rounded-4 '
                    to="/food" >
                    فست فود
                </Link>
            </div>
        </div>
    )
}

export default Home