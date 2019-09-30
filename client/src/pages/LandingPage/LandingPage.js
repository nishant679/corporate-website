import React from 'react'
import './style.css'
import Form from './Form'
import Video from './Video'
import Blocks from './Blocks'
import BlockSection from './BlockSection'
import Title from './Title'
import EconomySection from './EconomySection'
import FrontPage from './FrontPage'
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import {Helmet} from "react-helmet";

class LandingPage extends React.Component{
    render() {
      return (
        <div>
            <Helmet>
                <title>Social Landing</title>
            </Helmet>
            <div className="container">
                <Navigation/>
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
            <BlockSection/>
            <Footer/>
        </div>          
      )
    }
  }
  export default LandingPage;