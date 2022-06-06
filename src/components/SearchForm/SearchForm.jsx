import { Form, SearchInput, SearchButton } from "./SearchForm.styled";
import { useLocation, useNavigate } from "react-router-dom";


export const SearchForm = () => {
	const location = useLocation();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const value = e.target.elements.query.value;

		navigate({
			...location,
			search: `query=${value}`,
		});
	}

	return (
		<Form onSubmit={handleSubmit}>
			<SearchInput
				type="text"
				name="query" />
			<SearchButton
				type="submit">Search</SearchButton>
		</Form>
	)
}