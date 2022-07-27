// Aqui importamos o pacote moment instalado diretamente pelo Javascript, assim não precisamo importar pelo HTML

function formatDate() { 
    const date = new Date(); 
    const formatDate = date.toLocaleString(); 
    return formatDate; 
}  

alert(formatDate())