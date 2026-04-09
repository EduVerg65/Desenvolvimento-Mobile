import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { DADOS_EVENTOS } from '../../mocks/event';
import { Event } from '../../types/event';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

type RenderizarEventoProps = {
  item: Event;
}

const renderizarEvento = ({ item }: RenderizarEventoProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />

    <View style={styles.infoContainer}>
      <Text style={styles.dataTexto}>{item.data}</Text>
      <Text style={styles.tituloTexto} numberOfLines={2}>{item.titulo}</Text>
      <Text style={styles.localTexto}>{item.local}</Text>

      <View style={styles.rodapeCard}>
        <Text style={styles.precoTexto}>{item.preco}</Text>
        <TouchableOpacity style={styles.botaoComprar}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Descubra Eventos</Text>
        <TextInput
          style={styles.inputBusca}
          placeholder="Buscar eventos, shows, cursos..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Lista de Eventos */}
      <FlatList
        data={DADOS_EVENTOS} // O array de dados
        keyExtractor={(item) => item.id} // Como o React identifica cada item unicamente
        renderItem={renderizarEvento} // O componente que será desenhado para cada item
        contentContainerStyle={styles.listaContainer} // Estilo do container da lista
        showsVerticalScrollIndicator={false} // Esconde a barra de rolagem nativa
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitulo: {
    ...FONTS.title,
    color: "#fff",
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
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
  },
  imagemCapa: {
    width: '100%',
    height: 160,
  },
  infoContainer: {
    padding: 15,
  },
  dataTexto: {
    color: '#19AE47', // Cor de destaque típica de apps de ingressos
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  tituloTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
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
    color: "#fff",
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  botaoComprar: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});