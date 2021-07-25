import {ByteUnitEnum} from "../enums/byte-unit.enum";

export class ConverterUtil {

  static bytesTo(bytes: number, unit: ByteUnitEnum): number {
    return +(bytes * unit).toFixed(2);
  }

  static toByteRatio(usage: number, total: number): number {
    return +(usage / total).toFixed(2);
  }
}
