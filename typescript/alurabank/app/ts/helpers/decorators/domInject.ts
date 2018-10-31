export function domInject(seletor: string) {    
    return function(target: any, propertKey: string){
        let elemento: JQuery;

        const getter = function(){
            if(!elemento){
                console.log(`buscando ${seletor} para injetar em ${propertKey}`);
                elemento = $(seletor)
            }

            return elemento;
        }

        Object.defineProperty(target, propertKey, {
            get: getter
        });

    }
}