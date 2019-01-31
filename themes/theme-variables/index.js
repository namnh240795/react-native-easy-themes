import { Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const SIZE = [40, 80, 120];

export const COLORS = {
    lightGreen: '#37C892',
    red: '#f44336',
    grey: '#666666'
};

export const TEXT = {
    i: {
        fontStyle: 'italic'
    }
};

export const FLEX_BOX = {
    absolute: {
        position: 'absolute'
    },
    'flex-1': {
        flex: 1
    },
    grow: {
        flexGrow: 1
    },
    row: {
        flexDirection: 'row'
    },
    'row-r': {
        flexDirection: 'row-reverse'
    },
    'col-r': {
        flexDirection: 'column-reverse'
    },
    'f-wrap': {
        flexWrap: 'wrap'
    },
    'aifs': {
        alignItems: 'flex-start'
    },
    'aic': {
        alignItems: 'center'
    },
    'aife': {
        alignItems: 'flex-end'
    },
    'asfs': {
        alignSelf: 'flex-start'
    },
    'asc': {
        alignSelf: 'center'
    },
    'asfe': {
        alignSelf: 'flex-end'
    },
    'ass': {
        alignSelf: 'stretch'
    },
    'jcfs': {
        justifyContent: 'flex-start'
    },
    'jcfe': {
        justifyContent: 'flex-end'
    },
    'jcc': {
        justifyContent: 'center'
    },
    'jcsb': {
        justifyContent: 'space-between'
    },
    'jcsa': {
        justifyContent: 'space-around'
    }
};

export const VIEW = {
    'ph-8': {
        paddingHorizontal: 8,
    }
};