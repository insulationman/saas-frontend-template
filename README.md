<img src="src/src/assets/Cabanossy-Logo.svg" alt="Logo" width="80"/>

# SAAS Frontend Template

This is a template for a typical SAAS frontend. The key choices for this template is:

**react-oidc-context for authentication**
This library lets us authenticate using openId Connect. The config is done in the main.tsx file

**heyapi for client generation**
This library generates a typescript client from any swagger file - just enter the url for it. This can be seen in the openapi-ts.config.js file. The client has support for adding an authentication JWT to all requests - as seen in app.tsx. All requests to endpoints that need auth will automatically include a JWT Bearer token. Generate by calling `npm run openapi`

**React router**
For dynamic paths, templating etc.

## Optional additions

This template also uses:

**Tailwind css**
Great and lightweight styling

**Typescript**
Keep sane

Be aware that this code is only made to demonstrate how these libraries can be used together.

# Other suggestions

- **Use a managed keycloak instance for authentication.** They have built in support for multi-tenancy (organizations) and much more. The instances can also be migrated to your own infrastructure if you want to. You can also use other identity providers that support openId Connect, such as Auth0, Okta, Azure AD etc. You can use a free tier for development and testing. Once you have the identity provider set up, you can configure the oidcConfig in main.tsx to use it.
