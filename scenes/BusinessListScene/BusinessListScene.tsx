import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import getBusinessesByCategory from "@/api/getBusinessesByCategory";
import { RootTabParamList } from "../navigationTypes";
import BusinessListSceneStyles from "./BusinessListSceneStyles";

// type Business = {
//     _id: string,
//     name: string,
//     imageMain: string | null;
//     status: string;
//     subscriptionPlan: string;
// }

// type BusinessListParams = {
//     category?: string;
//     search?: string;
// }

type props = BottomTabScreenProps<RootTabParamList, "BusinessListScene">

const fetchByCategory = async(category: string) => {
    const response = await getBusinessesByCategory(category);
    console.log(response);
}

/**
 * 
 * 
 */
const BusinessListScene = ({route}: props) => {

    const {category, search} = route.params;

    if(category){
        console.log("calling with category");
        fetchByCategory(category);
    }
    return (
        <SafeAreaView style={[{ flex: 1, paddingVertical:40 } ]}>
            <ScrollView contentContainerStyle={ BusinessListSceneStyles.scrollViewMain }>
                <Text>
                    bus scene
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default BusinessListScene;