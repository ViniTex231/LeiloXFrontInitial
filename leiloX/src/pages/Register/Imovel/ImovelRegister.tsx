import "./ImovelRegister.css"
import { InputField } from "../../../components/Input/Input"
import { useState } from "react"
import Button from "../../../components/ConfirmButton/ConfirmButton"
import { createImovel } from "../../../services/apiService"

const ImovelRegister = () => {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [cpf, setCpf] = useState("")
    const [nomeSegundo, setNomeSegundo] = useState("")
    const [cpfSegundo, setCpfSegundo] = useState("")
    const [endereco, setEndereco] = useState("")
    const [matricula, setMatricula] = useState("")
    const [valor, setValor] = useState("")
    const [estadoCivil, setEstadoCivil] = useState("")
    const [termosAceitos, setTermosAceitos] = useState(false)
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [errors, setErrors] = useState({
        nomeCompleto: false,
        cpf: false,
        nomeSegundo: false,
        cpfSegundo: false,
        endereco: false,
        matricula: false,
        valor: false,
        estadoCivil: false,
        termosAceitos: false,
    })

    const validateForm = () => {
        const newErrors = {
            nomeCompleto: !nomeCompleto,
            cpf: !cpf,
            nomeSegundo: !nomeSegundo,
            cpfSegundo: !cpfSegundo,
            endereco: !endereco,
            matricula: !matricula,
            valor: !valor,
            estadoCivil: !estadoCivil,
            termosAceitos: !termosAceitos,
        }
        setErrors(newErrors)
        return !Object.values(newErrors).includes(true)
    }

    const handleSubmit = async () => {
        if (validateForm()) {
            setLoading(true);
            setSuccessMessage("")
            setErrorMessage("")

            const imovelData = {
                nome_proprietario: nomeCompleto,
                cpf_proprietario: Number(cpf.replace(/\D/g, "")),
                estado_civil: estadoCivil,
                endereco,
                matricula_municipal: Number(matricula),
                valor: Number(valor.replace(/\D/g, ""))
            }

            try {
                await createImovel(imovelData)
                setSuccessMessage("Imovel cadastrado com sucesso")
                setNomeCompleto("")
                setCpf("")
                setNomeSegundo("")
                setCpfSegundo("")
                setEndereco("")
                setMatricula("")
                setValor("")
                setEstadoCivil("")
                setTermosAceitos(false)
            } catch (error) {
                setErrorMessage("Erro ao cadastrar imovel. Tente novamente")
                console.error("Erro ao cadastrar imovel:", error)
            } finally {
                setLoading(false)
            }
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
                    <InputField
                        label="Estado Civil"
                        value={estadoCivil}
                        onChange={setEstadoCivil}
                        placeholder="Solteiro"
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
                    <div className="error-message">
                        {errors.termosAceitos ? (
                            <span className="error-message">
                                Todos os campos devem ser preenchidos corretamente
                            </span>
                        ) : (
                            'Todos os campos devem ser preenchidos corretamente'
                        )}
                    </div>
                )}

                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="termos"
                        checked={termosAceitos}
                        onChange={() => setTermosAceitos(!termosAceitos)}
                    />
                    <label htmlFor="termos" className={errors.termosAceitos ? 'error-label' : ''}>
                        Concordo com o termo de veracidade
                    </label>
                </div>

                {successMessage && <p className="successMessage">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="button">
                    <Button text={loading ? "Enviando..." : "Confirmar Dados"} onClick={handleSubmit} disabled={loading} />
                </div>
            </div>

        </div>
    )
}

export default ImovelRegister