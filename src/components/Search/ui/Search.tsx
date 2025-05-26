import React from 'react';
import {Input} from "../../Input";

export interface ISearchProps {
  value:string
}

export const Search = ( props :ISearchProps) => {
  return (
      <div>
        <span>Поиск</span>
        <Input
          {...props}
      /></div>
  );
}; 