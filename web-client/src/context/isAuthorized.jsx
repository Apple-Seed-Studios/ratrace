import { When } from 'react-if';
import { useAuth0 } from "@auth0/auth0-react";

function IsAuthorized(props)
{
    const { isAuthenticated, user } = useAuth0();

    const getAuthClaims = async () =>
    {
        if (!isAuthenticated) return ('not authenticated');

        return useAuth0.getIdTokenClaims().then(claims => claims.__raw).catch(err =>
        {
            console.log("Something went wrong getting the auth claims", err);
        })
    }


    // this is a template for creating a request with the token
    // since different CRUD requires a different config, I think this is a good candidate for a reducer/redux! (somebody teach me 👉👈)
    const requestTemplate = (jwt) =>
    {
        const config = {
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/letters',
            headers: {
                "email": `${ user.email }`,

                // pass token into the headers
                "Authorization": `Bearer ${ jwt }`
            }
        }
        return config;
    };

    // after building the config, we can make API calls by passing in the config like this:
    //let templateResponse = async (config) => await axios(config);

    return (
        <When condition={ isAuthenticated }>
            { props.children }
        </When>)
}

export default IsAuthorized;
