// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailImg, getImageDetails, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailImg

  const onChangeImage = () => {
    getImageDetails(id)
  }

  const selectedImgClassName = isActive ? 'selected-img' : ''

  return (
    <li key={id} className="list-item">
      <button
        className={`thumbnail-button${selectedImgClassName}`}
        type="button"
        onClick={onChangeImage}
      >
        <img
          className="thumbnail-img"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
