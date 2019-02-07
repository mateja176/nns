import { inc, length } from "ramda"
import convert from "./utils/convert"
import getIndentationFor from "./utils/getIndentationFor"
import getLength from "./utils/getLength"
import setValueAndSelection from "./utils/setValueAndSelection"
import sliceFrom from "./utils/sliceFrom"
import sliceTo from "./utils/sliceTo"
import splitByNewLine from "./utils/splitByNewLine"

const form = document.querySelector("form") as HTMLFormElement

const indentation = document.querySelector(
  ".indentation",
) as HTMLTextAreaElement

indentation.onkeydown = e => {
  const { key, target } = e as any

  const { value, selectionStart } = target

  const precedingText = sliceTo(selectionStart)(value)

  const succeedingText = sliceFrom(selectionStart)(value)

  const setValue = setValueAndSelection(e)(target)

  if (key === "Tab" || key === "Enter") {
    e.preventDefault()

    if (key === "Tab") {
      target.value = `${precedingText}\t${succeedingText}`

      const newSelectionStart = inc(selectionStart)

      target.selectionStart = newSelectionStart

      target.selectionEnd = newSelectionStart
    } else {
      const indentation = getIndentationFor(getLength(succeedingText))(
        splitByNewLine(value),
      )

      target.value = `${precedingText}\n${indentation}${succeedingText}`

      const newSelectionStart = selectionStart + 1 + length(indentation as any)

      target.selectionStart = newSelectionStart

      target.selectionEnd = newSelectionStart
    }
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
