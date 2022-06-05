import PropTypes from "prop-types";
import { useState } from "react";
import { Form, SearchInput, SearchButton } from "./SearchForm.styled";

export const SearchForm = ({ setQuery }) => {
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (value.trim() === '') {
			return
		}
		const normValue = value.toLowerCase();
		setQuery(normValue);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<SearchInput
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)} />
			<SearchButton type="submit">Search</SearchButton>
		</Form>
	)
}
SearchForm.propTypes = {
	setQuery: PropTypes.func.isRequired,
}