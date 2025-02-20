import { useState } from "react";
import "./PDFUpload.css";

interface PDFUploadProps {
    onUploadChange: (uploaded: boolean) => void
}

export const PDFUpload = ({ onUploadChange }: PDFUploadProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handlePDFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            onUploadChange(true)
        } else {
            onUploadChange(false)
        }
    };

    return (
        <div className="upload-container">
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
    );
};
