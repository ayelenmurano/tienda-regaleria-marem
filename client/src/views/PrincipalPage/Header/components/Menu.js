import { useState } from 'react';
import { ButtonsMenu } from './ButtonsMenu';
import { LogoMenu } from './LogoMenu';

export function Menu ({ handleVerticalMenu, activeVerticalMenu }) {

    return (
        <>
            <div className="inline-block align-bottom h-9 sm:hidden">
                <ButtonsMenu />
            </div>
            <div className='flex justify-end lm:hidden'>
               <LogoMenu handleVerticalMenu={handleVerticalMenu} />
            </div>
        </>
    )
}