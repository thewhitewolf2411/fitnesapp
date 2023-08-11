import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Image } from 'react-native';
import { styles } from './CustomTabButtonStyles';
import { Images } from '../../Assets';

const CustomTabButton: React.FC = ({ ...props }) => {
    const { uilForward } = Images;
    return (
        <TouchableOpacity {...props} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.buttonContainer}>
                <Image style={styles.image} source={uilForward} />
            </View>
        </TouchableOpacity>
    );
};

export default CustomTabButton;