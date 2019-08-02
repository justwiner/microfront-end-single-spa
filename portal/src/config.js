import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('menu', () => SystemJS.import('@portal/menu'), isActive.menu)
singleSpa.registerApplication('project1', () => SystemJS.import('@portal/project1'), isActive.project1)
singleSpa.registerApplication('project2', () => SystemJS.import('@portal/project2'), isActive.project2)
singleSpa.start()
