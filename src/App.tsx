import React from "react";
import { Button } from "./core/components/button/Button";
import { Icon } from "./core/components/icon/Icon";
import { Logo } from "./core/components/logo/Logo";

function App() {
    return (
        <>
            <Button theme="header"></Button>
            <Button theme="regular"></Button>
            <Icon size="xl" library="material-icons" type="people"></Icon>
            <Icon size="l" library="material-icons" type="close"></Icon>
            <Icon size="m" library="material-icons" type="people"></Icon>
            <Logo size="l"></Logo>
            <Icon size="xl" library="fa" type="fa-twitter-square"></Icon>
            <Icon size="s" library="fa" type="fa-instagram"></Icon>
            <Icon size="m" library="fa" type="fa-facebook-square"></Icon>
            <Icon size="m" library="fa" type="fa-youtube"></Icon>
        </>
    );
}

export default App;
