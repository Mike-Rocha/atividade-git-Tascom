import promptSync from 'prompt-sync';

const input = promptSync();

let opcao: number = 0;
let deposito: number = 0;
let conta: number = 1000; 
let saque: number = 0;

while (true) {
    console.log(`=== CAIXA ELETRÔNICO ===
    1 - Depositar
    2 - Sacar
    3 - Mostrar saldo
    4 - Sair`);    
    opcao = Number(input(`Escolha uma opção: `)); 

    if (opcao === 1) {
        deposito = Number(input('Qual valor do deposito? '));
        console.log('==========================');        
        console.log(`Saldo anterior: R$${conta}`)
        conta = conta + deposito;
        console.log(`Depositou: R$${deposito}
Saldo Atual: R$${conta}`);             
    }

    else if (opcao === 2) {
        saque = Number(input('Qual o valor do saque? '))
        console.log('==========================');
        if (saque <= conta) {
            console.log(`Saldo anterior: R$${conta}`)
            conta = conta - saque;
            console.log(`Sacou: R$${saque}
Saldo Atual: R$${conta}`);
        }
        else if (saque > conta) {
            console.log('Saldo indisponível');  
        }      
    }

    else if (opcao === 3) {
        console.log(`Seu saldo: R$${conta}`);       
    }

    else if (opcao === 4) {
        console.log('Saiu do sistema');
        break
    }

    else {
        console.log('Entrada inválida! Tente novamente');
    }

}
