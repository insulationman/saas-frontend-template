# SAAS Frontend Template

This is a template for a typical SAAS frontend. The key choices for this template is:

- react-oidc-context for authentication.
  This library lets us authenticate using openId Connect. The config is done in the main.tsx file
- heyapi for client generation.
  This library generates a typescript client from any swagger file - just enter the url for it. This can be seen in the openapi-ts.config.js file. The client has support for adding an authentication JWT to all requests - as seen in app.tsx. All requests to endpoints that need auth will automatically include a JWT Bearer token. Generate by calling 'npm run openapi'
- React router
  For dynamic paths, templating etc.

Be aware that this code is only made to demonstrate how these libraries can be used together.

## Optional additions

This template also uses:

- Tailwind css
  Great and lightweight styling
- Typescript
  Keep sane
