import PropTypes from "prop-types";
import "./Grid.css";
const Grid = ({ rows, columns, gap, children }) => {
  return (
    <div
      className="grid"
      style={{
        gap: gap,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: rows,
      }}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.array,
  rows: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
};
export default Grid;
