import { useSelector } from "react-redux/es/exports";

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalSum } from "./checkout.styles";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return(
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<TotalSum>Total: ${cartTotal}</TotalSum>
			<PaymentForm />
		</CheckoutContainer>
	);
};

export default Checkout;