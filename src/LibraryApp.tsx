import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentacion/navigator/StackNavigator';

export const LibraryApp = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}