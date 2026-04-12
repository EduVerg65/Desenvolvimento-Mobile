import { createContext, useContext, useState } from "react";
import { Event } from "../types/event";

type Item = {
    id: string;
    titulo: string;
    data: string;
    local: string;
    preco: string;
    imagem: string;
    cartId: string;
};

type CartContextType = {
    carrinho: Item[];
    adicionar: (item: Event) => void;
    remover: (cartId: string) => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: any) {
    const [carrinho, setCarrinho] = useState<Item[]>([]);

    function adicionar(item: Event) {
        setCarrinho((prev) => [
            ...prev,
            {
                ...item,
                cartId: Date.now().toString()
            }
        ]);
    }

    function remover(cartId: string) {
        setCarrinho((prev) =>
            prev.filter(item => item.cartId !== cartId)
        );
    }

    return (
        <CartContext.Provider value={{ carrinho, adicionar, remover }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}