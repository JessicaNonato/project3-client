import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../utils/api.utils";
import "../styles/ProductCard.css";
import { RiCloseFill } from "react-icons/ri";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [mod, setMod] = useState(false);
  const token = localStorage.getItem("token");



  const getReviews = async () => {
    try {
      const reviewsApi = await api.getAllReviews(id);
      setReviews(reviewsApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReviews();
  }, [id]);

  const toggle = () => {
    setMod(!mod);
  };

  const handleReviewPost = async (e) => {
    e.preventDefault();

    try {
      const add = await api.addReview(id, { review });
      setReview("");
      getReviews();
      setMod(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
      <div className="reviews">
        <div className="div-avalia">
          <div>
            <h4 className="avaliacoes">
              Avaliações {"(" + reviews.length + ")"}
            </h4>
          </div>
          <div>
            <button className="avalie" onClick={toggle}>
              Avalie
            </button>
          </div>
        </div>

        {reviews.length ? (
          <ul className="review">
            {reviews.map((item) => (
              <li kew={item.productId}>
                <div>
                  <span>
                    {" "}
                    {item.userId.name}
                  </span>
                  {item.createdAt && (
                    <span
                      style={{
                        fontSize: "0.9rem",
                        marginLeft: "20px",
                        color: "lightgrey",
                      }}
                    >
                      {item.createdAt.slice(0, 10)}
                    </span>
                  )}
                </div>
                <div>
                  <p>"{item.review}"</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        <div>
          {!mod ? (
            ""
          ) : (
            <>
              {token ? (
                <>
                  <form className="form" onSubmit={handleReviewPost}>
                    <RiCloseFill
                      style={{ margin: "2% 92%" }}
                      onClick={toggle}
                    />
                    <div className="rev">
                      <h5 style={{ fontWeight: "bold" }}>
                        Compartilhe a sua experiência
                      </h5>
                      <div>
                        <p>Avaliação *</p>
                        <textarea
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        />
                      </div>
                      <p style={{ fontSize: "0.9rem" }}>
                        Descreva os pontos positivos e negativos do produto e da
                        sua experiência em nossa loja.
                      </p>
                      <button className="publicar" type="submit">
                        Publicar Avaliação
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="go-login">
                    <RiCloseFill onClick={toggle} id="close-btn-small" />
                    <h5>Please login to write a review.</h5>
                    <Link to="/signup">LOGIN</Link>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
  );
};
export default Reviews;