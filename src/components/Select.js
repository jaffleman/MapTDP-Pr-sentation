import React from 'react';

function Select(props) {
    return (
        <div>
            <div className="select" onClick={()=>{}}>
                <h3>RECHERCHE DE REGLETTES</h3>
            </div>
            <div className="select" onClick={()=>{alert("Bientot disponible...")}}>
                <h3>CREATION DE REP</h3>
            </div>
        </div>
    );
}

export default Select;