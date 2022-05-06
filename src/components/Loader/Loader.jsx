import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
	return (
		<LoaderContainer >
			<BallTriangle
				color='red'
				width='100%'
				height='250'
			/>
		</LoaderContainer>)
}
