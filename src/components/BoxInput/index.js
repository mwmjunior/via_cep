import { Input } from "../Input/index"
import { Label } from "../Label/index"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder, 
    fieldValue = null,
    onChangeText = null,
    onEndEditing = null, // Adicionando onEndEditing
    KeyType = 'default',
    maxLength 
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            {/* Label */}
            <Label textLabel={textLabel}/>

            {/* Input */}
            <Input
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                onEndEditing={onEndEditing} // Adicionando onEndEditing
            />
        </FieldContent>
    )
}
