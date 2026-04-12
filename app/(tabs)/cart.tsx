import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";
import { useCart } from "../../context/CartContext";
import { useTickets } from "../../context/TicketContext";
import { router } from "expo-router";

export default function CartScreen() {
    const { adicionarBilhetes } = useTickets();
    const { carrinho, remover, limparCarrinho } = useCart();
    const total = carrinho.reduce((acc, item) => {
        const valor = Number(
            item.preco
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim()
        );

        return acc + valor;
    }, 0);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Meu Carrinho ({carrinho.length} itens)
                </Text>
            </View>

            <FlatList
                data={carrinho}
                keyExtractor={(item) => item.cartId}
                contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imagem }} style={styles.image} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.eventTitle}>{item.titulo}</Text>
                            <Text style={styles.info}>{item.data}</Text>
                            <Text style={styles.info}>{item.local}</Text>
                            <Text style={styles.price}>{item.preco}</Text>
                        </View>

                        <TouchableOpacity onPress={() => remover(item.cartId)}>
                            <MaterialIcons name="delete" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={{ textAlign: "center", marginTop: 30, color: "#666" }}>
                        Seu carrinho está vazio.
                    </Text>
                }
            />

            <View style={styles.footer}>
                <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (carrinho.length === 0) return;

                        adicionarBilhetes(carrinho);
                        limparCarrinho(); // 🔥 AQUI resolve tudo

                        Alert.alert(
                            "Compra realizada 🎉",
                            "Seus ingressos estão disponíveis em 'Bilhetes'",
                            [
                                {
                                    text: "Ver bilhetes",
                                    onPress: () => router.push("/tickets")
                                }
                            ]
                        );
                    }}
                >
                    <Text style={styles.buttonText}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    header: {
        padding: 20,
        backgroundColor: COLORS.primary,
    },

    title: {
        ...FONTS.title,
        color: "#fff",
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 12,
        marginBottom: 15,
        gap: 10,
        alignItems: "center",
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    eventTitle: {
        fontWeight: "bold",
        fontSize: 14,
    },

    info: {
        fontSize: 12,
        color: "#666",
    },

    price: {
        marginTop: 5,
        fontWeight: "bold",
        color: COLORS.primary,
    },

    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },

    total: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },

    button: {
        backgroundColor: COLORS.secondary,
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#000",
    },
});