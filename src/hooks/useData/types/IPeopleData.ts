import IPerson from './IPerson';

export default interface IPeopleData {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}
