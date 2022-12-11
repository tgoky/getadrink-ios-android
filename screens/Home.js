import { Header } from '@react-navigation/stack';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';




import { SafeAreaView } from 'react-native-safe-area-context'

import {HeaderBar} from "../components/HeaderBar";
import { COLORS, SIZES, constants, icons, FONTS, images, dummyData } from '../constants';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <HeaderBar />

          <ScrollView
          style={{
            flex: 1,
            marginTop: -25,
            borderTopLeftRadius: SIZES.radius * 2,
            borderTopRightRadius: SIZES.radius * 2,
            backgroundColor: COLORS.secondary
          }}>

          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})

export default Home;