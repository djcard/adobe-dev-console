(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6171],{30425:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return l}});var a=n(22122),o=n(19756),i=(n(15007),n(64983)),r=n(99536),s=["components"],c={},d={_frontmatter:c},u=r.Z;function l(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"adobe-io-authentication-overview"},"Adobe I/O Authentication Overview"),(0,i.mdx)("p",null,"Adobe is committed to privacy and security. Nearly all Adobe services require your application to authenticate through the Adobe Identity Management System (IMS) to receive client credentials. The client credentials determine the access and permissions granted to your application."),(0,i.mdx)("p",null,"Any API that accesses a service, data or content on behalf of an end user authenticates using the OAuth or JSON Web Token standards."),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("a",{parentName:"p",href:"/adobe-dev-console/console"},"Adobe Developer Console")," to obtain client credentials by creating a new ",(0,i.mdx)("strong",{parentName:"p"},"Project"),". Once you create a project, you can add APIs that include ",(0,i.mdx)("strong",{parentName:"p"},"API Keys")," (Client ID) and other access credentials. You can then obtain a secure access token from Adobe for each API session."),(0,i.mdx)("p",null,"A project can include one or more services. In many cases, you will use the same client credentials to access multiple Adobe products and services. In addition to APIs, you may also add I/O Events and I/O Runtime to your projects so that your applications can access content and services in real-time."),(0,i.mdx)("p",null,"To learn more about creating projects in Adobe Developer Console, read the ",(0,i.mdx)("a",{parentName:"p",href:"../getting-started.md"},"Console getting started guide"),"."),(0,i.mdx)("h2",{id:"types-of-authentication"},"Types of Authentication"),(0,i.mdx)("h3",{id:"api-key-integration-authorization-only"},(0,i.mdx)("a",{parentName:"h3",href:"APIKeyIntegration.md"},"API Key Integration (Authorization Only)")),(0,i.mdx)("p",null,"An API Key is the only client credential required for these services. These integrations do not need to pass an access token with each request.\ne.g. Adobe Stock"),(0,i.mdx)("h3",{id:"oauth-integration-oauth-20-authentication-flow"},(0,i.mdx)("a",{parentName:"h3",href:"OAuthIntegration.md"},"OAuth Integration (OAuth 2.0 authentication flow)")),(0,i.mdx)("p",null,"If your integration needs to access content or a service on behalf of an end user, that user must be authenticated as well. Your integration will need to pass the OAuth token granted by the Adobe IMS.\ne.g. Creative SDK, Photoshop, Adobe Analytics"),(0,i.mdx)("h3",{id:"service-account-integration-jwt-authentication-flow"},(0,i.mdx)("a",{parentName:"h3",href:"ServiceAccountIntegration.md"},"Service Account Integration (JWT authentication flow)")),(0,i.mdx)("p",null,"For service-to-service integrations, you will also need a JSON Web Token (JWT) that encapsulates your client credentials and authenticates the identity of your integration. You then exchange the JWT for the access token that authorizes access.\ne.g. Adobe Campaign, Adobe Launch, Adobe Target"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-index-md-bc1ca3894edf70cd7e06.js.map