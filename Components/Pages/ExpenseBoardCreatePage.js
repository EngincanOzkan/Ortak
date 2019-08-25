import React, {Component} from 'react';
import {View, TextInput, FlatList, Button} from 'react-native';
import styles from '../Style/Stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from '../Tools/customListItem';

export default class ExpenseBoardCreate extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Gider Panosu Oluştur',
      headerLeft: (
        <Icon.Button
          name="chevron-left"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Home')}></Icon.Button>
      ),
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput placeholder="Pano Adı" style={styles.textInput} />
        <Button
          title="Giderlere Ortak Ekle"
          style={styles.button}
          onPress={() => navigate('AddPartnerToBoard')}
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
        <View style={styles.button}>
          <Button
            title="Panoyu Oluştur"
            color="#fff"
            onPress={() => navigate('Home')}
          />
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
});*/
