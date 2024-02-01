import { Input } from "../Input/index"
import { Label } from "../Label/index"
import { FieldContent } from "./style"

export const BoxInput = ({

    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder, 
    fieldValue = null,
    onchangeText = null,
    KeyType = 'default',
    maxLenght

}) =>{

    return(

            // FieldContent
                // Label
                // Input
            //Label

            <FieldContent fieldWidth={fieldWidth}>
                {/* Label */}
                <Label textLabel={textLabel}/>


                {/* Input */}

                <Input
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLenght={maxLenght}
                fieldValue={fieldValue}
                onchangeText={onchangeText}
                />
            </FieldContent>
    )
}
