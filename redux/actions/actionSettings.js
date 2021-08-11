import { SET_SETTINGS } from '../constants';

export const setCategorySettings = ( savedSettings ) => {
    return {
        type: SET_SETTINGS,
        settings: savedSettings
    }
}