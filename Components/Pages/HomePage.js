import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Style/Stylesheet';
import ListItem from '../Tools/customListItem';
import AddButton from '../Tools/addButton';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Anasayfa',
      headerTitleStyle: styles.topBarText,
      headerTransparent: true,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" style={styles.topBarIcon}></Icon>
        </TouchableOpacity>
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
      <LinearGradient colors={['#56CCF2', '#2F80ED']} style={styles.container}>
        <View style={styles.explanationTitleTextView}>
          <Text style={styles.explanationTitleText}>Panolarım</Text>
        </View>

        <View style={styles.ListContainer}>
          <FlatList
            data={[{key: 'Ev'}, {key: 'Piknik'}, {key: 'Halı saha'}]}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigate('Board')}>
                <ListItem title={item.key} />
              </TouchableOpacity>
            )}
          />
        </View>
        <AddButton
          navigation={this.props.navigation}
          navigateTo="ExpenseBoardCreate"
        />
      </LinearGradient>
    );
  }
}
