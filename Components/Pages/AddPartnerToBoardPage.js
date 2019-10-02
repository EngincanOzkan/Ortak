import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Style/Stylesheet';
import ListItem from '../Tools/customListItem';
import GoBackButton from '../Tools/goBackButton';
import TextInputStylish from '../Tools/textInputStylish';
import CheckButton from '../Tools/checkButton';

export default class AddExpenseToBoard extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Kullanıcılar',
      headerTitleStyle: styles.topBarText,
      headerTransparent: true,
      headerRight: null,
      headerLeft: <GoBackButton navigation={navigation} />,
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <LinearGradient colors={['#56CCF2', '#2F80ED']} style={styles.container}>
        <View style={styles.explanationView}>
          <Text style={styles.explanationText}>
            Gider panonuza ortak olan kullanıcıları ad ve ya eposta adreslerini
            kullanarak arayıp, panoya ekleyebilirsin.
          </Text>
        </View>
        <TextInputStylish placeholder="Ad veya eposta ile ara..." />
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
        <CheckButton
          navigation={this.props.navigation}
          navigateTo="ExpenseBoardCreate"
        />
      </LinearGradient>
    );
  }
}
