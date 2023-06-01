export default function Bio({ bio }) {
  return (
    <div className="container text-primary pt-5 mt-5">
      <div className="row pb-5">
        <h1 className="fw-normal pb-3">About the philosophers</h1>
        <p className="lead">
          Below is a short biogrpahy about the life of each of the philosophers
          that wrote or said the quotes.
        </p>
      </div>
      <hr />
      {bio.map((b) => {
        return (
          <div key={b.id}>
            <div className="row" id={b.id}>
              <div className="col-lg-5">
                <img
                  className="bd-placeholder-img object-fit-contain"
                  alt="Placeholder : Object fit contain"
                  width="400"
                  height="400"
                  src={b.image}
                />
              </div>
              <div className="col-lg-7">
                <h1 className="fw-normal 1h-1">{b.name}</h1>
                <h5 className="fw-normal">{b.occupation}</h5>
                <p>{b.life}</p>
                <h5 className="fw-normal">Short Bio:</h5>
                <p className="lead">{b.bio}</p>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
