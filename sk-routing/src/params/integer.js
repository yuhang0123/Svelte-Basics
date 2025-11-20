// the function name must be "match"
export function match(param) {
    console.log("matcher runs:", param);
  return /^\d+$/.test(param);
}
