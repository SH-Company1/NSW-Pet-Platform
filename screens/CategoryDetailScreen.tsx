import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type CategoryDetailRouteProp = RouteProp<RootStackParamList, 'CategoryDetail'>;

export default function CategoryDetailScreen() {
  const route = useRoute<CategoryDetailRouteProp>();
  const navigation = useNavigation();
  const { categoryName, categoryColor } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: categoryColor + '30' },
          ]}
        >
          <Text style={styles.iconPlaceholder}>
            {categoryName.substring(0, 2)}
          </Text>
        </View>
        <Text style={styles.title}>{categoryName}</Text>
        <Text style={styles.subtitle}>중분류 카테고리</Text>
        <Text style={styles.description}>곧 업데이트 예정입니다</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
    width: 40,
  },
  backText: {
    fontSize: 24,
    color: '#212121',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    flex: 1,
    textAlign: 'center',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  iconPlaceholder: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#212121',
  },
  subtitle: {
    fontSize: 16,
    color: '#616161',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#BDBDBD',
  },
});

