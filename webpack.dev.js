import PATHS from './webpack-paths.js';

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        formform: PATHS.libSrc,
        formformRAW: PATHS.libSrcRAW
    },
    output: {
        path: PATHS.libDev,
        filename: '[name].js',
        globalObject: 'this',
        library: {
            name: 'formform',
            export: 'default',
            type: 'umd',
        }
    }
};