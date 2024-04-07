import { Schema, model, models } from "mongoose";
import { blog } from "~/utils/modelData.mjs";

const blogSchema = new Schema(blog)

export default models.blog || model('blog', blogSchema)