import { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

import { getCommentsByPostId, getPostById } from "../api";

export const postLoader = async ({ params }) => {
  const postId = params.postId;
  const postPromise = getPostById(postId);
  const commentsPromise = getCommentsByPostId(postId);
  return { postPromise, commentsPromise };
};

const RandomPost = () => {
  const { postPromise, commentsPromise } = useLoaderData();

  return (
    <section>

       <Suspense fallback={<h3>Waiting...</h3>}>
        <Await resolve={postPromise}>
          {(post) => (
            <>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Suspense fallback={<small style={{color: 'red'}}>Loading Comments...</small>}>
                <Await resolve={commentsPromise}>
                  {(comments) =>
                    comments.map((comment) => (
                      <span key={comment.id}>
                        <small>{comment.body}</small>
                        <br />
                      </span>
                    ))
                  }
                </Await>
              </Suspense>
            </>
          )}
        </Await>

      </Suspense>
    </section>
  );
};

export default RandomPost;
