import {connect} from "react-redux";
import Counter from "./Counter";

let mapStateToProps = (state) => {
    return {
        title: state.title,
        date: state.date,
        body: state.body,
    }
}

export default connect(mapStateToProps)(Counter);
