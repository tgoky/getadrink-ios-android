import { Header } from '@react-navigation/stack';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Animated,
    Image
} from 'react-native';




import { SafeAreaView } from 'react-native-safe-area-context'


import {HeaderBar, CustomButton } from "../components/Index";
import { COLORS, SIZES, constants, icons, FONTS, images, dummyData } from '../constants';


const promoTabs = constants.promoTabs

const TabIndicator = ({}) => {
    return (
        <View 
        style={{
            position: 'absolute',
            height: "100%",
            width: 100,
            left: 0,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary
        }}
        />
    )
}

const Tabs = () => {
    return (
    <View
    style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.padding,
        backgroundColor: COLORS.purple,
        borderRadius: SIZES.radius
    }}
    >

{/* tab indicator */}
<TabIndicator />

{/* tabs */}
{promoTabs.map((item, index) => {
    return (
        <TouchableOpacity
        key={`PromoTab-${index}`}
        onpress={() => console.log(item)}
        >
            <View
            style={{
                paddingHorizontal: 11.5,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40
            }}>
                <Text style={{color: COLORS.white, ...FONTS.
                h3}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
})}
    </View>
    )
}



export const Home = ({ navigation }) => {


    const scrollX = React.useRef(new Animated.Value(0)).current;

    function renderAvailableRewards() {
        return (
            <TouchableOpacity
            style={{
                flexDirection: 'row',
                marginTop: 17,
                height: 100,
                width: 382,
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
                        <Text style={{color: COLORS.white, ...FONTS.h2}}>28</Text>
                    </View>

                 </ImageBackground>
              </View>

              <View 
              style={{
                flex: 1,
                backgroundColor: COLORS.lightPink,
                marginLeft: -10,
                width: 500,
                borderRadius: 15,
                borderBottomRightRadius: 32,
                borderTopEndRadius: 34,
                borderEndWidth: 13,
                borderBottomEndRadius: 34,
                borderColor: COLORS.lightPink,
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
                    left: 5,
                    borderRadius: SIZES.radius * 2,
                    backgroundColor: COLORS.primary
                }}>
                    <Text style={{ color: COLORS.white, fontFamily: "Copperplate-Bold", fontSize: 15.3, lineHeight: 30}}>
                       Claim $Drinks ! - Redeem NFT
                    </Text>
                </View>
              </View>

            </TouchableOpacity>
        )
    }

    function renderPromoDeals() {
        return (
            <View 
            style={{
                flex: 1,
                alignItems: 'center',
            }}
            >
                {/* Header - tabs */}
                <Tabs />
                <Animated.FlatList
                data={dummyData.pixeldrink}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `$(item.id)`}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX}}}
                ], {
                    useNativeDriver: false
                })}
                renderItem={({item, index}) => {
                    return (
                    
                    <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        width: SIZES.width,
                        paddingTop: SIZES.padding
                    }}>
                        {/* Image */}
                        <Image
                        source={images.pixelDrinksOne}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            top: -170
                        
                        }}
                        
                        />

                        {/* Name */}
                        <Text style={{ color: COLORS.lightPurple, ...
                        FONTS.h3, fontSize: 27, top: -303}}>{item.name}</Text>

                        {/* Description */}
                        {/* <Text style={{ marginTop: 3, color: COLORS.lightGray, ...FONTS.body4, top: -307}}>{item.description}</Text> */}

                        {/* Calories */}
                        {/* <Text style={{ marginTop: 3, 
                            color: COLORS.lightGray, ...FONTS.body4, top: -310}}> {item.calories}</Text> */}

                        {/* Button */}
                        <CustomButton
                        label="Claim NFT"
                        isPrimaryButton={true}
                        containerStyle={{
                            marginTop: 10,
                            top: -314,
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.base,
                            borderRadius: SIZES.radius * 2
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate
                        ("Location")}
                        />
                        </View>
        )
                    
                }}
                />
            </View>
        )
    }

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
            {renderPromoDeals()}
            <CustomButton />
     
   
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