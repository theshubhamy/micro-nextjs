import customId from "custom-id-new";
import sessionChecker from "~/lib/sessionPermission";
import { convertToSlug } from "../../../middleware/functions";
import attrModel from "../../../models/attributes";
import brandModel from "../../../models/brand";
import categoryModel from "../../../models/category";
import colorModel from "../../../models/colors";
import ProductModel from "../../../models/product";
import dbConnect from "../../../utils/dbConnect";
import { parseFormMultiple } from "../../../utils/parseForm";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function apiHandler(req, res) {
  const { method } = req;
  if (!(await sessionChecker(req, "product")))
    return res
      .status(403)
      .json({ success: false, message: "Access Forbidden" });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const category = await categoryModel.find({});
        const attribute = await attrModel.find({});
        const color = await colorModel.find({});
        const brand = await brandModel.find({});
        res
          .status(200)
          .json({ success: true, category, attribute, color, brand });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await parseFormMultiple(req);
        const {
          name,
          unit,
          unit_val,
          main_price,
          sale_price,
          description,
          short_description,
          type,
          category,
          subcategory,
          brand,
          qty,
          trending,
          new_product,
          best_selling,
          sku,
          color,
          attribute,
          selectedAttribute,
          variant,
          displayImage,
          galleryImages,
          seo,
        } = data.field;
        const random = "P" + customId({ randomLength: 4, upperCase: true });
        const categories = await JSON.parse(category);
        const subcategories = await JSON.parse(subcategory);
        const image = await JSON.parse(displayImage);
        const gallery = await JSON.parse(galleryImages);
        const colors = await JSON.parse(color);
        const attributes = await JSON.parse(attribute);
        const variants = await JSON.parse(variant);
        const seoData = await JSON.parse(seo);
        const discount = (main_price - (sale_price / 100) * main_price).toFixed(
          1,
        );

        let productData;
        if (type === "simple") {
          productData = {
            name: name.trim(),
            slug: convertToSlug(name, true),
            productId: random,
            unit: unit.trim(),
            unitValue: unit_val.trim(),
            price: main_price,
            discount,
            shortDescription: short_description.trim(),
            description,
            type,
            image,
            gallery,
            categories,
            subcategories,
            brand: brand.trim(),
            quantity: qty,
            trending: trending ? true : false,
            new: new_product ? true : false,
            bestSelling: best_selling ? true : false,
            sku,
            seo: seoData,
          };
        } else {
          productData = {
            name: name.trim(),
            slug: convertToSlug(name, true),
            productId: random,
            unit: unit.trim(),
            unitValue: unit_val.trim(),
            price: main_price,
            discount,
            shortDescription: short_description.trim(),
            description,
            type,
            image,
            gallery,
            categories,
            subcategories,
            brand: brand.trim(),
            trending: trending ? true : false,
            new: new_product ? true : false,
            bestSelling: best_selling ? true : false,
            colors,
            attributes,
            variants,
            attributeIndex: selectedAttribute,
            seo: seoData,
          };
        }
        await ProductModel.create(productData);
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
