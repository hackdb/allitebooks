import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: any, book_title : any): any {
    if( !value ) return null;
    return value.filter( function( x, index ){
      return( book_title.length>0 ? x.book_title.toLowerCase().indexOf( book_title.toLowerCase() )>=0 : true );
    }).slice(0,50);
  }

}
