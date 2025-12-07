// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [carName, setCarName] = useState("Renegade EV");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙ Paramètres du véhicule</Text>

      {/* Notification */}
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={notificationsEnabled ? "#007AFF" : "#ccc"}
        />
      </View>

      {/* Car name */}
      <View style={{ marginTop: 22 }}>
        <Text style={styles.label}>Nom du véhicule</Text>
        <TextInput
          style={styles.input}
          value={carName}
          onChangeText={setCarName}
          placeholder="Ex: Mustang GT"
        />
      </View>

      {/* Possibilité de sauvegarder plus tard avec AsyncStorage */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  label: { fontSize: 16, color: '#444' },
  input: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});
