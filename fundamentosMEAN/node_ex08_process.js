function temParam(param) {
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')) {
  console.log("Atencao Total")
} else {
  console.log("Tranquilo")
}