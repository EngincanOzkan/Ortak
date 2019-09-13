import React, {Component} from 'react';
import {Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from '../Style/Stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListItem from '../Tools/customListItem';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Anasayfa',
      headerRight: (
        <Icon.Button
          name="cog"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Settings')}></Icon.Button>
      ),
      headerLeft: null,
    };
  };

  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.explanationTitleText}>Panolorınız</Text>
        <View style={styles.ListContainer}>
          <FlatList
            data={[{key: 'Devin'}, {key: 'Dan'}, {key: 'Dominic'}]}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigate('Board')}>
                <ListItem title={item.key} />
              </TouchableOpacity>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigate('ExpenseBoardCreate')}
          style={styles.circleButton}>
          <Icon
            name="plus-circle"
            backgroundColor="#fff"
            title="plus"
            color="#000"
            size={70}></Icon>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'lightgray',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
          <View
            style={{
              flex: 0.7,
              height: 20,
              backgroundColor: '#e74c3c',
            }}
          />
          <View style={{flex: 1 - 0.7}} />
        </View>
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
    padding: 6,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    alignSelf: 'stretch',
    marginBottom: 2,
    flex: 2,
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
  marka: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 5,
    color: '#e74c3c',
  },
  registerLink: {
    color: '#3498db',
  },
  explanationView: {
    flex: 1,
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
});*/
