import { Link } from "react-router-dom";

function ProductItem({course}){


    return(
        <figure>
            <img src={course.photoUrl} alt={course.title} />
            <figcaption>
                <dl>
    <dt><Link to={`/list/${course.slug}`}>{course.title}</Link></dt>
    <dd>{course.summary}</dd>
                </dl>
            </figcaption>
        </figure>
    )
}

export default ProductItem;