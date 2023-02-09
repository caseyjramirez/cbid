import braden from '../assets/braden.jpeg';
import { useNavigate } from "react-router-dom";
const beerDrinkingPlaylist = 'https://open.spotify.com/playlist/2jxSQenFYXjkBcmNWQukQ9?si=YSGqP-C_T5C4OPj_ewF16Q';

const Preview = () => {
    let navigate = useNavigate();

    const goToBeerDrinkingMusic = () => {
        navigate(beerDrinkingPlaylist);
    }

    return (
        <div className="full-page-span">
            <div className="flex center-center full-page-height">
                <div className='preview mt-10'>

                    <div className="text-container mb-20">
                        <h1 className='large black'>Cheapest Beer In Dallas</h1>
                    </div>

                    <div className="preview-img-container mb-20">
                        <img src={braden} alt="beautiful man holding beer" />
                    </div>

                    <div className="text-container mb-20">
                        <p className='black'>Please bear with us while we make this house a home. In the meantime might we recommend drinking some cheap beer?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Preview;