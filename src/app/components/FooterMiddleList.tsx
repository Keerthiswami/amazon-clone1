import React from 'react'

interface Props{
    title: string;
    listItem: any;
}
const FooterMiddleList = ({title,listItem}: Props) => {
  return (
    <div>
      <h3 className='font-semibold text-white text-base md-3'>{title}</h3>
      <ul className="flex flex-col gap-0.5 font-bodyFont">
        {listItem.map((item: any) =>
          item.listData.map((data: string) => (
            <li key={data} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default FooterMiddleList
