import React, {Component} from "react";
import {action, observable} from "mobx";
import Form from "mobx-react-form";
import validatorjs from "validatorjs";


const plugins = {dvr: validatorjs};
const fields = [{
    name: 'title',
    label: 'Название',
    placeholder: 'Insert title'
}, {
    name: 'ogrn',
    label: 'ОГРН',
    placeholder: 'Insert ogrn'
}, {
    name: 'type',
    label: 'Тип',
    placeholder: 'insert type'
}, {
    name: 'regDate',
    label: 'Дата регистрации',
    placeholder: 'insert regDate'
}, {
    name: 'active',
    label: 'Активна'
}
];
const hooks = {
    onSuccess(form) {
        alert('Все ок');
        console.log('Все ок!', form.values());
    },
    onError(form) {
        alert('Ошибка');
        console.log('Ошибка!', form.errors());
    }
};
const CompanyForm = new Form({fields}, {plugins, hooks});

export default CompanyForm;
