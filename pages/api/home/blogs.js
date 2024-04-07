import blog from "~/models/blog";
import dbConnect from "~/utils/dbConnect";

export default async function apiHandler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        let blogsInfo = [];
        res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
        blogsInfo = await blog.find({}).select({
          _id: 0,
          id: 1,
          category: 1,
          tag: 1,
          title: 1,
          date: 1,
          author: 1,
          avatar: 1,
          thumbImg: 1,
          coverImg: 1,
          subImg: 1,
          shortDesc: 1,
          description: 1,
          slug: 1,
        })
        .limit(10);
        res.status(200).json({ success: true, blogsInfo });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
