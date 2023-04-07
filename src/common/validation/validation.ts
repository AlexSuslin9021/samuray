import React from 'react';

export const requiredField = (value:string) => {

  if(value) return undefined
      return 'Fields is required'

};

export const maxValueLength =(maxLength:number)=> (value:string) => {

    if (value.length> maxLength) return `Max length is ${maxLength} symbols`
    return undefined

};