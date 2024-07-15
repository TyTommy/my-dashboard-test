import "./assets/table.scss";

interface Props {
  readonly data: any[];
  readonly headers: any[];
}

export default function Table({ data = [], headers = [] }: Props) {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {headers &&
            headers.map((header: any, index: number) => {
              return (
                <th key={index} style={{ width: header.width }}>
                  {header.header}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item: any, index: number) => {
            return (
              <tr key={index}>
                {headers &&
                  headers.map((header: any, index2: number) => {
                    return <td key={index2}>{item[header.accessor]}</td>;
                  })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
