import React from 'react'

export default function Header() {
    return (
        <div className="row">
            <div className="col-md-1">
                <img src={require('../../assets/logo.png')} width="50" height="50" style={{marginTop:"30px"}}/>
            </div>
            <div className="col-md-4 " style={{fontSize: "18px", fontFamily: "Helvetica", marginTop: "30px"}}>
                <p>Tech has no borders</p>
            </div>
            <div className="offset-md-5 col-md-2" style={{fontSize: "18px", fontFamily: "Helvetica"}}>
                <select className="dropdown">
                    <option value="English">English</option>
                    <option value="Korean">Korean</option>
                </select>
            </div>
        </div>
    )
}
