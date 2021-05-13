import React from 'react';

const Door = ({weight,height}) => {
    return (
        <div style={{weight:'40%', backgroundColor:'rgba(0,0,0,.125)', padding:'1em',margin:'0.5em'}}>
            <h4>{weight}X{height}</h4>
        </div>
    );
};

export default Door;