import { GoBack } from "./GoBackBtn.styled";
import { /* useLocation, */ useNavigate } from "react-router-dom";

export const GoBackBtn = ({ location }) => {
	const navigate = useNavigate();
	/* const location = useLocation(); */

	//const onGoBackClick = () => navigate(location?.state?.from ?? '/')

	return (
		<GoBack type='button' onClick={() => {
			navigate(location?.state?.from ?? '/');
		}}>GoBack</GoBack>
	)
}

