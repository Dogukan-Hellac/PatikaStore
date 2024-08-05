import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from './data/data.json';
import ListItem from './components/ListItem';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>PATIKASTORE</Text>
        <TextInput
          style={styles.input}
          placeholder='Ara...'
        />
      </View>
      <View style={styles.Wrapper}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}

          renderItem={({ item }) => {
            return (
              <ListItem imgURL={item.imgURL} title={item.title} price={item.price} inStock={item.inStock}/>
            )
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
  },
  input: {
    backgroundColor: '#dcdcdc',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10
  },
  text: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 25,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Wrapper: {

  },
});
