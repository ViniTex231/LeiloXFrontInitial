import "./ImovelRegister.css"
import { InputField } from "../../../components/Input/Input"
import { InputOptions } from "../../../components/InputOptions/InputOptions"
import { useState } from "react"
import Button from "../../../components/ConfirmButton/ConfirmButton"

const ImovelRegister = () => {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [cpf, setCpf] = useState("")
    const [nomeSegundo, setNomeSegundo] = useState("")
    const [cpfSegundo, setCpfSegundo] = useState("")
    const [endereco, setEndereco] = useState("")
    const [matricula, setMatricula] = useState("")
    const [valor, setValor] = useState("")
    const [estadoCivil, setEstadoCivil] = useState("")

    const [errors, setErrors] = useState({
        nomeCompleto: false,
        cpf: false,
        nomeSegundo: false,
        cpfSegundo: false,
        endereco: false,
        matricula: false,
        valor: false,
        estadoCivil: false
    })

    const opcoesEstadoCivil = [
        "Solteiro",
        "Casado",
        "Divorciado",
        "Viúvo"
    ]

    const validateForm = () => {
        const newErrors = {
            nomeCompleto: !nomeCompleto,
            cpf: !cpf,
            nomeSegundo: !nomeSegundo,
            cpfSegundo: !cpfSegundo,
            endereco: !endereco,
            matricula: !matricula,
            valor: !valor,
            estadoCivil: !estadoCivil
        }
        setErrors(newErrors)
        return !Object.values(newErrors).includes(true)
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Cadastro do imóvel:", {
                nomeCompleto,
                cpf,
                nomeSegundo,
                cpfSegundo,
                estadoCivil,
                endereco,
                matricula,
                valor
            })
        }
    }

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
                        style={{ borderColor: errors.nomeCompleto ? '#ff2c2c' : '' }}
                    />
                    <InputField
                        label="CPF"
                        value={cpf}
                        onChange={setCpf}
                        placeholder="205.094.238-09"
                        style={{ borderColor: errors.cpf ? '#ff2c2c' : '' }}
                    />
                </div>
                <div className="form">
                    <InputField
                        label="Nome Completo"
                        value={nomeSegundo}
                        onChange={setNomeSegundo}
                        placeholder="João Lucas Barbosa"
                        style={{ borderColor: errors.nomeSegundo ? '#ff2c2c' : '' }}
                    />
                    <InputField
                        label="CPF"
                        value={cpfSegundo}
                        onChange={setCpfSegundo}
                        placeholder="234.876.398-93"
                        style={{ borderColor: errors.cpfSegundo ? '#ff2c2c' : '' }}
                    />
                </div>
                <div className="form">
                    <InputOptions
                        label="Estado Civil"
                        value={estadoCivil}
                        onChange={setEstadoCivil}
                        options={opcoesEstadoCivil}
                        style={{ borderColor: errors.estadoCivil ? '#ff2c2c' : '' }}
                    />
                    <InputField
                        label="Endereco Imovel"
                        value={endereco}
                        onChange={setEndereco}
                        placeholder="Avenida Antonio Diogo - 32"
                        style={{ borderColor: errors.endereco ? '#ff2c2c' : '' }}
                    />
                </div>
                <div className="form">
                    <InputField
                        label="Matricula Municipal"
                        value={matricula}
                        onChange={setMatricula}
                        placeholder="239.230.573-89"
                        style={{ borderColor: errors.matricula ? 'red' : '' }}
                    />
                    <InputField
                        label="Valor do Imóvel"
                        value={valor}
                        onChange={setValor}
                        placeholder="R$ 265.410,04"
                        style={{ borderColor: errors.valor ? 'red' : '' }}
                    />
                </div>
                {Object.values(errors).includes(true) && (
                    <div className="error-message">Todos os campos devem ser preenchidos corretamente</div>
                )}
                <div className="button">
                    <Button text="Confirmar Dados" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default ImovelRegister