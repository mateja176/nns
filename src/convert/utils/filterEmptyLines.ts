import { trim } from "ramda"

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25581
export default (a: string[]) => a.filter((s: string) => Boolean(trim(s)))
