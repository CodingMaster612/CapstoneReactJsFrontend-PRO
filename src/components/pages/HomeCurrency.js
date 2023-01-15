import HomeCrypto from "../reusables/Home";
import '../../css/Crypto.css'
import CryptoTitle from "../reusables/CryptoFile";

function Crypto() {
    const titles = [
        { id: 1, title: 'BTC', rate: 33834, icon: <i class="fa-brands fa-bitcoin" />},
        { id: 2, title: 'ETH', rate: 1340, icon: <i class="fa-brands fa-ethereum" />},
        { id: 3, title: 'CDR', rate: 0.27054, icon: <i class="fa-solid fa-code" />},
    ]
    return (


        <div className="container">

            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        {titles.map((item) => (
                            <CryptoTitle data={item} />
                        ))}
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>

    )
}

export default Crypto;