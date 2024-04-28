// BookList.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const apiUrl = 'http://177.235.140.121';
const apiPort = 3333;

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}:${apiPort}/livros/`);
        setBooks(response.data);
      } catch (error) {
        console.error(error.message);
        setError('Erro ao obter os livros. Tente novamente mais tarde.');
      }
    };

    fetchData();
  }, []);

  const handleBookPress = (id) => {
    navigation.navigate('BookDetails', { id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleBookPress(item.id)}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.author}>Autor: {item.autor}</Text>
      {/* Adicione mais detalhes conforme necessário */}
    </TouchableOpacity>
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (books.length === 0) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
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
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default BookList;
