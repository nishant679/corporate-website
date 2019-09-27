import axios from 'axios';
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Top from "./stat";
import '../style.css'
export default class search extends React.Component {
  constructor() {
    super();
    this.state={
      news:[],
      isLoading: false
    }
  }

   componentDidMount() {       
        axios.get("http://localhost:5000/").then((res)=>{
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
        <div>
            <div id="JUNE_16__2019_____BLOOMBERG">
            <span>{data.date}   {data.press}</span>
            </div>
            <div id="It_was_pretty_orchestrated__wh_A4_Text_42">
            <a href={data.url}><span>{data.body.substring(0,69)+".."}</span></a>
            </div>
        </div>
      );
    })
  }

  render() {
  const { isLoading } = this.state;
      return (
        <React.Fragment>
        <Top/>
          <div className="Rectangle_493" id="____Text___H4___Selected___On__A4_Text_33">
            <span>Recent News & Announcements
            <table> 
              {isLoading && (
                <tbody>{this.renderNewsData()}</tbody>
                )}
            </table>
            </span>
          </div>
          <div id="____Text___H4___Selected___On__A4_Text_34">
          <span>Contact Us</span>
          <div id="media_mckinleyrice_com">
          <a href="mailto: hello@mckinleyrice.com"><span>media@mckinleyrice.com</span></a>
          </div>
          </div>
          <div id="____Text___H4___Selected___On__A4_Text_35">
          <span>Social Media</span>          
            <div id="Facebook">
            <a href="https://www.facebook.com/mckinleyrice/"><span>Facebook</span></a>
            </div>
            <div id="Instagram">
            <a href="https://www.instagram.com/mckinley_rice/"><span>Instagram</span></a>
            </div>
            <div id="Twitter">
            <a href="https://twitter.com/mckinleyandrice?lang=en"><span>Twitter</span></a>
            </div>
            <div id="YouTube">
            <a href="https://www.youtube.com/channel/UCybgiy9tNNDlIWgBECgawKQ"><span>YouTube</span></a>
            </div>
            <div id="LinkedIn">
            <a href="https://in.linkedin.com/company/mckinleyrice"><span>LinkedIn</span></a>
            </div>
          </div>

        </React.Fragment> 
      )
  }
}

