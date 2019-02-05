import { pipe } from "ramda"
import { attach } from "../splitAndAttach"
import prettify from "./prettify"
import spacesToTabs from "./spacesToTabs"

export default pipe(
  spacesToTabs,
  attach,
  prettify(4),
)
