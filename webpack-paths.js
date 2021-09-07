import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    libSrc: path.resolve(__dirname,'./src') + '/main.js',
    libSrcRAW: path.resolve(__dirname,'./src') + '/mainRAW.js',
    libDev: path.resolve(__dirname, 'dist'),
    libProd: path.resolve(__dirname, 'dist')
};