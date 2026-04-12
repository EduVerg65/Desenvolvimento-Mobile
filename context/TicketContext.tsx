import { createContext, useContext, useState } from "react";

type Ticket = {
    id: string;
    titulo: string;
    data: string;
    local: string;
    imagem: string;
    codigo: string; // 🎟️ código único
};

type TicketContextType = {
    bilhetes: Ticket[];
    adicionarBilhetes: (itens: any[]) => void;
};

const TicketContext = createContext({} as TicketContextType);

export function TicketProvider({ children }: any) {
    const [bilhetes, setBilhetes] = useState<Ticket[]>([]);

    function gerarCodigo() {
        const letras = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `TKT-2026-${letras}`;
    }

    function adicionarBilhetes(itens: any[]) {
        const novos = itens.map(item => ({
            ...item,
            codigo: gerarCodigo()
        }));

        setBilhetes(prev => [...prev, ...novos]);
    }

    return (
        <TicketContext.Provider value={{ bilhetes, adicionarBilhetes }}>
            {children}
        </TicketContext.Provider>
    );
}

export function useTickets() {
    return useContext(TicketContext);
}