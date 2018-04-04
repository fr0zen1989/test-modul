/**
 * Created by fr0zen on 04.04.2018.
 */
import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import CompanyListModel from "../models/CompanyListModel"; // модель данных
import CompanyList from "../components/CompanyList";
import CompanyInfo from "../components/CompanyInfo";
import CompanyEdit from "../components/CompanyEdit";

import CompanyForm from "../forms/CompanyForm";

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

const compList = new CompanyListModel(); // создаем экземпляр модели

mock.onGet('/companies').reply(200, {
    companies: [
        {
            title: 'John Smith',
            type: 'OOO',
            ogrn: 123,
            regDate: '20.09.2012',
            active: true
        },
        {
            title: 'company 2',
            type: 'OAO',
            ogrn: 333,
            regDate: '10.12.2016',
            active: false
        },
        {
            title: 'company 3',
            type: 'ZAO',
            ogrn: 666,
            regDate: '10.10.2013',
            active: true
        }
    ]
});

axios.get('/companies')
    .then(function (response) {
        response.data.companies.forEach( (item) => {
            compList.addCompany(item);
        });

    });


const HomePage = () => (
    <Router>
        <div>
            <Link to={`/`}>Home</Link>
            <Route exact path="/" component={Home}/>
            <Route exact path={`/company/:id`} component={ViewInfoPage}/>
            <Route exact path={`/company/edit/:id`} component={EditInfoPage}/>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <CompanyList store={compList}/>
    </div>
);

const ViewInfoPage = ({match}) => (
    <div>
        <CompanyInfo store={compList} id={match.params.id}></CompanyInfo>
    </div>
);

const EditInfoPage = ({match}) => (
    <div>
        <CompanyEdit store={compList} id={match.params.id} form ={CompanyForm}></CompanyEdit>
    </div>
);


export default HomePage;