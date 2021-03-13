import React, { FunctionComponent } from 'react'

type ListItemProps = {
  label: string,
  iconSrc: string,
  iconAlt: string,
}

export const ListItem: FunctionComponent<ListItemProps> = ({ label, iconSrc, iconAlt, children }) => {
  return (
    <div className="flex items-center my-4">
      <div className="w-8 md:w-16">
        <img className="w-6 h-6 md:w-12 md:h-12 rounded dark:bg-gray-200 rounded my-2 p-2" src={`${process.env.PUBLIC_URL}/img/${iconSrc}`} alt={iconAlt} />
      </div>

      <div className="flex-1 pl-2">
        <div className="text-gray-700 dark:text-gray-200 font-semibold">
          {label}
        </div>
      </div>

      {children}
    </div>
  );
}