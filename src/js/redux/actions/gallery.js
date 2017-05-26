import {ActionTypes} from '../types'

export function selectImage(image) {
  console.log('run action')
  return {
    type: ActionTypes.SELECT_IMAGE,
    image
  }
}

export function loadImages() {
  return {
    type: ActionTypes.LOAD_IMAGES
  }
}
