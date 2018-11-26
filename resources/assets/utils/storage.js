const Storage = localStorage

export default { get, set, clear }

// getter
export function get(name, defaults = null) {
  let data

  try {
    data = JSON.parse(Storage.getItem(name))
  } catch (e) {
    data = null
  }

  if (!data) {
    data = Object.assign({}, defaults)
    data && set(name, defaults)
  }

  return data
}

// setter
export function set(name, content, key) {
  let data
  if (key) {
    data = get(name)
    data[key] = content
    Storage.setItem(name, JSON.stringify(data))
  } else {
    Storage.setItem(name, JSON.stringify(content))
  }
}

// clear all storage
export function clear() {
  Storage.clear()
}
