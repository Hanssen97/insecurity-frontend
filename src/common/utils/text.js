export const wrapText = text => {
  return (text) ? text.replace(/\n/g, "%_newline_%") : "";
}

export const unWrapText = text => {
  return (text) ? text.replace(/%_newline_%/g, '\r\n') : "";
}
