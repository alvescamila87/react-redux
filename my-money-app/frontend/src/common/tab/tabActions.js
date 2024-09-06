// criar funções que vão gerar ações que vão ser disparadas para atualizar o estado da aplição a partir dos reducers

export function selectTab(tabId) {
    //console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}