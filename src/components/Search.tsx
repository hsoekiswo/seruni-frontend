function Search() {
    return (
        <form>
            <div className="flex">
            <div className="w-full mr-4">
                <label>
                <input type="text" placeholder="Search" className="form-input">
                </input>
                </label>
            </div>
            <div className="flex items-center justify-center w-2/12">
                <button type="submit" className="w-full bg-slate-500 text-white font-bold p-2 rounded-lg">
                Search
                </button>
            </div>
            </div>
        </form>
    )
}

export default Search;