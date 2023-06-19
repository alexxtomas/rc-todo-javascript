import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'

const InputFile = ({ attributes }) => {
  return `
 
  <div class="form-field-file-container">
    <img data-function="show-input-file-image" class="form-field-file-image visually-hidden" src="" alt="" />
   ${Icon({
     variant: ICON_VARIANTS_ENUM.PLUS,
     props:
       'width=100% height=100% stroke-width="0.8" fill="none" class="form-field-file-icon" data-function="show-input-file-icon" '
   })}
  <input class="form-field-file" type="file" data-input-file ${attributes} />
  </div>
  `
}

export default InputFile
