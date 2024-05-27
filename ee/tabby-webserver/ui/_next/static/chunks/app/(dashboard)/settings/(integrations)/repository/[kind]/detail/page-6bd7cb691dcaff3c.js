(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7650],{12070:function(e,t,r){Promise.resolve().then(r.bind(r,95293))},95293:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(36164),i=r(3546),l=r(18500),s=r(62066),a=r(11978),o=r(2578),d=r(40055),c=r(21808),u=r(24449),f=r(11634),m=r(70410),v=r(63795),p=r(31458),x=r(79972),h=r(30220),j=r(81565),g=r(99047),N=r(6230),y=r(90379),b=r(43240);let w=(0,b.BX)("\n    mutation UpdateGithubProvidedRepositoryActive($id: ID!, $active: Boolean!) {\n      updateGithubProvidedRepositoryActive(id: $id, active: $active)\n    }\n  "),R=(0,b.BX)("\n    mutation UpdateGitlabProvidedRepositoryActive($id: ID!, $active: Boolean!) {\n      updateGitlabProvidedRepositoryActive(id: $id, active: $active)\n    }\n  ");var C=r(84381),S=r(5493),P=r(23782),D=r(74248),k=r(36065),z=r(98150),A=r(84942);let I=P.Ry({id:P.Z_()});function _(e){let{kind:t,onCreated:r,onCancel:s,repositories:a,providerStatus:o,fetchingRepos:d}=e,[c,u]=i.useState(!1),m=(0,S.cI)({resolver:(0,C.F)(I)}),v=i.useRef(null),{isSubmitting:x}=m.formState,h=i.useMemo(()=>{switch(o){case l.zo.Pending:return"Awaiting the next data synchronization";case l.zo.Failed:return"Synchronizing error. Please check if the access token is still valid";default:return"No repository found"}},[o]),g=(0,f.D)(w,{form:m}),N=(0,f.D)(R,{form:m}),y=()=>{requestAnimationFrame(()=>{v.current&&(v.current.scrollTop=0)})},b=()=>{y()};return(0,n.jsx)(z.l0,{...m,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:m.handleSubmit(e=>{let n=e.id;return t===l.vW.Github?g({id:e.id,active:!0}).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.updateGithubProvidedRepositoryActive)&&(m.reset({id:void 0}),null==r||r(n))}):t===l.vW.Gitlab?N({id:e.id,active:!0}).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.updateGitlabProvidedRepositoryActive)&&(m.reset({id:void 0}),null==r||r(n))}):void 0}),children:[(0,n.jsx)(z.Wi,{control:m.control,name:"id",render:e=>{var t,r;let{field:i}=e;return(0,n.jsxs)(z.xJ,{className:"flex flex-col",children:[(0,n.jsxs)(A.J2,{open:c,onOpenChange:u,children:[(0,n.jsx)(A.xo,{asChild:!0,children:(0,n.jsx)(z.NI,{children:(0,n.jsxs)(p.z,{variant:"outline",role:"combobox",className:(0,D.cn)("justify-between font-normal",!i.value&&"text-muted-foreground"),children:[i.value?null==a?void 0:null===(r=a.find(e=>e.node.id===i.value))||void 0===r?void 0:null===(t=r.node)||void 0===t?void 0:t.gitUrl:"Select repository",(0,n.jsx)(j.IconChevronUpDown,{})]})})}),(0,n.jsx)(A.yk,{className:"w-[var(--radix-popover-trigger-width)] p-0",align:"start",side:"bottom",children:(0,n.jsxs)(k.mY,{className:"transition-all",children:[(0,n.jsx)(k.sZ,{placeholder:"Search repository...",onValueChange:b}),(0,n.jsxs)(k.e8,{className:"max-h-[30vh]",ref:v,children:[(0,n.jsx)(k.rb,{children:d?(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(j.IconSpinner,{className:"h-6 w-6"})}):h}),(0,n.jsx)(k.fu,{children:o!==l.zo.Pending&&(null==a?void 0:a.map(e=>(0,n.jsxs)(k.di,{onSelect:()=>{m.setValue("id",e.node.id),u(!1)},children:[(0,n.jsx)(j.IconCheck,{className:(0,D.cn)("mr-2",e.node.id===i.value?"opacity-100":"opacity-0")}),e.node.gitUrl]},e.node.id)))})]})]})})]}),(0,n.jsx)(z.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)(p.z,{type:"button",variant:"ghost",disabled:x,onClick:s,children:"Cancel"}),(0,n.jsx)(p.z,{type:"submit",disabled:x,children:"Add"})]})]}),(0,n.jsx)(z.zG,{className:"text-center"})]})})}var G=r(52671);let Z=(0,b.BX)("\n  mutation DeleteGithubRepositoryProvider($id: ID!) {\n    deleteGithubRepositoryProvider(id: $id)\n  }\n"),E=(0,b.BX)("\n  mutation UpdateGithubRepositoryProvider(\n    $input: UpdateRepositoryProviderInput!\n  ) {\n    updateGithubRepositoryProvider(input: $input)\n  }\n"),O=e=>{let{defaultValues:t,onSuccess:r,onDelete:i,onUpdate:l,id:s}=e,a=(0,G.fB)(!1,t),d=(0,f.D)(Z),c=(0,f.D)(E,{form:a,onCompleted(e){(null==e?void 0:e.updateGithubRepositoryProvider)&&(o.A.success("Updated GitHub repository provider successfully"),null==a||a.reset(null==a?void 0:a.getValues()),null==r||r())}}),u=async e=>{var t;let r=await c({input:{id:s,...e}});(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.updateGithubRepositoryProvider)&&(null==l||l())},m=async()=>{var e,t;let r=await d({id:s});(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.deleteGithubRepositoryProvider)?null==i||i():o.A.error((null==r?void 0:null===(t=r.error)||void 0===t?void 0:t.message)||"Failed to delete GitHub repository provider")};return(0,n.jsx)(G.Kb,{onSubmit:u,onDelete:m,deletable:!0,cancleable:!1,form:a,isNew:!1})},Y=c.L8,V=e=>{var t,r;let{providerStatus:s,providerId:a}=e,[c,v]=i.useState(1),{repositories:x,setRepositories:y,isAllLoaded:b}=function(e){let[t,r]=(0,i.useState)({providerIds:[e],first:Y,active:!1}),[n,l]=(0,i.useState)([]),[s,a]=(0,i.useState)(!e),[{data:o,fetching:c}]=(0,d.aM)({query:m.Vt,variables:t,pause:!e});return(0,i.useEffect)(()=>{if(!s&&!c&&o){var t,i;let s=null==o?void 0:null===(t=o.githubRepositories)||void 0===t?void 0:t.pageInfo,d=[...n];l(d.concat(null==o?void 0:null===(i=o.githubRepositories)||void 0===i?void 0:i.edges)),(null==s?void 0:s.hasNextPage)?r({providerIds:[e],first:Y,after:s.endCursor,active:!1}):a(!0)}},[c,o]),{repositories:n,setRepositories:l,isAllLoaded:s}}(a),R=e=>f.L.query(m.Vt,e).toPromise(),C=async(e,t)=>{var r,n;let i=await R({providerIds:[a],first:Y,after:t,active:!0}),l=null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(r=n.githubRepositories)||void 0===r?void 0:r.pageInfo;return e-1>0&&(null==l?void 0:l.hasNextPage)&&(null==l?void 0:l.endCursor)?C(e-1,l.endCursor):null==i?void 0:i.data},[S,P]=i.useState(),[D,k]=i.useState(!0),[z,A]=i.useState([]),I=null==S?void 0:null===(t=S.githubRepositories)||void 0===t?void 0:t.edges,G=null==S?void 0:null===(r=S.githubRepositories)||void 0===r?void 0:r.pageInfo,Z=(0,f.D)(w,{onError(e){o.A.error(e.message||"Failed to delete")}}),E=async(e,t)=>{Z({id:e.node.id,active:!1}).then(r=>{var n;if(null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.updateGithubProvidedRepositoryActive){y($([...x,e]));let r=t?c-1:c;O(r||1)}})},O=async e=>{try{k(!0);let t=await C(e);P(t),v(e)}catch(e){}finally{k(!1)}},V=(0,u.S)(e=>{A([]),O(e)},3e3),[L,U]=i.useState(!1),$=e=>(null==e?void 0:e.length)?e.sort((e,t)=>{var r;return null===(r=e.node.name)||void 0===r?void 0:r.localeCompare(t.node.name)}):e,F=e=>{V.cancel(),A([]),O(e)};return i.useEffect(()=>(O(1),()=>{V.cancel()}),[]),(0,n.jsxs)(N.Z,{loading:D,children:[(0,n.jsxs)(g.iA,{children:[(0,n.jsx)(g.xD,{children:(0,n.jsxs)(g.SC,{children:[(0,n.jsx)(g.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(g.ss,{className:"w-[45%]",children:"URL"}),(0,n.jsx)(g.ss,{className:"text-right",children:(0,n.jsxs)(h.Vq,{open:L,onOpenChange:U,children:[(0,n.jsxs)(h.cZ,{className:"top-[20vh]",children:[(0,n.jsxs)(h.fK,{className:"gap-3",children:[(0,n.jsx)(h.$N,{children:"Add new repository"}),(0,n.jsx)(h.Be,{children:"Add new GitHub repository from this provider"})]}),(0,n.jsx)(_,{onCancel:()=>U(!1),onCreated:e=>{let t=null==x?void 0:x.find(t=>{var r;return(null==t?void 0:null===(r=t.node)||void 0===r?void 0:r.id)===e});t&&(A([t,...z]),y(t=>$(t.filter(t=>t.node.id!==e))),V.run(c)),U(!1)},repositories:x,kind:l.vW.Github,providerStatus:s,fetchingRepos:!b})]}),(0,n.jsx)(h.hg,{asChild:!0,children:(0,n.jsx)(p.z,{variant:"ghost",size:"icon",children:(0,n.jsx)(j.IconPlus,{})})})]})})]})}),(0,n.jsx)(g.RM,{children:(null==I?void 0:I.length)||(null==z?void 0:z.length)?(0,n.jsxs)(n.Fragment,{children:[null==z?void 0:z.map(e=>(0,n.jsxs)(g.SC,{className:"!bg-muted/80",children:[(0,n.jsx)(g.pj,{children:e.node.name}),(0,n.jsx)(g.pj,{children:e.node.gitUrl}),(0,n.jsx)(g.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:(0,p.d)({variant:"ghost",size:"icon"}),children:(0,n.jsx)(j.IconSpinner,{})})})]},e.node.id)),null==I?void 0:I.map(e=>(0,n.jsxs)(g.SC,{children:[(0,n.jsx)(g.pj,{children:e.node.name}),(0,n.jsx)(g.pj,{children:e.node.gitUrl}),(0,n.jsx)(g.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsx)(p.z,{size:"icon",variant:"hover-destructive",onClick:t=>E(e,(null==I?void 0:I.length)===1),children:(0,n.jsx)(j.IconTrash,{})})})})]},e.node.id))]}):(0,n.jsx)(g.SC,{children:(0,n.jsx)(g.pj,{colSpan:3,className:"h-[100px] text-center",children:"No repositories yet."})})})]}),(c>1||(null==G?void 0:G.hasNextPage))&&(0,n.jsxs)("div",{className:"mt-2 flex justify-end",children:[(0,n.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:[" ","Page ",c]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(p.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:D||1===c,onClick:e=>{F(c-1)},children:(0,n.jsx)(j.IconChevronLeft,{className:"h-4 w-4"})}),(0,n.jsx)(p.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:D||!(null==G?void 0:G.hasNextPage),onClick:e=>{F(c+1)},children:(0,n.jsx)(j.IconChevronRight,{className:"h-4 w-4"})})]})]})]})};var L=()=>{var e,t,r,i,s;let o=(0,a.useSearchParams)(),c=(0,a.useRouter)(),u=null!==(s=null===(e=o.get("id"))||void 0===e?void 0:e.toString())&&void 0!==s?s:"",[{data:f,fetching:h},g]=(0,d.aM)({query:m.hC,variables:{ids:[u]},pause:!u}),b=null==f?void 0:null===(i=f.githubRepositoryProviders)||void 0===i?void 0:null===(r=i.edges)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.node;return u&&(!u||h||b)?(0,n.jsxs)(N.Z,{loading:h,children:[(0,n.jsxs)(x.ll,{className:"flex items-center gap-4",children:[(0,n.jsxs)("div",{className:"-ml-2.5 flex items-center",children:[(0,n.jsx)(p.z,{onClick:()=>c.back(),variant:"ghost",className:"h-6 px-1",children:(0,n.jsx)(j.IconChevronLeft,{className:"h-5 w-5"})}),(0,n.jsx)("span",{className:"ml-1",children:null==b?void 0:b.displayName})]}),(0,n.jsx)("div",{className:"flex items-center gap-2 text-base",children:(0,n.jsx)("div",{className:"ml-1",children:b&&function(e){switch(e){case l.zo.Ready:return(0,n.jsx)(v.C,{variant:"successful",children:"Ready"});case l.zo.Failed:return(0,n.jsx)(v.C,{variant:"destructive",children:"Error"});case l.zo.Pending:return(0,n.jsx)(v.C,{children:"Pending"})}}(b.status)})})]}),(0,n.jsx)(x.aY,{className:"mt-8",children:(0,n.jsx)(N.Z,{loading:h,fallback:(0,n.jsx)(y.cg,{}),children:(0,n.jsx)(O,{defaultValues:b,onDelete:()=>{c.back()},onUpdate:()=>{g()},id:u})})}),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)(V,{providerStatus:null==b?void 0:b.status,providerId:u})})]}):(0,n.jsx)("div",{className:"flex h-[250px] w-full items-center justify-center rounded-lg border",children:"Provider not found"})};let U=(0,b.BX)("\n  mutation DeleteGitlabRepositoryProvider($id: ID!) {\n    deleteGitlabRepositoryProvider(id: $id)\n  }\n"),$=(0,b.BX)("\n  mutation UpdateGitlabRepositoryProvider(\n    $input: UpdateRepositoryProviderInput!\n  ) {\n    updateGitlabRepositoryProvider(input: $input)\n  }\n"),F=e=>{let{defaultValues:t,onSuccess:r,onDelete:i,onUpdate:l,id:s}=e,a=(0,G.fB)(!1,t),d=(0,f.D)(U),c=(0,f.D)($,{form:a,onCompleted(e){(null==e?void 0:e.updateGitlabRepositoryProvider)&&(o.A.success("Updated GitLab repository provider successfully"),null==a||a.reset(null==a?void 0:a.getValues()),null==r||r())}}),u=async e=>{var t;let r=await c({input:{id:s,...e}});(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.updateGitlabRepositoryProvider)&&(null==l||l())},m=async()=>{var e,t;let r=await d({id:s});(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.deleteGitlabRepositoryProvider)?null==i||i():o.A.error((null==r?void 0:null===(t=r.error)||void 0===t?void 0:t.message)||"Failed to delete GitLab repository provider")};return(0,n.jsx)(G.Kb,{onSubmit:u,onDelete:m,deletable:!0,cancleable:!1,form:a,isNew:!1})},B=e=>{var t,r;let{onDelete:s,providerStatus:a,providerId:v}=e,[x,y]=i.useState(1),{repositories:b,setRepositories:w,isAllLoaded:C}=function(e){let[t,r]=(0,i.useState)({providerIds:[e],first:c.L8,active:!1}),[n,l]=(0,i.useState)([]),[s,a]=(0,i.useState)(!e),[{data:o,fetching:u}]=(0,d.aM)({query:m.Zr,variables:t,pause:!e});return(0,i.useEffect)(()=>{if(!s&&!u&&o){var t;let n=null==o?void 0:null===(t=o.gitlabRepositories)||void 0===t?void 0:t.pageInfo;(null==n?void 0:n.hasNextPage)?r({providerIds:[e],first:c.L8,after:n.endCursor,active:!1}):a(!0)}},[u,o]),{repositories:n,setRepositories:l,isAllLoaded:s}}(v),S=e=>f.L.query(m.Zr,e).toPromise(),P=async(e,t)=>{var r,n;let i=await S({providerIds:[v],first:c.L8,after:t,active:!0}),l=null==i?void 0:null===(n=i.data)||void 0===n?void 0:null===(r=n.gitlabRepositories)||void 0===r?void 0:r.pageInfo;return e-1>0&&(null==l?void 0:l.hasNextPage)&&(null==l?void 0:l.endCursor)?P(e-1,l.endCursor):null==i?void 0:i.data},[D,k]=i.useState(),[z,A]=i.useState(!0),[I,G]=i.useState([]),Z=null==D?void 0:null===(t=D.gitlabRepositories)||void 0===t?void 0:t.edges,E=null==D?void 0:null===(r=D.gitlabRepositories)||void 0===r?void 0:r.pageInfo,O=(0,f.D)(R,{onError(e){o.A.error(e.message||"Failed to delete")}}),Y=async(e,t)=>{O({id:e.node.id,active:!1}).then(r=>{var n;if(null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.updateGitlabProvidedRepositoryActive){w(F([...b,e]));let r=t?x-1:x;V(r||1)}})},V=async e=>{try{A(!0);let t=await P(e);k(t),y(e)}catch(e){}finally{A(!1)}},L=(0,u.S)(e=>{G([]),V(e)},3e3),[U,$]=i.useState(!1),F=e=>(null==e?void 0:e.length)?e.sort((e,t)=>{var r;return null===(r=e.node.name)||void 0===r?void 0:r.localeCompare(t.node.name)}):e,B=e=>{L.cancel(),G([]),V(e)};return i.useEffect(()=>(V(1),()=>{L.cancel()}),[]),(0,n.jsxs)(N.Z,{loading:z,children:[(0,n.jsxs)(g.iA,{children:[(0,n.jsx)(g.xD,{children:(0,n.jsxs)(g.SC,{children:[(0,n.jsx)(g.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(g.ss,{className:"w-[45%]",children:"URL"}),(0,n.jsx)(g.ss,{className:"text-right",children:(0,n.jsxs)(h.Vq,{open:U,onOpenChange:$,children:[(0,n.jsxs)(h.cZ,{children:[(0,n.jsxs)(h.fK,{className:"gap-3",children:[(0,n.jsx)(h.$N,{children:"Add new repository"}),(0,n.jsx)(h.Be,{children:"Add new GitLab repository from this provider"})]}),(0,n.jsx)(_,{onCancel:()=>$(!1),onCreated:e=>{let t=null==b?void 0:b.find(t=>{var r;return(null==t?void 0:null===(r=t.node)||void 0===r?void 0:r.id)===e});t&&(G([t,...I]),w(t=>F(t.filter(t=>t.node.id!==e))),L.run(x)),$(!1)},repositories:b,kind:l.vW.Gitlab,providerStatus:a,fetchingRepos:!C})]}),(0,n.jsx)(h.hg,{asChild:!0,children:(0,n.jsx)(p.z,{variant:"ghost",size:"icon",children:(0,n.jsx)(j.IconPlus,{})})})]})})]})}),(0,n.jsx)(g.RM,{children:(null==Z?void 0:Z.length)||(null==I?void 0:I.length)?(0,n.jsxs)(n.Fragment,{children:[null==I?void 0:I.map(e=>(0,n.jsxs)(g.SC,{className:"!bg-muted/80",children:[(0,n.jsx)(g.pj,{children:e.node.name}),(0,n.jsx)(g.pj,{children:e.node.gitUrl}),(0,n.jsx)(g.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:(0,p.d)({variant:"ghost",size:"icon"}),children:(0,n.jsx)(j.IconSpinner,{})})})]},e.node.id)),null==Z?void 0:Z.map(e=>(0,n.jsxs)(g.SC,{children:[(0,n.jsx)(g.pj,{children:e.node.name}),(0,n.jsx)(g.pj,{children:e.node.gitUrl}),(0,n.jsx)(g.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsx)(p.z,{size:"icon",variant:"hover-destructive",onClick:t=>Y(e),children:(0,n.jsx)(j.IconTrash,{})})})})]},e.node.id))]}):(0,n.jsx)(g.SC,{children:(0,n.jsx)(g.pj,{colSpan:3,className:"h-[100px] text-center",children:"No repositories yet."})})})]}),(x>1||(null==E?void 0:E.hasNextPage))&&(0,n.jsxs)("div",{className:"mt-2 flex justify-end",children:[(0,n.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:[" ","Page ",x]}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(p.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:z||1===x,onClick:e=>{B(x-1)},children:(0,n.jsx)(j.IconChevronLeft,{className:"h-4 w-4"})}),(0,n.jsx)(p.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:z||!(null==E?void 0:E.hasNextPage),onClick:e=>{B(x+1)},children:(0,n.jsx)(j.IconChevronRight,{className:"h-4 w-4"})})]})]})]})};var T=()=>{var e,t,r,i,s;let o=(0,a.useSearchParams)(),c=(0,a.useRouter)(),u=null!==(s=null===(e=o.get("id"))||void 0===e?void 0:e.toString())&&void 0!==s?s:"",[{data:f,fetching:h},g]=(0,d.aM)({query:m.cO,variables:{ids:[u]},pause:!u}),b=null==f?void 0:null===(i=f.gitlabRepositoryProviders)||void 0===i?void 0:null===(r=i.edges)||void 0===r?void 0:null===(t=r[0])||void 0===t?void 0:t.node;return u&&(!u||h||b)?(0,n.jsxs)(N.Z,{loading:h,children:[(0,n.jsxs)(x.ll,{className:"flex items-center gap-4",children:[(0,n.jsxs)("div",{className:"-ml-2.5 flex items-center",children:[(0,n.jsx)(p.z,{onClick:()=>c.back(),variant:"ghost",className:"h-6 px-1",children:(0,n.jsx)(j.IconChevronLeft,{className:"h-5 w-5"})}),(0,n.jsx)("span",{className:"ml-1",children:null==b?void 0:b.displayName})]}),(0,n.jsx)("div",{className:"flex items-center gap-2 text-base",children:(0,n.jsx)("div",{className:"ml-1",children:b&&function(e){switch(e){case l.zo.Ready:return(0,n.jsx)(v.C,{variant:"successful",children:"Ready"});case l.zo.Failed:return(0,n.jsx)(v.C,{variant:"destructive",children:"Error"});case l.zo.Pending:return(0,n.jsx)(v.C,{children:"Pending"})}}(b.status)})})]}),(0,n.jsx)(x.aY,{className:"mt-8",children:(0,n.jsx)(N.Z,{loading:h,fallback:(0,n.jsx)(y.cg,{}),children:(0,n.jsx)(F,{defaultValues:b,onDelete:()=>{c.back()},onUpdate:()=>{g()},id:u})})}),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)(B,{providerId:u,providerStatus:null==b?void 0:b.status})})]}):(0,n.jsx)("div",{className:"flex h-[250px] w-full items-center justify-center rounded-lg border",children:"Provider not found"})},M=()=>{let e=(0,s.Y)();return e===l.vW.Github?(0,n.jsx)(L,{}):e===l.vW.Gitlab?(0,n.jsx)(T,{}):(0,n.jsx)("div",{children:"404"})}},6230:function(e,t,r){"use strict";var n=r(36164),i=r(3546),l=r(24449),s=r(90379);t.Z=e=>{let{loading:t,fallback:r,delay:a,children:o}=e,[d,c]=i.useState(!t),[u]=(0,l.n)(d,null!=a?a:200);return(i.useEffect(()=>{t||d||c(!0)},[t]),u)?o:r||(0,n.jsx)(s.cg,{})}},90379:function(e,t,r){"use strict";r.d(t,{PF:function(){return o},cg:function(){return s},tB:function(){return a}});var n=r(36164),i=r(74248),l=r(3448);let s=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,i.cn)("space-y-3",t),...r,children:[(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-full"})]})},a=e=>{let{className:t,...r}=e;return(0,n.jsx)(l.O,{className:(0,i.cn)("h-4 w-full",t),...r})},o=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-3",t),...r,children:[(0,n.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(l.O,{className:"h-4 w-full"}),(0,n.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(l.O,{className:"h-4 w-full"})]})}},63795:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var n=r(36164);r(3546);var i=r(14375),l=r(74248);let s=(0,i.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function a(e){let{className:t,variant:r,...i}=e;return(0,n.jsx)("div",{className:(0,l.cn)(s({variant:r}),t),...i})}},79972:function(e,t,r){"use strict";r.d(t,{Ol:function(){return a},Zb:function(){return s},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var n=r(36164),i=r(3546),l=r(74248);let s=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...i})});s.displayName="Card";let a=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...i})});a.displayName="CardHeader";let o=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...i})});o.displayName="CardTitle";let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...i})});d.displayName="CardDescription";let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...i})});c.displayName="CardContent";let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...i})});u.displayName="CardFooter"},36065:function(e,t,r){"use strict";r.d(t,{di:function(){return v},e8:function(){return c},fu:function(){return f},mY:function(){return o},rb:function(){return u},sZ:function(){return d},zz:function(){return m}});var n=r(36164),i=r(3546),l=r(4185),s=r(93170),a=r(74248);r(30220);let o=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.mY,{ref:t,className:(0,a.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",r),...i})});o.displayName=l.mY.displayName;let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,n.jsx)(s.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,n.jsx)(l.mY.Input,{ref:t,className:(0,a.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",r),...i})]})});d.displayName=l.mY.Input.displayName;let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.mY.List,{ref:t,className:(0,a.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",r),...i})});c.displayName=l.mY.List.displayName;let u=i.forwardRef((e,t)=>(0,n.jsx)(l.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=l.mY.Empty.displayName;let f=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.mY.Group,{ref:t,className:(0,a.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",r),...i})});f.displayName=l.mY.Group.displayName;let m=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.mY.Separator,{ref:t,className:(0,a.cn)("-mx-1 h-px bg-border",r),...i})});m.displayName=l.mY.Separator.displayName;let v=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.mY.Item,{ref:t,className:(0,a.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",r),...i})});v.displayName=l.mY.Item.displayName},30220:function(e,t,r){"use strict";r.d(t,{$N:function(){return p},Be:function(){return x},Vq:function(){return o},cN:function(){return v},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var n=r(36164),i=r(3546),l=r(82570),s=r(74248),a=r(81565);let o=l.fC,d=l.xz,c=e=>{let{className:t,children:r,...i}=e;return(0,n.jsx)(l.h_,{className:(0,s.cn)(t),...i,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:r})})};c.displayName=l.h_.displayName;let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.aV,{ref:t,className:(0,s.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",r),...i})});u.displayName=l.aV.displayName;let f=i.forwardRef((e,t)=>{let{className:r,children:i,...o}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(l.VY,{ref:t,className:(0,s.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",r),...o,children:[i,(0,n.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(a.IconClose,{}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=l.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};m.displayName="DialogHeader";let v=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,s.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};v.displayName="DialogFooter";let p=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.Dx,{ref:t,className:(0,s.cn)("text-lg font-semibold leading-none tracking-tight",r),...i})});p.displayName=l.Dx.displayName;let x=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.dk,{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...i})});x.displayName=l.dk.displayName},84942:function(e,t,r){"use strict";r.d(t,{J2:function(){return a},i9:function(){return c},tW:function(){return u},xo:function(){return o},xp:function(){return d},yk:function(){return f}});var n=r(36164),i=r(3546),l=r(83299),s=r(74248);let a=l.fC,o=l.xz,d=l.x8,c=l.h_,u=l.ee,f=i.forwardRef((e,t)=>{let{className:r,sideOffset:i=4,...a}=e;return(0,n.jsx)(l.VY,{ref:t,sideOffset:i,className:(0,s.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...a})});f.displayName=l.VY.displayName},3448:function(e,t,r){"use strict";r.d(t,{O:function(){return l}});var n=r(36164),i=r(74248);function l(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...r})}},99047:function(e,t,r){"use strict";r.d(t,{RM:function(){return o},SC:function(){return c},iA:function(){return s},pj:function(){return f},ss:function(){return u},xD:function(){return a}});var n=r(36164),i=r(3546),l=r(74248);let s=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",r),...i})});s.displayName="Table";let a=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",r),...i})});a.displayName="TableHeader";let o=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",r),...i})});o.displayName="TableBody";let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...i})});d.displayName="TableFooter";let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...i})});c.displayName="TableRow";let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...i})});u.displayName="TableHead";let f=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...i})});f.displayName="TableCell";let m=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",r),...i})});m.displayName="TableCaption"},21808:function(e,t,r){"use strict";r.d(t,{$6:function(){return l},L8:function(){return i},o0:function(){return n}});let n="name@yourcompany.com",i=20,l={DEMO_AUTO_LOGIN:"_tabby_demo_autologin"}},24449:function(e,t,r){"use strict";r.d(t,{S:function(){return a},n:function(){return o}});var n=r(3546),i=r(45391),l=r(16784);let s=e=>{let t=(0,l.d)(e);n.useEffect(()=>()=>{t.current()},[])};function a(e,t,r){let a=(0,l.d)(e),o=n.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.current(...t)},t,r),[]);return s(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,r){let[i,l]=n.useState(e),{run:s}=a(()=>{l(e)},t,r);return n.useEffect(()=>{s()},[e]),[i,l]}},16784:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(3546);function i(e){let t=n.useRef(e);return t.current=e,t}},34604:function(e,t,r){"use strict";r.d(t,{$j:function(){return z},Dx:function(){return A},VY:function(){return D},aU:function(){return k},aV:function(){return P},dk:function(){return I},fC:function(){return R},h_:function(){return S},xz:function(){return C}});var n=r(65122),i=r(3546),l=r(47091),s=r(79869),a=r(82570),o=r(65727),d=r(74047);let[c,u]=(0,l.b)("AlertDialog",[a.p8]),f=(0,a.p8)(),m=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,...l}=e,s=f(r);return(0,i.createElement)(a.xz,(0,n.Z)({},s,l,{ref:t}))}),v=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,...l}=e,s=f(r);return(0,i.createElement)(a.aV,(0,n.Z)({},s,l,{ref:t}))}),p="AlertDialogContent",[x,h]=c(p),j=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,children:l,...c}=e,u=f(r),m=(0,i.useRef)(null),v=(0,s.e)(t,m),h=(0,i.useRef)(null);return(0,i.createElement)(a.jm,{contentName:p,titleName:g,docsSlug:"alert-dialog"},(0,i.createElement)(x,{scope:r,cancelRef:h},(0,i.createElement)(a.VY,(0,n.Z)({role:"alertdialog"},u,c,{ref:v,onOpenAutoFocus:(0,o.M)(c.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=h.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),(0,i.createElement)(d.A4,null,l),!1)))}),g="AlertDialogTitle",N=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,...l}=e,s=f(r);return(0,i.createElement)(a.Dx,(0,n.Z)({},s,l,{ref:t}))}),y=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,...l}=e,s=f(r);return(0,i.createElement)(a.dk,(0,n.Z)({},s,l,{ref:t}))}),b=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,...l}=e,s=f(r);return(0,i.createElement)(a.x8,(0,n.Z)({},s,l,{ref:t}))}),w=(0,i.forwardRef)((e,t)=>{let{__scopeAlertDialog:r,...l}=e,{cancelRef:o}=h("AlertDialogCancel",r),d=f(r),c=(0,s.e)(t,o);return(0,i.createElement)(a.x8,(0,n.Z)({},d,l,{ref:c}))}),R=e=>{let{__scopeAlertDialog:t,...r}=e,l=f(t);return(0,i.createElement)(a.fC,(0,n.Z)({},l,r,{modal:!0}))},C=m,S=e=>{let{__scopeAlertDialog:t,...r}=e,l=f(t);return(0,i.createElement)(a.h_,(0,n.Z)({},l,r))},P=v,D=j,k=b,z=w,A=N,I=y},54549:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=function(e,t,r,n){for(var i=e.length,l=r+(n?1:-1);n?l--:++l<i;)if(t(e[l],l,e))return l;return -1},i=r(90830),l=r(59348),s=1/0,a=function(e){var t,r=(t=e)?(t=(0,l.Z)(t))===s||t===-s?(t<0?-1:1)*17976931348623157e292:t==t?t:0:0===t?t:0,n=r%1;return r==r?n?r-n:r:0},o=Math.max,d=function(e,t,r){var l=null==e?0:e.length;if(!l)return -1;var s=null==r?0:a(r);return s<0&&(s=o(l+s,0)),n(e,(0,i.Z)(t,3),s)}},94909:function(e,t,r){"use strict";var n=r(63563),i=r(64134),l=r(97589),s=r(38813),a=r(20568),o=r(90328),d=r(36586),c=r(33321),u=Object.prototype.hasOwnProperty;t.Z=function(e){if(null==e)return!0;if((0,a.Z)(e)&&((0,s.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,o.Z)(e)||(0,c.Z)(e)||(0,l.Z)(e)))return!e.length;var t=(0,i.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,d.Z)(e))return!(0,n.Z)(e).length;for(var r in e)if(u.call(e,r))return!1;return!0}}},function(e){e.O(0,[872,55,3004,2178,652,6201,2578,3449,9421,240,4553,3882,830,2570,3299,7845,9736,1565,3396,2671,3375,5289,1744],function(){return e(e.s=12070)}),_N_E=e.O()}]);