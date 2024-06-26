
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Language</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>My Profile</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Contact Us</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Change Password</Text>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Privacy Policy</Text>
      </View>
      <View style={styles.themeContainer}>
        <Text style={styles.themeText}>Theme</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
