export interface AutoWriedOptions {

    requiredType?: any;
}

export function AutoWried(options: AutoWriedOptions) {

    const {requiredType} = options;

    return (target, name, descriptor: PropertyDescriptor) => {


        //TODO 去bean factory


        descriptor = {
            value: null
        };


        return descriptor;
    }
}