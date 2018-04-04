import React, {Component} from "react";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Link, Route} from "react-router-dom";


export default observer(({form}) => (
    <form onSubmit={form.onSubmit}>
        <label htmlFor={form.$('title').id}>
            {form.$('title').label}
        </label>
        <input {...form.$('title').bind()} />
        <p>{form.$('title').error}</p>


        <button type="submit" onClick={form.onSubmit}>Принять</button>
        <button type="button" onClick={form.onClear}>Очистить</button>

        <p>{form.error}</p>
    </form>
));

