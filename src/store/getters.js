export const token = state => state.token;

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
};

export const isLoggedIn = state => state.isLoggedIn;
export const currentUser = state => state.currentUser;