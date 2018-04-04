import React, {Component} from "react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Link, Route} from "react-router-dom";


export default observer(({store, id, form}) => (

    <form onSubmit={form.onSuccess}>
            <h2>Edit Company</h2>
            <label htmlFor={form.$('title').id}>
                {form.$('title').label}
            </label>
            <input {...form.$('title').bind()} value={store.companies[id].title}/>
            <p>{form.$('title').error}</p>

            <label htmlFor={form.$('ogrn').id}>
                {form.$('ogrn').label}
            </label>
            <input {...form.$('ogrn').bind()} value={store.companies[id].ogrn}/>
            <p>{form.$('ogrn').error}</p>

            <label htmlFor={form.$('type').id}>
                {form.$('type').label}
            </label>
            <input {...form.$('type').bind()} value={store.companies[id].type}/>
            <p>{form.$('type').error}</p>

            <label htmlFor={form.$('regDate').id}>
                {form.$('regDate').label}
            </label>
            <input {...form.$('regDate').bind()} value={store.companies[id].regDate}/>
            <p>{form.$('regDate').error}</p>

            <label htmlFor={form.$('active').id}>
                {form.$('active').label}
            </label>
            <input {...form.$('active').bind()} checked={store.companies[id].active} type="checkbox"/>
            <p>{form.$('active').error}</p>

            <button type="submit" onClick={form.onSuccess}>Принять</button>
            <button type="button" onClick={form.onError}>Очистить</button>

    </form>
));

