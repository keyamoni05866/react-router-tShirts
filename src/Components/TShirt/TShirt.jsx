import React from 'react';

const TShirt = ({tshirt}) => {
    const {picture, name, price} = tshirt;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default TShirt;