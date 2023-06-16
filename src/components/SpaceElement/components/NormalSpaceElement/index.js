import './style.css'

import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'

const NormalSpaceElement = ({ name, iconColor }) => {
  return `
  <li>
   <div class='normal-space-elemen-containert'>
      ${Icon({
        variant: ICON_VARIANTS_ENUM.FLAG,
        props: `width=16px stroke-width="0.8" fill=${iconColor} color=${iconColor}`
      })}
     <h3 class="normal-space-elemen-containert-title">${name}</h3>
   </div>
   </li>
 `
}

export default NormalSpaceElement
