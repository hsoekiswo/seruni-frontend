function CheckTags() {
    return (
        <form>
            <div className="flex flex-row">
            <div>
                <input type="checkbox" hidden>
                </input>
                <label className="form-label inline">
                <button className="mr-3 px-2 py-1 border rounded-full">
                    Workshop
                </button>
                </label>
            </div>
            <div>
                <input type="checkbox" hidden>
                </input>
                <label className="form-label inline">
                <button className="mr-3 px-2 py-1 border rounded-full">
                    Class
                </button>
                </label>
            </div>
            <div>
                <input type="checkbox" hidden>
                </input>
                <label className="form-label inline">
                <button className="mr-3 px-2 py-1 border rounded-full">
                    Learning Resource
                </button>
                </label>
            </div>
            </div>
        </form>
    )
};

export default CheckTags;