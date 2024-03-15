import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
    //console me network me dekh na hai yha kitni baar call badegi or ye reject karga
    //yha pe bar bar load karne par ab deta aajata hai bas isme ek problem hai bar bar fetch karna pad rhaa hai

    // fetch("https://dummyjson.com/posts", { signal })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     addInitialPosts(data.posts);
    //     setFetching(false);
    //   });
    //like me homme pe hu or jana hai create post to console me ye show ho jaaaega
    return () => {
      console.log("Cleaning up useeffect");
      controller.abort();
    };
  }, []; //yha pe [] karne se ek baar call hoga sirf agar ye na lage to sysytem crase kar jaaega

  return (
    //niche ye feching hai ye load ke liye hai bhut !fetching ye ki jab load ho rha hai to dusro ko nhi dikhana chahiye
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && PostList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
