import { Modify, Str, UI } from "jsonui-scripting";

export class Component<T> {
    properties: T;
    toggle?: string;

    constructor (props: T) {
        this.properties = props;
    }

    useToggle<T extends string | UI>(element: T) {
        if (element instanceof UI) {
            this.toggle = element.name;
        } else {
            this.toggle = element;
        };

        return this;
    }
}