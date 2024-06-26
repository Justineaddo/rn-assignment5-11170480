// screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const transactions = [
      { id: '1', title: 'Apple Store', category: 'Entertainment', amount: '- $5.99', color: 'black', icon: require('./assets/ios.jpeg') },
      { id: '2', title: 'Spotify', category: 'Music', amount: '- $12.99', color: 'black', icon: require('./assets/spotify.jpeg') },
      { id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300', color: 'blue', icon: require('./assets/wallet.jpeg') },
      { id: '4', title: 'Grocery', category: 'Shopping', amount: '- $88', color: 'black', icon: require('./assets/Cart.jpeg') },
    ];
    
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIconContainer}>
        <Icon name="category" size={24} color="black" />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionCategory}>{item.category}</Text>
      </View>
      <Text style={[styles.transactionAmount, { color: item.color }]}>{item.amount}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
        <Text style={styles.welcomeText}>Welcome back,{"\n"}Justine</Text>
        <Icon name="search" size={24} style={styles.searchIcon} />
      </View>
      <View style={styles.cardContainer}>
        <Image source={require('./assets/master.png')} style={styles.cardImage} />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="send" size={24} />
          <Text style={styles.actionLabel}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="download" size={24} />
          <Text style={styles.actionLabel}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="attach-money" size={24} />
          <Text style={styles.actionLabel}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="add" size={24} />
          <Text style={styles.actionLabel}>Topup</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.transactionHeader}>Transaction</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.transactionList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginLeft: 'auto',
  },
  card: {
    backgroundColor: '#1A237E',
    borderRadius: 16,
    padding: 16,
    marginVertical: 20,
  },
  cardNumber: {
    color: 'white',
    fontSize: 24,
    letterSpacing: 2,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardName: {
    color: 'white',
    fontSize: 16,
  },
  cardExpiry: {
    color: 'white',
    fontSize: 12,
  },
  cardCvvContainer: {
    alignItems: 'center',
  },
  cardCvvLabel: {
    color: 'white',
    fontSize: 12,
  },
  cardCvv: {
    color: 'white',
    fontSize: 16,
  },
  mastercardLogo: {
    width: 40,
    height: 40,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 8,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionList: {
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionCategory: {
    fontSize: 12,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default HomeScreen;
