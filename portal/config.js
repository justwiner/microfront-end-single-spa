module.exports = {
    "title": "xxxxxx平台",
    "components": {
        "portal": {
            "moduleName": "@portal/config",
            "origin": "http://localhost:8233",
            "entry": "/config.js"
        },
        "menu": {
            "moduleName": "@portal/menu",
            "router": true,
            "origin": "http://localhost:8235",
            "entry": "/menu.js"
        },
        "project1": {
            "moduleName": "@portal/project1",
            "router": "project1",
            "origin": "http://localhost:8236",
            "entry": "/project1.js"
        },
        "project2": {
            "moduleName": "@portal/project2",
            "router": "project2",
            "origin": "http://localhost:8237",
            "entry": "/project2.js"
        }
    },
    "common-deps": {
        "development": {
            "react": "/react.development.js",
            "react-dom": "/react-dom.development.js",
            "react-dom/server": "/react-dom-server.browser.development.js",
            "single-spa": "/single-spa.min.js",
            "lodash": "/lodash.js",
            "rxjs": "/rxjs.umd.js"
        },
        "production": {
            "react": "/react.production.min.js",
            "react-dom": "/react-dom.production.min.js",
            "react-dom/server": "/react-dom-server.browser.production.min.js",
            "single-spa": "/single-spa.min.js",
            "lodash": "/lodash.min.js",
            "rxjs": "/rxjs.umd.min.js"
        }
    },
    "common-deps-origin": {
        "development": 'http://localhost:8000',
        "production": "./common-deps-static"
    },
    "common-deps-conf": {
        "development": 'http://localhost:8234',
        "production": "./common-deps"
    }
}