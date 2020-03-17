function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/#/${prefix}`) !== -1
    )
  )
}

export default function isActive (name) {
  return (location) => {
    return prefix(location, name)
  }
}