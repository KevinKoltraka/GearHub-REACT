
import "../styles/layouts/footer.css"

export const Footer = ()=>{
    return( 
    <footer className="flex-column-center pd-sm">
        <p className="mg-bottom-xsm">Made by Kevin Koltraka</p>
        <div className="footer-links mg-bottom-xsm">
        <a className="mg-xsm fs-sm-plus" href="https://github.com/KevinKoltraka"  target="_blank" rel="noreferrer"
            ><i className="fab fa-github"></i
        ></a>
        <a
            className="mg-xsm fs-sm-plus"
            href="https://www.linkedin.com/in/kevin-koltraka-878b45255/"
            target="_blank" rel="noreferrer"
            ><i className="fab fa-linkedin-in"></i
        ></a>
        <a className="mg-xsm fs-sm-plus" href="https://wa.me/355688172927"  target="_blank" rel="noreferrer"
            ><i className="fab fa-whatsapp"></i
        ></a>
        </div>
        <p className="copyright mg-bottom-xsm">© 2025 UBT AgroMarket</p>
  </footer>
  );
}
