import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'

import CardYounes from './components/CardYounes'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView 
        style={{ flex: 1, backgroundColor: '#fff2' }} 
        contentContainerStyle={styles.container}
      >
        {/* goes here a card component for images */}
        <CardYounes 
          dogName={'Milou'} 
          imageUri={require('./assets/dog.jpg')} 
          avatarUri={require('./assets/dog.jpg')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff2',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
  }
})