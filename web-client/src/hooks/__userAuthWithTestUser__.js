import { setupAuth } from "../lib/Collection";

const testUserName = process.env.REACT_APP_TEST_USER_NAME;
const testUserPicture = process.env.REACT_APP_TEST_USER_PICTURE;
const testUserToken = process.env.REACT_APP_TEST_USER_TOKEN;

function __useAuthWithTestUser__() {
  const isLoading = false;
  const isAuthenticated = true;
  const loginWithRedirect = () => { };
  const logout = () => { };
  const user = {
    name: testUserName,
    picture: testUserPicture
  }
  setupAuth(testUserToken);
  const getIdTokenClaims = () => { };
  return { isLoading, isAuthenticated,loginWithRedirect, logout, user, getIdTokenClaims };
}

export { __useAuthWithTestUser__ };