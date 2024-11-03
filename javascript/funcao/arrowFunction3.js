let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArow = param => console.log(this === param)
comparaComThisArow(global)
comparaComThisArow(module.exports)

comparaComThisArow = comparaComThisArow.bind(obj)
comparaComThisArow(obj)
comparaComThisArow(module.exports)