import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function () {
	return (
		<LoaderContainer >
			<BallTriangle
				color='red'
				width='100%'
				height='250'
			/>
		</LoaderContainer>)
}
