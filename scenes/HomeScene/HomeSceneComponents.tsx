import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import homeSceneStyles from "./HomeSceneStyles";

type horizontalBusinessSectionProps = {
    name: string;
    image: string;
    about: string;
    index: number;
};

const CategoryIconHorizontalList = () => {

    return (
        <View style={homeSceneStyles.categoriesHorizontalScrollView} >
            <ScrollView horizontal={true}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#C23B23', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Ionicons name='restaurant-outline' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Restaurant
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#F39A27', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <MaterialCommunityIcons name='shopping-outline' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Shopping
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#EADA52', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <MaterialCommunityIcons name='hair-dryer-outline' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Cosmetics
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#03C03C', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <MaterialCommunityIcons name='basketball-hoop-outline' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Outdoor
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#579ABE', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <MaterialIcons name='computer' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Electronics
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#d0fffe', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <MaterialCommunityIcons name='room-service-outline' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Services
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#976ED7', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <FontAwesome name='group' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Activities
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#C23B23', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <MaterialIcons name='local-grocery-store' size={48} color='white' />
                    </TouchableOpacity>
                    <Text>
                        Groceries
                    </Text>
                </View>



            </ScrollView>
        </View>
    )
};

const HorizontalBusinessSection = ({ name, image, about, index }: horizontalBusinessSectionProps) => {
    return (
        <View style={homeSceneStyles.businessView}>
             <Image
                source={require('../../assets/images/AppImages/temp348s.jpg')}
                style={{ width: '20%', height: '100%' }} // adjust size as needed
            />
            <View style={{ height: 'auto', width: '80%' }}>
                <Text>{name}</Text>
                <Text> {about} </Text>
            </View>

        </View>
    )
}

export { CategoryIconHorizontalList, HorizontalBusinessSection };

