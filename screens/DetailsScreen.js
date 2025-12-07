// screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  const car = route?.params?.car ?? {
    id: 'CAR-001',
    model: 'Renegade EV',
    year: 2024,
    vin: 'VF1EXAMPLE1234567',
    color: 'Blanc perle',
    lastServiceKm: 11232,
    nextServiceInKm: 1200,
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="chevron-back" size={22} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Détails — {car.model}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Modèle</Text>
        <Text style={styles.value}>{car.model} • {car.year}</Text>

        <Text style={styles.label}>VIN</Text>
        <Text style={styles.value}>{car.vin}</Text>

        <Text style={styles.label}>Couleur</Text>
        <Text style={styles.value}>{car.color}</Text>

        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>Dernier entretien</Text>
            <Text style={styles.boxValue}>{car.lastServiceKm} km</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>Prochain service</Text>
            <Text style={styles.boxValue}>{car.nextServiceInKm} km</Text>
          </View>
        </View>

        <Text style={[styles.label, { marginTop: 12 }]}>Historique rapide</Text>
        <View style={styles.history}>
          <Text style={styles.histLine}>• 2025-02-10 — Vidange & filtres</Text>
          <Text style={styles.histLine}>• 2024-11-01 — Pneus avant remplacés</Text>
        </View>

        <Text style={[styles.label, { marginTop: 12 }]}>Notes</Text>
        <Text style={styles.value}>Contrôles recommandés : freins, suspension (prochain RDV)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 12, paddingBottom: 40 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  back: { marginRight: 8 },
  screenTitle: { fontSize: 18, fontWeight: '800' },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    elevation: 2,
  },
  label: { color: '#666', fontSize: 13, marginTop: 8 },
  value: { fontSize: 16, fontWeight: '700', marginTop: 4 },
  row: { flexDirection: 'row', marginTop: 12, justifyContent: 'space-between' },
  box: { flex: 1, backgroundColor: '#f3f6ff', padding: 10, borderRadius: 8, marginRight: 8 },
  boxLabel: { color: '#555', fontSize: 12 },
  boxValue: { fontSize: 16, fontWeight: '800', marginTop: 6 },
  history: { marginTop: 8 },
  histLine: { color: '#444', marginTop: 6 },
});
