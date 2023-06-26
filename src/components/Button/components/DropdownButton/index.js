import './style.css'

const DropdownButton = ({
  tooltip,
  children,
  dropdownListItems,
  buttonAttributes,
  dropdownContentAttributes
}) => {
  return `
  <button class="dropdown tooltip" ${buttonAttributes}>
  ${children}
  <span class="tooltiptext" ${tooltip.attributes}>${tooltip.text}</span>
  <div class="dropdown-content" ${dropdownContentAttributes}>
    <ul class="dropdown-list">
      ${dropdownListItems}
    </ul>
  </div>
  </button>
  `
}

export default DropdownButton
