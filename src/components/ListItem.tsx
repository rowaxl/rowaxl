import React, { FunctionComponent } from 'react'

type ListItemProps = {
  label: string,
  iconSrc: string,
  iconAlt: string,
}

export const ListItem: FunctionComponent<ListItemProps> = ({ label, iconSrc, iconAlt, children }) => {
  return (
    <div className="flex items-center my-4">
      <div className="w-16">
        <img className="w-12 h-12 rounded" src={`${process.env.PUBLIC_URL}/img/${iconSrc}`} alt={iconAlt} />
      </div>

      <div className="flex-1 pl-2">
        <div className="text-gray-700 font-semibold">
          {label}
        </div>
      </div>

      {children}
    </div>
  );
}