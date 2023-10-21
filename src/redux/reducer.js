import React  from 'react'
import {DECREMENT, INCREMENT , RESET} from './actionTypes'

const initialState ={
  l7esba:0,
};
 export const counterReducer = (state = initialState, action)=>{
  switch(action.type){
    case INCREMENT:
      return{
        ...state,
        l7esba: state.l7esba +1
      };
      case DECREMENT:
        return{
          ...state,l7esba:state.l7esba >0 ? state.l7esba -1 : state.l7esba
        }
        case RESET :
          return{
            ...state,
            l7esba:state.l7esba = 0
          }
          default:
            return state;


  }
 }