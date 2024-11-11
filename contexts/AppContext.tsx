import {createContext, useContext, useState, useEffect} from 'react';
import AgendaService from '@/service/agenda.service';
import { AgendaProps } from '../interfaces/Agenda';

interface AppContextProviderProps {
    children: React.ReactNode;
};

// define o formato do context:
// agendas : array com as Tasks(AgendaProps)
// loadAgendas :  funcao que busca os dados na api
export interface AppContextType {
    agendas: AgendaProps[];
    loadAgendas: () => Promise<void>;
}

// valores iniciais
const AppContextInitVals: AppContextType = {
    agendas: [],
    loadAgendas: async () => {},
}

export const AppContext = createContext<AppContextType>(AppContextInitVals);

export const AppContextProvider = ({children,}: AppContextProviderProps) => {
    const [agendas, setAgendas] = useState<AgendaProps[]>([]);

    const loadAgendas = async () => {
        const data = await AgendaService.findAll();
        setAgendas(data);
    }
    
    useEffect(() => {
        loadAgendas();
    }, []);

    return (
        <AppContext.Provider 
        value={{agendas, loadAgendas}}>
            {children}
        </AppContext.Provider>
    );
}
//hook
export const useAgenda = () => useContext(AppContext);