// screens/AppBar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AppBar() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.appBar}>
        <View style={styles.left}>
          <Ionicons name="car-sport" size={24} color="#fff" />
          <Text style={styles.title}>MyCar Dashboard</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { backgroundColor: '#0A84FF' },
  appBar: {
    height: 56,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  title: { color: '#fff', fontSize: 18, fontWeight: '700', marginLeft: 8 },
  right: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { marginLeft: 12 },
});
