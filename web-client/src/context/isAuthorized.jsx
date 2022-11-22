import { useEffect } from 'react'
import { When } from 'react-if';
// import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../hooks/useAuth";
import { setupAuth } from "../lib/Collection";


function IsAuthorized(props)
{
    const { isAuthenticated, user, getAuthClaims } = useAuth();


    /*
    const getAuthClaims = async () => {
        if (!isAuthenticated) return ('not authenticated');

        return useAuth.getIdTokenClaims().then(claims => claims.__raw).catch(err =>
        {
            console.log("Something went wrong getting the auth claims", err);
        })
    }
    */

    useEffect(() => { 
         
        const setup = async () => {
            const token = await getAuthClaims();
            setupAuth(token);
        }
        setup();
    },[isAuthenticated, getAuthClaims]);

        console.log('in ueee')
    useEffect(() => { 
        console.log('in ueee')
        const setup = async () => {
            const token = await getAuthClaims();
            setupAuth(token);
        }
        setup();
    },[]);

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
