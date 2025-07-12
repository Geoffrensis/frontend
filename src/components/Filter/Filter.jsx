import './Filter.css';
const Filter = () => {
    return (
        <div className="app-block filter">
            <h2>Filter</h2>
            <div className="filter-row">
                <div className="filter-group">
                    <input type="text" placeholder="Filter by title ..." />
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
                <button type="button">Reset Filters</button>
            </div>
        </div>
    );
};

export default Filter;
