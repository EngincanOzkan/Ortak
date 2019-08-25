import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Image} from 'react-native';

export default class AddExpenseToBoard extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Gider Ekle',
      headerLeft: (
        <Button
          title="Vazgeç"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Board')}
        />
      ),
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>Seçilen Panonun Adı</Text>
        </View>
        <TextInput placeholder="Tutar (₺)" style={styles.textInput} />
        <TextInput
          placeholder="Harcama yapılan Gün (Sayı)"
          style={styles.textInput}
        />
        <TextInput placeholder="Açıklama" style={styles.textInput} />
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>
            Ekleme Yapıldıktan sonra pano totali: 0₺
          </Text>
        </View>
        <Button
          title="Gideri Ekle"
          style={styles.button}
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 6,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    alignSelf: 'stretch',
    marginBottom: 2,
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2980b9',
    padding: 6,
    alignSelf: 'stretch',
    marginHorizontal: 15,
    marginBottom: 4,
  },
  explanationView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  explanationText: {
    fontSize: 20,
    color: '#939393',
    textAlign: 'center',
  },
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
  },
});
