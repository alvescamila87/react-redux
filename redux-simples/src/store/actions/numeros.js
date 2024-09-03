// Action creator
export function alterarNumeroMinimo(novoNumero) {
    // uma action creator retorna uma action
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}