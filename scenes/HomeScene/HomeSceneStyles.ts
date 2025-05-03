import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const homeSceneStyles = StyleSheet.create({

    //Main Scroll View for HomeScene
    scrollViewMain: {
        flexGrow: 1,
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },


    //View for promoting businesses
    viewPromo: {
        height: screenWidth * .5,
        width: screenWidth * .8,
        backgroundColor: '#D1FFBD',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20,
        margin: 10
    },
    //Left arrow to navigate promo business images
    leftArrowPromo: {
        position: 'absolute',
        top: '50%',
        left: '5%',
        transform: [
            { translateX: -16 }, // adjust based on icon size
            { translateY: -16 },
          ],
        zIndex: 10
    },
    //Right arrow to navigate promo business images
    rightArrowPromo: {
        position: 'absolute',
        top: '50%',
        right: '5%',
        transform: [
            { translateX: 16 }, // adjust based on icon size
            { translateY: -16 },
          ],
        zIndex: 10
    },
    //Promo business image
    promoImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },


    //Horizontal Scroll View for categories
    categoriesHorizontalScrollView:{
        height: 99,
        width: '90%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    //category Icon View
    categoryIconView: {
        height: 24,
        width: 24,

        
    }

});

export default homeSceneStyles;