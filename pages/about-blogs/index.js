import Link from "next/link";
import React, { Fragment } from "react";

const BlogsDescription = (blogMain) => {
  return (
    <Fragment>
      <div className="blog detail1 my-5">
        <div className="blog-details-bg-img">
          <img
            src={
              "https://cfw.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoid3d3LndlYmNoYW5ha3lhLmNvbSIsInYiOjI1Mjc2OTk3ODcsImkiOiJlMDE5MTRkNi03ZTAyLTRlNmQtMjE1My00YWM4OWU1MWE3MDAifQ/storage/2018/12/WebChanakya-Blog.png"
            }
            // width={100}
            // height={4000}
            alt={blogMain.thumbImg}
            className="img-fluid"
          />
        </div>
        <div className="container pt-md-20 pt-10">
          <div className="blog-content d-flex justify-content-center">
            <div className="main md-w-5/6 w-full">
              <div className="">
                <span className="blog-tag bg-green py-1 px-2 text-uppercase inline-block">
                  JEAN, GLASSES
                </span>
              </div>
              <div className="heading3 mt-3">
                Fashion Trends To Watch Out For In Summer 2023
              </div>
              <div className="author d-flex items-center gap-4 mt-4">
                <div className="avatar w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={
                      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png"
                    }
                    width={40}
                    height={40}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="d-flex items-center gap-2">
                  <div className="caption1 text-secondary">by Chris Evans</div>
                  <div className="line w-5 h-px bg-secondary"></div>
                  <div className="caption1 text-secondary">Dec 20, 2023</div>
                </div>
              </div>
              <div className="content mt-md-8 mt-5">
                <div className="body1">
                  Discover the latest fashion trends that will dominate the
                  upcoming season. From vibrant colors to unique patterns and
                  innovative styles.
                </div>
                <div className="body1 mt-3">
                  I’ve always been passionate about underwear and shapewear and
                  have a huge collection from over the years! When it came to
                  shapewear, I could never find exactly what I was looking for
                  and I would cut up pieces and sew them together to create the
                  style and compression I needed.
                </div>
                <div className="d-flex justify-content-center my-5">
                  {/* {blogMain.subImg.map((item, index) => ( */}
                  <img
                    key={"index"}
                    src={
                      "https://cdn2.hubspot.net/hubfs/3365633/iStock-887987150.png"
                    }
                    width={400}
                    height={300}
                    alt={"item"}
                    className="w-full  mx-4 shadow"
                  />

                  <img
                    key={"index"}
                    src={
                      "https://cdn2.hubspot.net/hubfs/3365633/iStock-887987150.png"
                    }
                    width={400}
                    height={300}
                    alt={"item"}
                    className="w-full  mx-4 shadow"
                  />
                  {/* ))} */}
                </div>
                <div className="heading4 mt-8">How did SKIMS start?</div>
                <div className="body1 mt-4">
                  This is such a hard question! Honestly, every time we drop a
                  new collection I get obsessed with it. The pieces that have
                  been my go-tos though are some of our simplest styles that we
                  launched with. I wear our Fits Everybody Thong every single
                  day – it is the only underwear I have now, it’s so comfortable
                  and stretchy and light enough that you can wear anything over
                  it.
                </div>
                <div className="body1 mt-4">
                  For bras, I love our Cotton Jersey Scoop Bralette – it’s lined
                  with this amazing power mesh so you get great support and is
                  so comfy I can sleep in it. I also love our Seamless Sculpt
                  Bodysuit – it’s the perfect all in one sculpting, shaping and
                  smoothing shapewear piece with different levels of support
                  woven throughout.
                </div>
              </div>
              {/* <div className="action d-flex justify-content-between flex-wrap gap-5 mt-md-8 mt-5">
                <div className="left d-flex items-center gap-3 flex-wrap">
                  <p>Tag:</p>
                  <div className="list d-flex items-center gap-3 flex-wrap">
                    <div
                      className={`tags bg-surface py-1.5 px-4 rounded-full text-uppercase cursor-pointer duration-300`}
                      onClick={() => handleBlogClick("fashion")}
                    >
                      fashion
                    </div>
                    <div
                      className={`tags bg-surface py-1.5 px-4 rounded-full text-uppercase cursor-pointer duration-300`}
                      onClick={() => handleBlogClick("yoga")}
                    >
                      yoga
                    </div>
                    <div
                      className={`tags bg-surface py-1.5 px-4 rounded-full text-uppercase cursor-pointer duration-300`}
                      onClick={() => handleBlogClick("organic")}
                    >
                      organic
                    </div>
                  </div>
                </div>
                <div className="right d-flex items-center gap-3 flex-wrap">
                  <p>Share:</p>
                  <div className="list d-flex items-center gap-3 flex-wrap">
                    <Link
                      href={"https://www.facebook.com/"}
                      target="_blank"
                      className="bg-surface w-10 h-10 d-flex items-center justify-content-center rounded-full duration-300"
                    >
                      <div className="icon-facebook duration-100"></div>
                    </Link>
                    <Link
                      href={"https://www.instagram.com/"}
                      target="_blank"
                      className="bg-surface w-10 h-10 d-flex items-center justify-content-center rounded-full duration-300"
                    >
                      <div className="icon-instagram duration-100"></div>
                    </Link>
                    <Link
                      href={"https://www.twitter.com/"}
                      target="_blank"
                      className="bg-surface w-10 h-10 d-flex items-center justify-content-center rounded-full duration-300"
                    >
                      <div className="icon-twitter duration-100"></div>
                    </Link>
                    <Link
                      href={"https://www.youtube.com/"}
                      target="_blank"
                      className="bg-surface w-10 h-10 d-flex items-center justify-content-center rounded-full duration-300"
                    >
                      <div className="icon-youtube duration-100"></div>
                    </Link>
                    <Link
                      href={"https://www.pinterest.com/"}
                      target="_blank"
                      className="bg-surface w-10 h-10 d-flex items-center justify-content-center rounded-full duration-300"
                    >
                      <div className="icon-pinterest duration-100"></div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="next-pre d-flex items-center justify-content-between mt-md-8 mt-5 py-6 border-y border-line">
                {blogId === "1" ? (
                  <>
                    <div
                      className="left cursor-pointer"
                      onClick={() => handleBlogDetail(String(blogData.length))}
                    >
                      <div className="text-uppercase text-secondary2">
                        Previous
                      </div>
                      <div className="mt-2">
                        {blogData[blogData.length - 1].title}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="left cursor-pointer"
                      onClick={() =>
                        handleBlogDetail(blogData[Number(blogId) - 2].id)
                      }
                    >
                      <div className="text-uppercase text-secondary2">
                        Previous
                      </div>
                      <div className="mt-2">
                        {blogData[Number(blogId) - 2].title}
                      </div>
                    </div>
                  </>
                )}
                {Number(blogId) === blogData.length ? (
                  <>
                    <div
                      className="right text-right cursor-pointer"
                      onClick={() => handleBlogDetail("1")}
                    >
                      <div className="text-uppercase text-secondary2">Next</div>
                      <div className="mt-2">{blogData[0].title}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="right text-right cursor-pointer"
                      onClick={() =>
                        handleBlogDetail(blogData[Number(blogId)].id)
                      }
                    >
                      <div className="text-uppercase text-secondary2">Next</div>
                      <div className="mt-2">
                        {blogData[Number(blogId)].title}
                      </div>
                    </div>
                  </>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogsDescription;
