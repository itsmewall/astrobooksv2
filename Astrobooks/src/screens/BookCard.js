import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookCard = ({ book }) => {
  const handleCardPress = () => {
    // Implemente a navegação para os detalhes do livro aqui
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <Text style={styles.title}>{book.nome}</Text>
      <Text style={styles.author}>Autor: {book.autor}</Text>
      {/* Adicione mais detalhes conforme necessário */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

export default BookCard;
