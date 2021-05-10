import cx from "classnames";
import React from "react";
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/actions";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {
      Object.entries(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter =filterKey[1];//VISIBILITY_FILTERS[filterKey] is equals to VISIBILITY_FILTERS.filterKey i.e VISIBILITY_FILTERS.ALL="all" in constants.js
        return (
          <span
            // key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={ () => {
               setFilter(currentFilter);
              //  console.log('activeFilter'+" "+activeFilter);
               console.log('currentFilter'+" "+currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps =  (state) => {
  console.log(state.visibilityFilters);
  return { activeFilter: state.visibilityFilters };
};
// export default VisibilityFilters;
export default connect(mapStateToProps,{ setFilter })(VisibilityFilters);
