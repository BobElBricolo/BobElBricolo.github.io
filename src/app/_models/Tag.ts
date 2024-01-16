export class Tag{

  static readonly ANGULAR = new Tag('Angular', 'darkred');
  static readonly CSHARP = new Tag('C#', 'green');
  static readonly JAVA = new Tag('Java', 'darkorange');
  static readonly UNITY = new Tag('Unity', 'grey');
  static readonly JAVAFX = new Tag('JavaFx', 'blue');
  static readonly CPLUS: Tag= new Tag('C++', 'darkblue');
  static readonly TYPESCRIPT: Tag= new Tag('TypeScript', 'purple');
  private constructor(private readonly key: string, public readonly color: string) {

  }


  toString(){
    return this.key;
  }

}
