import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import FooterLinksContainer from "./FooterLinkContainer";
import CategoriesStore from "../../../../../Stores/CategoriesStore";

import "../Styles/FooterLinks.scss";

const FooterLinks = () => {
    useEffect(() => {
        CategoriesStore.getCategories();
    }, []);

    const linkContainersCount : number = Math.floor(CategoriesStore.categories.length / 5) + 1;
    const startIndexes : number[] = [];

    for(let i = 0; i < linkContainersCount; ++i) {
        startIndexes.push(i);
    }

    return (
        <div className='footer-links'>
            {
                startIndexes.map((startIndex) => {
                    return <FooterLinksContainer 
                        key={startIndex}
                        startIndex={startIndex}
                        categories={CategoriesStore.categories}
                    />
                })
            }
        </div>
    );
}

export default observer(FooterLinks);