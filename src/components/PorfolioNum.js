import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioNum = (props) => (
    <div>
        <h1>Porfolio</h1>
        <p>This is the profile for project {props.match.params.id}</p>
    </div>
    )


export default PortfolioNum