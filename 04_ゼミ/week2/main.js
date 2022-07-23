const memoInput = document.getElementById("memo-input")

const logValue = function (e) {
  console.log(e.target.value)
}

memoInput.oninput = logValue
