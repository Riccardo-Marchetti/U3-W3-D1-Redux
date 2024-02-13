import { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Job from "./Job";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { inputValueAction, searchFetchAction } from "../redux/actions";
import { Spinner } from "react-bootstrap";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonLabel = useSelector((state) => {
    return state.favourite.content.length;
  });

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const jobs = useSelector((state) => state.jobs.jobsFetch);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputValueAction(query));
    dispatch(searchFetchAction());
  };

  // try {
  //   const response = await fetch(baseEndpoint + query + "&limit=20");
  //   if (response.ok) {
  //     const { data } = await response.json();
  //     setJobs(data);
  //     console.log(data);
  //   } else {
  //     alert("Error fetching results");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Remote Jobs Search</h1>
          </Col>
          <Col className=" mt-5" xs={2}>
            <Button
              className="mt-2"
              onClick={() => {
                navigate("/favourites");
              }}
            >
              list favourites <span> {buttonLabel}</span>
            </Button>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
            </Form>
          </Col>

          {isLoading ? (
            <Spinner variant="success" animation="border" />
          ) : (
            <Col xs={10} className="mx-auto mb-5">
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          )}
        </Row>
      </Container>
      <Row className="justify-content-center mt-5">
        <Col xs={5} className="">
          {isError && (
            <Alert variant="danger" className="text-center">
              Errore nel caricamento
            </Alert>
          )}
        </Col>
      </Row>
    </>
  );
};

export default MainSearch;
