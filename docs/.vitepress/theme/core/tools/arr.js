export const remove = (arr, el) => {
  const i = arr.indexOf(el)
  if (i > -1) {
    arr.splice(i, 1)
  }
}

export default {
  remove,
}
