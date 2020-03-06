## Install

```
$ npx create-react-app app-typescript --template typescript

$ npm i classnames @types/classnames
```

## Component template

```
$ vi MyModule.tsx

import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./MyComponent.module.css";

const cx = bind(styles);

interface Props {
    var1: "production" | "laboratory";
    var2?: string;
}

export const MyComponent: React.FunctionComponent<Props> = ({
    var1,
    var2 }) => {
    return <i className={cx(var1)}>{var2}</i>;
};

$ vi MyModule.module.css

.production {
    font-size: var(--icon-xs);
}
.laboratory {
    font-size: var(--icon-xs);
}

```
