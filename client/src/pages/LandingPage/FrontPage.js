import React from 'react'

export default function FrontPage() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <p className="title">Tech has no borders Neither Should you</p>
                    <div className="content">
                        <p>Host at your own pace, set your rates, and choose your booking requirements. Need help?</p>
                    </div>        
                </div>
                <div className=" col-md-6 image">
                    <img src={require('../../assets/22.jpg')} style={{height:"100%",weight:"100%", float:"right"}}/>
                </div>
            </div>
            <div className="row">
                <div className=" col-md-5">
                    <p className="title2">Tech has no borders Neither Should you</p>
                    <p className="content2">We make tech and market opportunities accessible to everyone by breaking down borders. Through us companies expand their reach to the opposite side of the world, thereby tethering their growth to the rise of developing countries via transparent aggregation.</p>
                </div>
                <div className="offset-2 col-md-5">
                    <p className="title2">Tech has no borders Neither Should you</p>
                    <p className="content2">We make tech and market opportunities accessible to everyone by breaking down borders. Through us companies expand their reach to the opposite side of the world, thereby tethering their growth to the rise of developing countries via transparent aggregation.</p>
                </div>
            </div>
        </div>
    )
}
