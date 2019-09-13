import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style/Stylesheet';
import ListItem from '../Tools/customListItem';

export default class AddExpenseToBoard extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Kullanıcılar',
      headerLeft: (
        <Button
          title="Vazgeç"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('ExpenseBoardCreate')}
        />
      ),
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>
            Gider panonuza ortak olan kullanıcıları(Ev arkadaşınız, halı saha
            tayfası, particiler) ad ve ya eposta adreslerini kullanarak arayıp,
            panoya ekleyebilirsin.
          </Text>
        </View>
        <TextInput
          placeholder="Kullanıcı Adı yada Eposta Adresi"
          style={styles.textInput}
        />
        <View style={styles.ListContainer}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <ListItem title={item.key} />}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigate('ExpenseBoardCreate')}
          style={styles.circleButton}>
          <Icon
            name="check-circle"
            backgroundColor="#fff"
            title="plus"
            color="#000"
            size={70}
            solid></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2980b9',
    padding: 6,
    alignSelf: 'stretch',
    marginHorizontal: 15,
    marginBottom: 4,
    marginTop: 4,
  },
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
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
});*/
