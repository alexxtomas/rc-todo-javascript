const ListAside = ({ title, elements }) => {
  return `
    <aside>
      <header>
        <h2>${title}</h2>
      </header>
    <ul>
     ${elements.map(el => el).join('').replaceAll(',', '')}
    </ul>
  </aside>
  `
}

//    ${Object.values(PRIORITIES)
//      .map((el) => {
//        return `
//       ${SpaceElement({
//         name: el.LABEL,
//         iconColor: el.COLOR,
//         variant: SPACE_ELEMENT_VARIANTS_ENUM.NORMAL
//       })}
//      `
//      })
//      .join('')
//      .replaceAll(',', '')}
// `
export default ListAside
