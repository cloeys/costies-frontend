import { loginResource, usersResource } from '../util/resources';

export const login = ({ commit }, creds) => {
    commit('LOGIN');
    loginResource.post('', creds)
    .then(response => {
        let token = response.data.auth_token;
        usersResource.get('/current', {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            let payload = {
                token: token,
                user: response.data
            }
            localStorage.setItem("token", token);
            commit('LOGIN_SUCCESS', payload)
        })
        .catch(error => {
            console.log(error)
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const fetchUser = ({ commit }, token) => {
    commit('LOGIN');
    usersResource.get('/current', {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        let payload = {
            token: token,
            user: response.data
        }
        localStorage.setItem("token", token);
        commit('CURRENT_USER_ACTIVE', payload);
    })
    .catch(error => {
        console.log(error);
    })
}

export const logout = ({ commit }) => {
    localStorage.removeItem("token");
    commit('LOGOUT');
}

export const setMessage = ({ commit }, message) => {
    commit('SET_MESSAGE', message);
}

export const consumeMessage = ({commit, state}) => {
    let message = state.message;
    commit('CONSUME_MESSAGE');
    return message;
}