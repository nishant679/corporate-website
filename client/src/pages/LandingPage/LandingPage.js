import React from 'react'
import './style.css'
import Form from './Form'
import Header from './Header'
import Video from './Video'
import Blocks from './Blocks'
import BlockSection from './BlockSection'
import Title from './Title'
import EconomySection from './EconomySection'
import FrontPage from './FrontPage'

class LandingPage extends React.Component{
    render() {
      return (
        <div>
            <div className="container">
                <Header />
                <FrontPage />
            </div>
            <Video />
            <Blocks />
            <EconomySection />
            <Title />
            <div className="container">
                <div className="row form-section">
                    <div className="col-md-4">
                        <p className="form-title">Expand your business overseas</p>
                        <p className="form-content">It was pretty orchestrated, which is checkout our introductory Brochure Minimum Project Size, FAQ, and Coding Standards &amp; Best Practices</p>
                    </div>
                    <div className=" offset-2 col-md-6">
                        <Form />
                    </div>
                </div>
            </div>
           <BlockSection />            
        </div>          
      )
    }
  }
  export default LandingPage;