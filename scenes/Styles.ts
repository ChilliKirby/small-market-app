import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fontLarge: {
        fontSize: 30,
        fontWeight: 'bold' as const,
        fontFamily: 'System',
        color: 'red',
        padding: 30,
    },
    fontMedium: {
        fontSize: 25,
        color: 'red'

    },
    fontRegular: {
        fontSize: 18,
        color: 'black'
    }
});

export default styles;