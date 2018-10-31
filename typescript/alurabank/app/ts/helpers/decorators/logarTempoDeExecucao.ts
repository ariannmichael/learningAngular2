export function logarTempoDeExecucao(emSegundo: boolean = false) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidade = 'ms';
            if(emSegundo) {
                divisor = 1000;
                unidade = 's';
            }

            console.log('----------------------');
            console.log(`Parâmetros do método ${propertKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(resultado)}`);
            const t2 = performance.now();
            console.log(`${propertKey} demorou ${(t2-t1)/divisor} ${unidade}`);
            console.log('----------------------');
            return resultado;
        }

        return descriptor;
    }
}