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
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../Tools/customListItem';
import GoBackButton from '../Tools/goBackButton';
import TextInputStylish from '../Tools/textInputStylish';
import CheckButton from '../Tools/checkButton';
import AddUserToBoardButton from '../Tools/addUserToBoardButton';

export default class ExpenseBoardCreate extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Pano Yarat',
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text style={styles.explanationText}>Panoya ortak eklemek için:</Text>
          <AddUserToBoardButton
            navigation={this.props.navigation}
            navigateTo="AddPartnerToBoard"
          />
        </View>
        <View style={styles.explanationTitleTextView}>
          <Text style={styles.explanationTitleText}>Ortaklar</Text>
        </View>
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
        <CheckButton navigation={this.props.navigation} navigateTo="Home" />
        <TextInputStylish placeholder="Pano adı giriniz" />
      </LinearGradient>
    );
  }
}
