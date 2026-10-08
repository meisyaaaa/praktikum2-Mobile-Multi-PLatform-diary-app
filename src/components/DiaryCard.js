import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodImage, moodType }) {
  const getBorderStyle = () => {
    switch (moodType) {
      case 'calm':
        return { borderColor: '#10b981', borderWidth: 2 };
      case 'excited':
        return { borderColor: '#00d7f4', borderWidth: 2 };
      case 'focus':
        return { borderColor: '#8b5cf6', borderWidth: 2 }; 
      case 'setres':
        return { borderColor: '#f59e0b', borderWidth: 2 };
      case 'relaxed':
        return { borderColor: '#ec4899', borderWidth: 2 }; 
      default:
        return { borderColor: '#e5e7eb', borderWidth: 1 };
    }
  };

  return (
    <View style={[styles.card, getBorderStyle()]}>
      <Image
        source={typeof moodImage === 'string' ? { uri: moodImage } : moodImage}
        style={styles.mood}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});