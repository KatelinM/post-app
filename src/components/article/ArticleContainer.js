import {connect} from "react-redux";
import Article from "./Article";

let mapStateToProps = (state) => {
    return {
        title: state.title,
        date: state.date,
        body: state.body,
    }
}

export default connect(mapStateToProps)(Article);
