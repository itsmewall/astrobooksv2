import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BookDetails = ({ route }) => {
  const { livro } = route.params; // Obtém o objeto de livro dos parâmetros de rota
  const { nome, autor, genero, idioma, capitulos } = livro; // Extrai os dados do livro

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.info}>Autor: {autor}</Text>
      <Text style={styles.info}>Gênero: {genero}</Text>
      <Text style={styles.info}>Idioma: {idioma}</Text>
      <Text style={styles.heading}>Capítulos:</Text>
      {/* Mapeia os capítulos e os exibe */}
      {capitulos.map((capitulo) => (
        <View key={capitulo.id} style={styles.capituloContainer}>
          <Text style={styles.capituloTitle}>{capitulo.titulo}</Text>
          <Text style={styles.capituloContent}>{capitulo.conteudo}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  capituloContainer: {
    marginBottom: 20,
  },
  capituloTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  capituloContent: {
    fontSize: 16,
  },
});

export default BookDetails;