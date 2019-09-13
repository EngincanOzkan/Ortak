import React, {Component} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
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
        <Button
          title="Vazgeç"
          backgroundColor="rgba(0, 0, 0, 0.0)"
          color="#000000"
          onPress={() => navigation.navigate('Home')}
        />
      ),
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput placeholder="Pano Adı" style={styles.textInputBoardName} />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text style={styles.explanationText}>Panoya Ortak Ekle</Text>
          <TouchableOpacity
            onPress={() => navigate('AddPartnerToBoard')}
            style={styles.circleButtonUserAdd}>
            <Icon
              name="user-plus"
              backgroundColor="#fff"
              title="plus"
              color="#fff"
              size={30}></Icon>
          </TouchableOpacity>
        </View>
        <Text style={styles.explanationTitleText}>Ortaklar</Text>
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
          onPress={() => navigate('Home')}
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
});*/
