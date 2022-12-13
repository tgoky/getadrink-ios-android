import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import { connect } from "react-redux";

import { toggleTheme } from "../stores/themeActions";

import { COLORS, FONTS, SIZES, icons } from '../constants';

 export const HeaderBar = ( { appTheme, toggleTheme}) => {
    
    // function toggleThemeHandler() {
    //     if(appTheme.name == "light") {
    //         toggleTheme("dark")
    //     } else {
    //         toggleTheme("light")
    //     }
    // }
    
    
    return (
        
        <SafeAreaView
        style={{
            height: 150,
            width: "100%",
            backgroundColor: COLORS.purple,
            flexDirection: 'row'
        }} 
       >
        {/* Greetings */}
        <View
        style={{
            flex: 1,
            paddingLeft: SIZES.padding
        }}
        >
            <Text style={{color: COLORS.white, ...FONTS.h2, paddingTop: 10}}>
                User,
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>
                Welcome Back !
            </Text>
        </View>
          {/* Toggle Button */}
          <TouchableOpacity 
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginHorizontal: SIZES.padding,
            height: 40,
            bottom: -15,
            borderRadius: 20,
            backgroundColor: COLORS.lightPurple   
        }}
        // onPress={() => toggleThemeHandler()}
        >
            {/* Sun */}
            <View 
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                // ...(appTheme.name == "light") ? styles.
                // selectedLightModeStyle : {}
            }}>
               <Image
               source={icons.sunny}
               style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white
               }}
               />

            </View>

            {/* Moon */}
            <View
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                // ...(appTheme.name == "dark") ? styles.
                // selectedLightModeStyle : {}
                
            }}
            >
            <Image
            source={icons.night}
            style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white
            }}/>
            </View>
        </TouchableOpacity>
       </SafeAreaView>

    )
    }

    const styles = StyleSheet.create({
        selectedNightModeStyle: {
            borderRadius: 20,
            backgroundColor: COLORS.black
        },
        selectedLightModeStyle: {
            borderRadius: 20,
            backgroundColor: COLORS.yellow
        }
    })


function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => { return dispatch(toggleTheme
            (themeType))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);