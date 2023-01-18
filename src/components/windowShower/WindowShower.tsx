import React from 'react';

export type WindowShowerPropsType = {
    name: string | number

}

export const WindowShower = (props: WindowShowerPropsType) => {

    let {name,} = props


    return (
        <h3>{name}</h3>
    );
};

