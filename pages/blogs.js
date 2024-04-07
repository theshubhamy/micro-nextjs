import Error500 from "~/components/error/500";
import HeadData from "~/components/Head";
import { appUrl, fetchData, setSettingsData } from "~/lib/clientFunctions";
import { wrapper } from "~/redux/store";
import classes from "../styles/pages.module.css";
import { useTranslation } from "react-i18next";
import ImageLoader from "~/components/Image";
import Image from "next/image";
import Link from "next/link";

const BlogPage = ({ blogData, error }) => {
  const { t } = useTranslation();
  return (
    <>
      {error ? (
        <Error500 />
      ) : (
        <>
          <HeadData title="Blogs" />
          <div className="layout_top">
            <h1 className={classes.heading}>{t("blogs")}</h1>
            {blogData && (
              <div>
                <div
                  className={classes.content}
                  dangerouslySetInnerHTML={{
                    __html: blogData.page && blogData.page.content,
                  }}
                ></div>
                <div>
                  
                  <div className="blog list md:py-20 py-10">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-9">
                          {blogData.blogsInfo.map((blogData, index) => (
                            <>
                              <Link href={`/about-blogs/${blogData.id}`}>
                                <div className="blog-item" key={index}>
                                  <div className="blog-main">
                                    <div className="blog-thumb w-full rounded-20 overflow-hidden flex-shrink-0">
                                      <img
                                        src={blogData.subImg[0]}
                                        alt="blog-img"
                                        className="img-fluid blogs-img1"
                                      />
                                    </div>
                                    <div className="blog-infor">
                                      <div className="">
                                        <span className="blog-tag bg-green py-1 px-2 text-uppercase inline-block">
                                          {blogData.tag}
                                        </span>
                                      </div>
                                      <div className="heading6 blog-title mt-3">
                                        {blogData.title}
                                      </div>
                                      <div className="d-flex items-center mx-2 mt-2">
                                        <div className="blog-author text-secondary">
                                          by {blogData.author}
                                        </div>
                                        <span className="mx-2"></span>
                                        <div className="blog-date text-secondary">
                                          {blogData.date}
                                        </div>
                                      </div>
                                      <div className="blog-desc text-secondary mt-4">
                                        {blogData.shortDesc}
                                      </div>
                                      <div className="text-button underline mt-4">
                                        Read More
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </>
                          ))}

                          {/* {pageCount > 1 && (
                                <div className="pagination">
                                    <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                                </div>
                            )} */}
                        </div>

                        {/* ------ */}
                        <div className="col-xl-3">
                          {/* <form className="form-search">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Search"
                            />
                            <button className="btn btn-primary">Search</button>
                          </form> */}
                          <div className="recent">
                            <div className="heading6">RECENT POSTS</div>
                            <div className="list-recent mt-4">
                              {blogData.blogsInfo.slice(0, 5).map((item) => (
                                <div
                                  className="recent-blog-post-div"
                                  key={item.id}
                                  // onClick={() => handleBlogClick(item.id)}
                                >
                                  <div className="recent-post-blog-img-div">
                                    <img
                                      src={
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8_Bv4GLxrYY8WeaXRBWjRBWwC1HZFk0Uww&usqp=CAU"
                                      }
                                      width={100}
                                      // height={100}
                                      alt={item.thumbImg}
                                      className="img-fluid"
                                    />
                                  </div>

                                  <div>
                                    <div className="">
                                      <span className="recent-blog-tag bg-green py-1 px-2 text-uppercase inline-block">
                                        {item.tag}
                                      </span>
                                    </div>
                                    <div className="recent-blog-title mt-2">
                                      {item.title}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* ----------- */}
                          <hr />
                          <div className="filter-category my-4">
                            <div className="heading6">CATEGORIES</div>
                            <div className="list-cate">
                              {/* {blogData.blogsInfo.map((item) => (
                                <>
                                  <ul>
                                    {item.category.map((category, index) => (
                                      <li key={index}>{category}</li>
                                    ))}
                                  </ul>
                                </>
                              ))} */}

                            </div>
                          </div>
                          {/* ----------- */}
                          <hr />
                          {/* ----------- */}
                          <div className="filter-tags my-4">
                            <div className="heading6">TAGS CLOUD</div>
                            <div className="list-tags">
                              <div
                              // className={`tags ${
                              //   category === "fashion" ? "active" : ""
                              // }`}
                              // onClick={() => handleCategory("fashion")}
                              >
                                Fashion
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ------ */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

BlogPage.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    try {
      const { origin } = appUrl(context.req);
      const blogsurl = `${origin}/api/home/blogs`;
      const blogData = await fetchData(blogsurl);
      setSettingsData(store, blogData);
      return {
        blogData,
        error: false,
      };
    } catch (error) {
      console.log(error);
      return {
        blogData: null,
        error,
      };
    }
  }
);

export default BlogPage;
