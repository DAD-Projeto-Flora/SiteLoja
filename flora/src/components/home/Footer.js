import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="columns-footer">
                <div className="column">
                    <div>
                        <h2 className="title-footer">Canais de Venda</h2>
                        <span className="text-columns"> <img src="/LogoWhatsapp.svg" alt="Logo Whatsapp" />Compre pelo Whatsapp</span>
                        <a id="tel-whatsapp" 
                            href="https://wa.me/5511986055544"
                            target="_blank"
                            rel="noopener noreferrer"
                        >(11) 98605-5544</a>
                        
                    </div>

                    <div className="payment-types">
                        <h2 className="title-footer">Formas de pagamento</h2>
                        <img src="/PicPay.svg" alt="Logo Whatsapp" />
                        <img src="/mastercard.svg" alt="Logo Whatsapp" />
                        <img src="/VISA.svg" alt="Logo Whatsapp" />
                    </div>
                </div>
                <div className="column">
                    <div>
                        <h2 className="title-footer">Suporte</h2>
                        <span className="text-columns"> <img src="/emailicon.svg" alt="Logo Whatsapp" />Resolva por e-mail</span>
                        <a href="mailto:suporteflora.germinare@gmail.com" id="support-link">Clique aqui</a>
                    </div>
                </div>
                <div className="logo-empresa">
                    <img className="logo-flora" src="/FLORA_-_Sólido_Azul_sombreado 2.svg" alt="Logo Whatsapp" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;