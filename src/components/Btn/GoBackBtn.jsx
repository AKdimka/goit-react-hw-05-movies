import { GoBack } from "./GoBackBtn.styled";
import { useLocation } from "react-router-dom";


export const GoBackBtn = () => {
	const location = useLocation();

	return (
		<GoBack to={location?.state ?? '/'}>GoBack</GoBack>
	)
}

