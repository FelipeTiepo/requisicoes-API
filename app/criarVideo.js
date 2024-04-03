 import { conectaApi } from "./conectaApi.js"  
                             //DATA ATRIBUTES precisam de "[]" para serem chamados
const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento){
    //.PREVENTDEFAULT previne que ocorra a ação padrão de envio de formulário que é o recarregamento da página
    evento.preventDefault()
    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10).toString()

    await conectaApi.criaVideo(titulo, descricao, url, imagem)
    
    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener("submit", evento => criarVideo(evento))