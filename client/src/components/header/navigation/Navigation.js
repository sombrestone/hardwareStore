import React from 'react';
import style from './Navigation.module.css'
import NavButton from "./navButton/NavButton";

const Navigation = (props) => {
    return (
        <div className={style.navigation}>
            <div className={style.container}>
            {props.routes.map(({path,description})=><NavButton path={path} description={description}/>)}
            </div>
        </div>
    );
};

export default Navigation;