import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('URL_DA_SUA_API_AQUI');
      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os livros:', error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.bookItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>Autor: {item.author}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {books.length === 0 ? (
        <Text style={styles.noBooks}>Nenhum livro encontrado.</Text>
      ) : (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bookItem: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  noBooks: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
