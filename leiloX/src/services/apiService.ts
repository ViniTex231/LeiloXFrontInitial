import { ImovelRegister } from "../utils/interfaces/Interfaces";
import axiosInstance from "./axiosInstance";

interface ImovelList {
    content: ImovelRegister[]
}

// GET
export const getImoveis = async () => {
    return (await axiosInstance.get<ImovelList>("/imoveis/")).data;
};

// GET - Por iD
export const getImovelById = async (id: number) => {
    return (await axiosInstance.get<ImovelRegister>(`/imoveis/${id}/`)).data;
}

// POST
export const createImovel = async (imovel: ImovelRegister) => {
    return (await axiosInstance.post<ImovelRegister>("/imoveis/", imovel)).data;
}

// PUT
export const updateImovel = async (id: number, imovel: ImovelRegister) => {
    return (await axiosInstance.put<ImovelRegister>(`/imoveis/${id}/`, imovel)).data;
}

// DELETE
export const deleteImovel = async (id: number) => {
    return (await axiosInstance.delete(`/imoveis/${id}/`)).data;
}