
export default class HelloWorld {
  private full: string;
  constructor(public first: string, public last: string) {
    this.full = `${first} ${last}`;
  }

  getName(): string {
    return this.full;
  }
}