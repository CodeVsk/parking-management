import "./sidebar.css";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";

const Sidebar = () => {
  return (
    <div className={`sidebar`}>
      <div className="usuario-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.unip_adm}  alt="Imagem do perfil"/> 
        </div>
        <span className="info-nome">Unip</span>
      </div>
      <nav className="navegacao">
        <ul className="nav-lista">
          {
            navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a href="#" className="{`nav-link`">
                  <img src={ navigationLink.image } className="nav-link-icone" 
                  alt= {navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;