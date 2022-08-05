const MenuLogo = require('../../../../assets/Menu.png');

export function LogoMenu ({ handleVerticalMenu }) {

    const onClickMenu = () => {
        handleVerticalMenu();
    }
    return (
        <img 
            src={MenuLogo} 
            className="bg-slate-300 my-1 h-5 border border-slate-300 rounded-md opacity-50 hover:border-slate-500 hover:bg-slate-500 lm:hidden" 
            altname="menu-image"
            onClick={onClickMenu}
        />
    )
}