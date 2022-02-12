import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: [], filterString: string, propertyName: string) {
    if (value.length === 0 || filterString === "") {
      return value;
    }

    const filteredArray = [];
    for (let item of value) {
      if (filterString === item[propertyName]) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }
}
