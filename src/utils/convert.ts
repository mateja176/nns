import { pipe } from "ramda"
import convert from "../convert"
import prettify from "./prettify"
import spacesToTabs from "./spacesToTabs"

export default pipe(
  spacesToTabs,
  convert,
  prettify(4),
)
