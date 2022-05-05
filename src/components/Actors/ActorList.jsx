import PropTypes from "prop-types";
import { ActorCard } from "components/Actors/ActorCard";
import { Actors } from "./ActorList.styled";

export const ActorList = ({ cast }) => {
	return (
		<Actors>
			{cast && cast.map(({ id, name, character, profile_path }) => {
				return (
					<ActorCard
						key={id}
						img={profile_path}
						name={name}
						role={character}
					/>
				)
			})}
		</Actors>
	)
}
ActorList.propTypes = {
	cast: PropTypes.arrayOf(PropTypes.object),
}