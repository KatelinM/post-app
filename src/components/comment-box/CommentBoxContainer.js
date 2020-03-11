import {connect} from "react-redux";
import CommentBox from "./CommentBox";

const mapStateToProps = (state) => {
    return {
        posts: state.comments,
    }
};

export default connect(mapStateToProps)(CommentBox);
