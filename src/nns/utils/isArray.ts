export default (s: string) => /^\S[^\n]*\n\S/gm.test(s) || /\n\S.*$/.test(s)
