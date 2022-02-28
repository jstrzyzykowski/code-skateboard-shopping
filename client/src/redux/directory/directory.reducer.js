import { sections } from '../../api/directory.data';

const initialState = {
  sections: sections
}

export default function directoryReducer(state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}