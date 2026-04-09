import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen() {
    const router = useRouter();

    function onSairPress() {
        router.replace("/login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: "https://i.pinimg.com/1200x/10/4c/da/104cda487b721689ea7024c317e426cb.jpg"
                    }}
                    style={styles.profileImage}
                />

                <Text style={styles.textName}>LULA</Text>

                <Text style={styles.textBio}>
                    Eu gosto de React Native 🇧🇷
                </Text>

                <TouchableOpacity
                    style={styles.botaoSair}
                    onPress={onSairPress}
                >
                    <FontAwesome name="sign-out" size={16} color="#ffff" />
                    <Text style={styles.textoBotao}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        backgroundColor: COLORS.card,
        padding: 25,
        borderRadius: 20,
        alignItems: "center",

        // sombras (AGORA no lugar certo)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,

        width: "100%",
        maxWidth: 280
    },

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10
    },

    textName: {
        ...FONTS.title,
        color: COLORS.text,
        marginBottom: 10
    },

    textBio: {
        ...FONTS.text,
        textAlign: "center",
        color: COLORS.textLight,
        lineHeight: 22
    },

    botaoSair: {
        marginTop: 20,
        backgroundColor: "#D62828",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",   // 👈 importante
        alignItems: "center",
        justifyContent: "center",
        gap: 8                  // 👈 espaço entre ícone e texto
    },

    textoBotao: {
        color: "#fff",
        fontWeight: "bold"
    }
});