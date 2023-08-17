import "./sidebar.css";
import { personsImgs } from "../../utils/images";
import { LinksNavegacao } from "../../data/data";

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
            LinksNavegacao.map((LinkNavegacao) => (
              <li className="nav-item" key={LinkNavegacao.id}>
                <a href="#" className="{`nav-link`">
                  <img src={ LinkNavegacao.imagem } className="nav-link-icone" 
                  alt= {LinkNavegacao.nome} />
                  <span className="nav-link-text">{LinkNavegacao.nome}</span>
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