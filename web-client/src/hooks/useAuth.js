
import { useAuth0 } from "@auth0/auth0-react";
import { __useAuthWithTestUser__ } from "./__userAuthWithTestUser__";

function useAuthProduction() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user, getIdTokenClaims } = useAuth0();

  const getAuthClaims = async () => {
    console.log('getAuthClaims');
    if (!isAuthenticated) return ('not authenticated');

    return getIdTokenClaims().then(claims => claims.__raw).catch(err => {
      console.log("Something went wrong getting the auth claims", err);
    })
  }
  return { isLoading, isAuthenticated,loginWithRedirect, logout, user, getIdTokenClaims, getAuthClaims };
}

let useAuth = useAuthProduction;

if (process.env.REACT_APP_WITH_TEST_USER) {
  console.log("using test user in development")
  useAuth = __useAuthWithTestUser__;
}

export { useAuth };