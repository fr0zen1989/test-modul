import React, {Component} from "react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Link, Route} from "react-router-dom";

@observer
class CompanyInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Company info</h2>
                <p>Id: {this.props.store.companies[this.props.id].id}</p>
                <p>Title: {this.props.store.companies[this.props.id].title}</p>
                <p>Ogrn: {this.props.store.companies[this.props.id].ogrn}</p>
                <p>Type: {this.props.store.companies[this.props.id].type}</p>
                <p>RegDate: {this.props.store.companies[this.props.id].regDate}</p>
                <p>isActive: <input type="checkbox" checked={this.props.store.companies[this.props.id].active}/></p>

                <hr/>
                <p><Link to={`/company/edit/${this.props.id}`}>Edit</Link></p>
            </div>
        );
    }
}

export default CompanyInfo;