interface Header {
  label: string;
  key: string;
}

interface Column {
  [key: string]: string;
}
const Table = ({ ...props }) => {
  return (
    <table className='border-collapse rounded-lg'>
      <thead>
        <tr>
          {props.header.map((item: Header, index: number) => (
            <th key={index} className={` p-2 bg-slate-500 ${index === 0 && 'rounded-tl-lg'}  ${index === props.header.length - 1 && 'rounded-tr-lg'}`}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((data: Column, index: number) => (
          <tr key={index}>
            {props.header.map((item: Header, indexHeader: number) => (
              <td key={index} className={` p-2 ${indexHeader === props.header.length - 1 && index === props.data.length - 1 && 'rounded-br-lg'} border border-slate-700`}>
                {data[item.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
