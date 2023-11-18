

class Calculadora {
    constructor(operacion1Elemento, operacion2Elemento) {
        this.operacion1Elemento = operacion1Elemento;
        this.operacion2Elemento = operacion2Elemento;
        this.clear();
    }

    clear() {
        this.operacion1 = 0;
        this.operacion2 = 0;
        this.operador = "";
        this.updateUI();
    }

    updateUI() {
        this.operacion1Elemento.innerHTML = this.operacion1 + this.operador;
        this.operacion2Elemento.innerHTML = this.operacion2;
    }
    
    agregarNumero(numero){
        if(numero === "." && this.operacion2.includes(".")){ return;}
        this.operacion2 = this.operacion2=== 0?numero : this.operacion2.toString() + numero
        this.updateUI()
    }
    borrar(){
        if(this.operacion2 === 0)return;
        this.operacion2 = +this.operacion2.toString().slice(0, -1)
        this.updateUI();
    }
    operacion(operacion){
        if(this.operador){
           this.calculo();
        }
       this.operador = operacion;
       this.operacion1 = +this.operacion2 === 0? this.operacion1: this.operacion2
       this.operacion2 = 0;
       this.updateUI();
    }
    calculo(){
        switch(this.operador){
            case "+":
                this.operacion1 = +this.operacion1 + +this.operacion2;
            break;
            case "-":
                this.operacion1 = +this.operacion1 - +this.operacion2;
            break;
            case "*":
                this.operacion1 = +this.operacion1 * +this.operacion2;
            break;
            case "/":
                this.operacion1 = +this.operacion1 / +this.operacion2;
            break;
            case "**":
                this.operacion1 = this.operacion1 ** +this.operacion2;
            break;
        }
        this.operador = "";
        this.operacion2 = 0;
        this.updateUI();
    }
}
const operacion1 = document.querySelector("[data-operand-1]");
const operacion2 = document.querySelector("[data-operand-2]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const operacionBtn = document.querySelectorAll("[data-operation]");
const igualBtn = document.querySelector("[data-equals]")
const numerosBtn = document.querySelectorAll("[data-number]");
const CalculadoraLlamado = new Calculadora(operacion1, operacion2);

clearBtn.addEventListener("click", ()=> {
    CalculadoraLlamado.clear();
});
numerosBtn.forEach(boton =>{
    boton.addEventListener("click",() =>{
CalculadoraLlamado.agregarNumero(boton.innerHTML)
    })
});
deleteBtn.addEventListener("click",()=>{
    CalculadoraLlamado.borrar();
})
operacionBtn.forEach(boton =>{
    boton.addEventListener("click", ()=>{
        CalculadoraLlamado.operacion(boton.innerHTML)
    })
})
igualBtn.addEventListener("click", ()=>{
    CalculadoraLlamado.calculo()
   
})

