import profileData from './data/profile_data.json';

const profile = (state = profileData, action) => {
    switch (action.type) {
        case 'save-edited-profile':
            console.log(action)
            return action.profile;
        default:
            return state;
    }
};

export default profile;
