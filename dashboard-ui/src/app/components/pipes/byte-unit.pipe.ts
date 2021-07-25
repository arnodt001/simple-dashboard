import {Pipe, PipeTransform} from "@angular/core";
import {isNumeric} from "rxjs/internal-compatibility";
import {ByteUnitEnum} from "../../enums/byte-unit.enum";

@Pipe({
  name: 'byteUnitConvertor'
})
export class ByteUnitPipe implements PipeTransform {
  /**
   * This pipe transform the input value in bytes and transform it to
   * the specified unit.
   * Output: String contain the transformed value and unit.
   * Otherwise the given value is return without any changes.
   * @param value - numeric value in bytes
   * @param unit - string value containing the unit.
   * Valid value: 'B','KB','MB' and 'GB'
   */
  transform(value: any, unit: string): any {
    if (isNumeric(value)) {
      switch (unit.toUpperCase()) {
        case 'B':
          return ((<number>value) * ByteUnitEnum.B) + " B";
        case 'KB':
          return ((<number>value) * ByteUnitEnum.KB) + " KB";
        case 'MB':
          return ((<number>value) * ByteUnitEnum.MB) + " MB";
        case 'GB':
          return ((<number>value) * ByteUnitEnum.GB) + " GB";

      }
    }

    return value;
  }
}
