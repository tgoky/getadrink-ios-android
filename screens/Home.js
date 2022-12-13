import { Header } from '@react-navigation/stack';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';




import { SafeAreaView } from 'react-native-safe-area-context'


import {HeaderBar} from "../components/HeaderBar";
import { COLORS, SIZES, constants, icons, FONTS, images, dummyData } from '../constants';

export const Home = ({ navigation }) => {


    function renderAvailableRewards() {
        return (
            <TouchableOpacity
            style={{
                flexDirection: 'row',
                marginTop: 17,
                height: 100
            }}
            onPress={() => navigation.navigate("Rewards")}
            >
                {/* Reward cup */}

              <View 
              style={{
                width: 100,
                height: "100%",
                alignItems:'center',
                justifyContent: 'center',
                backgroundColor: COLORS.pink,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
               marginLeft: 14
              }}
              >
                 <ImageBackground
                 source={icons.reward_cup}
                 resizeMode="contain"
                 style={{
                    width: 85,
                    height: 85,
                    marginLeft: 3,
                    alignItems: 'center',
                    justifyContent: 'center'
                 }}
                 >
                    <View 
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.transparentBlack
                    }}
                    >
                        <Text style={{color: COLORS.white, ...FONTS.h2}}>280</Text>
                    </View>

                 </ImageBackground>
              </View>

              <View 
              style={{
                flex: 1,
                backgroundColor: COLORS.lightPink,
                marginLeft: -10,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center"
              }}
              >
                <Text style={{ color: COLORS.primary, ...FONTS.h2, fontSize: 20, fontWeight:'bold'}}>
                    Available Rewards
                </Text>

                <View 
                style={{
                    marginTop: 5,
                    padding: SIZES.base,
                    borderRadius: SIZES.radius * 2,
                    backgroundColor: COLORS.primary
                }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h2}}>
                        150 points - $2.50 off
                    </Text>
                </View>
              </View>

            </TouchableOpacity>
        )
    }

    // function renderPromoDeals() {
    //     return (
    //         <View 
    //         style={{
    //             flex: 1,
    //             alignItems: 'center',
    //         }}
    //         >
    //             {/* Header - tabs */}
    //             <Tabs
    //         </View>
    //     )
    // }

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
          }}
             contentContainerStyle={{
                paddingBottom: 150
             }}
          >
            {renderAvailableRewards()}
            
    
           
   
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