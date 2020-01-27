import React, { Component } from "react";
import s from "./app.sass";

export  default class MyComponent extends Component {
    render() {
        return <div className={s.intro}>Hello World!</div>;
    }
}
