import React from 'react';
import { StyleSheet } from 'react-native';
import { 
    COLORS,
    FLEX_BOX,
    SIZE
} from './theme-variables';

const styles = {};

const DEFAULT_OPTIONS = {
    colors: COLORS, // for color
    other: {}, // for other style
    flex: FLEX_BOX, // for flex
    size: SIZE, // for square and circle view
};

const backgroundColor = color => ({ backgroundColor: color });
const borderColor = color => ({ borderColor: color });
const textColor = color => ({ color });
const tintColor = color => ({ tintColor: color });
const square = size => ({ height: size, width: size });
const circle = size => ({ height: size, width: size, borderRadius: size / 2 });

export const buildTheme = options => {
    let styleOptions = DEFAULT_OPTIONS;
    const styleSheet = {}
    if (options) {
        styleOptions = { ...styleOptions, ...options };
    }
    // build theme
    Object.keys(styleOptions).forEach(key => {
        // build background, text, border color
        if (key === 'colors') {
            Object.keys(styleOptions[key]).forEach(c => {
                const color = styleOptions[key][c];
                styleSheet[`bg-${c}`] = backgroundColor(color);
                styleSheet[`b-${c}`] = borderColor(color);
                styleSheet[`t-${c}`] = tintColor(color);
                styleSheet[`${c}`] = textColor(color);
            })
        } else if (key === 'size') {
            styleOptions[key].forEach(value => {
                styleSheet[`circle-${value}`] = circle(value);
                styleSheet[`square-${value}`] = square(value);
            })
        } else {
            Object.keys(styleOptions[key]).forEach(s => {
                styleSheet[`${s}`] = styleOptions[key][s];
            })
        }
    })

    Object.assign(styles, StyleSheet.create(styleSheet));
};

export const getStyle = string => {
    try {
        let array = [];
        if (typeof string !== 'string') {
            throw `Type ${typeof string} is not valid. Input value must be a string.`;
        } else {
            const listStyle = string.split(' ');
            listStyle.forEach(e => {
                if (styles[e]) {
                    array.push(styles[e]);
                } else {
                    console.warn(`style ${e} not found.`);
                }
                
            })    
        }
        return array;
    } catch (error) {
        console.warn('getTheme error:', error);
        return [];
    }
};