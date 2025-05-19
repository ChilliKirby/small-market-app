import { Feather } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { RootTabParamList } from '../navigationTypes';
import styles from '../Styles';
import { CategoryIconGrid, HorizontalBusinessSection } from './HomeSceneComponents';
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

const businesses = [
    {
        name: 'anand market',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: "Buy something"
    },
    {
        name: 'Greg market',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: 'gregs and things'
    },
    {
        name: 'alex stuff',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: "warzone"
    },
    {
        name: 'anthony toys',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: 'toys an toys'
    },
    {
        name: 'anand market',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: "Buy something"
    },
    {
        name: 'Greg market',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: 'gregs and things'
    },
    {
        name: 'alex stuff',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: "warzone"
    },
    {
        name: 'anthony toys',
        Image: require('../../assets/images/AppImages/nativeamericantradingpost.jpg'),
        about: 'toys an toys'
    }
]

type Props =BottomTabScreenProps<RootTabParamList, 'HomeScene'>;

const HomeScreen = ({ navigation, route }: Props) => {

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

    //category grid button handler
    const categoryButtonHandler = () => {
        navigation.navigate('BusinessListScene');
    }

    return (
        <SafeAreaView style={[ styles.mainView , { flex: 1, paddingVertical:40 } ]} >
            
            <View style={homeSceneStyles.titleAndSearchView}>
                <Text style={styles.fontMedium}>'round here</Text>

                <View style={homeSceneStyles.textInput}>
                    <TextInput placeholder="Search 'round here..." placeholderTextColor="#888" style={{ width: '100%', borderWidth: 2, borderRadius: 10 }} />
                </View>

                <TouchableOpacity>
                    <Feather name='search' size={32} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={homeSceneStyles.scrollViewMain}>

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

                <Text style={styles.fontMedium}>
                    {promos[promoIndex].name}
                </Text>

                <Text style={styles.fontRegular}>
                    {promos[promoIndex].about}
                </Text>

                <CategoryIconGrid navigation={ navigation } route={ route }/>

                <View style={{ marginBottom: 50 }} />

                {/* <CategoryIconHorizontalList /> */}


                {businesses ? businesses.map((item, index) =>
                    <HorizontalBusinessSection name={item.name} image={item.Image} about={item.about} index={index} />
                ) : <Text>jijopi</Text>}

            </ScrollView>
            
        </SafeAreaView>
    );
};

export default HomeScreen;
