import { range } from './utils';

function Grid({ numRows, numCols }) {
  const rows = range(numRows);
  const cols = range(numCols);

  return (
    <div className="grid">
      {rows.map((rowX) => (
        <div className="row">
           {cols.map((colX) => (
            <div className="cell"></div>
          ))}
        </div>
      ))}
  
  </div>
  );
          }
export default Grid;
