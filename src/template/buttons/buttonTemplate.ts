import { Button, Float, FontType, RangeFloat, Str, Types, UI, Vanilla } from "jsonui-scripting";

export type buttonContentType = Types;
export interface ButtonComponent {
    /**
     * The origin properties write into button element, this property is optinal.
     */
    properties?: Button;
    
    /**
     * The Type of button content element, this property is optinal.
    */
    buttonContentType?: buttonContentType;
    /**
     * The button content element. this property is optinal.
     */
    buttonContent?: UI<buttonContentType>;
    /**
     * The sound when button on click, this property is optinal.
     */
    buttonSound?: Str;
    /**
     * The volume level of the sound. A float value typically ranging from 0.0 (mute) to 1.0 (full volume). This property is optinal.
     */
    buttonSoundVolume?: Float;

    /**
     * The button bg image element for button in default state, this property is advanced and optinal.
     */
    defaultTextureElement?: UI<Types.Image>;
    /**
     * The path pointer to .png/.jpeg/... file destination start from .bedrock/. It's button bg image when in default state, this property is optinal.
     */
    defaultTexturePath?: Str;
    /**
     * The button bg opacity in default state, start from 0  to 1, this property is optinal.
     */
    defaultButtonAlpha?: RangeFloat;

    /**
     * The button bg image element for button in hover state, this property is advanced and optinal.
     */
    hoverTextureElement?: UI<Types.Image>;
    /**
     * The path pointer to .png/.jpeg/... file destination start from .bedrock/. It's button bg image when in hover state, this property is optinal.
     */
    hoverTexturePath?: Str;
    /**
     * The button bg opacity in hover state, start from 0  to 1, this property is optinal.
     */
    hoverButtonAlpha?: RangeFloat;

    /**
     * The button bg image element for button in pressed state, this property is advanced and optinal.
     */
    pressedTextureElement?: UI<Types.Image>;
    /**
     * The path pointer to .png/.jpeg/... file destination start from .bedrock/. It's button bg image when in pressed state, this property is optinal.
     */
    pressedTexturePath?: Str;
    /**
     * The button bg opacity in pressed state, start from 0  to 1, this property is optinal.
     */
    pressedButtonAlpha?: RangeFloat;

    /**
     * The button bg image element for button in locked state, this property is advanced and optinal.
     */
    lockedTextureElement?: UI<Types.Image>;
    /**
     * The path pointer to .png/.jpeg/... file destination start from .bedrock/. It's button bg image when in locked state, this property is optinal.
     */
    lockedTexturePath?: Str;
    /**
     * The button bg opacity in locked state, start from 0  to 1, this property is optinal.
     */
    lockedButtonAlpha?: RangeFloat;
}

export function buttonTemplate(props: ButtonComponent = {}) {

    const ui = UI.extend<Types.Button, Vanilla>(Vanilla.common.button({
        sound_name: props.buttonSound ||= undefined,
        sound_volume: props.buttonSoundVolume ||= undefined,
        "$button_content": (props.buttonContent ||= UI.label({
            font_type: FontType.Default,
            size: ["default", 10],
            max_size: ["100%", 10],
            text: "$button_text",
            shadow: true,
            "$button_text|default": "",
        })).getPath(),
        locked_control: "locked",
        "$is_default|default": false,
        "$is_hover|default": false,
        "$is_pressed|default": false,
        "$is_locked|default": false,
        ...props.properties,
    }).addChild<UI<Types.Panel>>(
        UI.panel({
            "$is_default": true,
            "$button_content|default": Vanilla.common.emptyPanel().getPath(),
            "$hover_content|default": Vanilla.common.emptyPanel().getPath(),
        }).addChild<Types.Image>(
            props.defaultTextureElement ||= UI.image({
                layer: 0,
                texture: props.defaultTexturePath ||= "textures/ui/Black",
                alpha: props.defaultButtonAlpha ||= 0.5,
            })
        ).addChild("$button_content", {
            layer: 1,
        }).addChild("$hover_content"),
    {}, "default").addChild<UI<Types.Panel>>(

        UI.panel({
            "$is_hover": true,
            "$button_content|default": Vanilla.common.emptyPanel().getPath(),
            "$hover_content|default": Vanilla.common.emptyPanel().getPath(),
        }).addChild<Types.Image>(
            props.hoverTextureElement ||= UI.image({
                layer: 0,
                texture: props.hoverTexturePath ||= "textures/ui/Black",
                alpha: props.hoverButtonAlpha ||= 0.5,
            })
        ).addChild("$button_content", {
            layer: 1,
        }).addChild("$hover_content"),
    {}, "hover").addChild<UI<Types.Panel>>(

        UI.panel({
            "$is_pressed": true,
            "$button_content|default": Vanilla.common.emptyPanel().getPath(),
            "$hover_content|default": Vanilla.common.emptyPanel().getPath(),
        }).addChild<Types.Image>(
            props.pressedTextureElement ||= UI.image({
                layer: 0,
                texture: props.pressedTexturePath ||= "textures/ui/Black",
                alpha: props.pressedButtonAlpha ||= 0.5,
            })
        ).addChild("$button_content", {
            layer: 1,
        }).addChild("$hover_content"),
    {}, "pressed").addChild<UI<Types.Panel>>(
        UI.panel({
            "$is_locked": true,
            "$button_content|default": Vanilla.common.emptyPanel().getPath(),
            "$hover_content|default": Vanilla.common.emptyPanel().getPath(),
        }).addChild<Types.Image>(
            props.lockedTextureElement ||= UI.image({
                layer: 0,
                texture: props.lockedTexturePath ||= "textures/ui/Black",
                alpha: props.lockedButtonAlpha ||= 0.5,
            })
        ).addChild("$button_content", {
            layer: 1,
        }).addChild("$hover_content"),
    {}, "locked"));
}