import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomDraw = (props) => {

    return (
        <SafeAreaView style={{flex: 1}}>
        {/*Top Large Image */}
        {/* <Image
          source={{uri: BASE_PATH + proileImage}}
          style={styles.sideMenuProfileIcon}
        /> */}
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Visit Us"
            style = {{color : 'red'}}
            onPress={() => Linking.openURL('https://aboutreact.com/')}
          />
          <View style={styles.customItem}>
            <Text
              onPress={() => {
                Linking.openURL('https://aboutreact.com/');
              }}>
              Rate Us
            </Text>
            {/* <Image
              source={{uri: BASE_PATH + 'star_filled.png'}}
              style={styles.iconStyle}
            /> */}
          </View>
        </DrawerContentScrollView>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    customItem: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor : 'red'
    },
  });

export default CustomDraw;