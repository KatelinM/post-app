import {connect} from "react-redux";
import Counter from "./Counter";
import {decreaseRatingAC, increaseRatingAC} from "../redux/action-creators";

let mapStateToProps = (state) => {
    return {
        title: state.title,
        date: state.date,
        body: state.body,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseRating: (id) => {
            dispatch(increaseRatingAC(id));
        },
        decreaseRating: (id) => {
            dispatch(decreaseRatingAC(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
