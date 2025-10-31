export default interface FormattedDataRecord {
  date: Date;
  value: number | tempData;
}
type tempData = { station: number; land: number };
