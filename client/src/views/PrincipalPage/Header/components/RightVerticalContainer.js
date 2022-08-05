import { ButtonsMenu } from './ButtonsMenu';
import { Menu } from './Menu';
import { SearchBar } from './SearchBar';

export function RightVerticalContainer () {

    return (
        <div className="absolute h-4/5 w-2/5 flex flex-col justify-center items-center bg-slate-50 drop-shadow-md pl-3 pr-3 ">
            <div className="flex flex-col ">
                <ButtonsMenu />
            </div>
        </div>
    )
}