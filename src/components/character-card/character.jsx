import React from "react";

const Character = (props) => {

    return (
        <div className="character">
            <div className="character__image"><img src={`${props.image}`}/></div>
            <h3 className="character__name">{props.name}</h3>
            <div className="character__location">{props.location}</div>
        </div>
    );
}

export default Character;