// // import the interface
import { CourseItem } from '../models/courseItem.model';
import { CourseAction, CourseActionType } from '../actions/course.action';
import { Action } from '@ngrx/store';
// //create a dummy initial state

const initialState: Array<CourseItem> = [
  {
    id: '1',
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];

export function CourseReducer(
  state: Array<CourseItem> = initialState,
  action: Action
) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, (action as CourseAction).payload];
    default:
      return state;
  }
}
