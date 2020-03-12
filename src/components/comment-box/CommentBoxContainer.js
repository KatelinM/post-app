import {connect} from "react-redux";
import CommentBox from "./CommentBox";

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
    }
};

export default connect(mapStateToProps)(CommentBox);
