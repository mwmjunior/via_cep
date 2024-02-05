import axios from "axios";
import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerInput } from "./style";

export function Home() {

    //hooks - states
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
      
    }, []);

    //hooks - effect
    //chamada da api
    async function buscaCep() {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setCidade(response.data.localidade)
            setEstado(response.data.uf)
            setUf(response.data.uf)

            // Obtém o nome completo do estado a partir da sigla (UF) usando a API do IBGE
            const estadoResponse = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`);
            setEstado(estadoResponse.data.nome);
        } catch (error) {
            alert('Erro ao buscar o cep');
        }
    }

    function clearCep() {
        setCep("")
        setLogradouro("")
        setBairro("")
        setCidade("")
        setEstado("")
        setUf("")
    }

    return (
        //ScrollForm
        //ContainerForm
        //BoxInput
        //Label
        //Input
        <ScrollForm>
            <ContainerForm>
                {/* Componente BoxInput para o CEP */}
                <BoxInput
                    textLabel="Informe o CEP:"
                    placeholder="Cep..."
                    keyType="numeric"
                    fieldValue={cep}
                    editable={true}
                    maxLength={9} 
                    onChangeText={setCep}
                    onEndEditing={cep ? buscaCep : clearCep} /* Aciona busca ao finalizar a edição do CEP */
                />
                {/* Componentes BoxInput para outros campos */}
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                />
                {/* ContainerInput para Estado e UF */}
                <ContainerInput>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth={70}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth={25}
                        fieldValue={uf}
                    />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    );
}
