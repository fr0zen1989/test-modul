import React, {Component} from "react";
import {observer} from "mobx-react";
import {Link, Route} from "react-router-dom";

const CompanyListItem = observer(({company}) => (
    <li>
        <div>
            <p>{company.id}</p>
            <p>{company.title}</p>
            <p>{company.regDate}</p>
            <p><Link to={`/company/${company.id}`}>View info</Link></p>
            <p><Link to={`/company/edit/${company.id}`}>Edit</Link></p>
        </div>


    </li>
));
//<p>{item.id}</p>
export default CompanyListItem;
