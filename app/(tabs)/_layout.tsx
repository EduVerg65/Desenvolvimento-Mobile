import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";
import { useCart } from "../../context/CartContext";
import { View, Text } from "react-native";

export default function TabLayout() {
    const { carrinho } = useCart();
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.secondary,
            tabBarInactiveTintColor: COLORS.accent,
            tabBarStyle: {
                backgroundColor: COLORS.primary,
                borderTopWidth: 0,
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Carrinho",
                    tabBarIcon: ({ color }) => (
                        <View>
                            <FontAwesome name="shopping-cart" size={24} color={color} />

                            {carrinho.length > 0 && (
                                <View style={{
                                    position: "absolute",
                                    right: -6,
                                    top: -3,
                                    backgroundColor: "red",
                                    borderRadius: 10,
                                    paddingHorizontal: 5,
                                    paddingVertical: 1,
                                }}>
                                    <Text style={{ color: "#fff", fontSize: 10 }}>
                                        {carrinho.length}
                                    </Text>
                                </View>
                            )}
                        </View>
                    )
                }}
            />
            
            <Tabs.Screen
                name="tickets"
                options={{
                    title: "Bilhetes",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="ticket" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}