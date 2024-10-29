import http from "./http-common";
import { AgendaProps } from "@/interfaces/Agenda";

const findAll = async (/*type: string*/) => {
    /*
    if (type) {
        const response = await http.get<AgendaProps[]>("agenda/");
        return type === "desc" ? response.data.reverse() : response.data;
    }    
    */
    const response = await http.get<AgendaProps[]>("agendas/");
    return response.data;
};

const byDate = async (date: string) => {
    const response = await http.get<AgendaProps[]>(`agendas/${date}`);
    return response.data;
};

const AgendaService = {
    findAll,
    byDate,
}

export default AgendaService;