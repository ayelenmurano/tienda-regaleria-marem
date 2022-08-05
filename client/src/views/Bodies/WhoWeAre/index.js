const Logo = require('../../../assets/WeAre.jpg');

export function WhoWeAre () {
    return (
        <div className="m-4 font-ptsans">
            <div className="bg-rose-200 pb-1 pt-1 mb-4 shadow-lg rounded-lg flex justify-center">QUIÉNES SOMOS</div>
            <div className="h-full p-3 flex flex-row justify-items-center sm:flex-col">
                <div className="w-2/3 p-10 flex items-center text-center font-ptsans m-1 text-xs sm:w-full">
                    <div className=""> 
                        Regaleria Artesanal Marem nace de nuestro amor por nuestros compañeros de vida peludos, nuestra creatividad y nuestro incansable deseo de emprender. 
                        <br></br><br></br>
                        Nos encontramos pensando productos diseñados para nuestros peluditos que se adapten a todos los hogares y brinden comodidad, practicidad y bienestar.
                        <br></br><br></br>
                        Todos nuestros productos son artesanales y estan hechos con muchísimo amor! Además, llevan el nombre de alguno de nuestros amigos peludos para homenajearlos por habernos inspirado a crear para ellos.
                        <br></br><br></br>
                        <b>Los invitamos a ser parte de esta hermosa comunidad a ustedes y sus peludos, donde pensamos en ellos y diseñamos para vos!!</b>
                    </div>
                </div>
                <div className="w-1/3 flex justify-center sm:w-full">
                    <img src={Logo} className="h-full p-1 object-scale-down sm:w-1/2" altname="regaleria-artesanal"/>
                </div>
            </div>
        </div>
    )
}