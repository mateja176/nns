// an empty line either before or after a line which starts with a non space char
export default (s: string) => /^ *\n\S/gm.test(s) || /^\S[^\n]*\n *\n/gm.test(s)
