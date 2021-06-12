import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import {useEffect, useState} from "react";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructorRating(rating);
    }, [rating]);

    const constructorRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeViewRating(i + 1)}
                    onMouseLeave={() => changeViewRating(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <StarIcon />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeViewRating = (r: number) => {
        if (!isEditable) return;
        constructorRating(r);
    };

    const changeRating = (r: number) => {
        if (!isEditable || !setRating) return;
        setRating(r);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};