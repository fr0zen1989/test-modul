import React, {Component} from "react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";

import CompanyListItem from "./CompanyListItem";

@observer
class CompanyList extends React.Component {
    render() {
        return (
            <div>
                <h2>Company list</h2>
                <ul>
                    {this.props.store.companies.map(item => (
                        <CompanyListItem company={item} key={item.id}/>
                    ))}
                </ul>
                companiesCount: {this.props.store.companiesCount}
            </div>
        );
    }
}

export default CompanyList;