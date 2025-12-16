export default function Breadcrumb({pageName}:any) {
  return (
    <>
    <section className='bg-colored mb-5 p-5'>
        <div className="container my-5">
            <div className="row justify-content-center align-items-center text-white">
                <div className="col-auto text-center">
                    <h2 className='fw-bolder display-3'>{pageName}</h2>
                    <ol className='d-flex gap-1 list-unstyled justify-content-center'>
                        <li>Home &gt;</li>
                        <li>{pageName}</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
