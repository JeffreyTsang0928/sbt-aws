"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2318],{3686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"interfaces/metering-interface","title":"IMetering Interface","description":"Overview","source":"@site/docs/interfaces/metering-interface.md","sourceDirName":"interfaces","slug":"/interfaces/metering-interface","permalink":"/docs/interfaces/metering-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/awslabs/sbt-aws/blob/main/website/docs/interfaces/metering-interface.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"IMetering Interface"},"sidebar":"interfaces","previous":{"title":"IBilling Interface","permalink":"/docs/interfaces/billing-interface"}}');var r=t(4848),s=t(8453);const c={sidebar_position:3,sidebar_label:"IMetering Interface"},o="IMetering Interface",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Properties",id:"properties",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"imetering-interface",children:"IMetering Interface"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The IMetering interface encapsulates the properties and functions required for metering operations in a system. It defines the contracts for various actions related to meter management, usage ingestion, customer (tenant) management, and usage data retrieval."}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"createMeterFunction (ISyncFunction)"}),": This function is responsible for creating a new meter. A meter is used to track and analyze specific usage metrics for tenants. It corresponds to the POST /meters endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fetchMeterFunction (ISyncFunction)"}),": This function retrieves a single meter based on its unique identifier (id). It corresponds to the GET /meters/{meterId} endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fetchAllMetersFunction (ISyncFunction)"}),": This function fetches multiple meters. It should support pagination to handle large result sets. It corresponds to the GET /meters endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"updateMeterFunction (Optional, ISyncFunction)"}),": This function updates an existing meter. It corresponds to the PUT /meters/{meterId} endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"deleteMeterFunction (Optional, ISyncFunction)"}),": This function deletes an existing meter. It corresponds to the DELETE /meters/{meterId} endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ingestUsageEventFunction (IASyncFunction)"}),": This asynchronous function is responsible for ingesting a usage event. Usage events are used to measure and track the usage metrics associated with a meter. It is typically triggered by the INGEST_USAGE event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fetchUsageFunction (ISyncFunction)"}),": This function retrieves the usage data for a specific meter. It corresponds to the GET /usage/{meterId} endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"cancelUsageEventsFunction (Optional, ISyncFunction)"}),": This function is used to exclude specific events from being recorded or included in the usage data. It is helpful for canceling events that were incorrectly ingested. It corresponds to the DELETE /usage endpoint."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"createCustomerFunction (Optional, IASyncFunction)"}),": This asynchronous function is responsible for creating a new customer (tenant). It is typically triggered by the ONBOARDING_REQUEST event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"deleteCustomerFunction (Optional, IASyncFunction)"}),": This asynchronous function is responsible for deleting an existing customer (tenant). It is typically triggered by the OFFBOARDING_REQUEST event."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"The IMetering interface can be implemented by a class or object that provides the required functionality for metering operations. The implementation should define the functions and properties according to the interface contract."}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of how the interface might be used:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { IMetering } from './metering';\n\nclass MeteringService implements IMetering {\n  // Implement the properties and functions defined in the IMetering interface\n}\n\nconst meteringService = new MeteringService();\n\n// Create a new meter\nconst newMeterId = await meteringService.createMeterFunction({ /* meter data */ });\n\n// Fetch a meter\nconst meter = await meteringService.fetchMeterFunction({ meterId: newMeterId });\n\n// Ingest a usage event\nawait meteringService.ingestUsageEventFunction({ /* usage event data */ });\n\n// Fetch usage data for a meter\nconst usageData = await meteringService.fetchUsageFunction({ meterId: newMeterId });\n"})}),"\n",(0,r.jsx)(n.p,{children:"By adhering to the IMetering interface, the implementation can be easily integrated into other parts of the system or replaced with a different implementation if needed, as long as the new implementation adheres to the same interface contract."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);