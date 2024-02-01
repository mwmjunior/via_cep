import { InputText } from "./style";

export function Input({

    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength

}) {

    return(

        <InputText
        placeholder={placeholder}
        editable={editable}
        keyboard={keyType}
        maxLength={maxLength}
        value={fieldValue}
        onChangeText={onChangeText}
        />

    )

}