import { Button, Types, UI, Vanilla } from "jsonui-scripting";

export interface ButtonComponent {
    properties?: Button;
}

export function buttonTemplate(props: ButtonComponent = {}) {

    const ui = UI.extend<Types.Button, Vanilla>(Vanilla.common.button(), {
        locked_control: "locked",
        ...props.properties,
    });
    const buttonControl = UI.panel()
}