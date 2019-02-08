export default (s: string) => /^\S[^\n]*\n?(?!\s+\S)/gm.test(s)
