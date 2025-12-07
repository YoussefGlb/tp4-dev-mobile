import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

// URL de l'image de substitution (Placeholder pour l'image de l'étudiant)
// Vous pouvez remplacer cette URL par l'URL de votre propre photo ou une image locale dans Expo.
const PLACEHOLDER_IMAGE = 'https://media.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg';

// Données de l'étudiant
const studentData = {
  nom: 'Ghalab',
  prenom: 'Youssef',
  classe: '2ème année Cycle d\'Ingénieur',
  anneeScolaire: '2025-2026',
  universite: 'Université internationale de casablanca',
  codeId: 'A-2024-4589',
};

// Composant principal de l'application
export default function App() {
  // Calcule l'année d'expiration pour le pied de page (Ex: 2025-2026 -> 2026)
  const expirationYear = parseInt(studentData.anneeScolaire.split('-')[1], 10);

  return (
    <View style={styles.container}>
      {/* Barre d'état en blanc pour mieux contraster avec l'arrière-plan bleu */}
      <StatusBar style="light" />

      {/* Carte Étudiante */}
      <View style={styles.card}>

        {/* En-tête de l'Université (Bandeau bleu principal) */}
        <View style={styles.header}>
          <Text style={styles.universityName}>{studentData.universite}</Text>
        </View>

        {/* Corps de la carte : Photo et Informations */}
        <View style={styles.body}>
          
          {/* Section Photo et ID */}
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: PLACEHOLDER_IMAGE }}
              style={styles.studentImage}
            />
            <Text style={styles.idCodeLabel}>CODE ID</Text>
            <Text style={styles.idCodeValue}>{studentData.codeId}</Text>
          </View>

          {/* Section Informations textuelles */}
          <View style={styles.infoContainer}>
            
            {/* Nom & Prénom */}
            <Text style={styles.label}>Nom & Prénom</Text>
            <Text style={styles.value}>{studentData.prenom} {studentData.nom}</Text>
            
            {/* Classe */}
            <Text style={styles.label}>Classe / Programme</Text>
            <Text style={[styles.value, styles.classValue]}>{studentData.classe}</Text>
            
            {/* Année Scolaire */}
            <Text style={styles.label}>Année Scolaire</Text>
            <Text style={styles.value}>{studentData.anneeScolaire}</Text>
            
          </View>
        </View>
        
        {/* Pied de page */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Carte d'étudiant - Valide jusqu'au 31/08/{expirationYear}
          </Text>
        </View>

      </View>
    </View>
  );
}

// Définition des styles
const styles = StyleSheet.create({
  // Conteneur principal (prend tout l'écran)
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A', // Bleu foncé pour l'arrière-plan de l'écran
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  // Style de la carte
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 15, // Ombre pour Android
  },
  
  // En-tête (bandeau bleu)
  header: {
    backgroundColor: '#2563EB', // Un bleu standard et vif
    padding: 20,
    alignItems: 'center',
  },
  universityName: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  
  // Corps de la carte (Photo et Infos)
  body: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  
  // Conteneur de la photo et ID
  photoContainer: {
    alignItems: 'center',
    marginRight: 20,
    width: 100, 
  },
  studentImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Image circulaire
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#2563EB',
  },
  idCodeLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  idCodeValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
  },
  
  // Conteneur des informations textuelles
  infoContainer: {
    flex: 1, // Prend l'espace restant
  },
  
  // Styles génériques pour les labels et les valeurs
  label: {
    fontSize: 12,
    color: '#6B7280', // Gris discret
    marginTop: 8,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#1F2937', // Texte foncé
    fontWeight: '600',
    marginBottom: 4,
  },
  classValue: {
    fontSize: 17,
    fontWeight: '800', // Plus important
    color: '#2563EB', // Couleur bleue
  },

  // Pied de page
  footer: {
    backgroundColor: '#DBEAFE', // Bleu très clair
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#1E40AF',
    fontWeight: '500',
  },
});
