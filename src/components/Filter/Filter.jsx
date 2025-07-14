import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';
import {
    selectAuthorFilter,
    selectOnlyFavorite,
    selectTitleFilter,
    setAuthorFilter,
    setOnlyFavorite,
    setResetFilters,
    setTitleFilter,
} from '../../redux/slices/filterSlice';
const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavorite);
    const handleTitleFilterChange = (event) => {
        dispatch(setTitleFilter(event.target.value));
    };
    const handleAuthorFilterChange = (event) => {
        dispatch(setAuthorFilter(event.target.value));
    };
    const handleOnlyFavoriteChange = () => {
        dispatch(setOnlyFavorite());
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
                    <input
                        type="text"
                        placeholder="Filter by author ..."
                        value={authorFilter}
                        onChange={handleAuthorFilterChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            checked={onlyFavoriteFilter}
                            onChange={handleOnlyFavoriteChange}
                        />
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
