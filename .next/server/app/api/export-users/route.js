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
exports.id = "app/api/export-users/route";
exports.ids = ["app/api/export-users/route"];
exports.modules = {

/***/ "(rsc)/./app/api/export-users/route.js":
/*!***************************************!*\
  !*** ./app/api/export-users/route.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _backend_lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/backend/lib/db */ \"(rsc)/./backend/lib/db.js\");\n/* harmony import */ var _backend_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/backend/models/User */ \"(rsc)/./backend/models/User.js\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ \"(rsc)/./node_modules/xlsx/xlsx.mjs\");\n\n // MongoDB Connection\n // User Model\n\nasync function POST(req) {\n    try {\n        await (0,_backend_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // ✅ Connect to MongoDB\n        const { password } = await req.json(); // Get password from request body\n        const ADMIN_PASSWORD = \"ydp2021!\"; // 🔒 Change this to a secure value\n        // ✅ Check if password is correct\n        if (password !== ADMIN_PASSWORD) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized: Incorrect password\"\n            }, {\n                status: 401\n            });\n        }\n        const users = await _backend_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({}).lean(); // Fetch users from MongoDB\n        if (users.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"No users found\"\n            }, {\n                status: 404\n            });\n        }\n        // Convert data to Excel format\n        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.json_to_sheet(users);\n        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.book_new();\n        xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.book_append_sheet(workbook, worksheet, \"Users\");\n        // Convert workbook to buffer\n        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__.write(workbook, {\n            bookType: \"xlsx\",\n            type: \"buffer\"\n        });\n        // Return Excel file\n        return new Response(excelBuffer, {\n            headers: {\n                \"Content-Type\": \"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\",\n                \"Content-Disposition\": \"attachment; filename=users.xlsx\"\n            }\n        });\n    } catch (error) {\n        console.error(\"❌ Error exporting users:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2V4cG9ydC11c2Vycy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNGLENBQUMscUJBQXFCO0FBQ3RCLENBQUMsYUFBYTtBQUMxQjtBQUV0QixlQUFlSSxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNSiwyREFBU0EsSUFBSSx1QkFBdUI7UUFFMUMsTUFBTSxFQUFFSyxRQUFRLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJLElBQUksaUNBQWlDO1FBQ3hFLE1BQU1DLGlCQUFpQixZQUFZLG1DQUFtQztRQUV0RSxpQ0FBaUM7UUFDakMsSUFBSUYsYUFBYUUsZ0JBQWdCO1lBQy9CLE9BQU9SLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQUVFLFNBQVM7WUFBbUMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzFGO1FBRUEsTUFBTUMsUUFBUSxNQUFNVCw0REFBSUEsQ0FBQ1UsSUFBSSxDQUFDLENBQUMsR0FBR0MsSUFBSSxJQUFJLDJCQUEyQjtRQUVyRSxJQUFJRixNQUFNRyxNQUFNLEtBQUssR0FBRztZQUN0QixPQUFPZCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFRSxTQUFTO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN4RTtRQUVBLCtCQUErQjtRQUMvQixNQUFNSyxZQUFZWix1Q0FBVSxDQUFDYyxhQUFhLENBQUNOO1FBQzNDLE1BQU1PLFdBQVdmLHVDQUFVLENBQUNnQixRQUFRO1FBQ3BDaEIsdUNBQVUsQ0FBQ2lCLGlCQUFpQixDQUFDRixVQUFVSCxXQUFXO1FBRWxELDZCQUE2QjtRQUM3QixNQUFNTSxjQUFjbEIsdUNBQVUsQ0FBQ2UsVUFBVTtZQUFFSyxVQUFVO1lBQVFDLE1BQU07UUFBUztRQUU1RSxvQkFBb0I7UUFDcEIsT0FBTyxJQUFJQyxTQUFTSixhQUFhO1lBQy9CSyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsdUJBQXVCO1lBQ3pCO1FBQ0Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTzNCLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUUsU0FBUztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDkxODYxXFxEZXNrdG9wXFx5ZHAgZmluaXNoIDIyMjIyMlxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxcYXBwXFxhcGlcXGV4cG9ydC11c2Vyc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCJAL2JhY2tlbmQvbGliL2RiXCI7IC8vIE1vbmdvREIgQ29ubmVjdGlvblxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvYmFja2VuZC9tb2RlbHMvVXNlclwiOyAvLyBVc2VyIE1vZGVsXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGF3YWl0IGNvbm5lY3REQigpOyAvLyDinIUgQ29ubmVjdCB0byBNb25nb0RCXG5cbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpOyAvLyBHZXQgcGFzc3dvcmQgZnJvbSByZXF1ZXN0IGJvZHlcbiAgICBjb25zdCBBRE1JTl9QQVNTV09SRCA9IFwieWRwMjAyMSFcIjsgLy8g8J+UkiBDaGFuZ2UgdGhpcyB0byBhIHNlY3VyZSB2YWx1ZVxuXG4gICAgLy8g4pyFIENoZWNrIGlmIHBhc3N3b3JkIGlzIGNvcnJlY3RcbiAgICBpZiAocGFzc3dvcmQgIT09IEFETUlOX1BBU1NXT1JEKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZDogSW5jb3JyZWN0IHBhc3N3b3JkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZCh7fSkubGVhbigpOyAvLyBGZXRjaCB1c2VycyBmcm9tIE1vbmdvREJcblxuICAgIGlmICh1c2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiTm8gdXNlcnMgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgZGF0YSB0byBFeGNlbCBmb3JtYXRcbiAgICBjb25zdCB3b3Jrc2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQodXNlcnMpO1xuICAgIGNvbnN0IHdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya2Jvb2ssIHdvcmtzaGVldCwgXCJVc2Vyc1wiKTtcblxuICAgIC8vIENvbnZlcnQgd29ya2Jvb2sgdG8gYnVmZmVyXG4gICAgY29uc3QgZXhjZWxCdWZmZXIgPSBYTFNYLndyaXRlKHdvcmtib29rLCB7IGJvb2tUeXBlOiBcInhsc3hcIiwgdHlwZTogXCJidWZmZXJcIiB9KTtcblxuICAgIC8vIFJldHVybiBFeGNlbCBmaWxlXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShleGNlbEJ1ZmZlciwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0XCIsXG4gICAgICAgIFwiQ29udGVudC1EaXNwb3NpdGlvblwiOiBcImF0dGFjaG1lbnQ7IGZpbGVuYW1lPXVzZXJzLnhsc3hcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBFcnJvciBleHBvcnRpbmcgdXNlcnM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJVc2VyIiwiWExTWCIsIlBPU1QiLCJyZXEiLCJwYXNzd29yZCIsImpzb24iLCJBRE1JTl9QQVNTV09SRCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VycyIsImZpbmQiLCJsZWFuIiwibGVuZ3RoIiwid29ya3NoZWV0IiwidXRpbHMiLCJqc29uX3RvX3NoZWV0Iiwid29ya2Jvb2siLCJib29rX25ldyIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZXhjZWxCdWZmZXIiLCJ3cml0ZSIsImJvb2tUeXBlIiwidHlwZSIsIlJlc3BvbnNlIiwiaGVhZGVycyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/export-users/route.js\n");

