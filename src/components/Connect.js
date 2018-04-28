import {getComponent, listen} from './GlobalStateConnector';

export default function connect(component, updateCallback){
    if(component !== undefined)
    listen(component, updateCallback);
    return getComponent().state;
}