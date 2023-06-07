import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon/Icon'

const FunctionalSpaceElement = ({ name, iconColor, id }) => {
  return `
  <li>
  <a class='functionalSpaceElementLink'>
    <div>
    <h3>${name}</h3>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.EDIT,
      props: 'width=10px stroke-width="1.2" fill="none"  class="hidden"'
    })}
    </div>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.FLAG,
      props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor}`
    })}
    <button id="functionalSpaceElementTrashButton" data-id=${id}>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.TRASH,
      props: 'width=10px stroke-width="1" fill="none" '
    })}
    </button>
  </a>
  </li>
  `
}

export default FunctionalSpaceElement
