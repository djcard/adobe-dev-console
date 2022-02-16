(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[381],{88752:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return b}});var i=t(22122),n=t(19756),o=(t(15007),t(64983)),s=t(99536),c=["components"],p={},d={_frontmatter:p},r=s.Z;function b(e){var a=e.components,t=(0,n.Z)(e,c);return(0,o.mdx)(r,(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-a-public-key-certificate"},"Create a Public Key Certificate"),(0,o.mdx)("p",null,"Create a private key and a public certificate. Make sure you store these securely."),(0,o.mdx)("h2",{id:"macos-and-linux"},"MacOS and Linux:"),(0,o.mdx)("p",null,"Open a terminal and execute the following command:  "),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"952px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.874999999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/cb523/auth_jwtqs_00.webp 320w","/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/797b9/auth_jwtqs_00.webp 640w","/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/74b1b/auth_jwtqs_00.webp 952w"],sizes:"(max-width: 952px) 100vw, 952px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/72799/auth_jwtqs_00.png 320w","/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/6af66/auth_jwtqs_00.png 640w","/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/7e4a6/auth_jwtqs_00.png 952w"],sizes:"(max-width: 952px) 100vw, 952px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/7e050dbf949ef46103bcc87907b9d095/7e4a6/auth_jwtqs_00.png",alt:"Generate public certificate",title:"Generate Public certificate",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"windows"},"Windows:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Download an OpenSSL client to generate public certificates; for example, you can try the ",(0,o.mdx)("a",{parentName:"p",href:"https://bintray.com/vszakats/generic/download_file?file_path=openssl-1.1.1-win64-mingw.zip"},"OpenSSL Windows client"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Extract the folder and copy it to the ",(0,o.mdx)("strong",{parentName:"p"},"C:/libs/")," location.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Open a command-line window and execute the following commands:  "),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"set OPENSSL_CONF=C:/libs/openssl-1.1.1-win64-mingw/openssl.cnf  \n\ncd C:/libs/openssl-1.1.1-win64-mingw/  \n\nopenssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt\n")),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1148px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/cb523/auth_jwtqs_000.webp 320w","/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/797b9/auth_jwtqs_000.webp 640w","/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/dd193/auth_jwtqs_000.webp 1148w"],sizes:"(max-width: 1148px) 100vw, 1148px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/72799/auth_jwtqs_000.png 320w","/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/6af66/auth_jwtqs_000.png 640w","/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/e6c84/auth_jwtqs_000.png 1148w"],sizes:"(max-width: 1148px) 100vw, 1148px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/18591f8a309b8db67debe66a1e2cb0f6/e6c84/auth_jwtqs_000.png",alt:"Generate public certificate windows",title:"Generate Public certificate windows",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Once you","’","ve completed the steps for your chosen platform, continue in the Adobe Developer Console."))),(0,o.mdx)("h2",{id:"using-the-public-key-certificate-for-service-account-integration"},"Using the Public Key Certificate for Service Account Integration"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Upload the public certificate (certificate_pub.crt) as a part of creating the integration."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/cb523/auth_jwtqs_03.webp 320w","/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/797b9/auth_jwtqs_03.webp 640w","/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/4b075/auth_jwtqs_03.webp 1280w","/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/32645/auth_jwtqs_03.webp 1546w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/72799/auth_jwtqs_03.png 320w","/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/6af66/auth_jwtqs_03.png 640w","/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/21b4d/auth_jwtqs_03.png 1280w","/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/61946/auth_jwtqs_03.png 1546w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/67a5c2082b940abafde2234bfc3220a1/21b4d/auth_jwtqs_03.png",alt:"Upload public certificate",title:"Upload public certificate",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Your integration should now be created with the appropriate public certificate and claims."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/cb523/auth_jwtqs_04.webp 320w","/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/797b9/auth_jwtqs_04.webp 640w","/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/4b075/auth_jwtqs_04.webp 1280w","/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/72851/auth_jwtqs_04.webp 1560w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/72799/auth_jwtqs_04.png 320w","/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/6af66/auth_jwtqs_04.png 640w","/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/21b4d/auth_jwtqs_04.png 1280w","/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/9f9a4/auth_jwtqs_04.png 1560w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/76ca1448bf3fe0481363611fcb7822a6/21b4d/auth_jwtqs_04.png",alt:"Integration created",title:"Integration created",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-jwt-jwt-certificate-md-e2f07e97703efc3cb637.js.map