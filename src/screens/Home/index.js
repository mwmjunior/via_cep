import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";
// Dar import crtr+barra de espaco


export function Home(){

    //hooks states
    // hooks effect
     //chamada da api


return(

        //ScroolForm
        //ContainerForm
        //BoxInput
            //Label
            //Input

    <>
    <ScrollForm>
        <ContainerForm>
            <BoxInput
                textLabel= "informe o CEP"
                placeholder="Cep..."
                KeyType='numeric'
                maxLenght={9}
            />
        </ContainerForm>
    </ScrollForm>
    </>
)

}