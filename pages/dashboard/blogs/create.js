import dynamic from "next/dynamic";

const BlogForm = dynamic(() => import("~/components/BlogsForm/blogForm"));

const NewBlog = () => {
  return <BlogForm />;
};

BlogForm.requireAuthAdmin = true;
BlogForm.dashboard = true;

export default NewBlog;
