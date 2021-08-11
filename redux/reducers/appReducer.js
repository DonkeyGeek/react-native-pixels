import { DATA } from '../../data/usersData';
import { SET_SELECTION, SET_SETTINGS } from '../constants';

const initialState = {
    users: DATA,
    selectedUsers: [],
    selectedCategories: DATA
}

// Reducer
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SELECTION:
            const indexResult = state.selectedUsers.findIndex( user => user.id === action.userId );
            
            if (indexResult >= 0) {
                // user Existe
               const newSelectedUsers = [...state.selectedUsers];
               newSelectedUsers.splice(indexResult, 1);
               return {...state, selectedUsers: newSelectedUsers}

            } else {
                // pas de user
                const user = state.users.find( user => user.id === action.userId );
                return {...state, selectedUsers: state.selectedUsers.concat(user)}
            }

        case SET_SETTINGS:
            const usedSettings = action.settings;    

            const selectedUsersByCategory = state.users.filter( user => {
                if (usedSettings.animals && user.category === 'animals') {
                    return true
                }

                if (usedSettings.travel && user.category === 'travel') {
                    return true
                }

                if (usedSettings.cars && user.category === 'cars') {
                    return true
                }
            });

            return {...state, selectedCategories: selectedUsersByCategory}


        default:
            return state
    }

}

export default appReducer;