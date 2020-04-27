import {Model} from "../mongo/model";
import {Mongo} from "meteor/mongo";

type CollectionMap = {
  [key: string]: Mongo.Collection<typeof Model>
}

export const collections: CollectionMap = {};

export function makeCollection(obj : typeof Model, name : string) {
  const collection = new Mongo.Collection<typeof obj>(name, {
    transform: (doc:typeof obj) => obj.fromDoc(doc)
  });
  collections[obj.name] = collection;
  return collection;
}