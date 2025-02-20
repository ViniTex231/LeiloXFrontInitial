import { useState } from "react";
import "./PDFUpload.css"

export const PDFUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handlePDFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    return (
        <div className="upload-container">
            <div className="header">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <span>Informacoes Encontradas</span>
                </div>
                <div className="timestamp">
                    {new Date().toLocaleDateString('pt-BR', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                    <span className="time">
                        {new Date().toLocaleTimeString('pt-BR', {
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true
                        })}
                    </span>
                </div>
            </div>

            <div className="content">
                <div className="upload-area">
                    <input
                        type="file"
                        id="file-upload"
                        className="file-input"
                        onChange={handlePDFChange}
                        accept=".pdf"
                    />
                    <label htmlFor="file-upload" className="upload-label">
                        {selectedFile ? (
                            <span className="file-name">{selectedFile.name}</span>
                        ) : (
                            <>
                                <span className="upload-icon">📄</span>
                                <span>Clique para fazer upload do PDF</span>
                            </>
                        )}
                    </label>
                </div>
            </div>

            <div className="footer">
                <button className="footer-button">
                    <span className="clip-icon">📎</span>
                    Edital
                </button>
                <button className="footer-button">
                    <span className="clip-icon">📎</span>
                    Matricula
                </button>
                <button className="settings-button">⚙️</button>
            </div>
        </div>
    )
}