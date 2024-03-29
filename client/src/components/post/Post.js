import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';
import { withRouter, Link } from "react-router-dom";
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  
  render() {
    const { post, loading } = this.props.post;
    
    let postContent;
    
    if (post === undefined || loading || Object.keys(post).length === 0 ) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      )
    }
    
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {postContent}
              <Link to="/feed" className="btn btn-light mb-3">
                Back to Feed
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(withRouter(Post));