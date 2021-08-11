import { SET_SELECTION } from '../constants';

export const setSelection = (id) => {
    return {
        type: SET_SELECTION,
        userId: id
    }
}