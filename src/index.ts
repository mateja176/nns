import { dec, inc, slice } from "ramda"
import convert from "./utils/convert"
import getIndentationFor from "./utils/getIndentationFor"
import setValueAndSelection from "./utils/setValueAndSelection"
import splitByNewLine from "./utils/splitByNewLine"

const form = document.querySelector("form") as HTMLFormElement

const indentation = document.querySelector(
  ".indentation",
) as HTMLTextAreaElement

indentation.onkeydown = e => {
  const { key, target } = e as any

  const { value, selectionStart } = target

  // @ts-ignore
  const precedingText = slice(0)(selectionStart)(value)

  // @ts-ignore
  const succeedingText = slice(selectionStart)(Infinity)(value)

  const setValue = setValueAndSelection(e)(target)

  switch (key) {
    case "Tab":
      setValue(`${precedingText}\t${succeedingText}`)(inc(selectionStart))
      break
    case "Enter":
      const indentation =
        getIndentationFor(dec(splitByNewLine(succeedingText).length))(
          splitByNewLine(value),
        ) || ""

      setValue(`${precedingText}\n${indentation}${succeedingText}`)(
        selectionStart + 1 + indentation.length,
      )

      break
    default:
      break
  }
}

form.onsubmit = e => {
  e.preventDefault()

  const {
    target: {
      json,
      indentation: { value },
    },
  } = e as any

  json.value = convert(value)
}

indentation.value = `Hello
  World!
How
  are
  you?`
