import React, { FunctionComponent } from 'react'

export const Container: FunctionComponent = ({ children }) => (
  <div className="container mx-auto mt-2 md:mt-10 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl conatiner-fit-height ">
    {children}
  </div>
);
