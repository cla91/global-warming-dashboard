/* export default interface FormattedDataRecord {
  date: Date;
  value: number | tempData;
}
type tempData = { station: number; land: number }; */
export default interface FormattedDataRecord {
  nameShort: string;
  unitShort: string;
  unitLong: string;
  records: Records[];
}

type Records = {
  name: string;
  record: Record[];
};

export type Record = {
  date: Date;
  value: number;
};
