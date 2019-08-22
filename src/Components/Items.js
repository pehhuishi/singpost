import React from 'react';
import Item from '../Components/Item';
import business from '../business.json';
import '../Components/items.css';

const Items = (props) =>{
    return(
        <div className="business">
            <Item business={business}/>
        </div>
    )
}

export default Items;