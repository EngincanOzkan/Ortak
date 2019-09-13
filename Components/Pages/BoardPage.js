import React, {Component} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style/Stylesheet';
import ListItem from '../Tools/customListExpense';
import Swipeout from 'react-native-swipeout';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Pano',
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
    var swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        onPress: () => navigate('Home'),
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.explanationTitleText}>Giderler</Text>
        <Text style={styles.explanationText}>Toplam Gider: 2000₺</Text>
        <View style={styles.ListContainer}>
          <FlatList
            data={[
              {title: 'Kira', amount: '300'},
              {title: 'Su faturası', amount: '300'},
              {title: 'Doğalgaz', amount: '400'},
              {title: 'Elektrik', amount: '50'},
              {title: 'Market', amount: '500'},
              {title: 'Geçenki Parti', amount: '700'},
              {title: 'Aburcubur', amount: '10'},
              {
                title: 'Türknet ADSL ve Telefon Internet Faturası',
                amount: '150',
              },
            ]}
            renderItem={({item}) => (
              <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                backgroundColor="transparent">
                <ListItem title={item.title} amount={item.amount + '₺'} />
              </Swipeout>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigate('AddExpenseToBoard')}
          style={styles.circleButton}>
          <Icon
            name="plus-circle"
            backgroundColor="#fff"
            title="plus"
            color="#000"
            size={70}
            solid></Icon>
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
