import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function StoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>🏪</Text>
        <Text style={styles.title}>스토어</Text>
        <Text style={styles.subtitle}>곧 업데이트 예정입니다</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: '#616161',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#BDBDBD',
  },
});

