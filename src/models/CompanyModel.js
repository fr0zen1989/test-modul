/**
 * Created by fr0zen on 02.04.2018.
 */
import {observable} from "mobx";

export default class CompanyModel {
    @observable id;
    @observable title;
    @observable ogrn;
    @observable type;
    @observable regDate;
    @observable active;

    constructor(fields) {
        this.id = fields.id;
        this.title = fields.title;
        this.ogrn = fields.ogrn;
        this.type = fields.type;
        this.regDate = fields.regDate;
        this.active = fields.active;
    }
}