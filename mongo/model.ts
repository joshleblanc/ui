export class Model {
  _id?: string;

  static fromDoc(doc:any) {
    const model = new Model();
    Object.keys(doc).forEach(key => {
      model[key] = doc[key];
    });
    return model;
  }
}