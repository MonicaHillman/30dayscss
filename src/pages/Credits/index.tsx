import React from 'react';
import './styles.css';
import backIcon from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';

function Credits() {
    return (
        <div className="page-credits">

            <article className="person-item">

                <header>
                        <Link to="/">
                            <img src={backIcon} alt="voltar" />
                        </Link>
                    <img src='https://avatars0.githubusercontent.com/u/51282495?s=460&u=82be8af0981a38fa9e6cf2e514b73227326d547e&v=4' alt='person' />
                    <div>
                        <strong>Monica Hillman</strong>
                        <span>Front-end Developer
                            <br />HTML | CSS | JavaScript | ReactJS | Typescript</span>
                    </div>
                </header>
                <p> My name is Monica, I'm 21 years old. I'm in the last semester of the Bachelor of Digital Technologies, where I acquired knowledge in several areas of digital creation and I am developing a game for teaching the Italian language called "La Passione di Giusi".
                    <br />I am currently focused on improving my knowledge in web programming. I have two years of experience in IT Support (where I learned in practice the importance of intuitive interfaces) and knowledge in HTML and CSS, learning JavaScript, TypeScript, ReactJS and React Native, future interest in Angular, VueJS and other technologies.</p>
                <footer>
                    <a
                        href={'https://www.linkedin.com/in/monicamhillman/'}>
                        <img src='https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white' alt="Whatsapp" />
                    </a>
                    <a
                        href={'https://www.instagram.com/monis.png/'}>
                        <img src='https://img.shields.io/badge/-Instagram-C13584?style=flat-square&labelColor=C13584&logo=instagram&logoColor=white' alt="Instagram" />
                    </a>
                    <a
                        href={'https://www.twitter.com/monispng'}>
                        <img src='https://img.shields.io/badge/-Twitter-blue?style=flat-square&logo=Twitter&logoColor=white' alt="Twitter" />
                    </a>
                    <a
                        href={'https://github.com/MonicaHillman'}>
                        <img src='https://img.shields.io/github/followers/MonicaHillman?label=Github&style=social' alt="Github" />
                    </a>
                </footer>
            </article>
        </div>
    )
}

export default Credits;