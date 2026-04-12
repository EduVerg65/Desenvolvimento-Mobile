import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DADOS_EVENTOS } from '../../mocks/event';
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";
import { useRouter } from "expo-router";
import { EventCard } from "../../components/EventCard";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Descubra Eventos</Text>
        <TextInput
          style={styles.inputBusca}
          placeholder="Buscar eventos, shows, jogos..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Lista de Eventos */}
      <FlatList
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            item={item}
            onPress={() => router.push(`/evento/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbcc05',
  },
  header: {
    padding: 20,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  headerTitulo: {
    ...FONTS.title,
    color: COLORS.secondary,
    letterSpacing: 1,
  },
  inputBusca: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10
  },
  listaContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    marginBottom: 20,
    overflow: "hidden",
    borderLeftWidth: 6,
    borderLeftColor: COLORS.primary,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  imagemCapa: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 15,
  },
  dataTexto: {
    color: COLORS.primary,
    fontWeight: "800",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  tituloTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.accent,
    marginBottom: 8,
  },
  localTexto: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 15,
  },
  rodapeCard: {
    flexDirection: 'row', // Alinha preço e botão lado a lado
    justifyContent: 'space-between', // Joga um para cada ponta
    alignItems: 'center', // Centraliza verticalmente
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    paddingTop: 15,
  },
  precoTexto: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.secondary,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  botaoComprar: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});