import { any } from "ramda"

export default any((s: string) => /^\s/.test(s))
