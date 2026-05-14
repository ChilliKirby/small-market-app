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
        width: 'auto',
        padding: 10,
        flexDirection: 'column',
        marginBottom: 20, 
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#538a79',
    },
    textInput: {
        height: 'auto',
        width: '90%',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginLeft: 3,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5
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
    //business icon
    smallBusinessImage:{
        height: 44,
        width: 44,
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
    },

//////////////////////////////////////////////////////////

    //Category Icon grid view
    categoryGridView: {
        marginHorizontal: 'auto',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'center',
    },

    //Category Icon view
    categoryIconView: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: '5%',
        marginHorizontal: '5%',
        height: screenWidth * .15,
        width: screenWidth * .15,
        borderRadius: 10,
    },

    //Category Icon touchable image
    categoryIconTouchable: {
        height: screenWidth * .15,
        width: screenWidth * .15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

});

export default homeSceneStyles;