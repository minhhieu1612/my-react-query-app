import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const PostItem = (post) => {
  return (
    <div>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <hr />
    </div>
  );
};

const PostPage = () => {
  const { data, error, isPending, isSuccess, isError, isFetching } = useQuery({
    queryKey: ["postData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    staleTime: 3 * 1000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
    refetchOnMount: false,
  });

  return (
    <div>
      <h3>Post page</h3>
      <Link to="/">Go back</Link>
      <hr />
      {isPending && <p>Loading...</p>}
      {isFetching && <p>Refreshing...</p>}
      {isSuccess && data.map((post) => <PostItem key={post.id} {...post} />)}
      {isError && <span style={{ color: 'red' }}>{error.message}</span>}
    </div>
  );
};

export default PostPage