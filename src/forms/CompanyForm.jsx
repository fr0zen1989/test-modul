import React, {Component} from "react";
import {action, observable} from "mobx";
import {MobxReactForm} from "mobx-react-form";
import validatorjs from "validatorjs";


const plugins = {dvr: validatorjs};
const fields = [{
    name: 'title',
    label: 'title',
    placeholder: 'Insert title',
    rules: 'required|string',
}, {
    name: 'ogrn',
    label: 'ogrn',
    placeholder: 'Insert ogrn',
    rules: 'required|string',
}, {
    name: 'type',
    label: 'type',
    placeholder: 'insert type',
    rules: 'required|string',
}, {
    name: 'regDate',
    label: 'regDate',
    placeholder: 'insert regDate',
    rules: 'required',
},
    {
        name: 'active',
        label: 'active',
        placeholder: 'insert active',
        rules: 'required',
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
const CompanyForm = new MobxReactForm({fields}, {plugins, hooks});

export default CompanyForm;
