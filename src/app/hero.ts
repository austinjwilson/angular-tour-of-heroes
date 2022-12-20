/** Code below for Tour of Heroes */
// export interface Hero {
//   id: number;
//   name: string;
// }
/* Code below is for the Hero Form*/
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }
} 