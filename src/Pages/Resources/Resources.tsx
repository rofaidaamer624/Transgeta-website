import BlogCrad from "../../Component/BlogCard/BlogCrad";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";

export default function Resources() {
    const blogDescription=`
    November 25, 2025 The Importance of Translation in a Globalized World In today’s connected world, translation is no longer...
    `
  return (
    <>
    <Breadcrumb pageName={"Insights & Resources"}/>
    <div className="container">
        <div className="row">
            <h2 className="text-center fw-bolder display-6 my-3">Latest Blog & Articles</h2>
            <div className="col-md-4 col-sm-8 col-11">
                <BlogCrad blogName={"The Importance of Translation in a Globalized World"} blogDate={"November 14, 2025"} blogDesc={blogDescription}/>
            </div>
        </div>
    </div>
    </>
  )
}
