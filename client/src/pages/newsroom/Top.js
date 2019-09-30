import React from "react";
import './top.css';
import './news.css'

function Top() {
    return (
        <React.Fragment>
        <div className="container-fluid" style={{marginTop: '25vh'}}>
            <div className="row" style={{marginLeft: '170px', paddingBottom: 0}} >
                <div className="offset-md-6 col-md-5" style={{display: 'flex', justifyContent: 'flex-end', padding: 0}}>
                    <div  className="rectangle" style={{background: 'rgba(212,212,212,1)'}} />
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row main">
                <div className="col-md-7 col-s-8 maintext">
                    Tech has no borders <br/> Neither should you
                    <div className="intro">
                        We make tech and market opportunities accessible to everyone by<br/> breaking down borders.
                        Through us companies expand their reach to <br/>the opposite side of the world, thereby
                        tethering
                        their growth to the rise<br/> of developing countries via transparent aggregation.<br/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-4">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="rectangle" style={{background: 'rgba(212,212,212,1)'}} />
                        </div>
                        <div className="col-md-5" style={{padding: 0}}>
                            <div className="rectangle" style={{background: 'rgba(233,232,232,1)'}} />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="rectangle" style={{background: 'rgba(233,232,232,1)'}} />
                        </div>
                        <div className="col-md-5" style={{padding: 0}}>
                            <div className="rectangle" style={{background: 'rgba(212,212,212,1)'}} />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            <div className="row" style={{backgroundColor: 'rgba(245,245,245,1)'}}>
                    <div className="offset-md-1 col-md-2">
                        <div className="rectangle-big" style={{background: 'rgba(212,212,212,1)'}} />
                    </div>
                    <div className="col-md-2">
                        <div className="rectangle-big" style={{background: 'rgba(225,225,225,1)'}} />
                    </div>
                    <div className="col-md-2">
                        <div className="rectangle-big" style={{background: 'rgba(245,245,245,1)'}} />
                    </div>
                    <div className="col-md-2">
                        <div className="rectangle-big" style={{background: 'rgba(225,225,225,1)'}} />
                    </div>
                    <div className="col-md-2">
                        <div className="rectangle-big" style={{background: 'rgba(212,212,212,1)'}} />
                    </div>

                {/*<div style={{height: '5vh'}}>&nbsp;</div>*/}
            </div>
            </div>
            <div style={{backgroundColor: 'rgba(245,245,245,1)'}}>
                <div className="container" style={{height: '50vh', textAlign: 'center', backgroundColor: '#000', padding: '5% 30%'}} >


                        <div className="row"
                            style={{ color: 'white', justifyContent: 'space-around', height: '100%'}}>
                            <div><h3  style={{color: 'white'}} >Our mission</h3></div>
                                <div className="row" style={{textAlign: 'left'}}>It was pretty orchestrated, which is
                                    what you’d expect of the people. Sony has a corporate culture of diversity
                                    which is frequently on display in the way its employees go about their work.
                                </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Top;