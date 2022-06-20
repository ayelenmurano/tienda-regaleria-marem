const LogoWhatsApp = require('../../../assets/WhatsApp.png');

export function Contact () {
    return (
        <div className="m-4 font-ptsans">
            <div className="bg-rose-200 pb-1 pt-1 mb-4 shadow-lg rounded-lg flex justify-center">CONTACTO</div>
            <div className="flex flex-col justify-center text-center font-ptsans m-1 text-xs">
                    <div className=""> 
                        Contactanos por WhatsApp:
                    </div>
                    <div className="flex justify-center p-3">
                        <a title="WhatsApp" href="https://api.whatsapp.com/send?phone=5491133542390&text=%20Hola!%20Me%20gustar%C3%ADa%20saber%20sobre%20..."><img src={LogoWhatsApp} className="w-10 object-scale-down" altname="whatsapp"/></a>
                    </div>
            </div>
        </div>
    )
}