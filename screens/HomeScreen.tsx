import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../types/navigation';
import { MAIN_CATEGORIES, Category } from '../types/models';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');
// 데스크톱에서는 480px 기준으로 카드 크기 계산
const containerWidth = Math.min(width, 480);
const CARD_SIZE = (containerWidth - 64) / 3; // 3 columns with padding

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    { id: 1, image: require('../assets/products/product1.jpg') },
    { id: 2, image: require('../assets/products/product2.jpg') },
    { id: 3, image: require('../assets/products/product3.jpg') },
  ];

  const handleCategoryPress = (category: Category) => {
    navigation.navigate('CategoryDetail', {
      categoryId: category.id,
      categoryName: category.name,
      categoryColor: category.color,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent, 
          { paddingBottom: 90 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Navigation Bar */}
        <View style={styles.topNavBar}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>애들이랑 🐶😺</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Text style={styles.headerIcon}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headerIcon}>🛒</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Info Bar (예: 핫구매 100원~, 특가/혜택 등) */}
        <View style={styles.infoBar}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.infoBarContent}
          >
            <View style={styles.infoBadge}>
              <Text style={styles.infoBadgeText}>🔥 핫구매 100원~</Text>
            </View>
            <View style={styles.infoBadge}>
              <Text style={styles.infoBadgeText}>✨ 특가/혜택</Text>
            </View>
            <View style={styles.infoBadge}>
              <Text style={styles.infoBadgeText}>🎁 강아지 패딩 4,800원</Text>
            </View>
            <View style={styles.infoBadge}>
              <Text style={styles.infoBadgeText}>⭐ 베스트</Text>
            </View>
          </ScrollView>
        </View>

        {/* Horizontal Scrollable Banner Section */}
        <View style={styles.bannerSection}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const slideSize = event.nativeEvent.layoutMeasurement.width;
              const index = Math.round(
                event.nativeEvent.contentOffset.x / slideSize
              );
              // 인덱스를 배너 개수로 제한
              const safeIndex = Math.max(0, Math.min(index, banners.length - 1));
              setCurrentBannerIndex(safeIndex);
            }}
          >
            {banners.map((banner) => (
              <View key={banner.id} style={[styles.bannerSlide, { width }]}>
                <Image
                  source={banner.image}
                  style={styles.bannerImage}
                  resizeMode="stretch"
                />
              </View>
            ))}
          </ScrollView>
          {/* Banner Indicator */}
          <View style={styles.bannerIndicator}>
            <Text style={styles.bannerIndicatorText}>
              {currentBannerIndex + 1} / {banners.length}
            </Text>
          </View>
        </View>

        {/* Category Grid */}
        <View style={styles.categoriesContainer}>
          {MAIN_CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { borderColor: category.color + '40' }]}
              onPress={() => handleCategoryPress(category)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: category.color + '30' },
                ]}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.sectionTitle}>추천 상품</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>곧 업데이트 예정입니다</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  // Top Navigation Bar
  topNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuButton: {
    padding: 4,
  },
  menuIcon: {
    fontSize: 28,
    color: '#424242',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA042',
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 24,
  },
  // Info Bar
  infoBar: {
    backgroundColor: '#FFF9F0',
    borderBottomWidth: 1,
    borderBottomColor: '#FFE5CC',
  },
  infoBarContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  infoBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD699',
  },
  infoBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF8C00',
  },
  // Banner Section
  bannerSection: {
    marginTop: 16,
    marginBottom: 16,
    position: 'relative',
  },
  bannerSlide: {
    width: width,
  },
  bannerImage: {
    width: width,
    height: 240,
  },
  bannerIndicator: {
    position: 'absolute',
    bottom: 12,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bannerIndicatorText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  // Categories
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 8,
  },
  categoryCard: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#424242',
    textAlign: 'center',
  },
  // Bottom Section
  bottomSection: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#212121',
  },
  placeholder: {
    padding: 40,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});

