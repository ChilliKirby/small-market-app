import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BusinessListSceneStyles from "./BusinessListSceneStyles";

const BusinessListScene = () => {

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