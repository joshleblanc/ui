import {useTracker} from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';

export const useUser = () => {
  return useTracker(() => {
    return Meteor.user();
  })
}