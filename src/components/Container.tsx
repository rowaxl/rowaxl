import React, { FunctionComponent } from 'react'

export const Container: FunctionComponent = ({ children }) => (
  <div className="xl:container mx-auto mt-10 rounded-lg shadow-xl conatiner-fit-height">
    {children}
  </div>
);
