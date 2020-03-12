import {connect} from "react-redux";
import AddPostForm from "./AddPostForm";
import {addPostAC} from "../redux/action-creators";

let mapStateToProps = (state) => {
    return {
        comments: state.comments,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (id, newPost) => {
            dispatch(addPostAC(id, newPost));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
