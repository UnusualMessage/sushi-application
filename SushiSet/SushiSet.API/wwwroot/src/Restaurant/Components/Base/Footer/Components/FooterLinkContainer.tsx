import { observer } from "mobx-react-lite";

import ICategory from "../../../../../Interfaces/ICategory";
import { CategoryRoute } from "../../../Others/RouteNames";

import FooterLink from "./FooterLink";

const FooterLinksContainer = ({ startIndex, categories } : IFooterLinksContainerProps) => {
    return (
        <div className="links-container">
            {
                categories.slice(startIndex * 5, 5 * (startIndex + 1)).map((category) => {
                    return <FooterLink
                        key={category.id}
                        initial={CategoryRoute} 
                        to={category.name.toLowerCase()} 
                        title={category.name}
                    />
                })
            }
        </div>
    );
}

interface IFooterLinksContainerProps {
    startIndex: number,
    categories: ICategory[]
}

export default observer(FooterLinksContainer);