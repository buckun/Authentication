import React from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

const Spinner = (props) => {
    return (
        <>
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export {Spinner};
