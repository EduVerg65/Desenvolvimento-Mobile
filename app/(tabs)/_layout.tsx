import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export default function TabLayout() {
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
        </Tabs>
    )
}