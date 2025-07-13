import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';
import {
    selectTitleFilter,
    setResetFilters,
    setTitleFilter,
} from '../../redux/slices/filterSlice';
const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const handleTitleFilterChange = (event) => {
        dispatch(setTitleFilter(event.target.value));
    };
    const handleResetFilters = () => {
        dispatch(setResetFilters());
    };
    return (
        <div className="app-block filter">
            <h2>Filter</h2>
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by title ..."
                        value={titleFilter}
                        onChange={handleTitleFilterChange}
                    />
                </div>
                <div className="filter-group">
                    <input type="text" placeholder="Filter by author ..." />
                </div>
                <div className="filter-group">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Only Favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
