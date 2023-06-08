import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon/Icon'

const FunctionalSpaceElement = ({ name, iconColor, id, tasks }) => {
  return `
  <li id=${id}>
  <a class='functionalSpaceElementLink'>
   <header>
    <h3>${name}</h3>
   
    ${Icon({
      variant: ICON_VARIANTS_ENUM.FLAG,
      props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor}`
    })}
    </header>
    <div>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.EDIT,
      props: 'width=10px stroke-width="1.2" fill="none"  class="hidden"'
    })}

    <button id="functionalSpaceElementTrashButton" data-id=${id}>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.TRASH,
      props: 'width=10px stroke-width="1" fill="none" '
    })}
    </button>
    </div>
  </a>
  <dialog class="functionalSpaceElementDialog">
     <section>
    <p>Are you sure you want to remove the space ${name} with ${
    tasks.length
  } tasks?</p>
  <div>
    <button class="functionalSpaceElementDelete" data-function="removeSpaceElement">Yes</button>
    <button class="functionalSpaceElementCloseDialog" data-function="closeDialog"}>No</button>
  </div>
  </section>
  </dialog>
  </li>
  `
}

export default FunctionalSpaceElement
