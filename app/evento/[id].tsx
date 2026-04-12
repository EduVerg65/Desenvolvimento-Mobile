import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { DADOS_EVENTOS } from "../../mocks/event";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";
import { useCart } from "../../context/CartContext";
import { Animated } from "react-native";
import { useRef } from "react";
import { Alert } from "react-native";

export default function EventoDetalhe() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { adicionar } = useCart();

    const evento = DADOS_EVENTOS.find(e => String(e.id) === String(id));
    const scaleAnim = useRef(new Animated.Value(1)).current;

    function animar() {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.1,
                duration: 120,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 120,
                useNativeDriver: true,
            })
        ]).start();
    }

    if (!evento) {
        return (
            <SafeAreaView>
                <Text>Evento não encontrado</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.headerTitle} numberOfLines={1}>
                    {evento.titulo}
                </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* IMAGEM */}
                <Image source={{ uri: evento.imagem }} style={styles.image} />

                {/* CONTEÚDO */}
                <View style={styles.content}>

                    {/* TÍTULO */}
                    <Text style={styles.title}>{evento.titulo}</Text>

                    {/* INFO RÁPIDA */}
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>📅 {evento.data}</Text>
                        <Text style={styles.infoText}>📍 {evento.local}</Text>
                    </View>

                    {/* DESCRIÇÃO */}
                    <Text style={styles.sectionTitle}>Sobre o evento</Text>

                    <Text style={styles.description}>
                        {evento.descricao}
                    </Text>

                </View>
            </ScrollView>

            {/* BOTÃO FIXO */}
            <View style={styles.footer}>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (!evento) return;

                            adicionar(evento); // 👈 só isso

                            animar();
                            Alert.alert("Sucesso", "Ingresso adicionado ao carrinho 🎉");
                        }}
                    >
                        <Text style={styles.buttonText}>Garantir Ingresso</Text>
                    </TouchableOpacity>
                </Animated.View>
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
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 15,
        backgroundColor: COLORS.primary,
    },

    headerTitle: {
        ...FONTS.subtitle,
        color: "#fff",
        flex: 1,
    },

    image: {
        width: "100%",
        height: 220,
    },

    content: {
        padding: 20,
    },

    title: {
        ...FONTS.title,
        color: COLORS.text,
        marginBottom: 10,
    },

    infoBox: {
        backgroundColor: "#E8F5E9",
        padding: 12,
        borderRadius: 10,
        marginBottom: 20,
    },

    infoText: {
        fontSize: 14,
        marginBottom: 5,
        color: COLORS.text,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: COLORS.accent,
    },

    description: {
        fontSize: 14,
        lineHeight: 22,
        color: COLORS.textLight,
    },

    footer: {
        padding: 15,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },

    button: {
        backgroundColor: COLORS.secondary,
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    buttonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    }
});