import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { DADOS_EVENTOS } from '../../mocks/event';
import { Event } from '../../types/event';
import { FontAwesome } from '@expo/vector-icons';

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
    backgroundColor: '#ffffff',
    borderBottomWidth: 5,
    borderBottomColor: '#1350a0',
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#19AE47',
    marginBottom: 15,
  },
  inputBusca: {
    backgroundColor: '#d3d3d3',
    borderBottomWidth: 5,
    borderBottomColor: '#19AE47',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#0f0202',
  },
  listaContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden', // Garante que a imagem não "vaze" pelos cantos arredondados
    elevation: 3, // Sombra no Android
    shadowColor: '#000000', // Sombras no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#fbcc05',
    borderRadius: 5,
    paddingHorizontal: 6, // Garante que o fundo não fique colado na letra
    paddingVertical: 2,
    alignSelf: 'flex-start', // Faz o fundo "abraçar" apenas o texto
    overflow: 'hidden', // Necessário para o arredondamento funcionar no iOS
},
  botaoComprar: {
    backgroundColor: '#19AE47',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row-reverse",
    alignContent: "center",
    gap: 12
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});