import { useEffect, useRef, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { toast } from "react-toastify";
import useSWR from "swr";
import { fetchData, postData } from "~/lib/clientFunctions";
import FileUpload from "../FileUpload/fileUpload";
import TextEditor from "../TextEditor";
import LoadingButton from "../Ui/Button";
import Spinner from "../Ui/Spinner";
import classes from "./blogForm.module.css";
import ImageLoader from "../Image";
import CustomSelect from "../CustomSelect";
import { useTranslation } from "react-i18next";

const BlogForm = () => {
  const url = `/api/blogs/createBlog`;
  const { data, error } = useSWR(url, fetchData);
  const product_type = useRef();
  const seo_title = useRef("");
  const seo_desc = useRef("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedAttr, setSelectedAttr] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [attrItemList, setAttrItemList] = useState([]);
  const [blogImage, setBlogImage] = useState([]);
  const [seoImage, setSeoImage] = useState([]);
  const [variantInputList, setVariantInputList] = useState([]);
  const [resetImageInput, setResetImageInput] = useState("");
  const [editorState, setEditorState] = useState("");
  const [buttonState, setButtonState] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    const arrList = [];
    if (selectedColor.length && attrItemList.length) {
      selectedColor.map((color) => {
        attrItemList.map((attr) => {
          const combination = {
            color: color.label,
            attr: attr.label,
            price: "",
            sku: "",
            qty: "",
            imageIndex: 0,
          };
          arrList.push(combination);
        });
      });
    } else if (selectedColor.length && !attrItemList.length) {
      selectedColor.map((color) => {
        const combination = {
          color: color.label,
          attr: null,
          price: "",
          sku: "",
          qty: "",
          imageIndex: 0,
        };
        arrList.push(combination);
      });
    } else if (!selectedColor.length && attrItemList.length) {
      attrItemList.map((attr) => {
        const combination = {
          color: null,
          attr: attr.label,
          price: "",
          sku: "",
          qty: "",
          imageIndex: 0,
        };
        arrList.push(combination);
      });
    }
    setVariantInputList(arrList);
    return () => {
      setVariantInputList([]);
    };
  }, [selectedColor, attrItemList]);

  const updatedValueCb = (data) => {
    setEditorState(data);
  };

  const multiList = (item) => {
    const data = [];
    item.map((x) => data.push(x.value));
    return JSON.stringify(data);
  };

  const updateBlogImage = (files) => setBlogImage(files);

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const items = [...variantInputList];
    items[i][name] = value;
    setVariantInputList(items);
  };
  console.log(variantInputList);
  const getEditorStateData = (editorData) => {
    const regex = /(<([^>]+)>)/gi;
    const data = !!editorData.replace(regex, "").length ? editorData : "";
    return data;
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (blogImage.length === 0) {
      return toast.warn("Please fill in all the required fields!");
    }
    setButtonState("loading");
    const form = document.querySelector("#product_form");
    const formData = new FormData(form);

    const blogImg = JSON.stringify(blogImage);
    const seo = {
      title: seo_title.current.value.trim(),
      description: seo_desc.current.value.trim(),
      image: seoImage,
    };

    formData.append("blogImages", blogImg);
    formData.append("type", selectedType);
    formData.append("category", multiList(selectedCategory));
    formData.append("subcategory", multiList(selectedSubcategory));
    formData.append("description", getEditorStateData(editorState));

    await postData("/api/blogs/createBlog", formData)
      .then((status) => {
        status.success
          ? (toast.success("Blog Published Successfully"),
            form.reset(),
            setSelectedCategory([]),
            setSelectedSubcategory([]),
            setVariantInputList([]),
            setSelectedType(""),
            setResetImageInput("reset"),
            setEditorState(""))
          : toast.error("Something Went Wrong");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
    setButtonState("");
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  if (!data.success) return <div>Something Went Wrong...</div>;

  const categoryOption = [];
  data.category.map((el) =>
    categoryOption.push({ label: el.category[0], value: el.category })
  );
console.log("BLOGS CREATE DATA",data.category)
  // const subcategoryOption = [];
  // data.category.map((el) =>
  //   el?.subCategories.map((sub) =>
  //     subcategoryOption.push({ label: sub?.name, value: sub?.slug })
  //   )
  // );

  return (
    <>
      <h4 className="text-center pt-3 pb-5">{t("Create New Blog")}</h4>
      <form
        id="product_form"
        encType="multipart/form-data"
        onSubmit={formHandler}
      >
        {blogInformation()}
        {blogDescription()}
        {imageInput()}
        {seoInput()} 
        <div className="my-4">
          <LoadingButton
            type="submit"
            text={t("Publish Blog")}
            state={buttonState}
          />
        </div>
      </form>
    </>
  );

  function blogDescription() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("Blog Description")}
        </div>
        <div className="card-body">
          <div className="py-3">
            <label htmlFor="inp-7" className="form-label">
              {t("Short Description")}*
            </label>
            <textarea
              id="inp-7"
              className="form-control"
              name="short_description"
            />
          </div>
          <div className="py-3">
            <label className="form-label">{t("description")}</label>
            <TextEditor
              previousValue={editorState}
              updatedValue={updatedValueCb}
              height={300}
            />
          </div>
        </div>
      </div>
    );
  }

  //TODO: translate Blog Description,title,tag,author,date,slug, Blog Image,Blog Description,cover Image,sub Image,Publish Blog
  function blogInformation() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("Blog Description")}
        </div>
        <div className="card-body">
          <div className="py-3">
            <label htmlFor="inp-1" className="form-label">
              {t("title")}*
            </label>
            <input
              type="text"
              id="inp-1"
              className="form-control"
              name="title"
              required
            />
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="py-3">
                <label htmlFor="inp-2" className="form-label">
                  {t("author")}*
                </label>
                <input
                  type="text"
                  id="inp-2"
                  className="form-control"
                  name="author"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="py-3">
                <label htmlFor="inp-3" className="form-label">
                  {t("date")}*
                </label>
                <input
                  type="text"
                  id="inp-3"
                  className="form-control"
                  name="date"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="py-3">
                <label htmlFor="inp-1" className="form-label">
                  {t("slug")}*
                </label>
                <input
                  type="text"
                  id="inp-1"
                  className="form-control"
                  name="slug"
                  required
                />
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="py-3">
                <label className="form-label">{t("categories")}*</label>
                <MultiSelect
                  options={categoryOption}
                  onChange={setSelectedCategory}
                  value={selectedCategory}
                  labelledBy="Select"
                />
              </div>
            </div>
            {/* <div className="col-12 col-sm-6">
              <div className="py-3">
                <label className="form-label">{t("tag")}*</label>
                <MultiSelect
                  options={subcategoryOption}
                  onChange={setSelectedSubcategory}
                  value={selectedSubcategory}
                  labelledBy="Select"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  function imageInput() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("Blog Image")}
        </div>
        <div className="card-body">
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label={t("Blogs Images")}
            multiple
            maxFileSizeInBytes={2000000}
            updateFilesCb={updateBlogImage}
            resetCb={resetImageInput}
          />
        </div>
      </div>
    );
  }

  function seoInput() {
    return (
      <div className="card mb-5 border-0 shadow">
        <div className="card-header bg-white py-3 fw-bold">
          {t("SEO Meta Tags")}
        </div>
        <div className="card-body">
          <div className="py-3">
            <label htmlFor="inp-122" className="form-label">
              {t("Meta Title")}
            </label>
            <input
              type="text"
              ref={seo_title}
              id="inp-122"
              className="form-control"
            />
          </div>
          <div className="py-3">
            <label htmlFor="inp-222" className="form-label">
              {t("Meta Description")}
            </label>
            <textarea ref={seo_desc} id="inp-222" className="form-control" />
          </div>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label={t("Meta Image")}
            maxFileSizeInBytes={2000000}
            updateFilesCb={setSeoImage}
            resetCb={resetImageInput}
          />
        </div>
      </div>
    );
  }
};

export default BlogForm;
