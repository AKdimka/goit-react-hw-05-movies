import { GoBack } from "./GoBackBtn.styled";
import { useNavigate } from "react-router-dom";

export const GoBackBtn = ({ location }) => {
	const navigate = useNavigate();

	return (
		<GoBack
			type='button'
			onClick={() => {
				navigate(location?.state?.from ?? '/');
			}}>GoBack</GoBack>
	)
}

