import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";
import { useCart } from "../context/CartContext";
import { useRef } from "react";

export function EventCard({ item, onPress }: any) {
    const { adicionar } = useCart();
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const styles = StyleSheet.create({
        card: {
            backgroundColor: "#fff",
            borderRadius: 20,
            marginBottom: 20,
            overflow: "hidden",

            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 10,
            elevation: 6,
        },

        imagem: {
            width: "100%",
            height: 180,
        },

        info: {
            padding: 15,
        },

        data: {
            color: "#009739", // verde Brasil
            fontWeight: "bold",
            fontSize: 13,
            marginBottom: 5,
        },

        titulo: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#012169", // azul Brasil
            marginBottom: 6,
        },

        local: {
            fontSize: 14,
            color: "#555",
            marginBottom: 12,
        },

        footer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        preco: {
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "#FFDF00", // amarelo Brasil
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 6,
        },

        botao: {
            backgroundColor: "#009739",
            paddingVertical: 8,
            paddingHorizontal: 14,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
        },

        textoBotao: {
            color: "#fff",
            fontWeight: "bold",
        },
    });
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

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />

            <View style={styles.info}>
                <Text style={styles.data}>{item.data}</Text>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.local}>{item.local}</Text>

                <View style={styles.footer}>
                    <Text style={styles.preco}>{item.preco}</Text>

                    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {
                                adicionar(item);
                                animar();
                            }}
                        >
                            <FontAwesome name="shopping-cart" size={16} color="#fff" />
                            <Text style={styles.textoBotao}>Comprar</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </TouchableOpacity>
    );
    
}