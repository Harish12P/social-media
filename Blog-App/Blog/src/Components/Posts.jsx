import React, { useState } from "react";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "this is first post",
    desc: 'Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. Non-formal education is also structured but takes place outside the formal schooling system while informal education is unstructured learning through daily experiences. Formal and non-formal education are divided into levels that include early childhood education, primary education, secondary education, and tertiary education. Other classifications focus on the teaching method, like teacher-centered and student-centered education, and on the subject, like science education, language education, and physical education. The term "education" can also refer to the mental states and qualities of educated people and the academic field studying educational phenomena.',
    authorID: 3,
  },
  {
    id: "1",
    thumbnail: Thumbnail2,
    category: "science",
    title: "this is first post",
    desc: 'Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. Non-formal education is also structured but takes place outside the formal schooling system while informal education is unstructured learning through daily experiences. Formal and non-formal education are divided into levels that include early childhood education, primary education, secondary education, and tertiary education. Other classifications focus on the teaching method, like teacher-centered and student-centered education, and on the subject, like science education, language education, and physical education. The term "education" can also refer to the mental states and qualities of educated people and the academic field studying educational phenomena.',
    authorID: 1,
  },
  {
    id: "1",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "this is first post",
    desc: 'Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. Non-formal education is also structured but takes place outside the formal schooling system while informal education is unstructured learning through daily experiences. Formal and non-formal education are divided into levels that include early childhood education, primary education, secondary education, and tertiary education. Other classifications focus on the teaching method, like teacher-centered and student-centered education, and on the subject, like science education, language education, and physical education. The term "education" can also refer to the mental states and qualities of educated people and the academic field studying educational phenomena.',
    authorID: 13,
  },
  {
    id: "1",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "this is first post",
    desc: 'Education is the transmission of knowledge, skills, and character traits and comes in many forms. Formal education happens in a complex institutional framework, like public schools. Non-formal education is also structured but takes place outside the formal schooling system while informal education is unstructured learning through daily experiences. Formal and non-formal education are divided into levels that include early childhood education, primary education, secondary education, and tertiary education. Other classifications focus on the teaching method, like teacher-centered and student-centered education, and on the subject, like science education, language education, and physical education. The term "education" can also refer to the mental states and qualities of educated people and the academic field studying educational phenomena.',
    authorID: 11,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      {posts.map(
        ({ id, thumbnail, category, title, description, authorID }) => (
          //yha pe sub destructed karne hai
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={description}
            authorID={authorID}
          />
        )
      )}
    </section>
  );
};

export default Posts;
