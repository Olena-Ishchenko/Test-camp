import icons from '../../assets/icons.svg';
import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul className={css.reviewList}>
        {reviews.reviews.map((review, id) => (
          <li key={id}>
            <div className={css.reviewerContainer}>
              <div className={css.reviewerLetter}>
                {review.reviewer_name.slice(0, 1)}
              </div>
              <div>
                <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
                <ul className={css.starIconList}>
                  <li>
                    <svg
                      className={
                        review.reviewer_rating >= 1
                          ? `${css.iconStarRating}`
                          : `${css.iconStar}`
                      }
                      width={16}
                      height={16}
                    >
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      className={
                        review.reviewer_rating >= 1.5
                          ? `${css.iconStarRating}`
                          : `${css.iconStar}`
                      }
                      width={16}
                      height={16}
                    >
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      className={
                        review.reviewer_rating >= 2.5
                          ? `${css.iconStarRating}`
                          : `${css.iconStar}`
                      }
                      width={16}
                      height={16}
                    >
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      className={
                        review.reviewer_rating >= 3.5
                          ? `${css.iconStarRating}`
                          : `${css.iconStar}`
                      }
                      width={16}
                      height={16}
                    >
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                  </li>
                  <li>
                    <svg
                      className={
                        review.reviewer_rating >= 4.5
                          ? `${css.iconStarRating}`
                          : `${css.iconStar}`
                      }
                      width={16}
                      height={16}
                    >
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
