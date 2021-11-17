import React from 'react';
import { Text as RNText, ViewPropTypes } from 'react-native';
import { COLORS, FONTS, normalize } from '../../utils';
import PropTypes from 'prop-types';

export const TextType = {
    REGULAR: FONTS.REGULAR,
    BOLD: FONTS.BOLD,
}

export const Text = ({
    size = normalize(16),
    center,
    style,
    children,
    color = COLORS.DARK,
    type = TextType.REGULAR,
    ...props
}) => {
    let styles = {};

    if (size) {
        styles.fontSize = size;
    }
    if (color) {
        styles.color = color;
    }

    if (center) {
        styles.textAlign = 'center';
    }

    return (
        <RNText
            style={[
                {
                    fontFamily: type,
                    textAlign: 'left'
                },
                styles,
                style,
            ]}
            {...props}>
            {children}
        </RNText>
    );
};
