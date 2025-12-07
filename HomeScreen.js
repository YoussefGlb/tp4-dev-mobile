// screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/*
  Version simplifiée du dashboard :
  - Température moteur
  - Dernier trajet
  - Odomètre
  - Entretien à prévoir
  - Jauge d'essence (pourcentage)
  - Bouton DÉTAILS (navigate vers Details)
*/

const mockCar = {
  id: 'CAR-001',
  model: 'Renegade EV',
  year: 2024,
  fuelPercent: 62,
  odometer: 12432,
  engineTemp: 88,
  lastTrip: { km: 12.4, avgSpeed: 58, durationMin: 13 },
  nextServiceInKm: 1200,
};

export default function HomeScreen({ navigation }) {
  const [car] = useState(mockCar);
  const fuelWidth = `${car.fuelPercent}%`;

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>

        {/* --- HEADER / Title --- */}
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard • {car.model}</Text>
          <Text style={styles.subtitle}>Vue générale</Text>
        </View>

        {/* --- ODOMÈTRE --- */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Odomètre</Text>
          <Text style={styles.cardValue}>{car.odometer} km</Text>
        </View>

        {/* --- TEMPÉRATURE MOTEUR --- */}
        <View style={styles.cardRow}>
          <View style={[styles.smallCard, { flex: 1 }]}>
            <Text style={styles.smallLabel}>Temp. moteur</Text>
            <Text style={styles.largeValue}>{car.engineTemp} °C</Text>
            <Text style={styles.smallNote}>Normale : 70–95 °C</Text>
          </View>

          {/* --- JAUgE ESSENCE --- */}
          <View style={[styles.smallCard, { width: 150, marginLeft: 10 }]}>
            <Text style={styles.smallLabel}>Essence</Text>
            <View style={styles.gauge}>
              <View style={[styles.gaugeFill, { width: fuelWidth }]} />
            </View>
            <Text style={styles.fuelPct}>{car.fuelPercent}%</Text>
          </View>
        </View>

        {/* --- DERNIER TRAJET --- */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Dernier trajet</Text>
          <Text style={styles.cardValue}>{car.lastTrip.km} km</Text>
          <Text style={styles.cardSub}>
            Moyenne: {car.lastTrip.avgSpeed} km/h • {car.lastTrip.durationMin} min
          </Text>
        </View>

        {/* --- ENTRETIEN A PREVOIR --- */}
        <View style={styles.maintenanceCard}>
          <Text style={styles.maintenanceTitle}>Entretien à prévoir</Text>

          <View style={styles.maintRow}>
            <View style={styles.dot} />
            <Text style={styles.maintText}>Vidange — dans {car.nextServiceInKm} km</Text>
          </View>

          <View style={styles.maintRow}>
            <View style={[styles.dot, { backgroundColor: '#FFAA00' }]} />
            <Text style={styles.maintText}>Contrôle freins — recommandé</Text>
          </View>
        </View>

        {/* --- BUTTON DETAILS --- */}
        <View style={styles.controlsRow}>
          <TouchableOpacity
            style={styles.detailBtn}
            onPress={() => navigation.navigate('Details', { car })}
          >
            <Ionicons name="information-circle-outline" size={20} color="#fff" />
            <Text style={styles.detailText}>Détails</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingVertical: 12 },
  container: { paddingHorizontal: 14, paddingBottom: 40 },

  header: { marginBottom: 14 },
  title: { fontSize: 18, fontWeight: '800' },
  subtitle: { color: '#666', marginTop: 4 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  cardLabel: { color: '#666', fontSize: 13 },
  cardValue: { fontSize: 22, fontWeight: '800', marginTop: 8 },
  cardSub: { color: '#666', marginTop: 6 },

  cardRow: { flexDirection: 'row', marginBottom: 12 },

  smallCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    alignItems: 'flex-start',
  },
  smallLabel: { color: '#666', fontSize: 13 },
  largeValue: { fontSize: 20, fontWeight: '800', marginTop: 8 },
  smallNote: { color: '#666', marginTop: 6 },

  gauge: {
    height: 10,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  },
  gaugeFill: { height: '100%', backgroundColor: '#0A84FF' },
  fuelPct: { marginTop: 8, fontWeight: '700' },

  maintenanceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    marginBottom: 18,
  },
  maintenanceTitle: { fontWeight: '800', fontSize: 16, marginBottom: 8 },
  maintRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  dot: { width: 10, height: 10, borderRadius: 6, backgroundColor: '#28A745', marginRight: 10 },
  maintText: { color: '#333' },

  controlsRow: { alignItems: 'center', marginTop: 6 },
  detailBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
    elevation: 3,
  },
  detailText: { color: '#fff', fontWeight: '700', marginLeft: 8 },
});
