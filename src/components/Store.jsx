import React from "react";  

const Store = (props) => { 
    return( 
        <td className={"Store " + props.color} >   
            <img src={props.image} alt={`${props.store} Image`} />
            <h4>{props.store}</h4> 
            <h6>{props.name}</h6>   
            <a href={props.link}><button>More Information</button></a> 
            <h6>{props.favorite}</h6>
        </td>
    );
};  

export default Store; 