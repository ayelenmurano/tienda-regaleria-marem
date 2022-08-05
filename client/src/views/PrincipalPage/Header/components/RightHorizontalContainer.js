import { Menu } from './Menu';
import { SearchBar } from './SearchBar';

export function RightHorizontalContainer ({ handleVerticalMenu, activeVerticalMenu }) {

    return (
        <div className="flex flex-col">
            <SearchBar activeVerticalMenu={activeVerticalMenu} />
            <Menu handleVerticalMenu={handleVerticalMenu} activeVerticalMenu={activeVerticalMenu} />
        </div>
    )
}