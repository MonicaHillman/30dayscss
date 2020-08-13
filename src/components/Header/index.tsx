import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';


interface PageHeaderProps {
    title: string;
    link: string
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {

    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to={`/${props.link}`}>
                    <img src={backIcon} alt="voltar" />
                </Link>
                <p>{props.title}</p>
            </div>
        </header>
    );
}

export default PageHeader;