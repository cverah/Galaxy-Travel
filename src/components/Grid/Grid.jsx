import PropTypes from "prop-types";
import "./Grid.css";
const Grid = ({ rows, columns, gap, children }) => {
  return (
    <div
      className="grid"
      style={{
        gap: gap,
        gridTemplateColums: `repeat ${columns} 1fr`,
        gridAutoRows: rows,
      }}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  rows: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string,
  children: PropTypes.object,
};
export default Grid;
