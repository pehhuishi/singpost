import React from 'react';
import '../Components/item.css';
import { Link } from 'react-router-dom';

const images = require.context('../images',true)

const Item = (props) =>{
    
    // console.log(props.business.business[0].image)

    const business = props.business.business.map((item, index) => {
        // console.log(item.image)

        return(
            <div className="business-item" key={index}>
                <Link to={item.route}>
                    <img className="item" src={images(item.image)} alt={item.title}/>
                </Link>
                <h3>{item.title}</h3> 
                <p>{item.description}</p>
            </div>
            
        )
    })

    return(
        <>{business}</>

    )
}

export default Item;