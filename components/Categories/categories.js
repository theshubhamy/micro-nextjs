import Link from "next/dist/client/link";
import ImageLoader from "../Image";
import classes from "./category.module.css";

function Category(props) {
  return (
    <Link href={`/gallery/?category=${props.slug}`}>
      <div className={classes.category_root}>
        <div className={classes.container}>
          {/* <figure>
            <div className={classes.img}>
              <ImageLoader
                src={props.img}
                alt={props.name}
                width={80}
                height={80}
              />
            </div>
          </figure> */}
          <div className="col-sm-3 col-6 column-margin">
            <a
              href="#"
              className="block-sm-small block-xsmall d-block text-sm-center blank border rounded-large h-100 eventClick"
            >
              <div className="row gutters-small h-100 flex-sm-column align-items-center">
                <div className="col-sm col-4 d-flex align-items-center justify-content-center">
                  <img
                    src={props.img}
                    alt={props.name}
                    className="img-100"
                  />
                </div>
                <div className="col-sm-auto col">
                  <span>{props.name}</span>
                </div>
              </div>
            </a>
          </div>
          {/* <div className={classes.name}>{props.name}</div> */}
        </div>
      </div>
    </Link>
  );
}

export default Category;
