import { Float, Panel, Types, UI } from "jsonui-scripting";

export interface PaddingPanelInterface {
    properties?: Panel;
    w?: Float | string;
    h?: Float | string;
};

export function paddingPanel(
    props: PaddingPanelInterface,
    callback?: (ui: UI<Types.Panel>) => void,
) {
    if (!props.w && !props.h) throw new Error();
    if (props.w && props.h) throw new Error();
    const ui = UI.panel({
        size: [
            props.w ||= "100%",
            props.h ||= "100%",
        ],
        ...props.properties,
    });
    if (callback) callback(ui);
    return ui;
}