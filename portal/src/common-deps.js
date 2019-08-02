window.SystemJS = window.System

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

  allMaps[allMaps.length - 1].insertAdjacentElement(
    'afterEnd',
    newScript
  )
}

const devDependencies = {
  imports: {
    react: 'http://localhost:8000/react.development.js',
    'react-dom': 'http://localhost:8000/react-dom.development.js',
    'react-dom/server': 'http://localhost:8000/react-dom-server.browser.development.js',
    'single-spa': 'http://localhost:8000/single-spa.min.js',
    lodash: 'http://localhost:8000/lodash.js',
    rxjs: 'http://localhost:8000/rxjs.umd.js',
  }
}

const prodDependencies = {
  imports: {
    react: 'http://localhost:8000/react.production.min.js',
    'react-dom': 'http://localhost:8000/react-dom.production.min.js',
    'react-dom/server': 'http://localhost:8000/react-dom-server.browser.production.min.js',
    'single-spa': 'http://localhost:8000/single-spa.min.js',
    lodash: 'http://localhost:8000/lodash.min.js',
    rxjs: 'http://localhost:8000/rxjs.umd.min.js',
  }
}

const devMode = true // you will need to figure out a way to use a set of production dependencies instead
if (devMode) {
  insertNewImportMap(devDependencies)
} else {
  insertNewImportMap(prodDependencies)
}
