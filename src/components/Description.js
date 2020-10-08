import React from 'react'
import Commencer from './Commencer'


const Description = (props) => {
    return (
        <div className="text">
                <p>Facilitez vous les TDP!</p>
                <p>Que vous soyez un habitué des salles de dégroupage ou encore un nouveau venu dans le monde du test de position, vous allez pouvoir réaliser des TDP avec plus de facilité.
                "MapTDP" vous propose une nouvelle méthode afin de touver plus facilement les positions recherchées.
                Il vous faudra juste copier votre liste de TDP de l'applicaton GTI puis la coller dans MapTDP. Vous obtiendrez alors votre liste de TDP reorganisée afin de pouvoir trouver les positions avec plus de facilité.
                Pour plus de détails sur le fonctionnement "Cliqez-ici".</p>
                <p>Attention MapTDP est un outil collaboratif et tout les rep ne sont pas encore référencés. Si vous voulez utiliser cette app, il faudra intégrer vos rep, en référençant les réglettes dans l'application.</p>
            <Commencer fx={props.fx} />
        </div>
    )
}
export default Description