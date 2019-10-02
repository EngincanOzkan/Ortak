import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Swipeout from 'react-native-swipeout';
import ListItem from '../Tools/customListExpense';
import styles from '../Style/Stylesheet';
import ProcessBar from '../Tools/ProcessBar';
import GoBackButton from '../Tools/goBackButton';
import AddButton from '../Tools/addButton';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Pano',
      headerTitleStyle: styles.topBarText,
      headerTransparent: true,
      headerRight: null,
      headerLeft: <GoBackButton navigation={navigation} />,
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
      <LinearGradient colors={['#56CCF2', '#2F80ED']} style={styles.container}>
        <Text style={styles.textStyle}>Toplam Gider: 2000₺</Text>
        <Text style={styles.textStyle}>Kişi Başına Düşen Miktar: 200₺</Text>
        <Text style={styles.textStyle}>Ödemeniz Gereken Mikatar 180₺</Text>
        <Text style={styles.explanationTitleText}>Ortaklar</Text>
        <LinearGradient colors={['#ffffff', '#ECE9E6']} style={styles.swiper}>
          <ScrollView
            style={styles.partnerListView}
            contentContainerStyle={{flexGrow: 1}}
            horizontal={true}>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
            <View style={styles.partnersProfileImageContainerView}>
              <Image
                source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.partnersProfileImage}
              />
            </View>
          </ScrollView>
        </LinearGradient>
        <View style={styles.explanationTitleTextView}>
          <Text style={styles.explanationTitleText}>Giderler</Text>
        </View>
        <View style={styles.ListContainer}>
          <FlatList
            data={[
              {title: 'Kira', amount: '300', paid: false},
              {title: 'Su faturası', amount: '300', paid: false},
              {title: 'Doğalgaz', amount: '400', paid: true},
              {title: 'Elektrik', amount: '50', paid: true},
              {title: 'Market', amount: '500', paid: false},
              {title: 'Geçenki Parti', amount: '700', paid: false},
              {title: 'Aburcubur', amount: '10', paid: false},
              {
                title: 'Türknet ADSL ve Telefon Internet Faturası',
                amount: '150',
                paid: false,
              },
            ]}
            renderItem={({item}) => (
              <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                backgroundColor="transparent">
                <ListItem
                  title={item.title}
                  amount={item.amount + '₺'}
                  paid={item.paid}
                />
              </Swipeout>
            )}
          />
        </View>
        <AddButton
          navigation={this.props.navigation}
          navigateTo="AddExpenseToBoard"
        />
        <ProcessBar percent={0.7} />
      </LinearGradient>
    );
  }
}
