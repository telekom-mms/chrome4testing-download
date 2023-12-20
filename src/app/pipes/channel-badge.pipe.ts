import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'getChannelClass'
})
export class GetChannelClassPipePipe implements PipeTransform {
    transform(obj: any, args?: any): any {
        switch (obj.toLowerCase()) {
            case 'stable': return 'badge-ok';
            case 'beta': return 'badge-warn';
            case 'canary': return 'badge-alert';
            default: return '';
        }
    }
}
