import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const buttonLabel = useSelector((state) => {
    return state.favourite.content.length;
  });
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();

        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="">
        <Col className="my-3 mx-auto">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        <Col className=" mt-4" xs={3}>
          <Button
            className="mt-2 me-3"
            onClick={() => {
              navigate("/favourites");
            }}
          >
            list favourites <span> {buttonLabel}</span>
          </Button>
          <Link className="text-black text-decoration-none " to={`/`}>
            Home{" "}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
