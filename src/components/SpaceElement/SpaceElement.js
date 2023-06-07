import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon/Icon'

const SpaceElement = ({ name, iconColor }) => {
  return `
     <li >
      <button class='rcSpaceCard'>
         ${Icon({
           variant: ICON_VARIANTS_ENUM.FLAG,
           props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor}`
         })}
        <h3>${name}</h3>
      </button>
      </li>
    `
}

export default SpaceElement
