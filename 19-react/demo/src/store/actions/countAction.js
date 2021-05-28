import {ADD, JIAN} from '../constants'

export let add = (n) => {
    return { type: ADD, value: n }
}
export let jian = (n) => {
    return { type: JIAN,  value: n }
}
