window.SystemJS = window.System
import config from '../config.js'

/**
 * 注入命名模块，添加进index.html
 * @param {}} newMapJSON 
 */
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
let commonDepsImportMap = {}
for (let commonDep in config["common-deps"][process.env.NODE_ENV]) {
  let commonDepObj = config["common-deps"][process.env.NODE_ENV][commonDep]
  commonDepsImportMap[commonDep] = `${
    process.env.NODE_ENV === 'development'
    ? config["common-deps-origin"][process.env.NODE_ENV]
    : '/common-deps-static'
  }${commonDepObj}`
}
const dependencies = {
  imports: commonDepsImportMap
}

let componentsImportMap = {}
for (let component in config.components) {
  let componentObj = config.components[component]
  componentsImportMap[componentObj.moduleName] = `${
    process.env.NODE_ENV === 'development'
    ? componentObj.origin
    : (component === 'portal' ? '' : ('/' + component))
  }${componentObj.entry}`
}
const componentEntrys = {
  imports: componentsImportMap
}

/**
 * 根据配置文件
 * 加载子模块的js入口文件
 */
insertNewImportMap(componentEntrys)
/**
 * 根据配置文件
 * 加载公共模块依赖
 */
insertNewImportMap(dependencies)
