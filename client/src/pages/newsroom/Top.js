import React from "react";
import './top.css';
import './news.css'

function Top() {
    return (
        <React.Fragment>
        <div className="container-fluid" style={{marginTop: '25vh'}}>
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
                <div className="col-md-5 col-s-4">
                    <div className="row boxes">
                        <svg className="Rectangle_568">
                            <rect fill="rgba(233,232,232,1)" id="Rectangle_568" rx="0" ry="0" x="0" y="0" width="150"
                                  height="150">
                            </rect>
                        </svg>
                        <svg className="Rectangle_567">
                            <rect fill="rgba(212,212,212,1)" id="Rectangle_567" rx="0" ry="0" x="0" y="0" width="150"
                                  height="256">
                            </rect>
                        </svg>
                    </div>
                    <div className="row">
                        <svg className="Rectangle_568">
                            <rect fill="rgba(212,212,212,1)" id="Rectangle_568" rx="0" ry="0" x="0" y="0" width="150"
                                  height="150">
                            </rect>
                        </svg>
                        <svg className="Rectangle_567">
                            <rect fill="rgba(232,232,232,1)" id="Rectangle_567" rx="0" ry="0" x="0" y="0" width="150"
                                  height="150">
                            </rect>
                        </svg>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row" style={{backgroundColor: 'rgba(245,245,245,1)'}}>
                <div className="col-md-1">
                    <svg className="Rectangle_493">
                        <rect fill="rgba(245,245,245,1)" id="Rectangle_493" rx="0" ry="0" x="0" y="0" width="850"
                              height="1200">
                        </rect>
                    </svg>
                </div>
                <div className="col-md-11">
                    <svg className="Rectangle_569">
                        <rect fill="rgba(225,225,225,1)" id="Rectangle_569" rx="0" ry="0" x="0" y="0" width="256"
                              height="256">
                        </rect>
                    </svg>
                    <svg className="Rectangle_493">
                        <rect fill="rgba(245,245,245,1)" id="Rectangle_493" rx="0" ry="0" x="0" y="0" width="850"
                              height="1200">
                        </rect>
                    </svg>
                    <svg className="Rectangle_568">
                        <rect fill="rgba(233,232,232,1)" id="Rectangle_568" rx="0" ry="0" x="0" y="0" width="256"
                              height="256">
                        </rect>
                    </svg>
                    <svg className="Rectangle_567">
                        <rect fill="rgba(212,212,212,1)" id="Rectangle_567" rx="0" ry="0" x="0" y="0" width="256"
                              height="256">
                        </rect>
                    </svg>
                    <svg className="Rectangle_570">
                        <rect fill="rgba(233,233,233,1)" id="Rectangle_570" rx="0" ry="0" x="0" y="0" width="256"
                              height="256">
                        </rect>
                    </svg>
                </div>
                <div style={{height: '5vh'}}>&nbsp;</div>
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