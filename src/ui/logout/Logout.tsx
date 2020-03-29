import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../core/components/button/Button";

interface Props {
    theme: "header" | "form" | "regular";
    text: string;
    redirectPath: string;
    onSubmit(): void;
}

export const Logout: React.FunctionComponent<Props> = ({
    text,
    theme,
    redirectPath,
    onSubmit
}) => {
    let history = useHistory();

    const logout = () => {
        localStorage.clear();
        onSubmit();
        setTimeout(() => {
            history.push(redirectPath);
        }, 300);
    };

    return <Button theme={theme} text={text} onClick={logout}></Button>;
};
