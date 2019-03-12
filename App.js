import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'

import CardYounes from './components/CardYounes'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView 
        contentContainerStyle={styles.container}
      >
        {/* goes here a card component for images */}
        <CardYounes 
          dogName={'Milou'} 
          imageUri={require('./assets/dog.jpg')} 
          avatarUri={require('./assets/dog.jpg')}
        /><CardYounes 
          dogName={'Tom'} 
          imageUri={require('./assets/cat.jpeg')} 
          avatarUri={require('./assets/cat.jpeg')}
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
  }
})