import starFilled from "../../../assets/star-filled.png"
import starEmpty from "../../../assets/star-empty.png"

export default function Star(props) {
   
    let starIcon = props.isFilled ? starFilled : starEmpty
    return (
        
        <>
            <button
                onClick={props.customComponentClick}
                aria-pressed={props.isFilled}
                aria-label={props.isFilled ? 'Add to favorites' : 'Remove from favorites'}
                className="favorite-button"
            >
                <img
                    src={starIcon}
                    alt={props.isFilled ? 'filled star icon' : 'empty star icon'}
                    className="favorite"
                />
            </button>
        </>
    )
}