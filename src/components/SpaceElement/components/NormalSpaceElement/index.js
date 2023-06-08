import './style.css'

import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon/Icon'

const NormalSpaceElement = ({ name, iconColor }) => {
  return `
  <li>
   <div class='normalSpaceElement'>
      ${Icon({
        variant: ICON_VARIANTS_ENUM.FLAG,
        props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor}`
      })}
     <h3 class="normalSpaceElementTitle">${name}</h3>
   </div>
   </li>
 `
}

export default NormalSpaceElement
