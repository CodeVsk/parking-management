
const sidebarReduzido = (state, action) => {
  if (action.type === "ALTERNA_SIDEBAR") {
    
    return {
      ...state,
      sidebarAbrir: !state.sidebarAbrir
    }
  }

  throw new Error(`Sem resposta"${action.type}" tipo da ação`)
}

export default sidebarReduzido;
