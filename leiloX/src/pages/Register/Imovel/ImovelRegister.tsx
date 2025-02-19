import "./ImovelRegister.css"
import { InputField } from "../../../components/Input/Input"
import { InputOptions } from "../../../components/InputOptions/InputOptions"
import { useState } from "react"

const ImovelRegister = () => {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [cpf, setCpf] = useState("")
    const [nomeSegundo, setNomeSegundo] = useState("")
    const [cpfSegundo, setCpfSegundo] = useState("")
    const [endereco, setEndereco] = useState("")
    const [matricula, setMatricula] = useState("")
    const [valor, setValor] = useState("")
    const [estadoCivil, setEstadoCivil] = useState("")

    const opcoesEstadoCivil = [
        "Solteiro",
        "Casado",
        "Divorciado",
        "Viúvo"
    ]

    return (
        <div className="background-container-main">
            <div className="header">
                <h1 className="header-text">CADASTRO DE IMÓVEL</h1>
            </div>
            <div className="form-container">
                <div className="form">
                    <InputField
                        label="Nome Completo"
                        value={nomeCompleto}
                        onChange={setNomeCompleto}
                        placeholder="Lazara Antonia Barbosa"
                    />
                    <InputField
                        label="CPF"
                        value={cpf}
                        onChange={setCpf}
                        placeholder="205.094.238-09"
                    />
                </div>
                <div className="form">
                    <InputField
                        label="Nome Completo"
                        value={nomeSegundo}
                        onChange={setNomeSegundo}
                        placeholder="João Lucas Barbosa"
                    />
                    <InputField
                        label="CPF"
                        value={cpfSegundo}
                        onChange={setCpfSegundo}
                        placeholder="234.876.398-93"
                    />
                </div>
                <div className="form">
                    <InputOptions
                        label="Estado Civil"
                        value={estadoCivil}
                        onChange={setEstadoCivil}
                        options={opcoesEstadoCivil}
                    />
                    <InputField
                        label="Endereco Imovel"
                        value={endereco}
                        onChange={setEndereco}
                        placeholder="Avenida Antonio Diogo - 32"
                    />
                </div>
                <div className="form">
                    <InputField
                        label="Matricula Municipal"
                        value={matricula}
                        onChange={setMatricula}
                        placeholder="239.230.573-89"
                    />
                    <InputField
                        label="Valor do Imóvel"
                        value={valor}
                        onChange={setValor}
                        placeholder="R$ 265.410,04"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImovelRegister