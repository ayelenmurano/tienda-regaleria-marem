import { useState } from 'react';
import { LeftContainer } from './components/LeftContainer';
import { RightHorizontalContainer } from './components/RightHorizontalContainer';
import { RightVerticalContainer } from './components/RightVerticalContainer';

export function Header ({changeBody}) {

    const [ activeVerticalMenu, setActiveVerticalMenu ] = useState(false);

    const showVerticalMenu = () => {
        if ( activeVerticalMenu == false ) setActiveVerticalMenu(true)
        else setActiveVerticalMenu(false);
        console.log( ` activeVerticalMenu es ${activeVerticalMenu} en el Header. `)
    };

    return (
        <>
            <div className="h-1/5 bg-slate-50 drop-shadow-md pl-3 pr-3 flex justify-center items-center">
                <LeftContainer />
                <RightHorizontalContainer handleVerticalMenu={showVerticalMenu} activeVerticalMenu={activeVerticalMenu} changeBody={changeBody}/>
            </div>
            { activeVerticalMenu == true && 
                (
                    <div className="flex justify-end lm:hidden">
                        <RightVerticalContainer  handleVerticalMenu={showVerticalMenu} />
                    </div>
                )
            }
        </>
    )
}