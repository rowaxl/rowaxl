import React, { FunctionComponent } from 'react'

export const Container: FunctionComponent = ({ children }) => (
  <div className="xl:container mx-auto rounded-lg shadow-xl">
    {children}
  </div>
);
