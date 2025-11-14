import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    // 애니메이션 시작
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // 2.5초 후 메인 화면으로 이동
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        {/* 상단 텍스트 */}
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>대한민국</Text>
          <Text style={styles.topSubtext}>반려동물 통합 플랫폼</Text>
        </View>

        {/* 중앙 타이틀 */}
        <View style={styles.titleContainer}>
          <View style={styles.pawIconsContainer}>
            <Text style={styles.pawIcon}>🐾</Text>
            <Text style={styles.pawIcon}>🐾</Text>
          </View>
          <Text style={styles.mainTitle}>애들이랑</Text>
        </View>

        {/* 반려동물 이미지 */}
        <Animated.View
          style={[
            styles.petsContainer,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Image
            source={require('../assets/dog.png')}
            style={styles.dogImage}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/cat.png')}
            style={styles.catImage}
            resizeMode="contain"
          />
        </Animated.View>

        {/* 하단 로딩 텍스트 */}
        <Text style={styles.loadingText}>Loading...</Text>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 60,
  },
  topTextContainer: {
    alignItems: 'center',
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: 2,
  },
  topSubtext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: -10,
  },
  pawIconsContainer: {
    flexDirection: 'row',
    gap: 120,
    marginBottom: 4,
  },
  pawIcon: {
    fontSize: 40,
  },
  mainTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#2C2C2C',
    letterSpacing: 4,
  },
  petsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  dogImage: {
    width: 160,
    height: 160,
  },
  catImage: {
    width: 230,
    height: 230,
  },
  loadingText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2C2C2C',
  },
});