/***/ }),

/***/ "(rsc)/./backend/lib/db.js":
/*!***************************!*\
  !*** ./backend/lib/db.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst connectDB = async ()=>{\n    try {\n        // Connect to MongoDB\n        await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(`${process.env.MONGODB_URI}`, {\n            tls: true\n        });\n        console.log('MongoDB connected successfully!');\n    } catch (err) {\n        console.error('MongoDB connection error:', err.message);\n        process.exit(1); // Exit process with failure\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9iYWNrZW5kL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCLElBQUk7UUFDRixxQkFBcUI7UUFDckIsTUFBTUQsNkNBQWdCLENBQUMsR0FBR0csUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUUsRUFBRTtZQUNuREMsS0FBSztRQUNQO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsS0FBSztRQUNaRixRQUFRRyxLQUFLLENBQUMsNkJBQTZCRCxJQUFJRSxPQUFPO1FBQ3REUixRQUFRUyxJQUFJLENBQUMsSUFBSSw0QkFBNEI7SUFDL0M7QUFDRjtBQUVBLGlFQUFlWCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDkxODYxXFxEZXNrdG9wXFx5ZHAgZmluaXNoIDIyMjIyMlxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxcYmFja2VuZFxcbGliXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gQ29ubmVjdCB0byBNb25nb0RCXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5NT05HT0RCX1VSSX1gLCB7XG4gICAgICB0bHM6IHRydWUsIC8vIEVuc3VyZSBUTFMgaXMgZW5hYmxlZCAoaWYgbmVlZGVkKVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkhJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnIubWVzc2FnZSk7XG4gICAgcHJvY2Vzcy5leGl0KDEpOyAvLyBFeGl0IHByb2Nlc3Mgd2l0aCBmYWlsdXJlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ0bHMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiZXhpdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./backend/lib/db.js\n");

/***/ }),

