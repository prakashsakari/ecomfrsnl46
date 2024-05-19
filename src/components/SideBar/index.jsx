
import { useFilter } from "../../context/filter-context"

export const SideBar = () => {

    const { filterDispatch, sortByPrice, discount } = useFilter();

    const onSortChange = (type) => {
        if (type === 'lth') {
            filterDispatch({
                type: 'lth'
            })
        } else {
            filterDispatch({
                type: 'htl'
            })
        }
    }

    const onClearAllClick = () => {
        filterDispatch({
            type: 'CLEAR_ALL'
        })
    }

    const onDisccountChange = (e) => {
        filterDispatch({
            type: 'DISCOUNT',
            payload: e.target.value
        })
    }

    return (
        <aside className="side-bar scrollbar-width-thin border-r border-slate-900 h-screen w-52 fixed top-14 pt-6 left-0 z-10 px-4 text-slate- overflow-auto pb-20">
            <div className="flex justify-between">
                <p>Filters</p>
                <button className="underline hover:opacity-85" onClick={onClearAllClick}>Clear All</button>
            </div>
            <div className="flex flex-col gap-4 pt-4">
                <div id="price-range" className="flex flex-col gap-1">
                    <p className="font-bold">Price range</p>
                    <div className="flex gap-5">
                        <span>1k</span> <span>2k</span> <span>3k</span> <span>4k</span>
                    </div>

                    <label className="flex gap-1">
                        <input type="range"
                            min="1000"
                            step="1000"
                            max="4000" />
                    </label>
                </div>
                <div id="sort" className="flex flex-col gap-1">
                    <p className="font-bold">Sort by price</p>
                    <div>
                        <div>
                            <label className="flex gap-1">
                                <input checked={sortByPrice === 'lth'} type="radio" name="price" onChange={() => onSortChange('lth')} />
                                <span>Price: Low to High</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex gap-1">
                                <input checked={sortByPrice === 'htl'} type="radio" name="price" onChange={() => onSortChange('htl')} />
                                <span>Price: High to Low</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="discount" className="flex flex-col gap-1">
                    <p className="font-bold">Discount</p>
                    <div>
                        <div>
                            <label className="flex gap-1">
                                <input checked={discount === '5'} value={5} type="radio" name="discount" onChange={onDisccountChange} />
                                <span>5% and above</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex gap-1">
                                <input checked={discount === '10'} value={10} type="radio" name="discount" onChange={onDisccountChange} />
                                <span>10% and above</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex gap-1">
                                <input checked={discount === '15'} value={15} type="radio" name="discount" onChange={onDisccountChange} />
                                <span>15% and above</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="ratings" className="flex flex-col gap-1">
                    <p className="font-bold">Ratings</p>
                    <div>
                        <div>
                            <label className="flex gap-1">
                                <input value={1} type="radio" name="discount" />
                                <span className="flex items-center">1 <span className="material-icons-outlined text-amber-500 text-xs">
                                    star
                                </span> and above</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex gap-1">
                                <input value={2} type="radio" name="discount" />
                                <span className="flex items-center">2 <span className="material-icons-outlined text-amber-500 text-xs">
                                    star
                                </span> and above</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex gap-1">
                                <input value={3} type="radio" name="discount" />
                                <span className="flex items-center">3 <span className="material-icons-outlined text-amber-500 text-xs">
                                    star
                                </span> and above</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="more-filters" className="flex flex-col gap-1">
                    <p className="font-bold">Additional Filters</p>
                    <div>
                        <div>
                            <label className="flex gap-1">
                                <input type="checkbox" />
                                <span>Include out of stock</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex gap-1">
                                <input type="checkbox" />
                                <span>Fast delivery</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}