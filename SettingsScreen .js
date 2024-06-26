import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const themeStyles = isEnabled ? darkModeStyles : lightModeStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.title, themeStyles.text]}>Settings</Text>
      <View style={styles.option}>
        <Text style={[styles.optionText, themeStyles.text]}>Language</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, themeStyles.text]}>My Profile</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, themeStyles.text]}>Contact Us</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, themeStyles.text]}>Change Password</Text>
      </View>
      <View style={styles.option}>
        <Text style={[styles.optionText, themeStyles.text]}>Privacy Policy</Text>
      </View>
      <View style={styles.themeContainer}>
        <Text style={[styles.themeText, themeStyles.text]}>Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const lightModeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
});

const darkModeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  themeContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  themeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
