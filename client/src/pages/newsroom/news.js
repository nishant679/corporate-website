import React from "react";
import Top from "./Top";
// import './news.css'
import Http from "../../utils/Http";
import {Helmet} from "react-helmet";
import Footer from "../../components/Footer/Footer";

export default class news extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isLoading: false
        }
    }

    componentDidMount() {
        Http.get("/news/").then((res)=>{
            console.log(res.data);
            this.setState({
                news: res.data,
                isLoading: true
            });
        })
    }

    renderNewsData() {
        return this.state.news.map((data) => {
            console.log(data.press);
            return (
                <div className="news-row">
                    <div className="news-row-datetime">
                            {data.date}   {data.press}
                    </div>
                    <a
                        className="news-row-content"
                        href={data.url}>
                        {data.body.substring(0, 69) + ".."}
                    </a>
                </div>
            );
        })
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const {isLoading} = this.state;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Newsroom - Mckinley&Rice</title>
                </Helmet>
                <Top/>
                <div className="container-fluid" style={{background: 'rgb(245, 245, 245)'}}>
                    <div className="container" style={{paddingTop: '50px'}}>
                        <div className="row">
                            <div className="col-md-8 news-box">
                                <div className="news-announcement-text">Recent News & Announcements</div>
                                <div>
                                    {isLoading && (
                                       this.renderNewsData()
                                    )}
                                </div>
                            </div>
                            <div className="col-md-4" style={{paddingLeft: '30px', paddingBottom: '30px'}}>
                                <div className="news-heading">Contact Us</div>
                                <a className="news-social-link"
                                   href="mailto: hello@mckinleyrice.com"><span>media@mckinleyrice.com</span></a>
                                <div className="news-heading">Social Media</div>
                                <a className="news-social-link"
                                   href="https://www.facebook.com/mckinleyrice/"><span>Facebook</span></a>
                                <a className="news-social-link"
                                   href="https://www.instagram.com/mckinley_rice/"><span>Instagram</span></a>
                                <a className="news-social-link"
                                   href="https://twitter.com/mckinleyandrice?lang=en"><span>Twitter</span></a>
                                <a className="news-social-link"
                                   href="https://www.youtube.com/channel/UCybgiy9tNNDlIWgBECgawKQ"><span>YouTube</span></a>
                                <a className="news-social-link"
                                   href="https://in.linkedin.com/company/mckinleyrice"><span>LinkedIn</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

