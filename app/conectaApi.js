    async function listaVideos() {
    //O await faz com que espere queo fetch acabe de executar para devolver o resultado da requisição
    const conexao = await fetch("http://localhost:3000/videos");
                                //FETCH retorna uma "Promise"
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        //Corpo da requisição, enviamos um objeto e o JSON.STRINGFY transforma ele em string
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })  
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos, 
    criaVideo
}