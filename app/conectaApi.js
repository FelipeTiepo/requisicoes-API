async function listaVideos(){
    //O await faz com que espere queo fetch acabe de executar para devolver o resultado da requisição
    const conexao = await fetch("http://localhost:3000/videos")
                                //FETCH retorna uma "Promise"
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos
}