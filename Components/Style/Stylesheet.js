import react, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 72,
  },
  textInput: {
    fontFamily: 'Roboto',
    color: '#f5f7fa',
    fontSize: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 6,
    paddingLeft: 15,
    alignSelf: 'stretch',
    marginTop: 4,
    marginHorizontal: 15,
    marginBottom: 4,
  },
  textInputBoardName: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2980b9',
    padding: 6,
    alignSelf: 'stretch',
    marginTop: 4,
    marginHorizontal: 15,
    marginBottom: 4,
    fontSize: 20,
  },
  explanationView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  explanationText: {
    margin: 10,
    fontSize: 20,
    color: '#939393',
    textAlign: 'center',
  },
  explanationTitleText: {
    marginLeft: 30,
    textAlign: 'left',
    alignSelf: 'stretch',
    fontFamily: 'Satisfy',
    fontWeight: '600',
    fontSize: 32,
    color: '#c3cfe2',
  },
  explanationTitleTextView: {
    alignSelf: 'stretch',
    borderBottomWidth: 1.5,
    borderColor: '#fff',
    borderRadius: 10,
  },
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  //button buttona değil, buttonun parenti olan viewa eklenmeli button style propsuna sahip değil
  //sadece onay olan yerlerde aktif edin
  button: {
    fontFamily: 'Satisfy',
    color: '#764ba2',
    fontSize: 20,
  },
  circleButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 10,
    marginBottom: 25,
    zIndex: 2,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#000',
  },
  circleButtonUserAdd: {
    height: 50,
    width: 50,
    margin: 10,
    paddingLeft: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 50,
    zIndex: 2,
  },
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderBottomWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 30,
  },
  ItemText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 24,
    marginLeft: 12,
  },
  ItemExpenseTitle: {
    flex: 12,
    fontSize: 20,
    marginLeft: 10,
  },
  ItemExpenseAmount: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  ItemGoArrowIcon: {
    fontSize: 24,
    color: '#fff',
  },
  ItemGoArrowIconView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
    padding: 5,
  },
  marka: {
    fontFamily: 'Satisfy',
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 5,
    color: '#c3cfe2',
  },
  registerLink: {
    color: '#3498db',
  },
  textStyle: {
    fontFamily: 'Roboto',
    color: '#f5f7fa',
    fontSize: 20,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 40,
    borderWidth: 0,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  profileImageSettings: {
    width: 150,
    height: 150,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 40,
    borderWidth: 0,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  topBarIcon: {
    fontSize: 30,
    color: '#f5f7fa',
    marginTop: 7,
    marginLeft: 12,
    marginRight: 12,
  },
  topBarText: {
    fontFamily: 'Satisfy',
    color: '#f5f7fa',
    fontSize: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  circleButtonIcon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    color: '#f5f7fa',
    fontSize: 70,
  },
  animatedTextInputsView: {
    width: '90%',
    marginBottom: 10,
  },
  sendControlContainerOuter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sendControlContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  styleOfChangeItem: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 10,
    marginBottom: 25,
    zIndex: 2,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    color: '#f5f7fa',
    fontSize: 30,
  },
});

export default styles;
