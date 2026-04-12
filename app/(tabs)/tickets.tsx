import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";
import { useTickets } from "../../context/TicketContext";

export default function TicketsScreen() {
    const { bilhetes } = useTickets();

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    Meus Bilhetes ({bilhetes.length})
                </Text>
            </View>

            <FlatList
                data={bilhetes}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imagem }} style={styles.image} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.eventTitle}>{item.titulo}</Text>
                            <Text style={styles.info}>{item.data}</Text>
                            <Text style={styles.info}>{item.local}</Text>

                            <Text style={styles.codigo}>
                                🎟️ {item.codigo}
                            </Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.empty}>
                        Você ainda não possui bilhetes.
                    </Text>
                }
            />
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
        padding: 12,
        borderRadius: 15,
        marginBottom: 15,
        gap: 10,
        alignItems: "center",
        elevation: 4,
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    eventTitle: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 5,
    },

    info: {
        fontSize: 12,
        color: "#666",
    },

    codigo: {
        marginTop: 8,
        fontWeight: "bold",
        color: COLORS.primary,
    },

    empty: {
        textAlign: "center",
        marginTop: 40,
        color: "#666",
    }
});