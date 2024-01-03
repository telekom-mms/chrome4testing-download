import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'getPlatformIcon'
})
export class GetPlatformIconPipe implements PipeTransform {
    transform(obj: any, args?: any): any {
        const value = obj.toLowerCase();
        switch (true) {
            case value.includes('linux'):
                return ['fab', 'linux'];
            case value.includes('mac'):
                return ['fab', 'apple'];
            case value.includes('win'):
                return ['fab', 'microsoft'];
            default:
                return ['far', 'square'];
        }
    }
}
