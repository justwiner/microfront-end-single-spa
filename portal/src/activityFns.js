export function prefix(location, ...prefixes) {
    return prefixes.some(
      prefix => (
        location.href.indexOf(`${location.origin}/${prefix}`) !== -1
      )
    )
  }
  
  export function menu(location) {
    return true
  }

  export function project1(location) {
    return prefix(location, '', 'page1', 'page2')
  }

  export function project2(location) {
    return prefix(location, 'page3', 'page4')
  }