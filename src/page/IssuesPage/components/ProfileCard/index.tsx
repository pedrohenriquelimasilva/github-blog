import { ArrowArcLeft, ArrowSquareOut, Calendar, Compass } from "phosphor-react";
import { ProfileContain, ProfileContent, ProfileHead } from "./style";
import logoGithubImage from '../../../../assets/githubLogo.svg'
import { NavLink } from "react-router-dom";


export function ProfileCard(){
    return(
      <ProfileContain>  
        <section>
          <ProfileHead>
            <nav>
              <NavLink to='/' end title="Voltar a listagem"><ArrowArcLeft size={12}/>Voltar </NavLink>
              <a href="">Ver no Github<ArrowSquareOut size={15} weight="bold"/></a>
            </nav>

            <h2>JavaScript data types and data structures</h2>
          </ProfileHead>
          <ProfileContent>
              <span><img src={logoGithubImage} alt='' color='#3A536B'/> pedrohenriquelimasilva</span>
              <span><Calendar size={20} weight='fill' color='#3A536B'/> Rotrans</span>
              <span><Compass size={20} weight='fill' color='#3A536B'/> 32 seguidores</span>
          </ProfileContent>
        </section>
      </ProfileContain>
    )
}