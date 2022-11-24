import React from 'react';
import {StyleSheet, SafeAreaView, View, FlatList, Image} from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import Topo from './source/telas/Topo'; 
import Item from './source/telas/Item';
import Mocks from './source/mocks/placa';
import Monitoramento from './source/telas/Monitoramento';
import Texto from './source/components/Texto';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={Mocks.itens.placa}
          renderItem={Item}
          keyExtractor={({nome})=>nome}
          ListHeaderComponent={
            () => {
              return <>
                <Topo {...Mocks.topo}/>
                <Monitoramento {...Mocks.monitoramento}/>

                <Texto style={styles.titulo}> 
                  {Mocks.itens.titulo}
                </Texto>
                <Image style={styles.placa} source={Mocks.itens.imagem}/>
              </>
            }
          }
          ListFooterComponent={
            ()=> {
              return <>
                <FlatList
                    data={Mocks.desenho.tecnico}
                    renderItem={Item}
                    keyExtractor={({nome})=>nome}
                    ListHeaderComponent={
                      () => {
                        return <>
                          <Texto style={styles.titulo}>
                            {Mocks.desenho.titulo}
                          </Texto>
                        </>
                      }
                    }
                />
              </>
            }
          }
        />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    width: "100%",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 50,
    color: "#0fc7be",
    textAlign: "center"
  },
  placa: {
    width: 300,
    height: 140,
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 20
  }
});