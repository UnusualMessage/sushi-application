import { observer } from "mobx-react-lite";
import CurrentCategory from "../../../Store/CurrentCategory";

const Title = observer(() => {
    return (
        <section className='main-title'>
            <h1>
                {CurrentCategory.category}
            </h1>
        </section>
    )
});

export default Title;