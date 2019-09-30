import React, { Component } from "react";



class Footer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeKey: "1"
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
        <div className="container-fluid" style={{marginTop: '100px', background: 'white'}}>
            <div className="row">
                <div className="col-md-2 text-center">
                    <p style={{color: 'white' , backgroundColor: 'black' , padding: '5px' , borderRadius: '5px' , textAlign: 'center' , fontWeight: 'bold'}}>mckinley &amp; Rice</p>
                    
                </div>
                <div className="col-md-6">
                    <h5>Offices</h5>
                <div id="accordion">
  <div className="">
    <div className="" id="headingOne">
      <h5 className="mb-0">
        <span className="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{textDecoration: 'none' , color: 'black'}}>
          Seoul <span className="ml-3">+</span>
        </span>
      </h5>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div style={{marginTop:'10px'}}>
        <p>McKinley &amp; Rice, Inc.
16192 Coastal Highway
Lewes, <br/> Delaware 19958 USA</p>
<p className="mt-2 mb-0">Phone: (+1) 302.608.9040</p>
<p className="mt-0 mb-0">Fax: (+1) 302.608.9040</p>
      </div>
    </div>
  </div>
  <div>
    <div id="headingTwo" className="mt-3">
      <h5 className="mb-0">
        <span className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Noida <span className="ml-3">+</span>
        </span>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="">
        <p>McKinley &amp; Rice Creativity Pvt. Ltd.
607 Ithum Tower A <br/> Sector 62
Noida, U.P 201309 India</p>
<p className="mt-2 mb-0">Phone: (+91) 742.805.2448</p>
<p className="mt-0 mb-0">Fax: (+1) 302.608.9040</p>
      </div>
    </div>
  </div>
  <div className="mt-3">
    <div className="" id="headingThree">
      <h5 className="mb-0">
        <span className=" collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Los Angeles <span className="ml-3">+</span>
        </span>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="">
        <p>McKinley &amp; Rice, Inc.
12th Floor 369 Gangnam-daero
<br/>
Seocho-gu, Seoul 06621 Korea</p>
<p className="mt-2 mb-0">Phone: (+82) 070.8095.1940</p>
<p className="mt-0 mb-0">Fax: (+82) 02.6209.7783</p>
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-md-2">
                    <h5>About</h5>
                    <p>Leadership</p>
                    <p>Technology</p>
                    <p>Design</p>
                    <p>Ideas</p>
                    <p>Global Citizenships</p>
                    <p>Downloads</p>
                    <p>ColumbusX</p>
                    <p>Newsroom</p>
                    <p>Careers</p>
                    
                </div>
                <div className="col-md-2">
                    <h5 className="mb-5">Connect</h5>
                    <span className="mb-3">
                        <a href="https://www.facebook.com/mckinleyrice/" target="_blank" style={{color: 'black'}}>
                    <i className="fa fa-facebook-official fa-lg pr-2" style={{fontSize: '30px' , fontColor: 'black'}}></i> 
                    </a>
                    <a href="https://twitter.com/McKinleyAndRice" target="_blank" style={{color: 'black'}}>
                    
                    <i className="fa fa-twitter fa-lg pr-2" style={{fontSize: '30px'}}></i>
                    </a>
                    <a href="https://www.instagram.com/mckinley_rice/" target="_blank" style={{color: 'black'}}>
                    <i className="fa fa-instagram fa-lg pr-2" style={{fontSize: '30px'}}></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCybgiy9tNNDlIWgBECgawKQ" target="_blank" style={{color: 'black'}}>
                    <i className="fa fa-youtube-play pr-2 fa-lg" style={{fontSize: '30px'}}></i>
                    </a>
                    <a href="https://in.linkedin.com/company/mckinleyrice" target="_blank" style={{color: 'black'}}>
                    <i className="fa fa-linkedin fa-lg pr-2" style={{fontSize: '30px'}}></i>
                    </a>
                    </span>
                    <p className="mt-3"></p>
                    <a href="mailto: hello@mckinleyrice.com" className="mt-3" style={{textDecoration: 'none' , color: 'black'}}>hello@mckinleyrice.com</a>




                </div>
            </div>
        </div>



);
  }
}


export default Footer
