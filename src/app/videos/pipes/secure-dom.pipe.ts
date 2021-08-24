import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): any {
    const url = 'https://www.youtube.com/embed';
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/${value}`)
  }

}
