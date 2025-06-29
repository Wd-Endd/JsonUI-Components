import { BindingName, BindingType, Orientation, UI } from "jsonui-scripting"
import { Component } from "./Component";
import { PaddingPanelComponent } from "../types/properties/PaddingPanelComponent";

export class Templates {
    static paddingPanel = (props: PaddingPanelComponent) => {
        const component = new Component<PaddingPanelComponent>(props)
        const ui = UI.panel({
            size: [
                (component.properties.orientation = Orientation.Horizontal)?
                    component.properties.length : "100%",
                (component.properties.orientation = Orientation.Vertical)?
                    component.properties.length : "100%",
            ]
        });

        if (component.toggle) {
            ui.addBindings({
                binding_type: BindingType.View,
                source_control_name: component.toggle,
                source_property_name: BindingName.ToggleState,
                target_property_name: BindingName.Visible,
            })
        }

        return [ ui, component ];
    }
}