function escolha() {
    let escondido = document.getElementById('off');

    let opcao = this.options[this.selectedIndex].value;
    const duvida1 = document.getElementById('como_instala').value;

    
    if (opcao === duvida1) { 
       escondido.style.display = 'flex';
    }
    else escondido.style.display = 'none';
}