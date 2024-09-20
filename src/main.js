import "./style.css";
import loadFontAwesome from './javascripts/icons.js';

loadFontAwesome();

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}else {
    console.log('Looks like we are in production mode!');

}