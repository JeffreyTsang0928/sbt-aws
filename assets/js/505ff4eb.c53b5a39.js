"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70],{6455:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"partners/isv-integrations/descope","title":"Descope","description":"Integrate Descope authentication and authorization capabilities into your AWS SaaS Builder Toolkit (SBT) applications.","source":"@site/docs/partners/isv-integrations/descope.md","sourceDirName":"partners/isv-integrations","slug":"/partners/isv-integrations/descope","permalink":"/docs/partners/isv-integrations/descope","draft":false,"unlisted":false,"editUrl":"https://github.com/awslabs/sbt-aws/blob/main/website/docs/partners/isv-integrations/descope.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Descope","description":"Integrate Descope authentication and authorization capabilities into your AWS SaaS Builder Toolkit (SBT) applications.","hide_table_of_contents":false,"sidebar_position":1},"sidebar":"partnerIntegrations","previous":{"title":"Amberflo","permalink":"/docs/partners/isv-integrations/amberflo"},"next":{"title":"Moesif","permalink":"/docs/partners/isv-integrations/moesif"}}');var t=i(4848),o=i(8453);const a={title:"Descope",description:"Integrate Descope authentication and authorization capabilities into your AWS SaaS Builder Toolkit (SBT) applications.",hide_table_of_contents:!1,sidebar_position:1},r="Introduction",c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Obtaining the Plugin",id:"obtaining-the-plugin",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example 1: Implementing User Login with Passwordless Authentication Using Descope",id:"example-1-implementing-user-login-with-passwordless-authentication-using-descope",level:3},{value:"Example 2: Configuring multi-tenant user management to allow organization-specific login settings and access policies",id:"example-2-configuring-multi-tenant-user-management-to-allow-organization-specific-login-settings-and-access-policies",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsx)(n.p,{children:"The Descope Plugin for SBT-AWS empowers SaaS developers with a highly flexible, secure, and developer-friendly authentication solution, designed to seamlessly integrate with the AWS SaaS Builder Toolkit (SBT). Descope allows you to quickly implement custom authentication, machine-to-machine (M2M) authentication, and comprehensive user management\u2014 transforming the way you handle identity and access for your SaaS applications.\nWith Descope, you get not only a comprehensive set of authentication tools but also an environment that makes it incredibly easy to build and iterate on SaaS applications across all AWS services.\nKey Features and Benefits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Custom Flows for Tailored User Experiences: Descope allows you to design custom authentication flows specific to your application\u2019s needs. Using a drag & drop workflow interface, you can create varied user journeys that improve user onboarding and retention, secure accounts against credential-based threats, and save time for engineering and IT teams . This no-code configuration removes the need for complex coding, allowing you to focus on creating seamless user experiences."}),"\n",(0,t.jsx)(n.li,{children:"Machine-to-Machine (M2M) Authentication: Descope supports secure, straightforward M2M authentication, enabling easy communication between devices, APIs, and automated services. With minimal setup, Descope makes M2M workflows intuitive and greatly reduces development time, allowing you to enable seamless interactions for API-to-API connections or other automated service exchanges within your application."}),"\n",(0,t.jsx)(n.li,{children:"Granular Access Control: Descope fine grained authorization capabilities with role and relationship-based access control allow you to align access policies with precise business requirements, ensuring secure and accurate user access. This flexibility is ideal for SaaS applications serving diverse user types and organizations with varied permission structures."}),"\n",(0,t.jsx)(n.li,{children:"Enhanced Security with MFA and Passwordless Options: Descope empowers you to add multiple layers of security with minimal setup. Offering MFA and passwordless authentication options, Descope lets users select their preferred security approach, keeping accounts safe without compromising on user experience. These options help developers maintain the highest security standards without adding undue friction that may cause drop-offs."}),"\n",(0,t.jsx)(n.li,{children:"Simplified User and Tenant Management: Descope\u2019s built-in tools support user segmentation and tenant-based configurations, making it easy to manage authentication across different customers and organizations. This setup is ideal for SaaS applications with multiple tenants, allowing you to create and manage tenant-specific configurations with ease, enhancing both security and customization."}),"\n",(0,t.jsx)(n.li,{children:"Seamless Integration with AWS and SBT:  Descope integrates effortlessly within the AWS ecosystem, including the SaaS Builder Toolkit (SBT). By leveraging Descope as an SBT plugin, you can streamline authentication and authorization across your entire suite of AWS-powered SaaS applications. This compatibility ensures that Descope works harmoniously with other AWS services, so you can iterate quickly and deploy efficiently without worrying about compatibility or performance issues. This integration makes Descope a highly adaptable solution for any SaaS platform aiming to leverage the best of AWS while enhancing user management capabilities."}),"\n",(0,t.jsx)(n.li,{children:"Excellent Developer Experience: Descope makes authentication setup simple, with no-code/low-code interfaces and a flow editor that lets you modify user journeys without touching your codebase or redeploying your app. Seamless CI/CD integration keeps your development process streamlined, and comprehensive self-service resources\u2014including documentation and community support\u2014ensure developers have the guidance they need. This efficiency accelerates deployment while maintaining high security standards and freeing up engineering time for other core product initiatives."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"use-cases",children:"Use Cases:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Customer Authentication and Access Control: Support diverse passwordless login options\u2014including social, Google One Tap, passkeys, and magic links\u2014to enhance user experience and secure control over data and resources."}),"\n",(0,t.jsx)(n.li,{children:"B2B Multi-Tenant SaaS: Enable granular, tenant-specific authentication and access policies, supporting unique identity needs per organization and ensuring data isolation and compliance across clients."}),"\n",(0,t.jsx)(n.li,{children:"Strong, Adaptive MFA: Provide adaptive multi-factor authentication (MFA) options to secure critical user actions, reducing fraud and enhancing security with minimal friction for legitimate users."}),"\n",(0,t.jsx)(n.li,{children:"Machine-to-Machine (M2M) Authentication: Establish secure, automated communication between services and devices with simple M2M authentication setups, ideal for integrating APIs or IoT devices."}),"\n",(0,t.jsx)(n.li,{children:"SSO and Self-Service SSO Configuration: Allow tenant administrators to self-configure single sign-on (SSO) for their organization, making it easy for them to manage access without burdening your support team."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"installation-instructions",children:"Installation instructions"}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure you have a Descope account. If not, sign up ",(0,t.jsx)(n.a,{href:"https://www.descope.com/sign-up",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:["Have access to a ",(0,t.jsx)(n.a,{href:"https://app.descope.com/settings/project",children:"Descope Project"}),", as well as a ",(0,t.jsx)(n.a,{href:"https://app.descope.com/settings/company/managementkeys",children:"Management Key"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set up an AWS SBT Project ",(0,t.jsx)(n.a,{href:"https://github.com/awslabs/sbt-aws/tree/main/docs/public",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"obtaining-the-plugin",children:"Obtaining the Plugin"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Option 1: Import directly from npm"})}),"\n",(0,t.jsx)(n.p,{children:"Within your SBT project directory, install sbt-aws-descope via the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install --save @descope/sbt-aws-descope\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Option 2: Download the latest release"})}),"\n",(0,t.jsx)(n.p,{children:"Visit the GitHub releases page and download the latest version."}),"\n",(0,t.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,t.jsxs)(n.p,{children:["a. Follow the prerequisite steps to get started with the installation of this plugin.\nb. Clone the repo of the plugin provided.\nc. Install the Descope plugin's npm package within the SBT project downloaded as part of the prerequisites.\nd. Add ",(0,t.jsx)(n.code,{children:"DescopeAuth"})," as part of your SBT's Control Plane construct. This way, SBT will use Descope as the identity provider, which implements the IAuth interface defined in the SBT core package."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1"}),": Follow the prerequisite steps to prepare for plugin installation."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2"}),": Clone the plugin repository as provided in the options above."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3"}),": Install the Descope plugin's npm package within the SBT project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install @descope/sbt-aws-descope\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4"}),": Integrate DescopeAuth within your SBT\u2019s Control Plane construct to enable Descope as the identity provider, implementing the IAuth interface as defined in the SBT core package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { DescopeAuth } from "sbt-aws-descope";\n\nconst descopeAuth = new DescopeAuth(this, "DescopeAuth", {\n      projectId: "<<Descope Project ID>>",\n      clientSecretSSMMgmtKey: "<<Parameter Name in SSM of Descope Management Key",\n});\n\nconst controlPlane = new sbt.ControlPlane(this, "ControlPlane", {\n      auth: descopeAuth,\n      systemAdminEmail: "kevin@descope.com",\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once you\u2019ve completed these steps, you should be able to build your SBT application and all of the built in functions will be set up for you. If you wish to add Flows or SDK/API based authentication methods to your app, you can follow our ",(0,t.jsx)(n.a,{href:"https://docs.descope.com/getting-started",children:"Quickstart"})," guide."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 5"}),": Usage Examples"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"example-1-implementing-user-login-with-passwordless-authentication-using-descope",children:"Example 1: Implementing User Login with Passwordless Authentication Using Descope"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Descope's passwordless authentication provides a flexible, highly secure way to log in without traditional passwords, reducing the risk of phishing attacks and enhancing user convenience. With Descope, you can offer users a range of secure, passwordless login options, including passkeys, social login, and magic links\u2014all of which improve security while simplifying the user experience."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Passkeys"}),": Passkeys use a combination of device-based biometric verification (like fingerprint or Face ID) and cryptographic methods to authenticate users. This approach allows users to log in using only their device, without needing to enter any passwords. Implementing passkeys with Descope is straightforward, requiring only the user's consent to set up the device-based authentication. Passkeys are stored securely on the user's device, providing a phishing-resistant method of authentication that is seamless and familiar."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Social Login"}),": Descope supports a variety of social login providers, allowing users to authenticate via platforms they already use, like Google, Apple, or Facebook. This method enhances convenience while still ensuring a secure authentication process, as it reduces the need to create and remember yet another password."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Magic Link"}),": Magic links provide users with a one-time link sent directly to their email. When clicked, it logs the user in without requiring a password, making the process not only user-friendly but also resistant to phishing attacks. Since magic links are sent to the user's verified email, they ensure that the person logging in is indeed the account holder."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Benefits"}),": Descope's passwordless options help prevent phishing by eliminating traditional passwords and offering cryptographic alternatives that are more secure. The variety of login methods allows you to choose the best option based on your application's user demographics and risk model, ensuring both security and convenience."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"example-2-configuring-multi-tenant-user-management-to-allow-organization-specific-login-settings-and-access-policies",children:"Example 2: Configuring multi-tenant user management to allow organization-specific login settings and access policies"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In a multi-tenant SaaS environment, organizations often have unique authentication needs, such as specific Single Sign-On (SSO) policies, access roles, and authorization rules. Descope enables you to manage each organization separately, providing customized login settings and role-based access control for each tenant."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SSO Self-Service Configuration"}),": Descope enables tenant admins to configure SSO independently through a dedicated link. Once generated, this link lets an admin configure SSO settings, such as setting up SAML or OAuth integrations, without needing assistance from developers.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Example Workflow"}),":","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"You can generate a self-service SSO link specific to the tenant, which can be shared with the tenant admin."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tenant Admin SSO Configuration"}),": When the tenant admin accesses the link, they can complete the setup of SSO by following simple on-screen instructions. They can choose their identity provider, configure SAML assertions, and save the settings, allowing users within that tenant to log in through their chosen provider."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role-Based Access Control (RBAC)"}),": With Descope's tenant-level RBAC, you can assign users different roles based on the tenant's requirements, as well as map them from SAML groups that come from various external IdPs. For example, some users might have admin access, while others have read-only access. These roles can be configured on a per-tenant basis, allowing for flexible access control."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Tenant Authentication"}),": Descope lets you configure different flow behaviors and styling per tenant, including MFA requirements, password settings, and device trust. This allows you to implement granular security controls based on the tenant's risk profile, such as requiring MFA for certain users."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Common Issues and Solutions"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),': "User Management functions or Initial SBT plugin setup and configuration failing."',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Solution"}),": Verify your Descope Management Key and permissions."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Issue"}),': "Access denied errors when accessing SBT control plane."',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Solution"}),": Ensure the Descope plugin is properly installed and referenced in your SBT configuration."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Additional Support: For detailed support, please refer to ",(0,t.jsx)(n.a,{href:"https://docs.descope.com/support",children:"Descope Support"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsx)(n.p,{children:"If you would like to contribute to the development of this plugin, please refer to our contribution guidelines on GitHub. Contributions are welcome and encouraged to improve functionality and usability."}),"\n",(0,t.jsx)(n.h3,{id:"architecture-diagram",children:"Architecture Diagram"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"descopearch.png",src:i(7263).A+"",width:"468",height:"248"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7263:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/descopearch-1354eea4eaefcf52bf9ee00519a69a93.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);