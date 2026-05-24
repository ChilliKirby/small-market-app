import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    // Main backgroung color for scenes
    mainView: {
        backgroundColor: '#FFFFFF',
        height:"100%"
    },
    //Top bar view
     titleAndSearchView: {
        height: 'auto',
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#538a79',
    },
    fontLarge: {
        fontSize: 30,
        fontFamily: 'Montserrat_400Regular',
        fontWeight: "bold",
        color: 'Black',
    },
    fontLargeBlack: {
        fontSize: 30,
        fontFamily: 'Montserrat_400Regular',
        fontWeight: "bold",
        color: 'Black',
    },
    fontMedium: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'Montserrat_400Regular',
        fontWeight: "bold"
    },
     fontMediumBlack: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'Montserrat_400Regular',
        fontWeight: "bold"
    },
    fontRegular: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Montserrat_400Regular',
    },
     fontRegularBlack: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Montserrat_400Regular',
    }
});

export default styles;