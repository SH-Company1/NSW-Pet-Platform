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
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../types/navigation';
import { MAIN_CATEGORIES, Category } from '../types/models';
import { useFonts, NotoSansKR_400Regular, NotoSansKR_500Medium, NotoSansKR_700Bold, NotoSansKR_900Black } from '@expo-google-fonts/noto-sans-kr';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');
// 데스크톱에서는 480px 기준으로 카드 크기 계산
const containerWidth = Math.min(width, 480);
const CARD_SIZE = (containerWidth - 64) / 3; // 3 columns with padding

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Load Noto Sans KR fonts
  const [fontsLoaded] = useFonts({
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
  });

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

  // Show nothing while fonts are loading
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent, 
          { paddingBottom: 90 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Navigation Bar with Gradient */}
        <LinearGradient
          colors={['#FF9A56', '#FFA042']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.topNavBar}
        >
          <View style={styles.leftSection}>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.logo}>애들이랑 🐾</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.headerIcon}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.headerIcon}>🛒</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Promotional Banner */}
        <View style={styles.promoBanner}>
          <LinearGradient
            colors={['#FFE8D6', '#FFF5EB']}
            style={styles.promoBannerGradient}
          >
            <View style={styles.promoContent}>
              <View style={styles.promoTextSection}>
                <Text style={styles.promoTitle}>🎉 신규회원 특별혜택</Text>
                <Text style={styles.promoSubtitle}>첫 구매 시 15% 할인쿠폰</Text>
              </View>
              <TouchableOpacity style={styles.promoButton}>
                <Text style={styles.promoButtonText}>받기</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Action Bar */}
        <View style={styles.quickActionBar}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickActionContent}
          >
            <TouchableOpacity style={[styles.quickActionBadge, styles.hotDeal]}>
              <Text style={styles.quickActionIcon}>🔥</Text>
              <Text style={styles.quickActionText}>핫딜</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickActionBadge, styles.special]}>
              <Text style={styles.quickActionIcon}>✨</Text>
              <Text style={styles.quickActionText}>특가</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickActionBadge, styles.event]}>
              <Text style={styles.quickActionIcon}>🎁</Text>
              <Text style={styles.quickActionText}>이벤트</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickActionBadge, styles.best]}>
              <Text style={styles.quickActionIcon}>⭐</Text>
              <Text style={styles.quickActionText}>베스트</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Banner Section with Enhanced Design */}
        <View style={styles.bannerSection}>
          <View style={styles.bannerContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              snapToInterval={containerWidth}
              decelerationRate="fast"
              snapToAlignment="center"
              onScroll={(event) => {
                const slideSize = event.nativeEvent.layoutMeasurement.width;
                const offset = event.nativeEvent.contentOffset.x;
                const index = Math.round(offset / slideSize);
                const safeIndex = Math.max(0, Math.min(index, banners.length - 1));
                setCurrentBannerIndex(safeIndex);
              }}
              scrollEventThrottle={200}
            >
              {banners.map((banner) => (
                <View key={banner.id} style={[styles.bannerSlide, { width: containerWidth }]}>
                  <View style={styles.bannerImageWrapper}>
                    <Image
                      source={banner.image}
                      style={styles.bannerImage}
                      resizeMode="cover"
                    />
                    {/* Gradient Overlay */}
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.3)']}
                      style={styles.bannerOverlay}
                    />
                  </View>
                </View>
              ))}
            </ScrollView>
            {/* Enhanced Banner Indicator */}
            <View style={styles.bannerIndicator}>
              <Text style={styles.bannerIndicatorText}>
                {currentBannerIndex + 1} / {banners.length}
              </Text>
            </View>
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderTitle}>카테고리</Text>
          <Text style={styles.sectionHeaderSubtitle}>원하는 카테고리를 선택하세요</Text>
        </View>

        {/* Enhanced Category Grid */}
        <View style={styles.categoriesContainer}>
          {MAIN_CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[category.color + '20', category.color + '10']}
                style={styles.categoryGradient}
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
              </LinearGradient>
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
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    paddingBottom: 90,
  },
  // Top Navigation Bar with Gradient
  topNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    fontFamily: 'NotoSansKR_900Black',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 20,
  },
  // Promotional Banner
  promoBanner: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#FF8C00',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  promoBannerGradient: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  promoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoTextSection: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B00',
    marginBottom: 4,
    fontFamily: 'NotoSansKR_700Bold',
  },
  promoSubtitle: {
    fontSize: 13,
    color: '#FF8C00',
    fontWeight: '500',
    fontFamily: 'NotoSansKR_500Medium',
  },
  promoButton: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#FF6B00',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  promoButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'NotoSansKR_700Bold',
  },
  // Quick Action Bar
  quickActionBar: {
    marginBottom: 8,
  },
  quickActionContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  quickActionBadge: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  hotDeal: {
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#FFE0E0',
  },
  special: {
    backgroundColor: '#FFF9EB',
    borderWidth: 1,
    borderColor: '#FFE8B8',
  },
  event: {
    backgroundColor: '#F0F9FF',
    borderWidth: 1,
    borderColor: '#D0E8FF',
  },
  best: {
    backgroundColor: '#FFF5EC',
    borderWidth: 1,
    borderColor: '#FFE4CC',
  },
  quickActionIcon: {
    fontSize: 18,
  },
  quickActionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'NotoSansKR_700Bold',
  },
  // Banner Section
  bannerSection: {
    marginTop: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  bannerContainer: {
    width: containerWidth,
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  bannerSlide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImageWrapper: {
    width: containerWidth,
    height: 240,
    position: 'relative',
  },
  bannerImage: {
    width: containerWidth,
    height: 240,
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  bannerIndicator: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  bannerIndicatorText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: 'NotoSansKR_700Bold',
  },
  // Section Header
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
    fontFamily: 'NotoSansKR_900Black',
  },
  sectionHeaderSubtitle: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
    fontFamily: 'NotoSansKR_400Regular',
  },
  // Enhanced Categories
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  categoryCard: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  categoryGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  categoryIcon: {
    fontSize: 34,
  },
  categoryName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2C2C2C',
    textAlign: 'center',
    letterSpacing: -0.3,
    fontFamily: 'NotoSansKR_700Bold',
  },
  // Bottom Section
  bottomSection: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A1A1A',
    letterSpacing: -0.5,
    fontFamily: 'NotoSansKR_900Black',
  },
  placeholder: {
    backgroundColor: '#FFFFFF',
    padding: 50,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 15,
    color: '#999',
    fontWeight: '500',
    fontFamily: 'NotoSansKR_500Medium',
  },
});

