import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type BlogCardProps = {
  blogDate: string;
  blogName: string;
  blogDesc: string;
};

export default function BlogCrad({blogDate,blogName,blogDesc}:BlogCardProps) {
    return (
        <>
            <div className="card p-3 border-0 shadow rounded-0">
                <img src='images/blogImage.jpg' className="card-img-top rounded-0" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title">{blogName}</h5>
                    <div className="d-flex text-secondary align-items-center my-3">
                                            <FontAwesomeIcon icon={faCalendar} className=""/>
                                            <p className="mb-0">{blogDate}</p>
                    </div>
                    <p>{blogDesc}</p>
                </div>
            </div>
        </>
    )
}
