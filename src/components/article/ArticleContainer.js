import {connect} from "react-redux";
import Article from "./Article";

let mapStateToProps = (state) => {
    return {
        title: state.article.title,
        date: state.article.date,
        body: state.article.body,
    }
}

export default connect(mapStateToProps)(Article);
