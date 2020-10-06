import Logo from './img/Logo.png'
import React from 'react'

class Title extends React.Component{
    render(){
        return (
            <div className="logo">
                <img src={Logo} alt="" style={{marginTop:10,}}/>
            </div>
        )
    }
        
}
export default Title