import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <TextInput placeholder="Ur goal!!"/>
                <Button title="Add Goal now mdfk!!"/>
            </View>
            <View>
                <Text>Ur Fking goal</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
});
