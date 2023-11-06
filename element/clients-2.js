import ClientSlider from "../component/clientSlider";

function Clients2({clients2Data}) {
    return (
        <>
            
            <div className="content-inner-3">
                <div className="container">
                    <div className="clients-carousel owl-none owl-carousel m-b30">
                        <ClientSlider clients2Data={clients2Data}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clients2;
