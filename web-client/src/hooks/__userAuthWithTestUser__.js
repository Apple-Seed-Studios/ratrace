
const testUserName = process.env.REACT_APP_TEST_USER_NAME;
const testUserPicture = process.env.REACT_APP_TEST_USER_PICTURE;

function __useAuthWithTestUser__() {
  const isLoading = false;
  const isAuthenticated = true;
  const loginWithRedirect = () => { };
  const logout = () => { };
  const user = {
    name: testUserName,
    picture: testUserPicture
  }
  const getIdTokenClaims = () => { };
  return { isLoading, isAuthenticated,loginWithRedirect, logout, user, getIdTokenClaims };
}

export { __useAuthWithTestUser__ };