import customId from "custom-id-new";
import sessionChecker from "~/lib/sessionPermission";
import { convertToSlug } from "../../../middleware/functions";
import attrModel from "../../../models/attributes";
import brandModel from "../../../models/brand";
import categoryModel from "../../../models/category";
import colorModel from "../../../models/colors";
import BlogModel from "../../../models/blog";
import dbConnect from "../../../utils/dbConnect";
import { parseFormMultiple } from "../../../utils/parseForm";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "blog")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const category = await BlogModel.find({});
        // const attribute = await attrModel.find({});
        // const color = await colorModel.find({});
        // const brand = await brandModel.find({});
        res
          .status(200)
          .json({ success: true, category,
            //  attribute, 
            //  color, 
            //  brand 
            });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await parseFormMultiple(req);
        const {
          title,
          author,
          date,
          slug,
          description,
          short_description,
          blogImages,
          subcategory,
          category,
          tag,
          //   brand,
          //   trending,
          //   displayImage,
          //   galleryImages,
          //   seo,
        } = data.field;
        // const random = "P" + customId({ randomLength: 4, upperCase: true });
        const categories = await JSON.parse(category);
        const tags = await JSON.parse(tag);
        const subcategories = await JSON.parse(subcategory);
        // const image = await JSON.parse(displayImage);
        // const gallery = await JSON.parse(galleryImages);
        // const colors = await JSON.parse(color);
        // const attributes = await JSON.parse(attribute);
        // const variants = await JSON.parse(variant);
        // const seoData = await JSON.parse(seo);
        // const discount = (main_price - (sale_price / 100) * main_price).toFixed(
        //   1,
        // );
        const blogImageUrl = [];
        const imgArray = JSON.parse(blogImages).forEach((item) => {
          blogImageUrl.push(item.url);
        });

        let blogData = {
          title: title.trim(),
          author: author.trim(),
          date: date.trim(),
          slug: slug.trim(),
          subImg: blogImageUrl,
          shortDesc: short_description.trim(),
          description,
          category: categories,
          tag: tags,
          //subcategories,
          //brand: brand.trim(),
          //trending: trending ? true : false,
          // seo: seoData,
        };

        await BlogModel.create(blogData);
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
