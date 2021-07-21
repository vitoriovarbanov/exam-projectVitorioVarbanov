import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array: any, criteria: string): any[] {
    if(criteria==='Price High to Low'){
      return array.sort((a,b)=>{
        let firstElement = a.price.doubleValue
        let secondElement = b.price.doubleValue
        return secondElement-firstElement
      })
    }else if(criteria==='Price Low to High'){
      return array.sort((a,b)=>{
        let firstElement = a.price.doubleValue
        let secondElement = b.price.doubleValue
        return firstElement-secondElement
      })
    }else{
      return array
    }

  }
}
