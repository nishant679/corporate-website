import React, {Component} from 'react'

export default class Form extends Component {
    state={
        fullname:'',
        organization: '',
        email: '',
        phone: '',
        fcountry: '',
        tcountry: '',
        industry: '',
        expansion: '',
        description: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6 ">
                            <input id="fullname" placeholder="Full Name" className="form-control" type="text" required  onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input id="organizatiom" placeholder="Name of organization" className="form-control" type="text" required  onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input id="phone" placeholder="Phone" className="form-control" type="text" required  onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input id="email" placeholder="Email" className="form-control" type="text" required  onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group-div col-md-6">
                            <select id="fcountry" placeholder="From Country" className="form-group-select" onChange={this.handleChange} >
                                <option disabled>From Country</option>
                                <option value="....">.....</option>
                                <option value="....">.....</option>
                            </select>
                        </div>
                        <div className="form-group-div col-md-6">
                            <select id="tcountry" placeholder="To Country" className="form-group-select" onChange={this.handleChange} >
                                <option disabled>To Country</option>
                                <option value="....">....</option>
                                <option value="....">....</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group-div col-md-6">
                            <select id="industry" placeholder="From Country" className="form-group-select" onChange={this.handleChange} >
                                <option disabled>Industry</option>
                                <option value="....">....</option>
                                <option value="....">....</option>
                            </select>
                        </div>
                        <div className="form-group-div col-md-6">
                            <select id="expansion" placeholder="expansion" className="form-group-select" onChange={this.handleChange} >
                                <option disabled>Type of Expansion</option>
                                <option value="....">....</option>
                                <option value="....">....</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <textarea id="description" placeholder="Description"rows="5" className="form-textarea" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group offset-10">
                        <input type="submit"  className="input-submit" value="Submit" />
                    </div>
                    </div>
                </form>
            </div>

        )
    }
}
