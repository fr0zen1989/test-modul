/**
 * Created by fr0zen on 02.04.2018.
 */
import {action, computed, observable} from "mobx";

import CompanyModel from "./CompanyModel";

export default class TodoListModel {
    @observable companies = [];

    @action
    addCompany(fields) {
        fields.id = this.companies.length;
        this.companies.push(new CompanyModel(fields));
    }

    @computed
    get companiesCount() { // для тестирования
        return this.companies.length;
    }
}

