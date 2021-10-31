import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {

  transform(input: number): string {
    let div_input = 0

    if (input < 1000) {
      return `${input}`
    } else if (input < 1000000) {
      div_input = +(input/1000).toFixed(2)
      return `${div_input}K`
    } else if (input < 1000000000) {
      div_input = +(input/1000000).toFixed(2)
      return `${div_input}M`
    } else if (input < 1000000000000) {
      div_input = +(input/1000000000).toFixed(2)
      return `${div_input}B`
    } else if (input < 1000000000000000) {
      div_input = +(input/1000000000000).toFixed(2)
      return `${div_input}T`
    } else if (input < 1000000000000000000) {
      div_input = +(input/1000000000000000).toFixed(2)
      return `${div_input}P`
    } else if (input < 1000000000000000000000) {
      div_input = +(input/1000000000000000000).toFixed(2)
      return `${div_input}E`
    }
    return `${input}`
  }
}
