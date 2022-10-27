import {Section, Navigator, Animes} from '../styles';

export function FirstSection() {
    return(
        <Section>
            <Navigator>
                <li>Lança Hoje</li>
                <li>Completos</li>
                <li>Populares</li>
            </Navigator>

            <Animes>
            <img src="../public/one2.jpg" alt="" />
            <img src="../public/narut.jpg" alt="" />
            <img src="../public/jk1.jpg" alt="" />
            <img src="../public/onep.jpg" alt="" />
            </Animes>
        </Section>
    )
}