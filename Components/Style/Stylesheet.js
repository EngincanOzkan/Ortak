import react, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2980b9',
    padding: 6,
    alignSelf: 'stretch',
    marginTop: 4,
    marginHorizontal: 15,
    marginBottom: 4,
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
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  //button buttona değil, buttonun parenti olan viewa eklenmeli button style propsuna sahip değil
  //sadece onay olan yerlerde aktif edin
  button: {
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  ListContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemGoArrowIcon: {
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
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 5,
    color: '#e74c3c',
  },
  registerLink: {
    color: '#3498db',
  },
});

export default styles;
