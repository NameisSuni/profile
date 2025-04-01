export function Part(props) {
  return (
    <div>
      <div className="container bg-secondary">
        <div className="row">
          <div className="col-sm-12">
            <div className="mx-3">
              <span className="item-arrow"></span>
              <h5 className="item-title text-white mt-2">{props.title}</h5>
              <small class="item-details text-dark fw-bold">
                {props.details}{" "}
                <span className="float-end me-5">{props.pass}</span>
              </small>
              <p className="item-description text-light">
                {props.description}{" "}
                <span className="listone">
                  {props.text}
                  <div className="listone">{props.text1}</div>
                  <div className="listone">{props.text2}</div>
                  <div className="listone">{props.text3}</div>
                </span>{" "}
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
