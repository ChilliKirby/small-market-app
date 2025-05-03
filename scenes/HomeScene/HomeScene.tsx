import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import styles from '../Styles';
import { CategoryIconHorizontalList } from './HomeSceneComponents';
import homeSceneStyles from './HomeSceneStyles';

const promos = [
    {
        name: 'Trading Post',
        image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: "We trade stuff."
    },
    {
        name: 'Restaurant',
        image: require('../../assets/images/AppImages/temp348s.jpg'),
        about: "Local family recipies served fresh!"
    },
    {
        name: 'Village on State',
        image: require('../../assets/images/AppImages/tempvillageonstate.jpg'),
        about: "Middle Easter cuisine and groceries."
    }
];


const HomeScreen = () => {

    //Promo carousel index
    const [promoIndex, setPromoIndex] = useState(0);

    //Go left on promo carousel
    const goLeft = () => {
        setPromoIndex(prev => (prev === 0 ? promos.length - 1 : prev - 1));
    }

    //Go right on promo carousel
    const goRight = () => {
        setPromoIndex(prev => (prev === promos.length - 1 ? 0 : prev + 1));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={homeSceneStyles.scrollViewMain}>

                <Text style={styles.fontLarge}>'round here</Text>

                <Text style={styles.fontMedium}> Local Spotlight </Text>

                <View style={homeSceneStyles.viewPromo}>

                    <View style={{ height: '97%', width: '97%' }}>

                        <TouchableOpacity onPress={goLeft} style={homeSceneStyles.leftArrowPromo}>
                            <Feather name="arrow-left" size={32} color="white" />
                        </TouchableOpacity>

                        <Image source={promos[promoIndex].image} style={homeSceneStyles.promoImage} />

                        <TouchableOpacity onPress={goRight} style={homeSceneStyles.rightArrowPromo}>
                            <Feather name="arrow-right" size={32} color="white" />
                        </TouchableOpacity>

                    </View>

                </View>

                <Text style={ styles.fontMedium }>
                    {promos[promoIndex].name}
                </Text>

                <Text style={ styles.fontRegular }>
                    {promos[promoIndex].about}
                </Text>

                <View style={{ marginBottom: 50 }}/>

                <CategoryIconHorizontalList />


            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
