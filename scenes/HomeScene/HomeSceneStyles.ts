import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const homeSceneStyles = StyleSheet.create({

    //Main Scroll View for HomeScene
    scrollViewMain: {
        flexGrow: 1,
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
////////////////////////////////////////////////////////
    //View for App name and search bar
    titleAndSearchView: {
        height: 'auto',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#D1FFBD'
    },
    textInput: {
        height: 'auto',
        width: '50%',
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    },
///////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////

    //Horizontal Scroll View for categories
    categoriesHorizontalScrollView:{
        height: 99,
        width: '90%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

/////////////////////////////////////////////////////////

    //Horizontal view for business 
    businessView: {
        height: screenHeight * .15,
        width: screenWidth * .8,
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
        flexDirection: 'row'
    }

});

export default homeSceneStyles;