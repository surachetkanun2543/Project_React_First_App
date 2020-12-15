import axios from "axios";
import { ORDERS_FETCH } from "./type";

export const orderFetch = () => {
	return dispatch => {
		axios
			.get(process.env.REACT_APP_API_URL + "/orders")
			.then(res => dispatch({ type: ORDERS_FETCH, payload: res.data }));
	};
};

export const orderDelete = id => {
	return dispatch => {
		axios.delete(process.env.REACT_APP_API_URL + "/orders/" + id).then(res => {
			axios.get(process.env.REACT_APP_API_URL + "/orders")
				.then(res =>
					dispatch({ type: ORDERS_FETCH, payload: res.data })
				);
		});
	};
};
