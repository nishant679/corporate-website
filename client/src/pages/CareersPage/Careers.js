import React from 'react'
import classNames from 'classnames'
import style from './careers.module.css'
import Footer from "../../components/Footer/Footer";
import {Helmet} from "react-helmet";

class Careers extends React.Component {
    render() {
      return (
        <React.Fragment>
            <Helmet>
                <title>Careers</title>
            </Helmet>
          <div className={classNames(style.jumbotron, 'jumbotron')} >
            <img src={require('../../assets/19.jpg')}  style={{height: "725px",width:"500px", float: "right", paddingLeft: "0px", paddingTop: "0px"}} />
            <img src={require('../../assets/logo.png')} width="50" height="50" style={{margin:"2% 5% 0%"}}/>
            <div className="container">
              <div className={classNames(style.selectRow, 'row')} style={{marginTop:"-3.5%"}}>
                <div className="col-md-4">
                  <p className={classNames(style.content)}>Carrers at McKinley &amp; Rice</p>  
                </div>
                <div className=" offset-5 col-md-3">
                  <select className={classNames(style.dropdown)}>
                      <option value="English">English</option>
                      <option value="Korean">Korean</option>
                  </select>  
                </div>
              </div>
              <div className="row" style={{marginTop:"10%"}}>
                <div className="col-md-7">
                  <p className={classNames(style.title)}>Professional life with the best</p>
                  <p className={classNames(style.content)}>
                    we make tech and market opportunities accessible to 
                    everyone by breaking down borders. Through 
                    us companies expand their reach to the 
                    oppposite side of the world, thereby
                    tethering their growth to the rise of 
                    developing countries via transport aggregation.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className={classNames(style.job)} style={{background: "lightgrey"}}>
              <div className={classNames(style.blocks, 'row offset-1')}>
                  <div className={classNames(style.block)} style={{background: "#8f8d8d"}}>
                    <img src={require('../../assets/10.png')} className={classNames(style.blockImage)} />
                  </div>
                  <div className={classNames(style.block)} style={{background: "lightgrey"}}></div>
                  <div className={classNames(style.block)} style={{background: "#5f5e5e"}}>
                    <img src={require('../../assets/10.png')} className={classNames(style.blockImage)} />
                  </div>
                  <div className={classNames(style.block)} style={{background: "#c7c5c5"}}>
                    <img src={require('../../assets/10.png')} className={classNames(style.blockImage)} />
                  </div>
                  <div className={classNames(style.block)} style={{background: "#222222"}}>
                    <img src={require('../../assets/10.png')} className={classNames(style.blockImage)} />
                  </div>
              </div>

              <div className={classNames('row', style.Imagerow)}>
                  <div className="col-md-6">
                  <img src={require('../../assets/3.jpg')} className={classNames(style.Image)} />
                </div>
                  <div className={classNames(style.headline, 'col-md-5')}>
                  <p className={classNames(style.headline1)}>HEADLINES</p>
                  <p className={classNames(style.headline2)}>IoT from 5,000 miles away, completely blin</p>
                  <p className={classNames(style.headline3)}>It was pretty orchestrated, which is what you'd expect of the people.It was pretty orchestrated, which is what you'd expect of the people.</p>
                </div>
              </div>


                <div className="row">
                    <div className="col-md-3" style={{paddingLeft: '25px'}}>
                    <img src={require('../../assets/18.png')} className={classNames(style.jobImage)} />
                    <p className={classNames(style.jobTitle)}>Undergraduate Internships</p>                                    
                    <p className={classNames(style.jobContent)}>It was pretty orchestrated, which is what you'd expect</p>
                    <button className={classNames(style.jobButton)}>Apply</button>                  
                </div>
                    <div className="offset-md-1 col-md-3">
                    <img src={require('../../assets/18.png')} className={classNames(style.jobImage)}/>                                   
                    <p className={classNames(style.jobTitle)}>Undergraduate Recruitments</p>                                
                    <p className={classNames(style.jobContent)}>It was pretty orchestrated, which is what you'd expect</p>
                    <button className={classNames(style.jobButton)}>Apply</button>                 
                </div>
                    <div className="offset-md-1 col-md-3">
                    <img src={require('../../assets/18.png')} className={classNames(style.jobImage)} />
                    <p className={classNames(style.jobitle)}>Open Internships</p>
                    <p className={classNames(style.jobContent)}>It was pretty orchestrated, which is what you'd expect</p>
                    <button className={classNames(style.jobButton)}>Apply</button>
                </div>
              </div>
              <div className="row offset-1">
                <div style={{paddingRight: "35px"}}>          
                    <img src={require('../../assets/18.png')} className={classNames(style.jobImage)} />               
                    <p className={classNames(style.jobTitle)}>Experienced Professional</p>                  
                    <p className={classNames(style.jobContent)}>It was pretty orchestrated, which is what you'd expect</p>
                    <button className={classNames(style.jobButton)}>Apply</button>                 
                </div>
                <div  style={{paddingRight: "35px"}}>                  
                    <img src={require('../../assets/18.png')} className={classNames(style.jobImage)}/>                 
                    <p className={classNames(style.jobTitle)}>Get Discovered</p>               
                    <p className={classNames(style.jobContent)}>It was pretty orchestrated, which is what you'd expect</p>
                    <button className={classNames(style.jobButton)}>Apply</button>                  
                </div>
              </div>
            </div>
            <Footer/>
        </React.Fragment>       
      )
    } 
  }

export default Careers;