import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFavouriteAction } from "../redux/actions";

const FavouritesJobs = () => {
  const favourite = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();
  return (
    <>
      <Row>
        <Col>
          <h1 className="ms-5">Lista aziende preferite</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end  ">
          <Link className="text-black text-decoration-none me-4" to={`/`}>
            Home{" "}
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <ul style={{ listStyle: "none" }}>
            {favourite.map((name, i) => {
              return (
                <li key={i}>
                  {" "}
                  <Container>
                    <Row
                      className="mx-0 mt-3 p-3"
                      style={{ border: "1px solid #00000033", borderRadius: 4 }}
                    >
                      <Col xs={8}>
                        <Link to={`/${name.company_name}`}>
                          {name.company_name}{" "}
                        </Link>
                      </Col>
                      {/* <Col xs={8}>
                      <a href={name.url} target="_blank" rel="noreferrer">
                        {name.title}
                      </a>
                    </Col> */}
                      <Col xs={4}>
                        {" "}
                        <Button
                          variant="danger"
                          onClick={() => {
                            dispatch(deleteFromFavouriteAction(i));
                          }}
                        >
                          <i className="bi bi-trash-fill"></i>{" "}
                        </Button>
                      </Col>
                    </Row>
                  </Container>{" "}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </>
  );
};
export default FavouritesJobs;