/***/ "(rsc)/./backend/models/User.js":
/*!********************************!*\
  !*** ./backend/models/User.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    gender: {\n        type: String,\n        required: true\n    },\n    dob: {\n        type: Date,\n        required: true\n    },\n    userId: {\n        type: String,\n        unique: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9iYWNrZW5kL21vZGVscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsNENBQWUsQ0FBQztJQUNyQ0csTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNDLE9BQU87UUFBRUgsTUFBTUM7UUFBUUcsUUFBUTtRQUFNRixVQUFVO0lBQUs7SUFDcERHLFVBQVU7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDSSxRQUFRO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN2Q0ssS0FBSztRQUFFUCxNQUFNUTtRQUFNTixVQUFVO0lBQUs7SUFDbENPLFFBQVE7UUFBRVQsTUFBTUM7UUFBUUcsUUFBUTtJQUFLO0FBQ3ZDO0FBRUEsaUVBQWVSLDRDQUFlLENBQUNlLElBQUksSUFBSWYsMkNBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDkxODYxXFxEZXNrdG9wXFx5ZHAgZmluaXNoIDIyMjIyMlxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxcYmFja2VuZFxcbW9kZWxzXFxVc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgcGhvbmU6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGxvY2F0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZ2VuZGVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZG9iOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHVzZXJJZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGhvbmUiLCJ1bmlxdWUiLCJsb2NhdGlvbiIsImdlbmRlciIsImRvYiIsIkRhdGUiLCJ1c2VySWQiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./backend/models/User.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexport-users%2Froute&page=%2Fapi%2Fexport-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexport-users%2Froute.js&appDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexport-users%2Froute&page=%2Fapi%2Fexport-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexport-users%2Froute.js&appDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_91861_Desktop_ydp_finish_222222_ydp_updated_backend_changes_master_ydp_updated_backend_changes_master_app_api_export_users_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/export-users/route.js */ \"(rsc)/./app/api/export-users/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/export-users/route\",\n        pathname: \"/api/export-users\",\n        filename: \"route\",\n        bundlePath: \"app/api/export-users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\91861\\\\Desktop\\\\ydp finish 222222\\\\ydp-updated-backend-changes-master\\\\ydp-updated-backend-changes-master\\\\app\\\\api\\\\export-users\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_91861_Desktop_ydp_finish_222222_ydp_updated_backend_changes_master_ydp_updated_backend_changes_master_app_api_export_users_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZleHBvcnQtdXNlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmV4cG9ydC11c2VycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV4cG9ydC11c2VycyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUM5MTg2MSU1Q0Rlc2t0b3AlNUN5ZHAlMjBmaW5pc2glMjAyMjIyMjIlNUN5ZHAtdXBkYXRlZC1iYWNrZW5kLWNoYW5nZXMtbWFzdGVyJTVDeWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDOTE4NjElNUNEZXNrdG9wJTVDeWRwJTIwZmluaXNoJTIwMjIyMjIyJTVDeWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlciU1Q3lkcC11cGRhdGVkLWJhY2tlbmQtY2hhbmdlcy1tYXN0ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NHO0FBQ25MO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFw5MTg2MVxcXFxEZXNrdG9wXFxcXHlkcCBmaW5pc2ggMjIyMjIyXFxcXHlkcC11cGRhdGVkLWJhY2tlbmQtY2hhbmdlcy1tYXN0ZXJcXFxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxcXFxhcHBcXFxcYXBpXFxcXGV4cG9ydC11c2Vyc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZXhwb3J0LXVzZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZXhwb3J0LXVzZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9leHBvcnQtdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFw5MTg2MVxcXFxEZXNrdG9wXFxcXHlkcCBmaW5pc2ggMjIyMjIyXFxcXHlkcC11cGRhdGVkLWJhY2tlbmQtY2hhbmdlcy1tYXN0ZXJcXFxceWRwLXVwZGF0ZWQtYmFja2VuZC1jaGFuZ2VzLW1hc3RlclxcXFxhcHBcXFxcYXBpXFxcXGV4cG9ydC11c2Vyc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexport-users%2Froute&page=%2Fapi%2Fexport-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexport-users%2Froute.js&appDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/xlsx"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexport-users%2Froute&page=%2Fapi%2Fexport-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexport-users%2Froute.js&appDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91861%5CDesktop%5Cydp%20finish%20222222%5Cydp-updated-backend-changes-master%5Cydp-updated-backend-changes-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();