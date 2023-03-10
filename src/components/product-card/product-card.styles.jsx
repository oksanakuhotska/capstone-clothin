import styled from "styled-components";

import {
	BaseButton,
	GoogleSignInButton, 
	InvertedButton,
} from '../button/button.styles';

export const ProductCardContainer = styled.div`
	width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${BaseButton},
	${GoogleSignInButton}, 
	${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

		&:hover {
			cursor: pointer;

			img {
				opacity: 0.8;
			}

			${BaseButton},
			${GoogleSignInButton}, 
			${InvertedButton} {
				opacity: 0.85;
				display: flex;
			}
		}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 95%;
	object-fit: cover;
	margin-bottom: 5px;
	outline: 1px solid black;
	overflow: hidden;

	img {
	width: 100%;
	height: 100%;
	object-fit: cover;

		&:hover {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Price = styled.span`
	width: 10%;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;
