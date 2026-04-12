import { Stack } from "expo-router";
import { CartProvider } from "../context/CartContext";
import { TicketProvider } from "../context/TicketContext";

export default function RootLayout() {
    return (
        <TicketProvider>
            <CartProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="login" />
                    <Stack.Screen name="(tabs)" />
                </Stack>
            </CartProvider>
        </TicketProvider>
    );
}