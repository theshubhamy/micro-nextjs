import sessionChecker from "~/lib/sessionPermission";
import blogCategoryModel from "../../../models/blogCategory";
import dbConnect from "../../../utils/dbConnect";

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "category")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const data = await blogCategoryModel.findById(req.query.id);
        res.status(200).json({ success: true, category: data });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const data = req.body;
        const categoryData = {
          name: data.name.trim(),
          icon: data.categoryImage,
        };
        await blogCategoryModel.findByIdAndUpdate(data.id, categoryData);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const { id } = req.body;
        const category = await blogCategoryModel.findById(id);
        category.topCategory = !category.topCategory;
        await category.save();
        res.status(200).json({ success: true });
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
