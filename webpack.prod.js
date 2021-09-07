import PATHS from './webpack-paths.js';

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        formform: PATHS.libSrc,
        formformRAW: PATHS.libSrcRAW
    },
    output: {
        path: PATHS.libProd,
        filename: '[name].min.js',
        globalObject: 'this',
        library: {
            name: 'formform',
            export: 'default',
            type: 'umd',
        }
    }
};