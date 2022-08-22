"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                //   const res = await fetch(\"/api/hello\", {\n                //     method: 'POST',\n                //     body: JSON.stringify(credentials),\n                //     headers: { \"Content-Type\": \"application/json\" }\n                //   })\n                //   const user = await res.json()\n                if (credentials.username) {\n                    return credentials;\n                }\n                return null;\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"43069097925-1m5897b4orld2a2jm0nfo7qppeij3c61.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user , account , profile , email , credentials  }) {\n            console.log(\"signIn >>> \", user);\n            return true;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (user) {\n                return user;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            session.token = token;\n            session.user.name = token.username;\n            session.user.email = token.username;\n            console.log(\"session >>>>\", session);\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60,\n        updateAge: 24 * 60 * 60\n    },\n    jwt: {\n        secret: \"Jv11wAGBRVhHP2zEIGcwlzhjjoUS8RKdgTbsmGjATtY=\",\n        encription: true\n    },\n    secret: \"Jv11wAGBRVhHP2zEIGcwlzhjjoUS8RKdgTbsmGjATtY=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDd0I7QUFDVTtBQUdsRSxpRUFBZUEsZ0RBQVEsQ0FBQztJQUNwQkcsU0FBUyxFQUFFO1FBQ1BELHNFQUFtQixDQUFDO1lBQ2hCLG1FQUFtRTtZQUNuRUUsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFdBQVcsRUFBRTtnQkFDVEMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLE1BQU07b0JBQUVDLFdBQVcsRUFBRSxRQUFRO2lCQUFFO2dCQUNwRUMsUUFBUSxFQUFFO29CQUFHSCxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLFVBQVU7aUJBQUU7YUFDckQ7WUFDRCxNQUFNRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFO2dCQUVsQyw0Q0FBNEM7Z0JBQzVDLHNCQUFzQjtnQkFDdEIseUNBQXlDO2dCQUN6QyxzREFBc0Q7Z0JBQ3RELE9BQU87Z0JBQ1Asa0NBQWtDO2dCQUVoQyxJQUFJUCxXQUFXLENBQUNDLFFBQVEsRUFBRTtvQkFDeEIsT0FBT0QsV0FBVztpQkFDbkI7Z0JBQ0QsT0FBTyxJQUFJO2FBQ1o7U0FDSixDQUFDO1FBQ0ZKLGlFQUFjLENBQUM7WUFDWFksUUFBUSxFQUFFQyx5RUFBNEI7WUFDdENHLFlBQVksRUFBRUgscUNBQWdDO1NBQ2pELENBQUM7S0FDTDtJQUNESyxTQUFTLEVBQUU7UUFDUCxNQUFNQyxNQUFNLEVBQUMsRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRUMsS0FBSyxHQUFFbkIsV0FBVyxHQUFFLEVBQUU7WUFDekRvQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVMLElBQUksQ0FBQztZQUNoQyxPQUFPLElBQUk7U0FDZDtRQUNELE1BQU1NLEdBQUcsRUFBQyxFQUFFQyxLQUFLLEdBQUVQLElBQUksR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUVNLFNBQVMsR0FBRSxFQUFFO1lBQ3BELElBQUdSLElBQUksRUFBQztnQkFDSixPQUFPQSxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU9PLEtBQUssQ0FBQztTQUNoQjtRQUNELE1BQU1FLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVGLEtBQUssR0FBRVAsSUFBSSxHQUFFLEVBQUU7WUFFcENTLE9BQU8sQ0FBQ0YsS0FBSyxHQUFHQSxLQUFLLENBQUM7WUFDdEJFLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDakIsSUFBSSxHQUFHd0IsS0FBSyxDQUFDdEIsUUFBUSxDQUFDO1lBQ25Dd0IsT0FBTyxDQUFDVCxJQUFJLENBQUNHLEtBQUssR0FBR0ksS0FBSyxDQUFDdEIsUUFBUSxDQUFDO1lBRXBDbUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFSSxPQUFPLENBQUM7WUFFcEMsT0FBT0EsT0FBTztTQUNqQjtLQUNKO0lBQ0RBLE9BQU8sRUFBRTtRQUNMQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUN6QkMsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtLQUMxQjtJQUNETixHQUFHLEVBQUU7UUFDRE8sTUFBTSxFQUFFcEIsOENBQTJCO1FBQ25Dc0IsVUFBVSxFQUFFLElBQUk7S0FDbkI7SUFDREYsTUFBTSxFQUFFcEIsOENBQTJCO0NBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gJ1NpZ24gaW4gd2l0aC4uLicpXHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwianNtaXRoXCIgfSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7ICBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9oZWxsb1wiLCB7XHJcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKSxcclxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxyXG4gICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoY3JlZGVudGlhbHMudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVkZW50aWFsc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzIH0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaWduSW4gPj4+IFwiLCB1c2VyKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XHJcbiAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuXHJcbiAgICAgICAgICAgIHNlc3Npb24udG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi51c2VybmFtZTtcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4udXNlcm5hbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gPj4+PlwiLCBzZXNzaW9uKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlc3Npb246IHtcclxuICAgICAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICAgICAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXHJcbiAgICAgICAgdXBkYXRlQWdlOiAyNCAqIDYwICogNjAsIC8vIDI0IGhvdXJzXHJcbiAgICB9LFxyXG4gICAgand0OiB7XHJcbiAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgICAgICAgZW5jcmlwdGlvbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJqd3QiLCJ0b2tlbiIsImlzTmV3VXNlciIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsInVwZGF0ZUFnZSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImVuY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();